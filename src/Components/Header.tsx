import { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(!isDark);
    }
  }, []);
  const changeTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };
  return (
    <div className="flex z-50 justify-between  px-14 p-5 dark:text-white  shadow-lg    bg-white   dark:bg-gray-700 font-bold w-full fixed top-0 md:mb-24 " >
      <button className=" md:text-3xl text-sm  flex gap-2 scroll-smooth" onClick={()=>{window.scroll(0,0)}}>
        <img src="/Icon.png" alt="logo" className=" md:h-10 h-8" />
        <span className="mt-2 md:mt-0">CineFlix</span>
      </button>
      {isDark ? (
        <button onClick={changeTheme} className="md:text-4xl text-2xl text-gray-900 ">
          &#x1F319;
        </button>
      ) : (
        <button onClick={changeTheme} className="md:text-4xl text-2xl text-gray-100 ">
          &#9728;
        </button>
      )}
    </div>
  );
};

export default Header;
