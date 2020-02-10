import { singleton } from "../../../modules/MvcCore";

export default class switchCompany {
  async execute(companyId, date) {
    const instance = singleton.get();
    const stockHistoryInfoList = instance.get("model", "StockHistoryInfoList");
    const viewModel = instance.get("viewModel", "menu");
    // get category
    const categoryListRes = await fetch(
      `/stockHistoryInfoList?companyId=${companyId}&date=${date}`
    );
    const categoryListResJson = await categoryListRes.json();
    stockHistoryInfoList.set(companyId, date, categoryListResJson);
    viewModel.set(viewModel.class.company, companyId);
  }
}
