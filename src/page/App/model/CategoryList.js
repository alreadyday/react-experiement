// according id and name of company
import Proxy from "../../../pattern/proxy";

export default class CategoryList extends Proxy {
  constructor() {}

  set(data) {
    this.data = {};
  }
}
