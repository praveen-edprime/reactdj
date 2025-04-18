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
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8 w-full max-w-full mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 sm:mb-6 space-y-4 md:space-y-0">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-600">
          Fee Summary
        </h2>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-2 w-full md:w-auto">
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full md:w-40 lg:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full md:w-40 lg:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full md:w-40 lg:w-48 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Select date"
          />

          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            SEARCH
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center mb-4 border-b border-gray-200">
        <button
          className={`mr-4 pb-2 text-sm sm:text-base md:text-lg font-semibold ${
            activeTab === 'student'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-400 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('student')}
        >
          Student
        </button>
        <button
          className={`pb-2 text-sm sm:text-base md:text-lg font-semibold ${
            activeTab === 'employee'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-400 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('employee')}
        >
          Employee
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'student' ? (
          <p className="text-gray-700 text-sm sm:text-base md:text-lg min-h-[50px]">
             Oops, looks like you are running on empty!
          </p>
        ) : (
          <p className="text-gray-700 text-sm sm:text-base md:text-lg min-h-[50px]">
            Oops, looks like you are running on empty!
          </p>
        )}
      </div>
    </div>
  );
};

export default FeeSummaryFilter;