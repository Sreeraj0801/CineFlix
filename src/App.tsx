import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//Shimmer UI's
import HeaderUI from "./Components/Shimmer/HeaderUI.tsx";
import NavigationUI from "./Components/Shimmer/NavigationUI.tsx";
import TrendingUI from "./Components/Shimmer/TrendingUI.tsx";

const Header = lazy(() => import("./Components/Header.tsx"));
const Navigation = lazy(() => import("./Components/Navigation.tsx"));
const Trending = lazy(() => import("./Page/Trending.tsx"));
const Movies = lazy(() => import("./Page/Movies.tsx"));
import TvSeries from "./Page/TvSeries.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {
          <Suspense fallback={<HeaderUI />}>
            <Header />
          </Suspense>
        }

        <div className="mt-[4.774rem]">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<TrendingUI />}>
                  <Trending />
                </Suspense>
              }
            />
            <Route
              path="/movies"
              element={
                <Suspense fallback={<TrendingUI />}>
                  <Movies />
                </Suspense>
              }
            />
            <Route path="/tvseries" element={<TvSeries />} />
          </Routes>
        </div>
        {
          <Suspense fallback={<NavigationUI />}>
            <Navigation />
          </Suspense>
        }
      </BrowserRouter>
    </>
  );
};

export default App;
