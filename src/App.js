import "./App.scss";
import Navbar from "./client/Navbar";
// import Inputs from "./shared/components/Input";
// import Buttons from "./shared/components/Buttons";
import Sidebar from "./shared/components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* <Buttons /> */}
      <Navbar />
      <Sidebar />
      {/* <Inputs /> */}
      {/* <Buttons /> */}
    </div>
  );
}

export default App;
