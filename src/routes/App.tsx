import { useWindowSize } from "@uidotdev/usehooks";

import MobileLoginContainer from "components/authentication/MobileLoginContainer.tsx";
import WebLoginContainer from "components/authentication/WebLoginContainer.tsx";
import { BREAKPOINTS } from "components/constants.tsx";
import NavBar from "components/shared/NavBar.tsx";


const App = () => {
    const size = useWindowSize();
    return (
      <>
          <NavBar/>
          {
              size.width && size.width <= BREAKPOINTS.MD ? <MobileLoginContainer/> : <WebLoginContainer/>
          }
      </>
    );
};

export default App;
