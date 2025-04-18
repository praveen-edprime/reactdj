import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { useState } from "react";

const SearchStudent = () => {
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSearchPerformed(true);
        // Add search logic here
    };

    const handleReset = () => {
        setSearchPerformed(false);
        setAdvancedSearch(false);
        // Add reset logic here (e.g., clear form fields)
    };

    return (
        <>
            <PageMeta
                title="Student Search Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="Search for students efficiently with TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Search Student" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="">
                    <form onSubmit={handleSearch} className="flex flex-col gap-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left Column (Image Section) */}
                            <div className="w-full lg:w-8/12 bg-gray-100 rounded-xl shadow-md flex items-center justify-center min-h-64 overflow-hidden">
                                {!searchPerformed ? (
                                    <div className="flex flex-col items-center justify-center text-center py-8">
                                        <img
                                            src="/images/user/EdPrime_uni_logo.png" // Replace with your actual image path
                                            alt="Logo"
                                            className="w-24 h-24 mb-4"
                                            onError={(e) => (e.target.src = "https://via.placeholder.com/100")} 
                                            />
                                        <p className="mt-4 text-gray-600 text-lg font-medium">Please Search for a Student</p>
                                    </div>
                                ) : (
                                    <div className="w-full max-w-4xl mx-auto p-4">
                                    <div className="overflow-x-auto shadow-lg rounded-lg">
                                      <table className="w-full table-auto border-collapse bg-white">
                                        <thead>
                                          <tr className="bg-gray-800 text-white">
                                            <th className="px-4 py-3 text-left text-sm font-semibold">Song</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold">Artist</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold">Year</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors border-b">
                                            <td className="px-4 py-3 text-sm text-gray-800">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                            <td className="px-4 py-3 text-sm text-gray-800">Malcolm Lockyer</td>
                                            <td className="px-4 py-3 text-sm text-gray-800">1961</td>
                                          </tr>
                                          <tr className="bg-white hover:bg-gray-100 transition-colors border-b">
                                            <td className="px-4 py-3 text-sm text-gray-800">Witchy Woman</td>
                                            <td className="px-4 py-3 text-sm text-gray-800">The Eagles</td>
                                            <td className="px-4 py-3 text-sm text-gray-800">1972</td>
                                          </tr>
                                          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors border-b">
                                            <td className="px-4 py-3 text-sm text-gray-800">Shining Star</td>
                                            <td className="px-4 py-3 text-sm text-gray-800">Earth, Wind, and Fire</td>
                                            <td className="px-4 py-3 text-sm text-gray-800">1975</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                )}
                            </div>

                            {/* Right Column (Search Form) */}
                            <div className="w-full lg:w-4/12">
                                <button
                                    type="button"
                                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
                                    onClick={() => setAdvancedSearch(!advancedSearch)}
                                >
                                    Advanced Search {advancedSearch ? "▲" : "▼"}
                                </button>
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                        placeholder="Scholar No"
                                    />
                                    <input
                                        type="text"
                                        className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                        placeholder="Student Name"
                                    />
                                    <input
                                        type="text"
                                        className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                        placeholder="Mobile Number"
                                    />

                                    {advancedSearch && (
                                        <div className="grid grid-cols-1 gap-4">
                                            <input
                                                type="text"
                                                className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                placeholder="Contact Detail"
                                            />
                                            <input
                                                type="text"
                                                className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                placeholder="Address"
                                            />
                                            <input
                                                type="email"
                                                className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                placeholder="Email ID"
                                            />
                                            <input
                                                type="date"
                                                className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                            />
                                            <input
                                                type="number"
                                                className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                placeholder="Enrollment Year"
                                            />
                                            <input
                                                type="text"
                                                className="block w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                                placeholder="Course"
                                            />
                                        </div>
                                    )}

                                    <div className="flex items-center gap-3">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                                        >
                                            Search
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="flex-1 bg-gray-500 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-200"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SearchStudent;