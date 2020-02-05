import { singleton } from "../../../modules/MvcCore";

export default class switchCategory {
  async execute(categoryId) {
    const res = await fetch(`/stockCategoryContent?filter=${categoryId}`);
    const resJson = await res.json();
    const instance = singleton.get();
    const model = instance.get("model", "CompanyList");
    const viewModel = instance.get("viewModel", "menu");
    model.set(categoryId, resJson);
    viewModel.set(viewModel.category, categoryId);
  }
}
