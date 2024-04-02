import { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
