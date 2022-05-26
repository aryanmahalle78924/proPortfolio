import React from "react";
import About from "./components/about/About";
import Achievements from "./components/achievements/Achievements";
import Footer from "./components/footer/Footer";
import Hobbies from "./components/hobbies/Hobbies";
import Home from "./components/home/Home";
import Work from "./components/work/Work";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Achievements />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
