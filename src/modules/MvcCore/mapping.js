// model
import CategoryList from "../../page/App/model/CategoryList";
import CompanyList from "../../page/App/model/CompanyList";
import StockList from "../../page/App/model/StockList";
// view model
import menu from "../../page/App/viewModel/menu";

// controller
import initPage from "../../page/App/commands/initPage";
import switchCategory from "../../page/App/commands/switchCategory";

export default {
  model: {
    CategoryList,
    CompanyList,
    StockList
  },
  viewModel: {
    menu
  },
  controller: {
    initPage,
    switchCategory
  }
};
