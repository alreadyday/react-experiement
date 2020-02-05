// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class CompanyList extends ProxyClass {
  constructor() {
    super();
    this.data = {};
  }
  get(category) {
    return this.data[category];
  }
  set(category, companyList) {
    this.data[category] = companyList;
    super.set({ category, companyList });
  }
}
