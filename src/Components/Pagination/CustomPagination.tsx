interface TrendingInterface {
  prop: {
    setPage: (pageNumber: number) => void;
    page: number;
    totalPages?:number
  };
}

const CustomPagination: React.FC<TrendingInterface> = ({
  prop: { setPage, page,totalPages = 50 },
}) => {
  const handleChange = async (operation: string) => {
    if (operation === "prev") {
      setPage(--page);
    } else {
      setPage(++page);
    }
    window.scroll(0, 0);
  };
 
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white">
          &nbsp; {page} &nbsp;&nbsp;
          </span>
          of &nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            { totalPages}
          </span>
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          {page > 1 && (
            <button
              onClick={() => {
                handleChange("prev");
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-l hover:bg-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Prev
            </button>
          )}
          {page < (totalPages || 50 )&& (
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-gray-500 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => {
                handleChange(" inc ");
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomPagination;
