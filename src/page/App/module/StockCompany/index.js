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
    const dateList = instance.get("model", "DateList");
    const switchCompany = instance.get("controller", "switchCompany");
    const company = menu.get(menu.class.company);

    const currentDate = menu.get(menu.class.date);
    const stockHistoryInfoListtModel = instance.get(
      "model",
      "StockHistoryInfoList"
    );
    const historyInfo = stockHistoryInfoListtModel.get(company, currentDate);
    if (!historyInfo) {
      return null;
    } else {
      const currentCategory = menu.get(menu.class.category);
      const categoryListModel = instance.get("model", "CategoryList");
      const categoryName = categoryListModel.get()[currentCategory];

      const companyListModel = instance.get("model", "CompanyList");
      const companyName = companyListModel.get(currentCategory)[company];
      return (
        <section>
          <span>
            {categoryName} - {companyName}
          </span>
          <div>
            {dateList.getAll().map(date => {
              return (
                <button
                  disabled={date === currentDate}
                  key={date}
                  onClick={() => switchCompany.execute(company, date)}
                >
                  {date}
                </button>
              );
            })}
          </div>
          <table>
            <tbody>
              {Object.entries(historyInfo).map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value[2]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      );
    }
  }
}

export default StockCompanyList;
