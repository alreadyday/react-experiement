import React, { PureComponent } from "react";
import StockCategory from "./module/StockCategory";
import StockCompanyList from "./module/StockCompanyList";
import StockCompany from "./module/StockCompany";
/*
  in this page, we want to display table and sort
  PER / 阿特曼Z指數(風險評估, 不適用金融和公用事業) /
*/

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <StockCategory />
        <StockCompanyList />
        <StockCompany />
      </div>
    );
  }
}

export default App;
