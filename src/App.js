import "./App.scss";
import Navbar from "./client/Navbar";
import SprintListPage from "./pages/SprintListPage/SprintListPage";
// import { DeleteButton } from "./shared/components/Buttons";

function App() {
  return (
    <div className="App">
      {/* <Buttons /> */}
      <Navbar />
      <SprintListPage />
    </div>
  );
}

export default App;
