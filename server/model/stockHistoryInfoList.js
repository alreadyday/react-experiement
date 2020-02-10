const fs = require("fs");
const DBpath = __dirname + "\\..\\DB\\stockHistoryInfoList\\";
const fileSeparator = "_";

function StockHistoryInfoList() {
  const stockHistoryInfoList = {};

  return {
    initCompany: function(company, date) {
      const companyFile = fs.readFileSync(`${DBpath}${company}_${date}`);
      const companyFileJSON = JSON.parse(companyFile);
      if (!(company in stockHistoryInfoList))
        stockHistoryInfoList[company] = {};

      stockHistoryInfoList[company][date] = companyFileJSON;
    },
    initAll: function() {
      const companies = fs.readdirSync(DBpath);
      companies.forEach(company => {
        console.warn(company);
        const companyParam = company.split(fileSeparator);
        console.warn("companyParam:", companyParam);
        this.initCompany(companyParam[0], companyParam[1]);
      });
    },
    get: function(company, date) {
      if (
        company in stockHistoryInfoList &&
        date in stockHistoryInfoList[company]
      ) {
        return stockHistoryInfoList[company][date];
      } else {
        return null;
      }
    },
    set: function(company, date, data) {
      fs.writeFileSync(`${DBpath}${company}_${date}`, JSON.stringify(data));
      this.initCompany(company, date);
      return this.get(company, date);
    }
  };
}

const stockHistoryInfoListObject = new StockHistoryInfoList();
stockHistoryInfoListObject.initAll();

module.exports = stockHistoryInfoListObject;
