import { FaPrint } from "react-icons/fa";

interface FeeDetail {
  month: string;
  paidAmount: number;
  totalAmount: number;
  receiptNo: string;
  paymentType: string;
  date: string;
  status: string;
}

interface FeeSummaryProps {
  session: string;
  pending: number;
  collected: number;
  details: FeeDetail[];
  feeRules?: string;
  feeStructure?: string;
  openModal:() => void;
}

export default function InfoSummaryCard({
  session,
  pending,
  collected,
  details,
  feeRules = "N/A",
  feeStructure = "General",
  openModal
}: FeeSummaryProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden my-4">
      {/* Header Summary */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-base font-semibold text-gray-800 dark:text-white">
          Fee Details - {session}
        </h4>
        <div className="flex gap-6 text-sm font-semibold">
          <span className="text-red-600">Fee Pending - ₹ {pending.toLocaleString()}</span>
          <span className="text-green-600">Fee Collected - ₹ {collected.toLocaleString()}</span>
        </div>
      </div>

      {/* Month-wise Fee Details */}
      {details.map((item, idx) => (
        <div key={idx} className="flex justify-between items-start px-4 py-4 border-b border-gray-100 dark:border-gray-700">
          {/* Left Info */}
          <div>
            <div className="text-base font-semibold text-gray-800 dark:text-white border-l-4 border-green-500 pl-2 mb-2">
              {item.month} ( ₹ {item.paidAmount} of ₹ {item.totalAmount} )
            </div>
            <div onClick={() => {openModal()}} className="flex flex-wrap gap-6 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
              <span>Receipt No: {item.receiptNo}</span>
              <span>{item.paymentType}</span>
              <span>₹ {item.paidAmount}</span>
              <span>{item.date}</span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-start gap-3">
            <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm rounded font-semibold text-gray-800 dark:text-white">
              {item.status}
            </span>
            <button className="p-2 rounded-md bg-pink-100 text-pink-600 hover:bg-pink-200 transition">
              <FaPrint />
            </button>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="px-4 py-3 text-sm flex justify-end text-gray-600 dark:text-gray-300">
        <span className="mr-4 font-medium">Fee Rule(s) - <span className="font-normal">{feeRules}</span></span>
        <span className="font-medium">Fee Structure - <span className="font-normal">{feeStructure}</span></span>
      </div>
    </div>
  );
}
