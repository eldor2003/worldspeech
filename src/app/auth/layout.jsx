import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AuthLayout;
