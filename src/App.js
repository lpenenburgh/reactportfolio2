import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
//import NavBar from "./components/NavBar/NavBar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;
