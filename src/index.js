import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./page/App";
import MvcCore, { mapping, context as MvcCoreContext } from "./modules/MvcCore";

class Index extends PureComponent {
  constructor() {
    super();
    this.MvcCore = new MvcCore(mapping);
    this.MvcCore.init();
  }
  render() {
    return (
      <MvcCoreContext.Provider value={this.MvcCore}>
        <Router>
          <App />
        </Router>
      </MvcCoreContext.Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
