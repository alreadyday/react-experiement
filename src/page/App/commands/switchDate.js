import { singleton } from "../../../modules/MvcCore";

export default class switchDate {
  async execute(date) {
    const instance = singleton.get();
    // change roe roa
    const stockRoeRoaInfo = instance.get("model", "StockRoeRoaInfo");
    const viewModel = instance.get("viewModel", "menu");
    const previousYearIndex =  1;
    const year = date.substring(0,4)-1911-previousYearIndex;
    // check roe roa update time
    const isCurrentYear = new Date().getFullYear() - date.substring(0,4) === 0;
    const isRoeroaDataFulfilled = !isCurrentYear || new Date().getMonth() >= 4;
    const finalYear = isRoeroaDataFulfilled ? year : year - 1;
    const roeroaInfoRes = await fetch(
      `/stockRoeRoaInfo?year=${finalYear}`
    );
    if(isRoeroaDataFulfilled) {
      console.warn('use previous year roeroa data buz not current year data is incompleted')
    }
    const roeroaInfoResJson = await roeroaInfoRes.json();
    stockRoeRoaInfo.set(date, roeroaInfoResJson);
    viewModel.set(viewModel.class.date, date);
  }
}
