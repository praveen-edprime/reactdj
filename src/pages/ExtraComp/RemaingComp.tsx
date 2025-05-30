import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import ExampleChart from "../../components/dashboard/ExampleChart";
import ExpenseVsCollection from "../../components/dashboard/ExpenseVsCollection";
import FeeSummaryFilter from "../../components/dashboard/FeeSummaryFilter";



export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">

      <div className="col-span-12 space-y-6 xl:col-span-12">
          <div className="p-6">
          <ExpenseVsCollection />
        </div>
      </div>


      <div className="col-span-12 space-y-6 xl:col-span-12">
          <div className="p-6">
          <FeeSummaryFilter />
        </div>
      </div>

      
    


        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-12">
          <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
            <ExampleChart />
        </div>
      </div>

        <div className="col-span-12 xl:col-span-12">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

      
        <div className="col-span-12 xl:col-span-6">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
