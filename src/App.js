import "./App.scss";
import Navbar from "./client/Navbar";
// import Inputs from "./shared/components/Input";
// import Buttons from "./shared/components/Buttons";
import Sidebar from "./shared/components/Sidebar";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthPage />
      {/* <Buttons /> */}
      <Sidebar />
      {/* <Inputs /> */}
    </div>
  );
}

export default App;
