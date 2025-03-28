import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Blog from "./components/Blog";
import Post from "./components/Post";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );

  return (
    <Router>
      <div className="fixed top-4 right-4 flex items-center space-x-6">
        {/* navigation links */}
        <div className="flex space-x-4 text-sm font-semibold font-inter dark:text-white">
          <Link
            to="/"
            className="hover:underline transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="hover:underline transition-colors duration-200"
          >
            Blog
          </Link>
        </div>

        {/* darkmode button */}
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="p-2 z-10 bg-violet-300
          dark:bg-orange-300 text-lg p-1 rounded-md"
        >
          {theme === "dark" ? sun : moon}
        </button>
      </div>
      <div
        className="bg-white dark:bg-stone-900 text-stone-900
        dark:text-stone-300
        min-h-screen font-inter"
      >
        <div className="max-w-5xl w-11/12 mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Intro />
                  <Portfolio />
                  <Timeline />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<Post />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
