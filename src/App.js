import "./App.scss";
import Navbar from "./client/Navbar";
import SprintListPage from "./pages/SprintListPage";
import ProjectListPage from './pages/ProjectListPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SprintListPage /> */}
      <ProjectListPage/>
    </div>
  );
}

export default App;
