interface TabItem {
  label: string;
  key: string;
}

interface ProfileSidebarProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (key: string) => void;
}

export default function ProfileSidebar({
  tabs,
  activeTab,
  setActiveTab,
}: ProfileSidebarProps) {
  return (
    <div className="space-y-2 overflow-auto md:rounded-none rounded-2xl">
      <div className="bg-gray-100 dark:bg-white/[0.05] rounded-2xl p-4 md:block flex md:w-full w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center w-full gap-3 px-4 py-2.5 rounded-xl font-medium transition-colors duration-200 ${
              activeTab === tab.key
                ? "bg-[#26a9e0] text-white shadow-sm"
                : "text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/[0.08]"
            }`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
