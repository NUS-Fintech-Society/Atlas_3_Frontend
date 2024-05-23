import React from "react";
import Navbar from "components/shared/NavBar"; // Import the Navbar component.
import NavBarMobile from "components/shared/NavBarMobile.tsx";
import { useWindowSize } from "@uidotdev/usehooks";
import { BREAKPOINTS } from "components/constants.tsx";

interface LayoutProps {
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children=null }) => {
  const size = useWindowSize();
  return (
    <>
      {size.width && size.width <= BREAKPOINTS.LG ? (
        <NavBarMobile />
      ) : (
        <Navbar />
      )}
      {children}
    </>
  );
};

export default DefaultLayout;
