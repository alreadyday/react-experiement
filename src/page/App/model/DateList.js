// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class DateList extends ProxyClass {
  constructor() {
    super(DateList);
    this.data = [];
    DateList._init(this.data);
  }

  static _init = function(dateArray) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
      const computedYear = currentYear - i;
      dateArray.push(`${computedYear}0101`);
    }
  };

  get(companyId) {
    return this.data[companyId];
  }

  set(valueArray) {
    valueArray.msgArray.forEach(value => {
      const companyId = value.c;
      const lastSuccessValue = value.z;
      this.data[companyId] = lastSuccessValue;
    });
    super.set(valueArray);
  }
}
