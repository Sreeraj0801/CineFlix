export interface ShimmerContentInterface {
  prop: {
    isShimmerModalOpen: boolean;
    setIsShimmerModalOpen: (arg:boolean) => void;
  };
}

const ContentUI:React.FC<ShimmerContentInterface> = ({ prop: { isShimmerModalOpen, setIsShimmerModalOpen } }) => {
  return (
    <div>
      {isShimmerModalOpen && (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative w-full max-w-7xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <div className="h-10 w-[26rem] rounded bg-gray-500 animate-pulse"></div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsShimmerModalOpen(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="md:flex md:p-10 overflow-scroll gap-10 h-[68vh] p-5 ">
                <div className="md:w-[20rem] md:h-[20rem] w-[20rem] h-[20rem] bg-gray-500"></div>
                <div className=" w-[40%] h-fit grid gap-3">
                  <div className="bg-slate-500 h-5 w-full rounded  animate-pulse "></div>
                  <div className="bg-slate-500 h-5 w-[50%] rounded  animate-pulse "></div>
                  <div className="bg-slate-500 h-5 w-full rounded  animate-pulse "></div>
                  <div className="bg-slate-500 h-5 w-full rounded  animate-pulse "></div>
                  <div className="bg-slate-500 h-5 w-full rounded  animate-pulse "></div>
                  <div className="bg-slate-500 h-5 w-[50%] rounded  animate-pulse mt-5"></div>
                  <div className="bg-slate-500 h-5 w-[50%] rounded  animate-pulse "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentUI;
