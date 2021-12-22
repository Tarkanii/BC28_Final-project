import "./App.scss";
import Navbar from "./client/Navbar";
import SprintListPage from "./pages/SprintListPage/SprintListPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SprintListPage />
    </div>
  );
}

export default App;
