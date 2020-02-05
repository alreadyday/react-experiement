export default class MvcCore {
  constructor(mapping) {
    this.mapping = mapping;
    this.data = {
      model: {},
      viewModel: {},
      controller: {},
      view: {}
    };
  }

  init() {
    this.initModel();
    this.initViewModel();
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
  initViewModel() {
    for (const [key, value] of Object.entries(this.mapping.viewModel)) {
      this.data.viewModel[key] = new value();
    }
  }
  initController() {
    for (const [key, value] of Object.entries(this.mapping.controller)) {
      this.data.controller[key] = new value();
    }
  }
  initView() {}
}

export { default as mapping } from "./mapping";
export { default as singleton } from "./singleton";
