// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class CompanyList extends ProxyClass {
  constructor() {
    super();
    this.data = {};
  }
  get() {
    return this.data;
  }
  set(category, companyList) {
    this.data[category] = companyList;
    super.set({ category, companyList });
  }
}
