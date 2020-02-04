// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class StockIdList extends ProxyClass {
  constructor() {
    super();
  }

  set(data) {
    this.data = {};
  }
}
