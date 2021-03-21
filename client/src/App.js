import { useEffect } from "react";
import API from "./utils/API";

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
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
