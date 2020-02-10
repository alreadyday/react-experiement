// according id and name of company
import ProxyClass from "../../../pattern/proxy";

export default class MenuViewModel extends ProxyClass {
  constructor() {
    super(MenuViewModel);
    this.data = {
      category: null,
      company: null
    };
  }
  static category = "category";
  static company = "company";

  get(type) {
    return this.data[type];
  }
  set(type, data) {
    this.data[type] = data;
    super.set({ type, data });
  }
}
