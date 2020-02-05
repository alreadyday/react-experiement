// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class StockInfoList extends ProxyClass {
  constructor() {
    super();
    this.data = {};
  }

  get(companyId) {
    return this.data[companyId];
  }

  set(valueArray) {
    valueArray.msgArray.forEach(value => {
      const companyId = value.c;
      const lastSuccessValue = value.z;
      console.warn(companyId);
      console.warn(lastSuccessValue);
      this.data[companyId] = lastSuccessValue;
    });
    super.set(valueArray);
  }
}
