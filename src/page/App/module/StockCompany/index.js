import React, { PureComponent } from "react";
import { singleton } from "../../../../modules/MvcCore";
// 股價變化
class StockCompanyList extends PureComponent {
  componentDidMount() {
    const instance = singleton.get();
    const menu = instance.get("viewModel", "menu");
    menu.registerObserver(this.refresh);
  }

  refresh = () => this.forceUpdate();

  render() {
    const instance = singleton.get();
    const menu = instance.get("viewModel", "menu");
    const company = menu.get(menu.class.company);
    const stockHistoryInfoListtModel = instance.get(
      "model",
      "StockHistoryInfoList"
    );
    const historyInfo = stockHistoryInfoListtModel.get(company);
    if (!historyInfo) {
      return null;
    } else {
      return (
        <section>
          <div>{JSON.stringify(historyInfo)}</div>
        </section>
      );
    }
  }
}

export default StockCompanyList;
