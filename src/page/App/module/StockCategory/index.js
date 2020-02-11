import React, { PureComponent } from "react";
import { singleton } from "../../../../modules/MvcCore";
// 股價變化
class StockCategory extends PureComponent {
  componentDidMount() {
    const instance = singleton.get();
    const model = instance.get("model", "CategoryList");
    model.registerObserver(this.refresh);
  }
  refresh = () => this.forceUpdate();

  onClickCategory = companyKey => {
    const command = singleton.get().get("controller", "switchCategory");
    command.execute(companyKey);
  };
  render() {
    const instance = singleton.get();
    const model = instance.get("model", "CategoryList");
    return (
      <section>
        <ul>
          {Object.entries(model.get()).map((value, key) => (
            <li key={key} style={{ display: "inline-block" }}>
              <button onClick={() => this.onClickCategory(value[0])}>
                {value[1]}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default StockCategory;
