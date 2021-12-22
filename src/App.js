import "./App.scss";
import Navbar from "./client/Navbar";
// import Inputs from "./shared/components/Input";
// import Buttons from "./shared/components/Buttons";
import Sidebar from "./shared/components/Sidebar";
import Datepicker from "./shared/components/Datepicker";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Buttons /> */}
      {/* <Sidebar /> */}
      <Datepicker />
      {/* <Inputs /> */}
    </div>
  );
}

export default App;
