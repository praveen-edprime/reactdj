import React, { useState } from 'react';

const FeeSummaryFilter: React.FC = () => {
  const [branch, setBranch] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [activeTab, setActiveTab] = useState<'student' | 'employee'>('student');

  const handleSearch = () => {
    console.log('Branch:', branch);
    console.log('Month:', month);
    console.log('Date:', date);
  };

  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-blue-600 text-lg font-semibold">Fee Summary</h2>
        <div className="space-x-4">
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
           className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Branches</option>
            <option>Chhattisgarh Public School</option>
            <option>CPS KIDS ACADEMY</option>
            <option>CPS Kids Academy Birgaon</option>
            <option>CPS Kids Gudhiyari</option>
          </select>

          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            {/* Add more months */}
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center mb-4 border-b border-gray-200">
        <button
          className={`mr-4 pb-2 font-semibold ${activeTab === 'student' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          onClick={() => setActiveTab('student')}
        >
          Student
        </button>
        <button
          className={`pb-2 font-semibold ${activeTab === 'employee' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          onClick={() => setActiveTab('employee')}
        >
          Employee
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'student' ? (
          <p className="text-gray-700 h-50">Hello Student</p>
        ) : (
          <p className="text-gray-700 h-50" >Oops, looks like you are running on empty !</p>
        )}
      </div>
    </div>
  );
};

export default FeeSummaryFilter;
