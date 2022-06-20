import "./App.css";
import { Route, Router, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";

function App() {
  return <div className="App">
    <Navbar />
  <Router>
    <Route >Home</Route>
  </Router>
  </div>;
}

export default App;
