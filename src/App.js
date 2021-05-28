import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
//import NavBar from "./components/NavBar/NavBar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <div>
        <Wrapper>
          <Switch>
            <Route  path="/" component={About} />
            <Route  path="/about" component={About} />
            <Route  path="/portfolio" component={Portfolio} />
            <Route  path="/contact" component={Contact} />
          </Switch>
        </Wrapper>
      </div>
    </HashRouter>

  );
}

export default App;
