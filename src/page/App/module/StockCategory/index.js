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
      <section className="category-session">
        <ul>
          {Object.entries(model.get()).map(([id, name], key) => (
            <li key={key} style={{ display: "inline-block" }}>
              <button onClick={() => this.onClickCategory(id)}>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default StockCategory;
