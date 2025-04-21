import DynamicTable from "../tables/BasicTables/DynamicTable";

interface DynamicTableProps {
  headers: string[];
  rows: (string | number)[][];
  title: string
}

  const UserInfoTable: React.FC<DynamicTableProps> = ({ headers, rows, title}) => {
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">
        {title}
        </h4>
      </div>
      <DynamicTable headers={headers} rows={rows} />
    </div>
  );
}

export default UserInfoTable;


