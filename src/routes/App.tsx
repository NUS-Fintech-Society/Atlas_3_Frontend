import DefaultLayout from "components/layout.tsx";
import { Outlet } from "react-router-dom";


const App = () => {
    return (
      <DefaultLayout children={<Outlet />}/>
    );
};

export default App;
