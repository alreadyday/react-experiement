import { singleton } from "../../../modules/MvcCore";

export default class initPage {
  async execute() {
    const res = await fetch("/stockCategory");
    const resJson = await res.json();
    const instance = singleton.get();
    const model = instance.get("model", "CategoryList");
    model.set(resJson);
  }
}
