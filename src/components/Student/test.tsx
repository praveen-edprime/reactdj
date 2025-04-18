import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { Modal } from "../../components/ui/modal"; // Import Modal from Calendar
import { useModal } from "../../hooks/useModal"; // Import useModal hook

const AcademicSession = () => {
  // Use two separate useModal hooks for Create and Action modals
  const { isOpen: isCreateModalOpen, openModal: openCreateModal, closeModal: closeCreateModal } = useModal();
  const { isOpen: isActionModalOpen, openModal: openActionModal, closeModal: closeActionModal } = useModal();

  const [selectedSession, setSelectedSession] = useState<{ id: number; name: string; academic: string } | null>(null);
  const [sessions, setSessions] = useState([
    { id: 1, name: "2025-2026", academic: "2025-2026" },
    { id: 2, name: "2024-2025", academic: "2024-2025" },
    { id: 3, name: "2023-2024", academic: "2023-2024" },
    { id: 4, name: "2022-2023", academic: "2022-2023" },
    { id: 5, name: "2021-2022", academic: "2021-2022" },
    { id: 6, name: "2020-2021", academic: "2020-2021" },
  ]);
  const [newSessionName, setNewSessionName] = useState("");

  const handleCreateSession = () => {
    if (newSessionName.trim() === "") return;

    const newSession = {
      id: sessions.length + 1,
      name: newSessionName.trim(),
      academic: newSessionName.trim(),
    };

    setSessions([newSession, ...sessions]);
    setNewSessionName("");
    closeCreateModal(); // Close the create modal
  };

  return (
    <>
      <PageMeta
        title="Academic Session Management | TailAdmin"
        description="Manage academic sessions with TailAdmin - React.js Tailwind CSS Admin Template"
      />
      <PageBreadcrumb pageTitle="Academic Session" />

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="flex justify-between items-center mb-6">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search Academic Session"
            />
          </div>

          {/* Button to open Create Session Modal */}
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            onClick={openCreateModal} // Use openCreateModal from useModal
          >
            + Create Session
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border-b">S.No.</th>
                <th className="p-3 border-b">Session Name</th>
                <th className="p-3 border-b">Academic Session</th>
                <th className="p-3 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr key={session.id} className="hover:bg-gray-50">
                  <td className="p-3 text-center border-b">{index + 1}</td>
                  <td className="p-3 border-b">{session.name}</td>
                  <td className="p-3 border-b">{session.academic}</td>
                  <td className="p-3 text-center border-b">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition"
                      onClick={() => {
                        setSelectedSession(session);
                        openActionModal(); // Use openActionModal from useModal
                      }}
                    >
                      ✏️ Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Session Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        className="max-w-[500px] p-6"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Create Academic Session</h2>
          <input
            type="text"
            placeholder="Session Name (e.g., 2025-2026)"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newSessionName}
            onChange={(e) => setNewSessionName(e.target.value)}
          />
          <div className="flex justify-end w-full">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              onClick={handleCreateSession}
            >
              Save
            </button>
            <button
              className="ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              onClick={closeCreateModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      {/* Action (Edit) Modal */}
      <Modal
        isOpen={isActionModalOpen}
        onClose={closeActionModal}
        className="max-w-[500px] p-6"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Session Actions - {selectedSession?.name}</h2>
          <p className="text-gray-600 mb-6">You can perform actions here for this session.</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            onClick={closeActionModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AcademicSession;