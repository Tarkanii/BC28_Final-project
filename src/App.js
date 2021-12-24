import "./App.scss";
import Routes from "./navigation/Routes";
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
