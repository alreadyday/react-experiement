import { singleton } from "../../../modules/MvcCore";

export default class initPage {
  async execute() {
    const res = await fetch("/stockCategory");
    const resJson = await res.json();
    const instance = singleton.get();
    const model = instance.get("model", "CategoryList");
    const menu = instance.get("viewModel", "menu");
    model.set(resJson);

    // init date
    const dateModel = instance.get("model", "DateList");
    menu.set(menu.class.date, dateModel.get(0));
  }
}
