// model
import CategoryList from "../../page/App/model/CategoryList";
import StockList from "../../page/App/model/StockList";
// controller
import initPage from "../../page/App/commands/initPage";

export default {
  model: {
    CategoryList,
    StockList
  },
  controller: {
    initPage
  }
};
