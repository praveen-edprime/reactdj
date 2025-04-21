import { FaRupeeSign, FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";
import { useState } from "react";
import Button from "../components/ui/button/Button";
import Checkbox from "../components/form/input/Checkbox";
import { Modal } from "../components/ui/modal";
import { useModal } from "../hooks/useModal";
import DynamicTable from "../components/tables/BasicTables/DynamicTable";

const installments = [
  { month: "April", amount: 5650, dueDate: "01 Apr 2024", status: "Due" },
  { month: "July", amount: 5650, dueDate: "01 Jul 2024", status: "Due" },
  { month: "August", amount: 5650, dueDate: "01 Aug 2024", status: "Due" },
  { month: "September", amount: 5650, dueDate: "01 Sep 2024", status: "Due" },
  { month: "October", amount: 5650, dueDate: "01 Oct 2024", status: "Due" },
  { month: "November", amount: 5650, dueDate: "01 Nov 2024", status: "Due" },
  { month: "December", amount: 5650, dueDate: "01 Dec 2024", status: "Due" },
  { month: "January", amount: 5650, dueDate: "01 Jan 2025", status: "Due" },
  { month: "February", amount: 1000, dueDate: "01 Feb 2025", status: "Due" },
  { month: "March", amount: 1000, dueDate: "01 Mar 2025", status: "Due" },
];

const totalFee = 47200;
const feePaid = 0;
const feeDue = totalFee - feePaid;

export default function FeeManagement() {
    const [selectAll, setSelectAll] = useState(false);
    const { isOpen, openModal, closeModal } = useModal();
    const [selectedInstallments, setSelectedInstallments] = useState<boolean[]>(Array(installments.length).fill(false));
    const [totalPayable, setTotalPayable] = useState(feeDue);
  
    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      const newSelectedInstallments = Array(installments.length).fill(checked);
      setSelectedInstallments(newSelectedInstallments);
      calculateTotal(newSelectedInstallments);
    };
  
    const handleSelectInstallment = (index: number) => {
      const newSelectedInstallments = [...selectedInstallments];
      newSelectedInstallments[index] = !newSelectedInstallments[index];
      setSelectedInstallments(newSelectedInstallments);
      setSelectAll(newSelectedInstallments.every((selected) => selected));
      calculateTotal(newSelectedInstallments);
    };
  
    const calculateTotal = (selectedInstallments: boolean[]) => {
      const total = installments.reduce((acc, inst, index) => {
        if (selectedInstallments[index]) {
          acc += inst.amount;
        }
        return acc;
      }, 0);
      setTotalPayable(total);
    };

    const feeBreakdownHeaders = ["Fee Head", "Amount"];
    const feeBreakdownRows = [
      ["Tuition Fee", "₹ 3,500"]
    ];

    const feeBreakdownHeaders2 = ["Other Fee Heads", "Amount"];
    const feeBreakdownRows2 = [
      ["Late Fee", "₹ 1,150"],
      ["Conveyance Fee", "₹ 1,000"],
      ["Total", "₹ 5,650"],
    ];

  
    return (
        <>
        <div className="">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">Fee Due Details 2024–2025</h2>
            </div>
            
    
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <SummaryCard
                title="Total Fee"
                amount={totalFee}
                icon={<FaMoneyCheckAlt size={28} />}
                color="from-sky-400 to-blue-500"
            />
            <SummaryCard
                title="Fee Due"
                amount={feeDue}
                icon={<FaMoneyBillWave size={28} />}
                color="from-red-400 to-red-500"
            />
            <SummaryCard
                title="Fee Paid"
                amount={feePaid}
                icon={<FaRupeeSign size={28} />}
                color="from-orange-400 to-yellow-400"
            />
            </div>
    
            {/* Installment Table */}
            <div className="bg-white shadow rounded overflow-x-auto mb-6">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                <tr className="text-left">
                <th className="p-3">#</th>
                    <th className="p-3">
                    <Checkbox checked={selectAll} onChange={handleSelectAll} />
                    </th>
                    <th className="p-3 flex items-center gap-2">Installment</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Due Date</th>
                    <th className="p-3">Status</th>
                </tr>
                </thead>
                <tbody>
                {installments.map((inst, index) => (
                    <tr key={index} className="even:bg-gray-50">
                    <td className="p-3">{index+1}</td>
                    <td className="p-3">
                        <Checkbox
                        checked={selectedInstallments[index]}
                        onChange={() => handleSelectInstallment(index)}
                        />
                    </td>
                    <td onClick={openModal} className="p-3 cursor-pointer flex items-center gap-2">{inst.month}</td>
                    <td onClick={openModal} className="p-3 cursor-pointer">₹ {inst.amount.toLocaleString()}</td>
                    <td onClick={openModal} className="p-3 cursor-pointer">{inst.dueDate}</td>
                    <td className="p-3 text-red-600">{inst.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
    
            {/* Coupon + Total Payable */}
            <div className="bg-white shadow rounded p-4 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
                <input
                type="text"
                placeholder="Apply Coupon"
                className="border border-gray-300 rounded px-4 py-2 flex-1"
                />
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Apply Coupon
                </button>
            </div>
            <div className="flex justify-between items-center border-t pt-4 text-lg font-semibold">
                <span>Total Payable Amount</span>
                <span>₹ {totalPayable.toLocaleString()}</span>
            </div>
            <div className="text-right">
                <Button size="sm">
                Pay Now
                </Button>
            </div>
            </div>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
      <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-8">
        <div className="mb-6 border-b border-gray-200 pb-3 dark:border-gray-700">
          <h2 className="text-xl font-bold text-[#26a9e0] dark:text-white">
            INSTALLMENT DETAILS - APRIL
          </h2>
        </div>

        <div className="mb-6">
          <DynamicTable headers={feeBreakdownHeaders} rows={feeBreakdownRows} />
        </div>

        <div className="mb-6">
          <DynamicTable headers={feeBreakdownHeaders2} rows={feeBreakdownRows2} />
        </div>

        <div className="flex justify-end">
          <Button variant="outline" onClick={closeModal}>
            Close
          </Button>
        </div>
      </div>
    </Modal>    
      </>
    );
}
  
function SummaryCard({ title, amount, icon, color }: any) {
  return (
    <div
      className={`bg-gradient-to-r ${color} text-white p-4 rounded-2xl shadow flex items-center justify-between`}
    >
      <div>
        <h4 className="text-sm opacity-90">{title}</h4>
        <div className="text-2xl font-bold">₹ {amount.toLocaleString()}</div>
      </div>
      <div className="opacity-80">{icon}</div>
    </div>
  );
}

