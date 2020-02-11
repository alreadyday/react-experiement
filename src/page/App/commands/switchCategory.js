import { singleton } from "../../../modules/MvcCore";

export default class switchCategory {
  async execute(categoryId) {
    const instance = singleton.get();
    const companyListModel = instance.get("model", "CompanyList");
    const stockInfoListModel = instance.get("model", "StockInfoList");
    const viewModel = instance.get("viewModel", "menu");
    // get category
    const categoryListRes = await fetch(
      `/stockCategoryContent?filter=${categoryId}`
    );
    const categoryListResJson = await categoryListRes.json();
    companyListModel.set(categoryId, categoryListResJson);

    const companyList = companyListModel.get(categoryId);
    const stackInfoListRes = await fetch(
      `/stockInfo?${Object.keys(companyList)
        .map(key => `filter=${key}&`)
        .join("")}`
    );
    const stackInfoListResJson = await stackInfoListRes.json();
    stockInfoListModel.set(stackInfoListResJson);
    viewModel.set(viewModel.class.category, categoryId);
    viewModel.set(viewModel.class.company, null);
  }
}
