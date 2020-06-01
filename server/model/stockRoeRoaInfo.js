const fs = require("fs");
const jsdom = require('jsdom');
const DBpath = __dirname + "\\..\\DB\\stockRoeRoaInfo\\";

function StockRoeRoaInfo() {
  const stockRoeRoaInfo = {};

  return {
    initRoeRoaInfo: function(date) {
      const info = fs.readFileSync(`${DBpath}${date}`);
      const dom = new jsdom.JSDOM(info);
      // get dom by tr.even and tr.odd
      const dataDoms = dom.window.document.querySelectorAll("tr.odd, tr.even");
      // convert row data to json object
      const data = Array.from(dataDoms).map((dom)=>{
        const children = Array.from(dom.children);
        
        const companyId = parseInt(children[0].innerHTML);
        const companyName = children[1].innerHTML.trim();
        const debtRatio = parseInt(children[2].innerHTML);
        const longTermFundsToFixedAssets = parseInt(children[3].innerHTML);
        const currentRatio = parseInt(children[4].innerHTML);
        const quickRatio = parseInt(children[5].innerHTML);
        const interestGuarantee = parseInt(children[6].innerHTML);
        const averageCollectionTurnover = parseInt(children[7].innerHTML);
        const averageCollectionDays = parseInt(children[8].innerHTML);
        const averageInventoryTurnover = parseInt(children[9].innerHTML);
        const averageInventoryTurnoverDays = parseInt(children[10].innerHTML);
        const fixedAssetsTurnover = parseInt(children[11].innerHTML);
        const totalAssetsTurnover = parseInt(children[12].innerHTML);
        const returnOnTotalAssets = parseInt(children[13].innerHTML);
        const returnOnTotalStockholdersEquaity = parseInt(children[14].innerHTML);
        const incomeToCapital  = parseInt(children[15].innerHTML);
        const netIncomeToSales = parseInt(children[16].innerHTML);
        const earningPerShare = parseInt(children[17].innerHTML);
        const cashFlowRatio = parseInt(children[18].innerHTML);
        const cashFlowAdequacyRatio = parseInt(children[19].innerHTML);
        const cashFlowReinvestmentRatio = parseInt(children[20].innerHTML);
        return {
          companyId,
          companyName,
          debtRatio,
          longTermFundsToFixedAssets,
          currentRatio,
          quickRatio,
          interestGuarantee,
          averageCollectionTurnover,
          averageCollectionDays,
          averageInventoryTurnover,
          averageInventoryTurnoverDays,
          fixedAssetsTurnover,
          totalAssetsTurnover,
          returnOnTotalAssets,
          returnOnTotalStockholdersEquaity,
          incomeToCapital,
          netIncomeToSales,
          earningPerShare,
          cashFlowRatio,
          cashFlowAdequacyRatio,
          cashFlowReinvestmentRatio,
        }
      });
      stockRoeRoaInfo[date] = data;
    },
    initAll: function() {
      const years = fs.readdirSync(DBpath);
      years.forEach(year => {
        this.initRoeRoaInfo(year);
      });
    },
    get: function(date) {
      if (
        date in stockRoeRoaInfo
      ) {
        return stockRoeRoaInfo[date];
      } else {
        return null;
      }
    },
    set: function(date, data) {
      fs.writeFileSync(`${DBpath}${date}`, data);
      this.initRoeRoaInfo(date);
      return this.get(date);
    }
  };
}

const stockRoeRoaInfoObject = new StockRoeRoaInfo();
stockRoeRoaInfoObject.initAll();

module.exports = stockRoeRoaInfoObject;
