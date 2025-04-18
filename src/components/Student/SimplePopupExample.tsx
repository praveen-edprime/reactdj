import { Modal } from "../../components/ui/modal"; // Already imported
import { useModal } from "../../hooks/useModal";   // Already imported

const Calendar: React.FC = () => {
  // Already declared
  const { isOpen, openModal, closeModal } = useModal(); 

  return (
    <>
      {/* Your FullCalendar Code */}

      {/* 👇 Add this simple button to open the modal */}
      <div className="flex justify-center mt-6">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Open Simple Modal
        </button>
      </div>

      {/* 👇 Your Popup Modal */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[500px] p-6"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Simple Popup Modal</h2>
          <p className="text-gray-600 mb-6">This is a simple modal example opened by a button.</p>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close Modal
          </button>
        </div>
      </Modal>
    </>
  );
};


export default Calendar;
