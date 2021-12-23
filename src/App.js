import "./App.scss";
import Routes from "./navigation/Routes";
import RegisterPage from "./pages/RegisterPage";
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";
import Navbar from "./client/Navbar";
import SprintListPage from "./pages/SprintListPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SprintListPage />
      <Routes />
    </div>
  );
}

export default App;
