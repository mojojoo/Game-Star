/** @format */
import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { Friends, Home, Matches, Shop, Statistics, Stream } from "./pages";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";
import RightBar from "./components/RightBar";
import { useStateContext } from "./context/ContextProvider";
import SomethingWrong from "./pages/SomethingWrong";
import AuthPage from "./pages/AuthPage";

const App = () => {
  const { scrolled, setScrolled } = useStateContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        document.getElementById("scrollable-section").scrollTop;

      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const scrollableSection = document.getElementById("scrollable-section");
    scrollableSection.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      scrollableSection.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="md:flex relative overflow-x-hidden">
        <Routes>
          <Route path="/404" element={<SomethingWrong />} />
          <Route path="/Login" element={<AuthPage />} />
        </Routes>
        <SideBar />

        <BottomBar />
        <RightBar />
        <section
          className="w-full h-screen overflow-y-auto"
          id="scrollable-section"
        >
          <Navbar />
          {/* Routes */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Matches" element={<Matches />} />
            <Route path="/Friends" element={<Friends />} />
            <Route path="/Streams" element={<Stream />} />
            <Route path="/Statistics" element={<Statistics />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default App;
