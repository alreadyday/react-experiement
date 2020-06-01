// model
import CategoryList from "../../page/App/model/CategoryList";
import CompanyList from "../../page/App/model/CompanyList";
import StockInfoList from "../../page/App/model/StockInfoList";
import StockHistoryInfoList from "../../page/App/model/StockHistoryInfoList";
import StockRoeRoaInfo from "../../page/App/model/StockRoeRoaInfo";
import DateList from "../../page/App/model/DateList";
// view model
import menu from "../../page/App/viewModel/menu";

// controller
import initPage from "../../page/App/commands/initPage";
import switchCategory from "../../page/App/commands/switchCategory";
import switchCompany from "../../page/App/commands/switchCompany";
import switchDate from "../../page/App/commands/switchDate";

export default {
  model: {
    CategoryList,
    CompanyList,
    StockInfoList,
    StockHistoryInfoList,
    StockRoeRoaInfo,
    DateList
  },
  viewModel: {
    menu
  },
  controller: {
    initPage,
    switchCategory,
    switchCompany,
    switchDate
  }
};
