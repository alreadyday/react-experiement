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
    return Object.values(model.get()).map(name => <div key={name}>{name}</div>);
  }
}

export default StockCategory;
