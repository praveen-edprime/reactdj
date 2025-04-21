import { useModal } from "../../hooks/useModal";
import DynamicTable from "../tables/BasicTables/DynamicTable";
import Button from "../ui/button/Button";
import { Modal } from "../ui/modal";
import InfoSummaryCard from "./InfoSummaryCard";

const UserFeesInfo = () => {
      const { isOpen, openModal, closeModal } = useModal();
    //   const handleSave = () => {
    //     // Handle save logic here
    //     console.log("Saving changes...");
    //     closeModal();
    //   };
      const feeBreakdownHeaders = ["Fee Head", "Collected Amount"];
      const feeBreakdownRows = [
        ["Central Academy Shiksha Samiti (Tuition Fee)", "₹ 5,990"],
        ["Caution Money", "₹ 2,500"],
        ["Admission Fee", "₹ 10,000"],
        ["Computer Admission Fee", "₹ 1,600"],
      ];
    
      const summaryHeaders = ["Receipt No", "Collected On", "Payment Mode", "Total Amount"];
      const summaryRow = [["CA009611", "09-03-2021", "CASH", "₹ 20,090"]];
    return (
        <>
        <div className="text-gray-700 dark:text-white animate-fade-in">
          <InfoSummaryCard
              session="2021-2022"
              pending={41930}
              collected={20090}
              details={[
                {
                  month: "April",
                  paidAmount: 20090,
                  totalAmount: 20090,
                  receiptNo: "CA009611",
                  paymentType: "Full Payment",
                  date: "09-03-2021",
                  status: "Paid",
                },
              ]}
              openModal={openModal}
            />
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
          <DynamicTable headers={summaryHeaders} rows={summaryRow} />
        </div>

        <div className="flex justify-end">
          <Button variant="outline" onClick={closeModal}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
        </>
    )
}

 export default UserFeesInfo;