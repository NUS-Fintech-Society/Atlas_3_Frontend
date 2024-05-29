import { useWindowSize } from "@uidotdev/usehooks";
import {BREAKPOINTS} from "components/constants.tsx";
import WebLoginContainer from "components/authentication/LoginContainer.tsx";
import MobileLoginContainer from "components/authentication/MobileLoginContainer.tsx";

const LoginPage = () => {
  const size = useWindowSize();
  return (
    <>
    {size.width && size.width <= BREAKPOINTS.LG ? <MobileLoginContainer/> : <WebLoginContainer/>}
    </>
  )
}

export default LoginPage;