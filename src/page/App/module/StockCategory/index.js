import React, { PureComponent } from "react";
import { context as MvcContext } from "../../../../modules/MvcCore";
// 股價變化
class StockCategory extends PureComponent {
  componentDidMount() {
    const model = this.props.mvcSingleton.get("model", "CategoryList");
  }
  refresh = () => {
    this.forceUpdate();
  };
  render() {
    return <div>123</div>;
  }
}

export default React.forwardRef((props, ref) => (
  <MvcContext.Consumer>
    {mvcSingleton => (
      <StockCategory {...props} mvcSingleton={mvcSingleton} ref={ref} />
    )}
  </MvcContext.Consumer>
));
