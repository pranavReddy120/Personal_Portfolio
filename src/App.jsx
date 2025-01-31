import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Socials,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <Works />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Socials />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
