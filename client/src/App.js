import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const test = axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=HarryPotter`
        );
        console.log(test);
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
