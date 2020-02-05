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
    const result = companyList.resualt.reduce((result, company) => {
      const splitCompany = company.split("	");
      result[splitCompany[0]] = splitCompany[1];
      return result;
    }, {});
    this.data[category] = result;
    super.set({ category, result });
  }
}
