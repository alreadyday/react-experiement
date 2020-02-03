import React, { PureComponent } from "react";
import Tabs from "../../components/Tabs";
import SingleChart from "./module/SingleChart";
import StockTable from "./module/StockTable";
import StockCategory from "./module/StockCategory";
/*
  in this page, we want to display table and sort
  PER / 阿特曼Z指數(風險評估, 不適用金融和公用事業) /
*/

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Tabs>
          <StockCategory />
          <StockTable />
          <SingleChart />
        </Tabs>
      </div>
    );
  }
}

export default App;
