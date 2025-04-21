import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserMetaCard() {
  const { isOpen, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
  <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
    {/* Avatar & Info Section */}
    <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
      <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
        <img src="/images/user/student.jpg" alt="user" />
      </div>

      <div className="order-3 xl:order-2">
        <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
          Hitendra Singh Rathore
        </h4>

        <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Class : II - A
          </p>
          <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Jodhpur, Rajasthan
          </p>
        </div>
      </div>
    </div>

    {/* Student Status & Join Date */}
    <div className="flex flex-col items-center gap-3 text-center xl:text-right xl:items-end">
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">Student Status:
        <div className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100 ml-1 whitespace-nowrap">
          LEFT
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 ml-1 whitespace-nowrap flex items-center">
        Date of Joining: <span className="font-medium text-gray-800 dark:text-white ml-1 whitespace-nowrap">09-03-2021</span>
      </p>
    </div>
  </div>
</div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit Personal Information
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Social Links
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Facebook</Label>
                    <Input
                      type="text"
                      value="https://www.facebook.com/PimjoHQ"
                    />
                  </div>

                  <div>
                    <Label>X.com</Label>
                    <Input type="text" value="https://x.com/PimjoHQ" />
                  </div>

                  <div>
                    <Label>Linkedin</Label>
                    <Input
                      type="text"
                      value="https://www.linkedin.com/company/pimjo"
                    />
                  </div>

                  <div>
                    <Label>Instagram</Label>
                    <Input type="text" value="https://instagram.com/PimjoHQ" />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>First Name</Label>
                    <Input type="text" value="Musharof" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Last Name</Label>
                    <Input type="text" value="Chowdhury" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email Address</Label>
                    <Input type="text" value="randomuser@pimjo.com" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Phone</Label>
                    <Input type="text" value="+09 363 398 46" />
                  </div>

                  <div className="col-span-2">
                    <Label>Bio</Label>
                    <Input type="text" value="Team Manager" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
