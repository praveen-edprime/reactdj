import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserMetaCard from "../components/UserProfile/UserMetaCard";
import UserInfoCard from "../components/UserProfile/UserInfoCard";
import PageMeta from "../components/common/PageMeta";
import ProfileSidebar from "../components/UserProfile/ProfileSidebar";
import { options } from "@fullcalendar/core/preact.js";

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { label: "Personnal Details", key: "personal" },
    { label: "Address", key: "address" },
    { label: "Transport Details", key: "transport" },
    { label: "Medical Details", key: "medical" },
  ];


  const tabData:any = {
    personal: [
      { label: "First Name", value: "Hitendra", type: "text" },
      { label: "Middle Name", value: "Singh", type: "text" },
      { label: "Last Name", value: "Rathore", type: "text" },
      { label: "D.O.B", value: "29-01-1900", type: "date" },
      { label: "Father First Name", value: "Hitesh", type: "text" },
      { label: "Father Middle Name", value: "Singh", type: "text" },
      { label: "Father Last Name", value: "Rathore", type: "text" },
      { label: "Mother First Name", value: "Manisha", type: "text" },
      { label: "Mother Middle Name", value: "", type: "text" },
      { label: "Mother Last Name", value: "Rathore", type: "text" },
      { label: "Primary Contact No", value: "+91 99531 41106", type: "tel" },
      { label: "Aadhar Number", value: "NA", type: "text" },
      { label: "Passport No", value: "NA", type: "text" },
      { label: "Previous School Name", value: "NA", type: "text" },
      { label: "Previous Class Attended", value: "", type: "select" ,options: [
  
        { value: "20", label: "NR" },
        { value: "21", label: "KG" },
        { value: "22", label: "PR" },
        { value: "23", label: "I" },
        { value: "24", label: "II" },
        { value: "25", label: "III" },
        { value: "26", label: "IV" },
        { value: "27", label: "V" },
        { value: "28", label: "VI" },
        { value: "29", label: "VII" },
        { value: "30", label: "X" },
        { value: "31", label: "IX" },
        { value: "32", label: "VIII" },
        { value: "33", label: "XI Science" },
        { value: "34", label: "XI Commerce" },
        { value: "35", label: "XI Arts" },
        { value: "36", label: "XII Science" },
        { value: "37", label: "XII Commerce" },
        { value: "38", label: "XII Arts" },
        { value: "39", label: "VII commerce" },
        { value: "40", label: "CRICKET COACHING (KAILASH)" },
        { value: "41", label: "CRICKET COACHING (SOHAN)" },
        { value: "42", label: "XIIG" },
        { value: "43", label: "Xiid" },
        { value: "44", label: "Pre" },
        { value: "45", label: "15" },
        { value: "47", label: "jkl" },
        { value: "82", label: "CLASS 14" },
        { value: "86", label: "11 Arts" }
      ]},
      { label: "Previous Result", value: "", type: "select",options: [
        { value: "52", label: "Promoted" },
        { value: "53", label: "Demoted" },
      ] },
      { label: "Percentage/Grade", value: "NA", type: "text" },
      { label: "Reference by", value: "NA", type: "text" },
      { label: "House", value: "NA", type: "text" }
    ],
    address: [
      { label: "Current Address 1", value: "BANSIYAL", type: "text" },
      { label: "Current Address 2", value: "", type: "text" },
      { label: "Current Pincode", value: "302021", type: "number" },
      {
        label: "Current Country",
        value: "",
        type: "select",
        options: [
          { value: "IN", label: "India" },
          { value: "US", label: "USA" },
          { value: "UK", label: "UK" }
        ]
      },
      {
        label: "Current State",
        value: "",
        type: "select",
        options: [
          { value: "RJ", label: "Rajasthan" },
          { value: "DL", label: "Delhi" },
          { value: "MH", label: "Maharashtra" }
        ]
      },
      {
        label: "Current City",
        value: "",
        type: "select",
        options: [
          { value: "JPR", label: "Jaipur" },
          { value: "MUM", label: "Mumbai" },
          { value: "DEL", label: "Delhi" }
        ]
      },
      { label: "Permanent Address 1", value: "BANSIYAL", type: "text" },
      { label: "Permanent Address 2", value: "", type: "text" },
      { label: "Permanent Pincode", value: "302021", type: "number" },
      {
        label: "Permanent Country",
        value: "",
        type: "select",
        options: [
          { value: "IN", label: "India" },
          { value: "US", label: "USA" },
          { value: "UK", label: "UK" }
        ]
      },
      {
        label: "Permanent State",
        value: "",
        type: "select",
        options: [
          { value: "RJ", label: "Rajasthan" },
          { value: "DL", label: "Delhi" },
          { value: "MH", label: "Maharashtra" }
        ]
      },
      {
        label: "Permanent City",
        value: "",
        type: "select",
        options: [
          { value: "JPR", label: "Jaipur" },
          { value: "MUM", label: "Mumbai" },
          { value: "DEL", label: "Delhi" }
        ]
      }
    ],
    transport: [
      { label: "Pickup Point", value: "Kharghar,23J8+QFM,Sion - Panvel Highway, Sector 8" },
      { label: "Vehicle Number", value: "RJ14A5211" },
      { label: "Vehicle Route", value: "Route 1" },
      { label: "Driver Name", value: "Driver Two" },
      { label: "Driver Number", value: "+918574857422" },
    ],
    medical: [
      { label: "Medical Information", value: "NA" },
      { label: "Allergy Information", value: "NA" },
      { label: "Frequent Illness", value: "NA" },
      { label: "Hospital Name", value: "NA" },
      { label: "Hospital Phone", value: "NA" },
      { label: "Hospital Email", value: "NA" },
      { label: "Hospital Address", value: "NA" },
      { label: "Doctor Name", value: "NA" },
      { label: "Doctor Email", value: "NA" },
      { label: "Doctor Primary Contact No", value: "NA" },
      { label: "Doctor Secondary Contact No", value: "NA" },
      { label: "Doctor Address", value: "NA" },
      { label: "Height", value: "NA" },
      { label: "Weight", value: "NA" },
      { label: "Right Eyesight", value: "NA" },
      { label: "Left Eyesight", value: "NA" },
      { label: "Blood Group", value: "NA" },
      { label: "Identification Mark A", value: "NA" },
      { label: "Identification Mark B", value: "NA" },
      { label: "Doctor Remark", value: "NA" },
    ],
  };


const renderPersonalSubTabContent = () => {
  const data = tabData[activeTab] || [];
  return <UserInfoCard data={data} title={tabs.find((t) => t.key === activeTab)?.label} editMode={true} />;
};

  const renderTabContent = () => {
    return (
      <div className="space-y-6 animate-fade-in my-4">{renderPersonalSubTabContent()}</div>
    )
  };

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Student Profile" />
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
