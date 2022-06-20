import "./App.css";
import { Route, Router, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login";

function App() {
  return <div className="App">
    <Navbar />
  <Router>
    <Route path="/" element={ <Home/>}>Home</Route>
    <Route path="/Login" element={ <Login/>}>Home</Route>
  </Router>
  </div>;
}

export default App;
