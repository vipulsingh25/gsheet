// import { NextRequest, NextResponse } from 'next/server';
// import { sheets } from '../../../../lib/googleSheets';

// const SHEET_ID = '1qG8N2NQIl7j1EHjtNk1CySiCqCRKeICOv7402Q5dVgg';
// const SHEET_NAME = 'Sheet1';

// export async function POST(req: NextRequest) {
//   const { appno } = await req.json();

//   try {
//     // Step 1: Get all APPNO values (Column B)
//     const appnoRes = await sheets.spreadsheets.values.get({
//       spreadsheetId: SHEET_ID,
//       range: `${SHEET_NAME}!B2:B`,
//     });

//     const appnoColumn = appnoRes.data.values || [];
//     const index = appnoColumn.findIndex(row => row[0] === appno);

//     if (index === -1) {
//       return NextResponse.json({ success: false, message: 'APPNO not found' });
//     }

//     // Step 2: Get the full row for the matched index
//     const rowNumber = index + 2; // +2 accounts for header and 0-index
//     const fullRowRes = await sheets.spreadsheets.values.get({
//       spreadsheetId: SHEET_ID,
//       range: `${SHEET_NAME}!A${rowNumber}:Z${rowNumber}`, // adjust Z if more columns
//     });

//     const fullRow = fullRowRes.data.values?.[0] || [];

//     return NextResponse.json({
//       success: true,
//       rowIndex: rowNumber,
//       rowData: fullRow,
//     });

//  } catch (err: any) {
//     return NextResponse.json({ success: false, error: err.message || err.toString() });
//   }
// }







import { NextRequest, NextResponse } from 'next/server';
import { sheets } from '../../../../lib/googleSheets';

const SHEET_ID = '1qG8N2NQIl7j1EHjtNk1CySiCqCRKeICOv7402Q5dVgg';
const SHEET_NAME = 'Sheet1';

export async function POST(req: NextRequest) {
  const { appno } = await req.json();

  try {
    // Step 1: Get all APPNO values (Column B)
    const appnoRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!B2:B`,
    });

    const appnoColumn = appnoRes.data.values || [];
    const index = appnoColumn.findIndex(row => row[0] === appno);

    if (index === -1) {
      return NextResponse.json({ success: false, message: 'APPNO not found' });
    }

    // Step 2: Get the full row for the matched index
    const rowNumber = index + 2; // +2 accounts for header and 0-index
    const fullRowRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A${rowNumber}:Z${rowNumber}`,
    });

    const fullRow = fullRowRes.data.values?.[0] || [];

    // Assuming name is in Column C (index 2)
    const name = fullRow[2] || '';

    return NextResponse.json({
      success: true,
      rowIndex: rowNumber,
      rowData: fullRow,
      name, // sending name separately
    });

  } catch (err) {
    return NextResponse.json({ success: false, error: (err as Error).message || String(err) });
  }
}
