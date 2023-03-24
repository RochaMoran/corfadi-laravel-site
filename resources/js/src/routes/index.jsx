import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "../components/organisms";
import {
  Home,
  Briefcase,
  AboutMe,
  ServicesAndProducts,
  FAQs,
  ContactUs,
} from "../components/pages";

export default function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/briefcase" element={<Briefcase />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/services-products" element={<ServicesAndProducts />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
