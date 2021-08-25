import React, { useState } from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Welcome from "./components/Welcome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
