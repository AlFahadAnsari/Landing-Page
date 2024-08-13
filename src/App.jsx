import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing_page from "./components/Landing_page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="mx-3 md:mx-10">

      <Landing_page />
    </div>
    </>
  );
}

export default App;
