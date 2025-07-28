// 'use client';
// import { useState } from 'react';

// export default function Home() {
//   const [appno, setAppno] = useState('');
//   const [verified, setVerified] = useState(false);
//   const [rowIndex, setRowIndex] = useState<number | null>(null);
//   const [mother, setMother] = useState('');
//   const [father, setFather] = useState('');
//   const [student, setStudent] = useState('');
//   const [message, setMessage] = useState('');

//   const checkAppno = async () => {
//     const res = await fetch('/api/check-appno', {
//       method: 'POST',
//       body: JSON.stringify({ appno }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       setRowIndex(data.rowIndex);
//       setVerified(true);
//     } else {
//       setMessage('APPNO not found.');
//     }
//   };

//   const handleSubmit = async () => {
//     const res = await fetch('/api/update-details', {
//       method: 'POST',
//       body: JSON.stringify({ rowIndex, mother, father, student }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       setMessage('Details updated successfully!');
//     } else {
//       setMessage('Failed to update.');
//     }
//   };

//   return (
//     <main className="p-8 max-w-md mx-auto">
//       <h1 className="text-2xl mb-4">Student Info Form</h1>
//       {!verified ? (
//         <>
//           <input
//             type="text"
//             placeholder="Enter APPNO"
//             value={appno}
//             onChange={(e) => setAppno(e.target.value)}
//             className="border p-2 w-full mb-2"
//           />
//           <button
//             onClick={checkAppno}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Verify
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Mother's No"
//             value={mother}
//             onChange={(e) => setMother(e.target.value)}
//             className="border p-2 w-full mb-2"
//           />
//           <input
//             type="text"
//             placeholder="Father's No"
//             value={father}
//             onChange={(e) => setFather(e.target.value)}
//             className="border p-2 w-full mb-2"
//           />
//           <input
//             type="text"
//             placeholder="Student's No"
//             value={student}
//             onChange={(e) => setStudent(e.target.value)}
//             className="border p-2 w-full mb-2"
//           />
//           <button
//             onClick={handleSubmit}
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Submit
//           </button>
//         </>
//       )}
//       {message && <p className="mt-4">{message}</p>}
//     </main>
//   );
// }










// 'use client';
// import { useState } from 'react';

// export default function Home() {
//   const [appno, setAppno] = useState('');
//   const [verified, setVerified] = useState(false);
//   const [rowIndex, setRowIndex] = useState<number | null>(null);
//   const [mother, setMother] = useState('');
//   const [father, setFather] = useState('');
//   const [student, setStudent] = useState('');
//   const [message, setMessage] = useState('');

//   const checkAppno = async () => {
//     setMessage('');
//     if (!appno.trim()) {
//       setMessage('Please enter a valid APPNO.');
//       return;
//     }

//     const res = await fetch('/api/check-appno', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ appno }),
//     });

//     const data = await res.json();
//     if (data.success) {
//       setRowIndex(data.rowIndex);
//       setVerified(true);
//     } else {
//       setMessage('APPNO not found in our database.');
//     }
//   };

//   const handleSubmit = async () => {
//     if (!student || !father || !mother) {
//       setMessage('All three numbers must be filled.');
//       return;
//     }

//     const res = await fetch('/api/update-details', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ rowIndex, mother, father, student }),
//     });

//     const data = await res.json();
//     console.log(data);
//     if (data.success) {
//       setMessage('✅ Details updated successfully!');
//       setVerified(false);
//       setAppno('');
//       setStudent('');
//       setFather('');
//       setMother('');
//     } else {
//       setMessage('❌ Failed to update. Please try again.');
//     }
//   };

//   return (
//     <main className="p-8 max-w-md mx-auto">
//       <h1 className="text-2xl font-semibold mb-4">Student Info Form</h1>

//       {!verified ? (
//         <>
//           <input
//             type="text"
//             placeholder="Enter APPNO"
//             value={appno}
//             onChange={(e) => setAppno(e.target.value)}
//             className="border p-2 w-full mb-2 rounded"
//           />
//           <button
//             onClick={checkAppno}
//             className="bg-blue-600 text-white px-4 py-2 rounded w-full"
//           >
//             Verify APPNO
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Student's Mobile Number"
//             value={student}
//             onChange={(e) => setStudent(e.target.value)}
//             className="border p-2 w-full mb-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Father's Mobile Number"
//             value={father}
//             onChange={(e) => setFather(e.target.value)}
//             className="border p-2 w-full mb-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Mother's Mobile Number"
//             value={mother}
//             onChange={(e) => setMother(e.target.value)}
//             className="border p-2 w-full mb-2 rounded"
//           />
//           <button
//             onClick={handleSubmit}
//             className="bg-green-600 text-white px-4 py-2 rounded w-full"
//           >
//             Submit Details
//           </button>
//         </>
//       )}

//       {message && (
//         <p className="mt-4 text-center text-sm text-red-600">{message}</p>
//       )}
//     </main>
//   );
// }



'use client';
import { useState } from 'react';

export default function Home() {
  const [appno, setAppno] = useState('');
  const [verified, setVerified] = useState(false);
  const [rowIndex, setRowIndex] = useState<number | null>(null);
  const [mother, setMother] = useState('');
  const [father, setFather] = useState('');
  const [student, setStudent] = useState('');
  const [message, setMessage] = useState('');

  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const checkAppno = async () => {
    setMessage('');
    if (!appno.trim()) {
      setMessage('Please enter a valid APPNO.');
      return;
    }

    setIsVerifying(true);

    try {
      const res = await fetch('/api/check-appno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appno }),
      });

      const data = await res.json();
      if (data.success) {
        setRowIndex(data.rowIndex);
        setVerified(true);
      } else {
        setMessage('APPNO not found in our database.');
      }
    } catch (error) {
      setMessage('Error while verifying.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = async () => {
    if (!student || !father || !mother) {
      setMessage('All three numbers must be filled.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/update-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rowIndex, mother, father, student }),
      });

      const data = await res.json();
      if (data.success) {
        setMessage('✅ Details updated successfully!');
        setVerified(false);
        setAppno('');
        setStudent('');
        setFather('');
        setMother('');
      } else {
        setMessage('❌ Failed to update. Please try again.');
      }
    } catch (error) {
      setMessage('❌ Update failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Student Info Form</h1>

      {!verified ? (
        <>
          <input
            type="text"
            placeholder="Enter APPNO"
            value={appno}
            onChange={(e) => setAppno(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <button
            onClick={checkAppno}
            disabled={isVerifying}
            className={`${
              isVerifying ? 'bg-blue-400' : 'bg-blue-600'
            } text-white px-4 py-2 rounded w-full`}
          >
            {isVerifying ? '🌀 Verifying...' : 'Verify APPNO'}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Student's Mobile Number"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Father's Mobile Number"
            value={father}
            onChange={(e) => setFather(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Mother's Mobile Number"
            value={mother}
            onChange={(e) => setMother(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`${
              isSubmitting ? 'bg-green-400' : 'bg-green-600'
            } text-white px-4 py-2 rounded w-full`}
          >
            {isSubmitting ? '🌀 Submitting...' : 'Submit Details'}
          </button>
        </>
      )}

      {message && (
        <p className="mt-4 text-center text-sm text-red-600">{message}</p>
      )}
    </main>
  );
}
