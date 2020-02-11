// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class StockInfoList extends ProxyClass {
  constructor() {
    super(StockInfoList);
    this.data = {};
  }

  get(companyId) {
    return this.data[companyId];
  }

  set(valueArray) {
    if ("msgArray" in valueArray) {
      valueArray.msgArray.forEach(value => {
        const companyId = value.c;
        const lastSuccessValue = value.z;
        this.data[companyId] = lastSuccessValue;
      });
    }
    super.set(valueArray);
  }
}
