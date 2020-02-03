import React, { PureComponent } from "react";
import CategoryList from "../../model/CategoryList";
// 股價變化
class StockCategory extends PureComponent {
  componentDidMount() {
    CategoryList.registerObserver(this.refresh);
  }
  refresh = () => {
    this.forceUpdate();
  };
  render() {
    return <div>123</div>;
  }
}

export default StockCategory;
