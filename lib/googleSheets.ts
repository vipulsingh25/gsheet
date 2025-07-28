import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import credentials from './credentials.json'; // Place this inside /src/lib

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// const auth = new google.auth.JWT({
//   email: credentials.client_email,
//   key: credentials.private_key,
//   scopes: SCOPES,
// });

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: process.env.GOOGLE_TYPE,
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});


const sheets = google.sheets({ version: 'v4', auth }); // ✅ FIXED here

export { sheets };
