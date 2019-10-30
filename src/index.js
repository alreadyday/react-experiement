import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import App from "./page/App";

import { BrowserRouter as Router } from "react-router-dom";

class Index extends PureComponent {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
