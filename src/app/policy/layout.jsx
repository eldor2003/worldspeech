import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const PolicyLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PolicyLayout;
