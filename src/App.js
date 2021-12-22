import "./App.scss";
import Navbar from "./client/Navbar";
// import Inputs from "./shared/components/Input";
// import Buttons from "./shared/components/Buttons";
// import Sidebar from "./shared/components/Sidebar";
// import Datepicker from "./shared/components/Datepicker";
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <RegisterPage />
      {/* <Sidebar />
      <Buttons />
      <Inputs />
      <Datepicker /> */}
    </div>
  );
}

export default App;
