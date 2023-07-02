import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fixed w-full bottom-0  shadow-inner p-4 text-3xl dark:text-gray-300 text-slate-600">
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium mb-5 ">
          <Link
            to={"/"}
            type="button"
            className=" text-3xl dark:text-gray-300 text-slate-600 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <h1>🔥</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Trending
            </span>
          </Link>
          <Link
            to={"/movies"}
            type="button"
            className=" text-3xl dark:text-gray-300 text-slate-600 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <h1>🎬</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Movies
            </span>
          </Link>
          <Link
            to={"/tvseries"}
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <h1>&#128250;</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              TV 
            </span>
          </Link>
          <Link to={'/search'}
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <h1>🔎</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Search
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
