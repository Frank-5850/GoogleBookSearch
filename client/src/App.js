import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </Router>
  );
}

export default App;
