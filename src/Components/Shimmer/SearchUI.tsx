import React from "react";
const SearchUI = () => {
  return (
    <>
      <div className=" dark:bg-slate-800 md:px-20 p-5  ">
        <div className=" flex justify-center items-center">
          <div className="w-[20%] h-10 bg-gray-400 animate-pulse mb-5  rounded"></div>
        </div>
        <div className="flex gap-5 rounded ">
          <div className="w-[80%] h-10 bg-gray-400 animate-pulse rounded  "></div>
          <div className="w-[10%] h-10 bg-gray-400 animate-pulse  rounded "></div>
        </div>
        <hr className="mt-5" />
        <section className="flex flex-wrap gap-5">
          <div className="md:w-[15%] w-[50%] h-10 bg-slate-400 animate-pulse mt-5"></div>
          <div className="md:w-[15%] w-[30%] h-10 bg-slate-400 animate-pulse mt-5"></div>
        </section>
        <section className="mt-5 md:flex flex-wrap gap-5">
          {Array(4)
            .fill("")
            .map((_, i) => {
              return (
                <React.Fragment key={i}>
                  <div className="md:h-[22rem] h-[26rem] w-[100%] md:w-[15rem] rounded-md  bg-slate-400 dark:bg-slate-900 p-3">
                    <div className="h-[74%] w-full dark:bg-slate-500 bg-gray-300 rounded mb-5 animate-pulse"></div>
                    <div className="md:h-8 h-10 w-full dark:bg-slate-600 bg-slate-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-5 md:h-4 w-full dark:bg-gray-500 bg-gray-100 rounded animate-pulse"></div>
                  </div>
                </React.Fragment>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default SearchUI;
