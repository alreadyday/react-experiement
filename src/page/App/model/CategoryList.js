// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class CategoryList extends ProxyClass {
  constructor() {
    super(CategoryList);
    this.data = [];
  }
  get() {
    return this.data;
  }
  set(data) {
    this.data = data;
    super.set(data);
  }
}
