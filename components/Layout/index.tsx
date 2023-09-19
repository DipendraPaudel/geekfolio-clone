import { Fragment } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar />

      {children}
    </Fragment>
  );
};

export default Layout;
