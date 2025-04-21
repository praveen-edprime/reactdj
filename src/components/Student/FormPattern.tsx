import React, { useState } from "react";

const Calendar: React.FC = () => {
  const [showForm, setShowForm] = useState(true);
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search logic here
  };

  const handleReset = () => {
    setAdvancedSearch(false);
    // Add reset logic here
  };

  return (
    <>
      <div className="flex justify-center mt-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl transition-all duration-500 ease-in-out">
          
          {/* Table Section */}
          <div className={`${showForm ? "lg:w-2/3" : "w-full"} transform transition-all duration-500`}>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">#	</th>
                  <th className="px-4 py-2 text-left text-gray-600">Roll No</th>
                  <th className="px-4 py-2 text-left text-gray-600">Scholar Number</th>
                  <th className="px-4 py-2 text-left text-gray-600">Working Days</th>
                  <th className="px-4 py-2 text-left text-gray-600">No. of Present Days</th>
                  <th className="px-4 py-2 text-left text-gray-600">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">117610</td>
                  <td className="px-4 py-2">Toshti</td>
                  <td className="px-4 py-2">50</td>
                  <td className="px-4 py-2">35</td>
                  <td className="px-4 py-2">
                    <textarea id="w3review" name="w3review" rows={2} cols={10}></textarea>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">117610</td>
                  <td className="px-4 py-2">Toshti</td>
                  <td className="px-4 py-2">50</td>
                  <td className="px-4 py-2">35</td>
                  <td className="px-4 py-2">
                    <textarea id="w3review" name="w3review" rows={2} cols={10}></textarea>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">117610</td>
                  <td className="px-4 py-2">Toshti</td>
                  <td className="px-4 py-2">50</td>
                  <td className="px-4 py-2">35</td>
                  <td className="px-4 py-2">
                    <textarea id="w3review" name="w3review" rows={2} cols={10}></textarea>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">117610</td>
                  <td className="px-4 py-2">Toshti</td>
                  <td className="px-4 py-2">50</td>
                  <td className="px-4 py-2">35</td>
                  <td className="px-4 py-2">
                    <textarea id="w3review" name="w3review" rows={2} cols={10}></textarea>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">117610</td>
                  <td className="px-4 py-2">Toshti</td>
                  <td className="px-4 py-2">50</td>
                  <td className="px-4 py-2">35</td>
                  <td className="px-4 py-2">
                    <textarea id="w3review" name="w3review" rows={2} cols={10}></textarea>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">117610</td>
                  <td className="px-4 py-2">Toshti</td>
                  <td className="px-4 py-2">50</td>
                  <td className="px-4 py-2">35</td>
                  <td className="px-4 py-2">
                    <textarea id="w3review" name="w3review" rows={2} cols={10}></textarea>
                  </td>
                </tr>
                {/* More rows can be added here */}
              </tbody>
            </table>
          </div>

          {/* Center Toggle Button */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
            >
              {showForm ? "<" : ">"}

            </button>
          </div>

          {/* Form Section */}
          {showForm && (
            <div className={`lg:w-1/3 transform transition-transform duration-500`}>
              <div className="grid grid-cols-1 gap-4">
                
                {/* Basic Inputs */}
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  placeholder="Scholar No"
                />
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  placeholder="Student Name"
                />
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  placeholder="Mobile Number"
                />

                {/* Advanced Inputs */}
                {advancedSearch && (
                  <div className="grid grid-cols-1 gap-4">
                    <input
                      type="text"
                      className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Contact Detail"
                    />
                    <input
                      type="text"
                      className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Address"
                    />
                    <input
                      type="email"
                      className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Email ID"
                    />
                    <input
                      type="date"
                      className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                    <input
                      type="number"
                      className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Enrollment Year"
                    />
                    <input
                      type="text"
                      className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Course"
                    />
                  </div>
                )}

                {/* Advanced Search Toggle */}
                <button
                  type="button"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  onClick={() => setAdvancedSearch(!advancedSearch)}
                >
                  Advanced Search {advancedSearch ? "▲" : "▼"}
                </button>

                {/* Search and Reset Buttons */}
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 bg-gray-500 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
                  >
                    Reset
                  </button>
                </form>

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calendar;
