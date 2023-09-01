import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { AsteroidList } from "../pages/AsteroidList";
import { AsteroidDetail } from "../pages/AsteroidDetail";

export const AppRouter = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<AsteroidList />} />
          <Route path="/asteroid/:id" element={<AsteroidDetail />} />
        </Routes>
      </div>
    </div>
  );
};
