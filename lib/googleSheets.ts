import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import credentials from './credentials.json'; // Place this inside /src/lib

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth }); // ✅ FIXED here

export { sheets };
