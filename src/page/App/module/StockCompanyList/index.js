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
    const category = menu.get(menu.class.category);
    const companyListModel = instance.get("model", "CompanyList");
    const companyList = companyListModel.get(category);
    const stockInfoListModel = instance.get("model", "StockInfoList");
    const command = instance.get("controller", "switchCompany");
    if (!companyList) {
      return null;
    } else {
      return (
        <section>
          <ul>
            {Object.entries(companyList).map(([key, value]) => {
              const stockValue = stockInfoListModel.get(key);
              return (
                <li key={key}>
                  <button
                    onClick={() =>
                      command.execute(key, menu.get(menu.class.date))
                    }
                  >
                    {value}
                  </button>
                  <span>{stockValue}</span>
                </li>
              );
            })}
          </ul>
        </section>
      );
    }
  }
}

export default StockCompanyList;
