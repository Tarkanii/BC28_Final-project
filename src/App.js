import "./App.scss";
import Routes from "./navigation/Routes";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage"
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";
import Navbar from "./client/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
