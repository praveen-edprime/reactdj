// src/components/common/ExpenseVsCollection.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ExpenseVsCollection: React.FC = () => {
  const data: ChartData<'line'> = {
    labels: ['14-01-2025', '15-01-2025', '16-01-2025', '18-01-2025', '20-01-2025', '21-01-2025'],
    datasets: [
      {
        label: 'Collection',
        data: [50000, 470000, 110000, 90000, 100000, 170000],
        borderColor: '#fbbf24', // Tailwind Yellow-400
        backgroundColor: '#fbbf24',
        tension: 0.3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Expense',
        data: [0, 0, 0, 0, 0, 0], // You can change as needed
        borderColor: '#ec4899', // Tailwind Pink-500
        backgroundColor: '#ec4899',
        tension: 0.3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to stretch vertically
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: window.innerWidth < 640 ? 12 : 14, // Smaller font on mobile
          },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        bodyFont: {
          size: window.innerWidth < 640 ? 12 : 14,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12, // Smaller ticks on mobile
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: window.innerWidth < 640 ? 10 : 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full max-w-full mx-auto h-[600px] sm:h-[600px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-4 sm:space-y-0">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700">
          Expense V/S Collection
        </h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
          <select
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>All Branches</option>
            <option>Branch 1</option>
            <option>Branch 2</option>
            <option>Branch 3</option>
            <option>Branch 4</option>
          </select>
          <select
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Month</option>
            <option>Week</option>
            <option>Year</option>
            <option>Quarter</option>
          </select>
          <input
            type="date"
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="h-[70%]">
        <Line data={data} options={options} />
      </div>

      <div className="text-center mt-4 sm:mt-6 space-y-2">
        <p className="text-sm sm:text-base font-semibold text-gray-700">
          Fee Collection: <span className="font-normal text-black">0</span>
        </p>
        <p className="text-sm sm:text-base font-semibold text-gray-700">
          Today's Collection: <span className="font-normal text-black">0</span>
        </p>
      </div>
    </div>
  );
};

export default ExpenseVsCollection;