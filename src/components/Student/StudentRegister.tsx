import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

import { useState } from "react";

const StudentRegister = () => {
  const [formType, setFormType] = useState<string | null>(null);

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="StudentRegister" />

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="grid grid-cols-1 gap-6">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {/* First Row */}
            <input
              type="text"
              placeholder="First Name *"
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Second Row */}
            <input
              type="date"
              placeholder="Date of Birth *"
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Gender *</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Category *</option>
              <option>General</option>
              <option>OBC</option>
              <option>SC</option>
              <option>ST</option>
            </select>

            {/* Third Row */}
            <select
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Applying for Class *</option>
            </select>
            <input
              type="email"
              placeholder="Email *"
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center gap-2 border text-gray-800 dark:text-white/90 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <span className="text-gray-600">+91</span>
              <input
                type="text"
                placeholder="Primary Contact Number *"
                className="input flex-1 border-none focus:outline-none focus:ring-0"
              />
            </div>

            {/* Fourth Row */}
            <select
              className="input border text-gray-800 dark:text-white/90 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Whom to make primary contact *</option>
            </select>


            {/* Fourth Row - Enquiry or Registration */}
            <div className="col-span-3">
              <div className="flex items-center gap-4">

                  <label className="flex items-center gap-2">
                    <input
                    type="radio"
                    name="type"
                    value="enquiry"
                    className="text-blue-600 focus:ring-blue-500"
                    onChange={(e) => setFormType(e.target.value)}
                    />
                      <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                          Enquiry
                      </span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                    type="radio"
                    name="type"
                    value="registration"
                    className="text-blue-600 focus:ring-blue-500"
                    onChange={(e) => setFormType(e.target.value)}
                    />
                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                       Registration
                    </span>
                  </label>

              </div>

                {formType === "enquiry" && (
                    <div className="mt-6 space-y-6">
                       <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

                            {/* Name of the Previous School with address */}
                            <input
                              type="text"
                              placeholder="Name of the Previous School with address *"
                              className="input border border-gray-300 rounded-lg px-4 py-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Age */}
                            <input
                              type="text"
                              placeholder="Age *"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* WhatsApp No */}
                            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                              <span className="flex items-center gap-1">
                              <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5" />
                              <select className="bg-transparent border-none focus:outline-none">
                                <option value="+91">+91</option>
                              </select>
                              </span>
                              <input
                              type="text"
                              placeholder="81234 56789"
                              className="input flex-1 border-none focus:outline-none focus:ring-0"
                              />
                            </div>

                            {/* Father's Name */}
                            <input
                              type="text"
                              placeholder="Father's Name"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Father's Contact */}
                            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                              <span className="flex items-center gap-1">
                              <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5" />
                              <select className="bg-transparent border-none focus:outline-none">
                                <option value="+91">+91</option>
                              </select>
                              </span>
                              <input
                              type="text"
                              placeholder="81234 56789"
                              className="input flex-1 border-none focus:outline-none focus:ring-0"
                              />
                            </div>

                            {/* Father's Email */}
                            <input
                              type="email"
                              placeholder="Father's Email"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Mother's Name */}
                            <input
                              type="text"
                              placeholder="Mother's Name"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Mother's Contact */}
                            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                <span className="flex items-center gap-1">
                                <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5" />
                                <select className="bg-transparent border-none focus:outline-none">
                                  <option value="+91">+91</option>
                                </select>
                                </span>
                                <input
                                type="text"
                                placeholder="81234 56789"
                                className="input flex-1 border-none focus:outline-none focus:ring-0"
                                />
                            </div>

                            {/* Mother's Email */}
                            <input
                              type="email"
                              placeholder="Mother's Email"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Address */}
                            <input
                              type="text"
                              placeholder="Address *"
                              className="input border border-gray-300 rounded-lg px-4 py-2 col-span-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* How did you know about School? */}
                            <input
                              type="text"
                              placeholder="How did you know about School? *"
                              className="input border border-gray-300 rounded-lg px-4 py-2 col-span-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                    </div>
                )}

                {formType === "registration" && (
                    <div className="mt-6 space-y-6">
                      <div className=" ">
                          {/* Main Form Section */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            {/* Aadhaar Number, Caste, Religion */}
                            <input
                              type="text"
                              placeholder="Aadhaar Number"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Caste"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Religion</option>
                              <option>Hindu</option>
                              <option>Muslim</option>
                              <option>Christian</option>
                              <option>Other</option>
                            </select>

                            {/* Medium of Instructions, Jan Aadhaar Number, Last School TC No */}
                            <select
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Medium of Instructions</option>
                              <option>English</option>
                              <option>Hindi</option>
                              <option>Other</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Jan Aadhaar Number"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Last School TC No"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* PEN Number, Conveyance, Height (in feet) */}
                            <input
                              type="text"
                              placeholder="PEN Number"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Conveyance</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Height (in feet)"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Weight, Blood Group, Education RTE Act */}
                            <input
                              type="text"
                              placeholder="Weight"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Blood Group</option>
                              <option>A+</option>
                              <option>B+</option>
                              <option>AB+</option>
                              <option>O+</option>
                            </select>
                            <div className="flex items-center gap-2">
                              <label className="flex items-center gap-1">
                                <input type="radio" name="rte" className="text-blue-600 focus:ring-blue-500" /> Yes
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="rte" defaultChecked className="text-blue-600 focus:ring-blue-500" /> No
                              </label>
                            </div>

                            {/* CWSN (Child with Special needs), Upload Image */}
                            <div className="flex items-center gap-2 col-span-2">
                              <label className="flex items-center gap-1">
                                <input type="radio" name="cwsn" className="text-blue-600 focus:ring-blue-500" /> Yes
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="cwsn" defaultChecked className="text-blue-600 focus:ring-blue-500" /> No
                              </label>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span>Upload Image(5 KB to 2 MB)</span>
                              <label className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white">
                                <span>Choose File</span>
                                <input type="file" className="hidden" accept="image/jpeg,image/png,image/jpg" />
                              </label>
                              <span className="text-xs text-gray-500">Required extensions are .JPEG, .PNG, and .JPG</span>
                            </div>
                          </div>
                      </div>
                      <div className=" ">
                        {/* Parents Information Section */}
                        <div className="mb-6">
                          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                            <span className="text-xl">👨‍👩‍👧</span> Parents Information
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6 border border-gray-200 rounded-b-lg">
                            {/* Father Details */}
                            <div className="col-span-3">
                              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                                <span className="text-xl">👨</span> Father Details
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-100 rounded-b-lg">
                                <input
                                  type="text"
                                  placeholder="First Name"
                                  className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                  type="text"
                                  placeholder="Middle Name"
                                  className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                  type="text"
                                  placeholder="Last Name"
                                  className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                  <span className="flex items-center gap-1">
                                    <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5" />
                                    <select className="bg-transparent border-none focus:outline-none">
                                      <option value="+91">+91</option>
                                    </select>
                                  </span>
                                  <input
                                    type="text"
                                    placeholder="81234 56789"
                                    className="input flex-1 border-none focus:outline-none focus:ring-0"
                                  />
                                </div>
                                <div className="flex flex-col gap-1">
                                  <span>Upload Image(5 KB to 2 MB)</span>
                                  <label className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white">
                                    <span>Choose File</span>
                                    <input type="file" className="hidden" accept="image/jpeg,image/png,image/jpg" />
                                  </label>
                                </div>
                              </div>
                            </div>

                            {/* Mother Details */}
                            <div className="col-span-3">
                              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                                <span className="text-xl">👩</span> Mother Details
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-100 rounded-b-lg">
                                <input
                                  type="text"
                                  placeholder="First Name"
                                  className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                  type="text"
                                  placeholder="Middle Name"
                                  className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                  type="text"
                                  placeholder="Last Name"
                                  className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                  <span className="flex items-center gap-1">
                                    <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5" />
                                    <select className="bg-transparent border-none focus:outline-none">
                                      <option value="+91">+91</option>
                                    </select>
                                  </span>
                                  <input
                                    type="text"
                                    placeholder="81234 56789"
                                    className="input flex-1 border-none focus:outline-none focus:ring-0"
                                  />
                                </div>
                                <div className="flex flex-col gap-1">
                                  <span>Upload Image(5 KB to 2 MB)</span>
                                  <label className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white">
                                    <span>Choose File</span>
                                    <input type="file" className="hidden" accept="image/jpeg,image/png,image/jpg" />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Guardian's Information Section */}
                        <div className="mb-6">
                          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                            <span className="text-xl">🧑‍🍼</span> Guardian's Information
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6 border border-gray-200 rounded-b-lg">
                            <input
                              type="text"
                              placeholder="First Name"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Middle Name"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Gender *</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                              <span className="flex items-center gap-1">
                                <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5" />
                                <select className="bg-transparent border-none focus:outline-none">
                                  <option value="+91">+91</option>
                                </select>
                              </span>
                              <input
                                type="text"
                                placeholder="81234 56789"
                                className="input flex-1 border-none focus:outline-none focus:ring-0"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <span>Upload Image(5 KB to 2 MB)</span>
                              <label className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-white">
                                <span>Choose File</span>
                                <input type="file" className="hidden" accept="image/jpeg,image/png,image/jpg" />
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Address Section */}
                        <div className="mb-6">
                          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                            <span className="text-xl">📍</span> Address
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6 border border-gray-200 rounded-b-lg">
                            <input
                              type="text"
                              placeholder="Address *"
                              className="input border border-gray-300 rounded-lg px-4 py-2 col-span-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Landmark"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">State *</option>
                              <option>Maharashtra</option>
                              <option>Gujarat</option>
                              <option>Rajasthan</option>
                            </select>
                            <select
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">City *</option>
                              <option>Mumbai</option>
                              <option>Ahmedabad</option>
                              <option>Jaipur</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Pincode"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        {/* Emergency Contact Information Section */}
                        <div className="">
                        {/* Emergency Contact Information Section */}
                        <div className="mb-6">
                          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                            <span className="text-xl">🚑</span> Emergency Contact Information
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6 border border-gray-200 rounded-b-lg">
                            <div className="col-span-3 flex items-center gap-2">
                              <label className="flex items-center gap-1">
                                <input type="radio" name="contactSame" className="text-blue-600 focus:ring-blue-500" /> Same as Father
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="contactSame" className="text-blue-600 focus:ring-blue-500" /> Mother
                              </label>
                            </div>
                            <input
                              type="text"
                              placeholder="Contact Name *"
                              className="input border border-gray-300 rounded-lg px-4 py-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                              <span className="flex items-center gap-1">
                                <img src="https://flagcdn.com/in.svg" alt="India Flag" className="w-5 h-5" />
                                <select className="bg-transparent border-none focus:outline-none">
                                  <option value="+91">+91</option>
                                </select>
                              </span>
                              <input
                                type="text"
                                placeholder="81234 56789"
                                className="input flex-1 border-none focus:outline-none focus:ring-0"
                              />
                            </div>
                            <input
                              type="text"
                              placeholder="Contact Address *"
                              className="input border border-gray-300 rounded-lg px-4 py-2 col-span-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        {/* Exam Schedule Section */}
                        <div className="mb-6">
                          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                            <span className="text-xl">📅</span> Exam Schedule <span className="text-blue-600">📧</span>
                            <label className="ml-2 flex items-center gap-1">
                              <input type="checkbox" className="text-blue-600 focus:ring-blue-500" /> Send Comm.
                            </label>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6 border border-gray-200 rounded-b-lg">
                            <input
                              type="text"
                              placeholder="DD-MM-YYYY"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                              type="text"
                              placeholder="Exam Time"
                              className="input border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                        {/* Fee Waiver Section */}
                        <div className="mb-6">
                          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                            <span className="text-xl">💸</span> Fee Waiver
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6 border border-gray-200 rounded-b-lg">
                            <div className="col-span-3 flex items-center gap-2">
                              <label className="flex items-center gap-1">
                                <input type="checkbox" className="text-blue-600 focus:ring-blue-500" /> Fee Waiver
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Payment Mode Section */}
                        <div className="mb-6">
                          <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2">
                            <span className="text-xl">💳</span> Payment Mode
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm p-6 border border-gray-200 rounded-b-lg">
                            <div className="col-span-2 flex items-center gap-4">
                              <label className="flex items-center gap-1">
                                <input type="radio" name="paymentMode" className="text-blue-600 focus:ring-blue-500" /> Cash
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="paymentMode" className="text-blue-600 focus:ring-blue-500" /> Cheque
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="paymentMode" className="text-blue-600 focus:ring-blue-500" /> POS
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="paymentMode" className="text-blue-600 focus:ring-blue-500" /> UPI
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="paymentMode" className="text-blue-600 focus:ring-blue-500" /> Paytm
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="paymentMode" className="text-blue-600 focus:ring-blue-500" /> NEFT
                              </label>
                              <label className="flex items-center gap-1">
                                <input type="radio" name="paymentMode" className="text-blue-600 focus:ring-blue-500" /> RTGS
                              </label>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span>Registration Fee: ₹500</span>
                            </div>
                            <input
                              type="text"
                              placeholder="Remarks"
                              className="input border border-gray-300 rounded-lg px-4 py-2 col-span-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>

                       
                      </div>
                      </div>
                  </div>
                )}


            </div>

            {/* Buttons */}

            <div className="col-span-3 flex justify-end mt-6 gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                SAVE & SUBMIT
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition duration-200"
              >
                CANCEL
              </button>
            </div>
           


            
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentRegister;