import PageMeta from "../../components/common/PageMeta";
import ExpenseVsCollection from "../../components/dashboard/ExpenseVsCollection";
import FeeSummaryFilter from "../../components/dashboard/FeeSummaryFilter";
import ImageSlider from "../../components/dashboard/ImageSlider";
import CalendarView from "../../components/common/CalendarView";
import EdprimeSlider from "../../components/common/EdprimeSlider";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="container-fluid w-full m-0 p-0 mx-auto sm:m-0 sm:w-full md:w-full sm:p-0 lg:m-0 lg:p-0">
        <div className="grid grid-cols-12 gap-2 sm:gap-2 lg:gap-2">
          {/* Dashboard Overview */}
          <div className="col-span-12 space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
              Dashboard Overview
            </h2>
            <div className="p-2 sm:p-4 py-0 pt-0">
              <ExpenseVsCollection />
            </div>
          </div>

          {/* Fee Summary Filter */}
          <div className="col-span-12 space-y-4 sm:space-y-6 py-0 pt-0">
            <div className="p-2 sm:p-4">
              <FeeSummaryFilter />
            </div>
          </div>

          {/* Image Slider */}
          <div className="col-span-12">
            <div className="p-2 sm:p-2">
              <ImageSlider />
            </div>
          </div>

          {/* Calendar View */}
          <div className="col-span-12">
            <div className="p-2 sm:p-4">
              <CalendarView />
            </div>
          </div>

          {/* Edprime Slider */}
          <div className="col-span-12">
            <div className="p-2 sm:p-4">
              <EdprimeSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}