// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class StockHistoryInfoList extends ProxyClass {
  constructor() {
    super(StockHistoryInfoList);
    this.data = {};
  }

  get(companyId, date) {
    if (companyId in this.data && date in this.data[companyId])
      return this.data[companyId][date];
    else return null;
  }

  set(companyId, date, value) {
    if (!(companyId in this.data)) this.data[companyId] = {};

    this.data[companyId][date] = value.data.reduce((result, monthlyData) => {
      const [year, month, ...others] = monthlyData;
      result[`${year}.${month}`] = others;
      return result;
    }, {});
    super.set(value);
  }
}
