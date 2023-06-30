import useOnline from "../../Hooks/useOnline";
import Offline from "../Offline";

const TrendingUI = () => {
  const array = new Array(10).fill("one");
  const [isOnline] = useOnline();
  if (!isOnline) return <Offline />;

  return (
    <>
      <div className="flex justify-center items-center dark:bg-slate-800">
        <div className="w-56 h-10 bg-slate-500 mt-5 rounded animate-pulse "></div>
      </div>
      <div className="  dark:bg-slate-800 bg-slate-50 md:px-20  p-5 dark:text-white text-lg  relative -z-20 flex gap-6 flex-wrap md:mb-14 mb-16 ">
        {array.map((_, i) => {
          return (
            <div
              key={i}
              className="md:h-[22rem] h-[26rem] w-[100%] md:w-[15rem] rounded-md  bg-slate-400 dark:bg-slate-900 p-3"
            >
              <div className="h-[74%] w-full dark:bg-slate-500 bg-gray-300 rounded mb-5 animate-pulse"></div>
              <div className="md:h-8 h-10 w-full dark:bg-slate-600 bg-slate-200 rounded mb-2 animate-pulse"></div>
              <div className="h-5 md:h-4 w-full dark:bg-gray-500 bg-gray-100 rounded animate-pulse"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TrendingUI;
