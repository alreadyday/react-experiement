// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class StockRoeRoaInfo extends ProxyClass {
  constructor() {
    super(StockRoeRoaInfo);
    this.data = {};
  }

  get(date) {
    if (date in this.data)
      return this.data[date];
    else return null;
  }

  set(date, value) {

    this.data[date] = value;
    super.set(value);
  }
}
