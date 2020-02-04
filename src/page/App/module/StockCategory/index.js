import React, { PureComponent } from "react";
import { singleton } from "../../../../modules/MvcCore";
// 股價變化
class StockCategory extends PureComponent {
  componentDidMount() {
    const instance = singleton.get();
    const model = instance.get("model", "CategoryList");
    model.registerObserver(this.refresh);
  }
  refresh = data => {
    this.forceUpdate();
  };
  render() {
    const instance = singleton.get();
    const model = instance.get("model", "CategoryList");
    return (
      <session>
        <ul>
          {Object.values(model.get()).map(name => (
            <li key={name}>
              <button>{name}</button>
            </li>
          ))}
        </ul>
      </session>
    );
  }
}

export default StockCategory;
