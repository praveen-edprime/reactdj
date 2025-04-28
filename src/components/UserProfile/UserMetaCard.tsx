import { useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import FileInput from "../form/input/FileInput";

export default function UserMetaCard() {
  const { isOpen, closeModal, openModal } = useModal();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("/images/user/student.jpg");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          {/* Avatar & Info Section */}
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="relative group w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <img
                src={imagePreview}
                alt="user"
                className="object-cover w-full h-full"
              />
              <div
                onClick={() => setIsImageModalOpen(true)}
                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-medium cursor-pointer transition-opacity"
              >
                Edit
              </div>
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
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              Student Status:
              <div className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100 ml-1 whitespace-nowrap">
                LEFT
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 ml-1 whitespace-nowrap flex items-center">
              Date of Joining:
              <span className="font-medium text-gray-800 dark:text-white ml-1 whitespace-nowrap">
                09-03-2021
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Modal isOpen={isImageModalOpen} onClose={() => setIsImageModalOpen(false)} className="max-w-[400px] m-4">
        <div className="bg-white dark:bg-gray-900 rounded border border-gray-300 overflow-hidden">
          {/* Header */}

          {/* Tab-like section */}
          <div className=" px-4 py-2 text-sm font-medium text-gray-700">
            Upload Image
          </div>

          {/* Body */}
          <div className="p-4 flex flex-col gap-4 items-center">
            {/* Image Preview or Loading Placeholder */}
            <div className="w-48 h-56 border border-gray-300 bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="object-contain max-h-full" />
              ) : (
                "Loading..."
              )}
            </div>

            {/* File Input */}
            <div className="w-full text-sm text-gray-700 dark:text-gray-300 text-left">
              <label className="block mb-1 font-medium">Select an image file:</label>
              {/* Custom FileInput component */}
              <FileInput
                onChange={handleImageChange}
                 className="custom-class"
                // accept=".jpg,.jpeg,.png"
              />
              <p className="mt-2 text-xs text-gray-500">
                Please select image only with JPEG, PNG and JPG extensions with size (5 KB to 2 MB).
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 w-full justify-center mt-2">
              <Button
                size="sm"
                className="bg-sky-500 hover:bg-sky-600 text-white"
                onClick={() => {
                  console.log("Submit image logic here");
                  setIsImageModalOpen(false);
                }}
              >
                SUBMIT
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-gray-200 hover:bg-gray-300 text-black"
                onClick={() => setIsImageModalOpen(false)}
              >
                CANCEL
              </Button>
            </div>
          </div>
        </div>
      </Modal>

    </>
  );
}
