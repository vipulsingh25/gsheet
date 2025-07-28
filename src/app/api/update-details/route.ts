// import { NextRequest, NextResponse } from 'next/server';
// import { sheets } from '@/lib/googleSheets';

// const SHEET_ID = '1qG8N2NQIl7j1EHjtNk1CySiCqCRKeICOv7402Q5dVgg';
// const SHEET_NAME = 'Sheet1';

// export async function POST(req: NextRequest) {
//   const { rowIndex, mother, father, student } = await req.json();

//   try {
//     const res = await sheets.spreadsheets.values.update({
//       spreadsheetId: SHEET_ID,
//       range: `${SHEET_NAME}!B${rowIndex}:D${rowIndex}`, // assuming B=Mother, C=Father, D=Student
//       valueInputOption: 'RAW',
//       requestBody: {
//         values: [[mother, father, student]],
//       },
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     return NextResponse.json({ success: false, error: err });
//   }
// }




// import { NextRequest, NextResponse } from 'next/server';
// import { sheets } from '@/lib/googleSheets';

// const SHEET_ID = '1qG8N2NQIl7j1EHjtNk1CySiCqCRKeICOv7402Q5dVgg';
// const SHEET_NAME = 'Sheet1';

// export async function POST(req: NextRequest) {
//   const { rowIndex, mother, father, student } = await req.json();

//   try {

//     console.log("Updating row:", rowIndex, "with:", [student, father, mother]);

//     const res = await sheets.spreadsheets.values.update({
//       spreadsheetId: SHEET_ID,
//       range: `${SHEET_NAME}!I${rowIndex}:K${rowIndex}`, // I = STUDENT-MOBILE, J = FATHER-MOBILE, K = MOTHER-MOBILE
//       valueInputOption: 'RAW',
//       requestBody: {
//         values: [[student, father, mother]],
//       },
//     });

//     return NextResponse.json({ success: true });
// } catch (err) {
//   console.error("Update error:", err);
//   return NextResponse.json({ success: false, error: String(err) });
// }
// }


import { NextRequest, NextResponse } from 'next/server';
import { sheets } from '../../../../lib/googleSheets';

const SHEET_ID = '1qG8N2NQIl7j1EHjtNk1CySiCqCRKeICOv7402Q5dVgg';
const SHEET_NAME = 'Sheet1';

export async function POST(req: NextRequest) {
  const { rowIndex, mother, father, student } = await req.json();

  try {
    const today = new Date().toLocaleDateString('en-GB'); // Format: dd/mm/yyyy

    console.log("Updating row:", rowIndex, "with:", [student, father, mother, today]);

    // Update mobile numbers (Columns I, J, K) and today's date (Column H)
    const res = await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!H${rowIndex}:K${rowIndex}`, // H = DEFAULT TIME, I = STUDENT, J = FATHER, K = MOTHER
      valueInputOption: 'RAW',
      requestBody: {
        values: [[today, student, father, mother]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Update error:", err);
    return NextResponse.json({ success: false, error: String(err) });
  }
}

