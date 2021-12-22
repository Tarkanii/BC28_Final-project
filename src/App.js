import "./App.scss";
import Navbar from "./client/Navbar";
import SprintListPage from "./pages/SprintListPage";
import ProjectListPage from './pages/ProjectListPage'
import RegisterPage from "./pages/RegisterPage"


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SprintListPage /> */}
      <ProjectListPage/>
      <RegisterPage />
      {/* <Sidebar />
      <Buttons />
      <Inputs />
      <Datepicker /> */}
    </div>
  );
}

export default App;
