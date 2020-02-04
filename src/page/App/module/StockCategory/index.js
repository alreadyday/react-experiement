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
    console.warn("data:", data);
    this.forceUpdate();
  };
  render() {
    return <div>123</div>;
  }
}

export default StockCategory;
