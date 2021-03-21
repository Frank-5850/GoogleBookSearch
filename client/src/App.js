import { useEffect } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const test = await API.getBook();
        console.log("test:", test);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
