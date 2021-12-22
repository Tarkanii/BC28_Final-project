import "./App.scss";
import Navbar from "./client/Navbar";
import { DeleteButton } from "./shared/components/Buttons";

function App() {
  return (
    <div className="App">
      <h2>Button Primary 30x30</h2>
      <DeleteButton variant="primary" />
      <h2>Button Secondary 20x20</h2>
      <DeleteButton variant="secondary" />
      <Navbar />
    </div>
  );
}

export default App;
