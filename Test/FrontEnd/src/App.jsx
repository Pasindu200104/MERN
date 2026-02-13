import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DataDetailPage from "./pages/DataDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
      [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/data/:id" element={<DataDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
