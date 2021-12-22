import "./App.scss";
import Navbar from "./client/Navbar";
import AuthPage from "./pages/AuthPage/AuthPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthPage />
    </div>
  );
}

export default App;
