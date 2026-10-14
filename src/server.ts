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

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jcoxoybduffemhdphbji.supabase.co';
const supabaseAnonKey = 'sb_publishable_oUFrgimHv4kLqhqn4FchZg_ScgQ5aXo';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * REST API endpoints for synchronized persistent school data using Supabase
 */
app.get('/api/school-data', async (req, res) => {
  console.log('Fetching data from Supabase...');
  const { data, error } = await supabase
    .from('profil_sekolah')
    .select('*')
    .maybeSingle();

  if (error) {
    console.error('Error fetching data from Supabase:', error);
    res.status(500).json({ error: 'Failed to fetch data', details: error });
  } else if (!data) {
    console.log('No data found in Supabase.');
    res.status(404).json({ error: 'Profile not found' });
  } else {
    console.log('Data fetched successfully:', data);
    // Mapping Supabase columns to frontend model
    const profile = {
      name: data.nama,
      tagline: data.semboyan,
      motto: data.motto,
      accreditation: data.akreditasi,
      npsn: data.npsn,
      city: data.kota,
      address: data.alamat,
      phone: data.telepon,
      whatsapp: data.whatsapp,
      whatsappFormatted: data.whatsapp_terformat,
      email: data.email,
      operatingHours: data.jam_operasional,
      schoolPhotoUrl: data.url_foto_sekolah,
      shortDescription: data.deskripsi_singkat,
      vision: data.visi,
      missions: data.misi,
      principalName: data.nama_kepala_sekolah,
      principalTitle: data.jabatan_kepala_sekolah,
      principalPhotoUrl: data.url_foto_kepala_sekolah,
      principalWelcome: data.sambutan_kepala_sekolah
    };
    res.json({ profile });
  }
});

app.put('/api/school-data', async (req, res) => {
  try {
    const { profile } = req.body;
    if (!profile) {
      res.status(400).json({ error: 'Invalid profile data' });
      return;
    }

    // Mapping frontend model fields back to Supabase columns
    const dbProfile = {
      nama: profile.name,
      semboyan: profile.tagline,
      motto: profile.motto,
      akreditasi: profile.accreditation,
      npsn: profile.npsn,
      kota: profile.city,
      alamat: profile.address,
      telepon: profile.phone,
      whatsapp: profile.whatsapp,
      whatsapp_terformat: profile.whatsappFormatted,
      email: profile.email,
      jam_operasional: profile.operatingHours,
      url_foto_sekolah: profile.schoolPhotoUrl,
      deskripsi_singkat: profile.shortDescription,
      visi: profile.vision,
      misi: profile.missions,
      nama_kepala_sekolah: profile.principalName,
      jabatan_kepala_sekolah: profile.principalTitle,
      url_foto_kepala_sekolah: profile.principalPhotoUrl,
      sambutan_kepala_sekolah: profile.principalWelcome
    };
    
    const { data, error } = await supabase
      .from('profil_sekolah')
      .update(dbProfile)
      .eq('id', 1)
      .select()
      .maybeSingle();

    if (error) {
      console.error('Error updating data in Supabase:', error);
      res.status(500).json({ error: 'Failed to update data' });
    } else {
      res.json({ success: true, data: { profile: data } });
    }
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
