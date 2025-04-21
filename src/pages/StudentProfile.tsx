import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import PageMeta from "../components/common/PageMeta";
import ProfileSidebar from "../components/UserProfile/ProfileSidebar";
import UserInfoTable from "../components/UserProfile/UserInfoTable";
import RoundChart from "../components/charts/round/RoundChartOne";
import UserFeesInfo from "../components/UserProfile/UserFeesInfo";

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [personalSubTab, setPersonalSubTab] = useState("profile");
  const [academicsSubTab, setAcademicsSubTab] = useState("optionalsubject");

  const tabs = [
    { label: "Personal", key: "personal" },
    { label: "Academics", key: "academics" },
    { label: "Fee", key: "fee" },
    { label: "Documents", key: "documents" },
    { label: "Communication", key: "communication" },
  ];

  const personalSubTabs = [
    { label: "Profile", key: "profile" },
    { label: "Additional Information", key: "additional" },
    { label: "Previous School Information", key: "previousSchool" },
    { label: "Address", key: "address" },
    { label: "Health Information", key: "health" },
    { label: "Immunization", key: "immunization" },
    { label: "Emergency Contact", key: "emergency" },
  ];

  const academicsSubTabs = [
    { label: "Optional Subject", key: "optionalsubject" },
    { label: "Additional Subject", key: "additionalsubject" },
    { label: "Performance", key: "performance" },
    { label: "Attendance", key: "attendance" },
  ];

 const personalInfo = [
  { label: "Scholar No", value: "P3917" },
  { label: "Student Name", value: "Hitendra Singh Rathore" },
  { label: "Roll No", value: "0" },
  { label: "Gender", value: "Male" },
  { label: "Class", value: "PR - A" },
  { label: "Date of Birth", value: "15-04-2016" },
  { label: "Category", value: "Gen" },
  { label: "Religion", value: "Hinduism" },
  { label: "Caste", value: "-" },
  { label: "Email (Shall be used for all communication purposes)", value: "sona8299.as@gmail.com" },
  { label: "Contact No (Shall be used for all communication purposes)", value: "+919414038299" },
  { label: "Aadhar Number", value: "873731632937" },
  { label: "Father Name", value: "Alok Singh" },
  { label: "Mother Name", value: "Lalita" },
  { label: "PEN Number", value: "NA" },
  { label: "Jan Aadhar Number", value: "NA" },
  { label: "Passport No", value: "NA" },
  { label: "Conveyance Opted", value: "No" }
];

const additionalInfo = [
  { label: "Date of Joining", value: "12-02-2019" },
  { label: "Class of Joining", value: "NR-A" },
  { label: "Education RTE Act", value: "NA" },
  { label: "CWSN (child with special need)", value: "NA" },
  { label: "House", value: "NA" },
  { label: "Hobbies", value: "NA" },
];

const previousSchoolInfo = [
  { label: "School Name", value: "NA" },
  { label: "Class Attended", value: "NA" },
  { label: "Result", value: "NA" },
  { label: "Percentage/Grade", value: "NA" },
  { label: "Medium of Instructions", value: "NA" },
  { label: "Last School TC No", value: "NA" },
];

const currentAddressInfo = [
  { label: "Address", value: "21 Mahamandir Railway Station Indra Colony Jodhpur" },
  { label: "Landmark", value: "NA" },
  { label: "Locality", value: "Indra Colony" },
  { label: "Pincode", value: "342001" },
  { label: "City", value: "Jodhpur" },
  { label: "State", value: "Rajasthan" },
  { label: "Country", value: "India" },
];

const permanentAddressInfo = [
  { label: "Address", value: "21 Mahamandir Railway Station Indra Colony Jodhpur" },
  { label: "Landmark", value: "NA" },
  { label: "Locality", value: "Indra Colony" },
  { label: "Pincode", value: "342001" },
  { label: "City", value: "Jodhpur" },
  { label: "State", value: "Rajasthan" },
  { label: "Country", value: "India" },
];

const studentHealthInfo = [
  { label: "Blood Group", value: "NA" },
  { label: "Height", value: "NA" },
  { label: "Weight", value: "NA" },
  { label: "Identification Mark A", value: "NA" },
  { label: "Identification Mark B", value: "NA" },
  { label: "Right Eyesight", value: "NA" },
  { label: "Left Eyesight", value: "NA" },
];

const medicalInfo = [
  { label: "Medical Information", value: "NA" },
  { label: "Allergy Information", value: "NA" },
  { label: "Frequent Illness", value: "NA" },
];

const hospitalInfo = [
  { label: "Name", value: "NA" },
  { label: "Address", value: "NA" },
  { label: "Phone", value: "NA" },
  { label: "Email", value: "NA" },
];

const doctorInfo = [
  { label: "Name", value: "NA" },
  { label: "Email", value: "NA" },
  { label: "Contact No", value: "NA" },
  { label: "Address", value: "NA" },
  { label: "Remark", value: "NA" },
];

const immunizationInfo = [
  { label: "Vaccine Status", value: "NA" },
  { label: "Vaccine Name", value: "NA" },
  { label: "First Vaccine Date", value: "NA" },
  { label: "Next Vaccine Date", value: "NA" },
  { label: "Vaccine Certificate", value: "NA" },
  { label: "Remark", value: "NA" },
  { label: "Covid Test", value: "NA" },
  { label: "Covid Test Result", value: "NA" },
  { label: "Covid Test Certificate", value: "NA" },
];

const emergencyContactInfo = [
  { label: "Name", value: "ALOK SINGH" },
  { label: "Phone No", value: "+919414031439" },
  { label: "Address", value: "21 Mahamandir Railway Station Indra Colony Jodhpur" },
  { label: "Relation", value: "NA" },
];


const optionalsubjectheaders = ["S.No.", "Subject", "Amount", "Status", "Action"];
const optionalsubjectrows = [
  [1, "English", 0, "Compulsory", ""],
  [2, "Hindi", 0, "Compulsory", ""],
  [3, "Mathematics", 0, "Compulsory", ""],
  [4, "General Awareness", 0, "Compulsory", ""],
];
const documentrows = [
  [1, "demo 1", ""],
  [2, "demo 2", ""],
  [3, "demo 3", ""],
];

const appointmentrows = [
  [1, "demo 1", "10/10/24", "demo", "No"],
  [2, "demo 2", "10/10/24", "demo", "Yes"],
  [3, "demo 3", "10/10/24", "demo", "No"],
  [4, "demo 4", "10/10/24", "demo", "No"],
];

const additionalsubjectheaders = ["S.No.", "Additional Subject", "Amount", "Status", "Action"];
const documentheaders = ["S.No.", "Document Type", "Action"];
const appointmentheaders = ["S.No.", "Appointment By", "Date/Time", "Case", "More"];

const renderPersonalSubTabContent = () => {
  switch (personalSubTab) {
    case "profile":
      return <UserInfoCard data={personalInfo} title="Profile" />;
    case "additional":
      return <UserInfoCard data={additionalInfo} title="Additional Information" />;
    case "previousSchool":
      return <UserInfoCard data={previousSchoolInfo} title="Previous School Information" />;
    case "address":
      return (
        <>
          <UserInfoCard data={currentAddressInfo} title="Current Address" />
          <div className="my-6" />
          <UserInfoCard data={permanentAddressInfo} title="Permanent Address" />
        </>
      );
    case "health":
      return (
        <>
          <UserInfoCard data={studentHealthInfo} title="Student Health Information" />
          <div className="my-6" />
          <UserInfoCard data={medicalInfo} title="Medical Information" />
          <div className="my-6" />
          <UserInfoCard data={hospitalInfo} title="Hospital Information" />
          <div className="my-6" />
          <UserInfoCard data={doctorInfo} title="Doctor Information" />
        </>
      );
    case "immunization":
      return <UserInfoCard data={immunizationInfo} title="Immunization" />;
    case "emergency":
      return <UserInfoCard data={emergencyContactInfo} title="Emergency Contact" />;
    default:
      return null;
  }
};


const renderAcademicsSubTabContent = () => {
  switch (academicsSubTab) {
    case "optionalsubject":
      return <UserInfoTable headers={optionalsubjectheaders} rows={optionalsubjectrows} title="Optional Subject" />;
      case "additionalsubject":
        return <UserInfoTable headers={additionalsubjectheaders} rows={optionalsubjectrows} title="Additional Subject" />;
      case "attendance":
      return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RoundChart title="Attendance Total (250)" value={230} max={365} />
        <RoundChart title="Attendance This Month (30)" value={20} max={30} />
      </div>;
    default:
      return null;
  }
};


  const renderTabContent = () => {
    if (activeTab === "personal") {
      return (
        <>
          <div className="flex md:flex-wrap gap-2 my-4 items-center overflow-auto whitespace-nowrap">
            {personalSubTabs.map((sub) => (
              <button
                key={sub.key}
                onClick={() => setPersonalSubTab(sub.key)}
                className={`px-4 py-2 text-sm rounded-lg border transition ${
                  personalSubTab === sub.key
                    ? "bg-[#26a9e0] text-white border-transparent"
                    : "text-gray-700 dark:text-white border-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.08]"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
          <div className="space-y-6 animate-fade-in">{renderPersonalSubTabContent()}</div>
        </>
      );
    };

    if (activeTab === "academics") {
      return (
        <>
          <div className="flex md:flex-wrap gap-2 my-4 items-center overflow-auto whitespace-nowrap">
            {academicsSubTabs.map((sub) => (
              <button
                key={sub.key}
                onClick={() => setAcademicsSubTab(sub.key)}
                className={`px-4 py-2 text-sm rounded-lg border transition ${
                  academicsSubTab === sub.key
                    ? "bg-[#26a9e0] text-white border-transparent"
                    : "text-gray-700 dark:text-white border-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.08]"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
          <div className="space-y-6 animate-fade-in">{renderAcademicsSubTabContent()}</div>
        </>
      );
    };

    switch (activeTab) {
      case "fee":
        return <UserFeesInfo/>;
      case "documents":
        return <div className="text-gray-700 dark:text-white animate-fade-in  my-4">
          <UserInfoTable headers={documentheaders} rows={documentrows} title="Document Listing" />
        </div>;
      case "communication":
        return <div className="text-gray-700 dark:text-white animate-fade-in  my-4">
        <UserInfoTable headers={appointmentheaders} rows={appointmentrows} title="Appointment List" />
      </div>;
      default:
        return null;
    }
  };

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Profile" />
      <div className="rounded-2xl border border-gray-200 bg-white dark:bg-white/[0.03] p-5 lg:p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <ProfileSidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <div className="md:col-span-3">
          <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7 capitalize">
            {tabs.find((t) => t.key === activeTab)?.label}
          </h3>
          <UserMetaCard />
          {renderTabContent()}
        </div>
      </div>
    </>
  );
}
