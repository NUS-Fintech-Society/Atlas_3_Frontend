import "./assets/css/App.css";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ProfilePage id={1} />
    </>
  );
}

export default App;
