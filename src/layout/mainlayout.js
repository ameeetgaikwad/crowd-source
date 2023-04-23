import React from "react";
import Header from "@/components/header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
