interface TabProps {
  prop: {
    tab: number;
    setTab: (pageNumber: number) => void;
  };
}
const Tabs: React.FC<TabProps> = ({ prop: { tab, setTab } }) => {
  const handleTabChange = (value: number) => {
    if (value === 0) {
      setTab(0);
    } else {
      setTab(1);
    }
  };
  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
             className={`inline-block p-4  border-slate-900 dark:border-slate-200  rounded-t-lg hover:border hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${tab === 0 ? '  border-b-2 ' :''}`}
             id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => handleTabChange(0)}
            >
              SEARCH MOVIES
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
             className={`inline-block p-4  border-slate-900 dark:border-slate-200 rounded-t-lg hover:border hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${tab === 1 ? '  border-b-2 ' :''}`}
             id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
              onClick={() => handleTabChange(1)}
            >
              SEARCH SERIES
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
