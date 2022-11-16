import React from "react";
import Navbar from "src/components/Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
