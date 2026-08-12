import React, { useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import { pageEnter } from "./animations/pageEnter";

function Layout() {
  const location = useLocation();
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = pageEnter(mainRef.current);
    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main ref={mainRef} key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <Layout />;
}