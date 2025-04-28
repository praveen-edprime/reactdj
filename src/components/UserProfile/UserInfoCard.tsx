import { useEffect, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import TextArea from "../form/input/TextArea";
import Select from "../form/Select";

interface FieldData {
  label: string;
  value: string;
  type?:string;
  options?: { label: string; value: string }[];
  disabled?: boolean;
}

export default function UserInfoCard({ data, title,editMode }: { data: FieldData[], title?: string;editMode?:boolean }) {
  const { isOpen, closeModal } = useModal();
  const [isEditing, setIsEditing] = useState(false); // Edit mode toggle

  const handleSave = () => {
    // Save logic goes here
    console.log("Saving changes...");
    setIsEditing(false);
    closeModal();
  };

  useEffect(() => {
    if(isEditing){
      setIsEditing(false)
    }
  },[title])

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      {/* {title && */}
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">{title}</h4>
          {editMode && 
          <Button size="sm" variant="outline" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </Button>}
          
        </div>
      {/* } */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-7 2xl:gap-x-32">
        {data.map((item, index) =>
          isEditing
            ? <FormField key={index} type={item.type} label={item.label} value={item.value} disabled={item.disabled || false} options={item.options || []} />
            : <InfoItem key={index} label={item.label} value={item.value} />
        )}
      </div>
      {isEditing && (
      <div className="flex items-center justify-end gap-3 mt-6">
        <Button size="sm" variant="outline" onClick={() => setIsEditing(false)}>
          Cancel
        </Button>
        <Button size="sm" onClick={handleSave}>
          Save
        </Button>
      </div>
    )}

      {/* Modal section unchanged */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Edit {title}
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
              Update your details to keep your profile up-to-date.
            </p>
          </div>

          <form className="flex flex-col">
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                {data.map((item, index) => (
                  <FormField key={index} type={item.type} label={item.label} value={item.value} disabled={item.disabled || false} />
                ))}
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
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-800 dark:text-white/90">{value}</p>
    </div>
  );
}

function FormField({
  label,
  value,
  disabled,
  type = "text",
  options
}: {
  label: string;
  value: string;
  disabled: boolean;
  type?: string;
  options?:{ label: string; value: string }[]
}) {
  return (
    <div className="col-span-2 lg:col-span-1">
      <Label>{label}</Label>

      {type === "textarea" ? (
        <TextArea value={value} disabled={disabled} />
      ) : type === "select" ? (
        <Select
            options={options || []}
            placeholder="Select an option"
            onChange={() => {}}
            className="dark:bg-dark-900"
          />
      ) : (
        <Input type={type} value={value} disabled={disabled} />
      )}
    </div>
  );
}

