import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound";
import Test from "./assets/Test"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/test" element={<Test/>}/>
      </Routes>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
