import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./page/App";
import MvcCore, { mapping, singleton } from "./modules/MvcCore";

class Index extends PureComponent {
  constructor() {
    super();
    this.MvcCore = new MvcCore(mapping);
    this.MvcCore.init();
    singleton.set(this.MvcCore);
  }
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
