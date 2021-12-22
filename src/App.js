import "./App.scss";
import Routes from "./navigation/Routes";
import Navbar from "./client/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SprintListPage /> */}
      <ProjectListPage />
      <RegisterPage />
      {/* <Sidebar />
      <Buttons />
      <Inputs />
      <Datepicker /> */}
    </div>
  );
}

export default App;
