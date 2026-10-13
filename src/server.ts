import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const browserDistFolder = join(import.meta.dirname, '../browser');
const dataFilePath = join(process.cwd(), 'src/data/school-data.json');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Body parser for JSON API requests
app.use(express.json({ limit: '10mb' }));

// Helper to read persistent school data
function getSchoolData() {
  try {
    if (existsSync(dataFilePath)) {
      const raw = readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading school data file:', err);
  }
  return null;
}

// Helper to write persistent school data
function saveSchoolData(data: unknown) {
  try {
    writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving school data file:', err);
    return false;
  }
}

/**
 * REST API endpoints for synchronized persistent school data
 */
app.get('/api/school-data', (req, res) => {
  const data = getSchoolData();
  if (data) {
    res.json(data);
  } else {
    res.status(500).json({ error: 'Data not initialized' });
  }
});

app.put('/api/school-data', (req, res) => {
  try {
    const existing = getSchoolData() || {};
    const updated = {
      ...existing,
      ...req.body,
      // If profile is partially updated, merge inner objects
      profile: req.body.profile
        ? {
            ...(existing.profile || {}),
            ...req.body.profile,
            studentStats: {
              ...((existing.profile && existing.profile.studentStats) || {}),
              ...(req.body.profile.studentStats || {})
            }
          }
        : existing.profile
    };

    saveSchoolData(updated);
    res.json({ success: true, data: updated });
  } catch (err) {
    console.error('Failed to update school data:', err);
    res.status(500).json({ error: 'Failed to update data' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
