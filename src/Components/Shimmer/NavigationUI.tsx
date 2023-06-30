const NavigationUI = () => {
  return (
    <div className="fixed w-full bottom-0  shadow-inner p-4 text-3xl dark:text-gray-300 text-slate-600">
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium pt-3 px-5 md:px-0">
          <div className="h-10 md:w-20 w-[5rem] rounded-md dark:bg-slate-500 bg-gray-400 animate-pulse"></div>
          <div className="h-10 md:w-20 w-[5rem] rounded-md dark:bg-slate-500 bg-gray-400 animate-pulse"></div>{" "}
          <div className="h-10 md:w-20 w-[5rem] rounded-md dark:bg-slate-500 bg-gray-400 animate-pulse"></div>
          <div className="h-10 md:w-20 w-[5rem] rounded-md dark:bg-slate-500 bg-gray-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default NavigationUI;
