import { singleton } from "../../../modules/MvcCore";

export default class switchDate {
  async execute(date) {
    const instance = singleton.get();
    // change roe roa
    const stockRoeRoaInfo = instance.get("model", "StockRoeRoaInfo");
    const viewModel = instance.get("viewModel", "menu");
    const previousYearIndex = 1;
    const roeroaInfoRes = await fetch(
      `/stockRoeRoaInfo?year=${date.substring(0,4)-1911-previousYearIndex}`
    );
    const roeroaInfoResJson = await roeroaInfoRes.json();
    stockRoeRoaInfo.set(date, roeroaInfoResJson);
    viewModel.set(viewModel.class.date, date);
  }
}
