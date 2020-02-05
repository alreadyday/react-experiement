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
    const category = menu.get(menu.category);
    const companyListModel = instance.get("model", "CompanyList");
    const companyList = companyListModel.get(category);
    if (!companyList) {
      return null;
    } else {
      return (
        <section>
          <ul>
            {Object.entries(companyList).map(([key, value]) => {
              return (
                <li>
                  <button>{value}</button>
                </li>
              );
            })}
          </ul>
        </section>
      );
    }
    return <section>123</section>;
  }
}

export default StockCompanyList;
