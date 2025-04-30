import React, { useState } from 'react';
import DynamicTable from '../../components/tables/BasicTables/DynamicTable';

const ClassWork: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');

  const subjects = ['English', 'Hindi', 'Mathematics', 'Environmental Studies'];

  const headers = ["S.No.", "Subject", "Title", "Date", "Action"];

  const rows = [
    [
      "1",
      "English",
      "Read First Day At School",
      "08-06-2023",
      "Action",
    ],
  ];

  const handleSearch = () => {
    console.log('Searching for:', selectedSubject, selectedDate);
    // Implement your search logic
  };

  return (
    <div className="">
      <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">Class Work</h2>
        </div>

      <div className="bg-white p-4 rounded shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select
              className="w-full border p-2 rounded"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">Select</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            SEARCH
          </button>
        </div>
      </div>

      <DynamicTable headers={headers} rows={rows} />
    </div>
  );
};

export default ClassWork;
