export default class MvcCore {
  constructor(mapping) {
    this.mapping = mapping;
    this.data = {
      model: {},
      controller: {},
      view: {}
    };
  }

  init() {
    this.initModel();
    this.initController();
    this.initView();
  }

  get(category, name) {
    return name in this.data[category] ? this.data[category][name] : null;
  }

  initModel() {
    for (const [key, value] of Object.entries(this.mapping.model)) {
      this.data.model[key] = new value();
    }
  }
  initController() {}
  initView() {}
}

export { default as mapping } from "./mapping";
export { default as singleton } from "./singleton";
