import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailSignup from "../ComponentsJs/EmailSignup";
import Reservations from "../ComponentsJs/Reservations";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/email" element={<EmailSignup />} />
        <Route path="/reservation" element={<Reservations />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
