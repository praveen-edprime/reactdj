

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
      <div className="grid grid-cols-12 gap-4 md:gap-6">

      <div className="col-span-12 space-y-6 xl:col-span-12">
         <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
          <div className="p-1">
            <ExpenseVsCollection />
          </div>
      </div>


      <div className="col-span-12 space-y-6 xl:col-span-12">
          <div className="p-1">
          <FeeSummaryFilter />
        </div>
      </div>

      
      <div className="col-span-12">
           <div className="p-1">
               <ImageSlider />
          </div>
      </div>
      <div className="col-span-12">
          <div className="p-1">
              <CalendarView />
        </div>
      </div>
      
      <div className="col-span-12">
        <div className="p-4">
          <EdprimeSlider />
        </div>
      </div>
      </div>
    </>
  );
}
