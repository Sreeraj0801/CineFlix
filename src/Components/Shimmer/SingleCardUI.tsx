const SingleCardUI = () => {
  return (
    <div className="relative z-5">
      <div className="dark:hover:bg-slate-600 hover:bg-slate-300 cursor-pointer md:min-h-[32rem] md:max-h-fit p-3 bg-gray-100 border border-gray-300 rounded-lg shadow w-[] dark:bg-gray-900 dark:border-gray-700">
        <div className="md:h-[22rem] h-[26rem] w-[100%] md:w-[15rem] rounded-md  bg-slate-400 dark:bg-slate-900 p-3">
          <div className="h-[74%] w-full dark:bg-slate-500 bg-gray-300 rounded mb-5 animate-pulse"></div>
          <div className="md:h-8 h-10 w-full dark:bg-slate-600 bg-slate-200 rounded mb-2 animate-pulse"></div>
          <div className="h-5 md:h-4 w-full dark:bg-gray-500 bg-gray-100 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardUI;
