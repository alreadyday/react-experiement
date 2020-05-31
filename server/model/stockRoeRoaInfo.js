const fs = require("fs");
const jsdom = require('jsdom');
const DBpath = __dirname + "\\..\\DB\\stockRoeRoaInfo\\";

function StockRoeRoaInfo() {
  const stockRoeRoaInfo = {};

  return {
    initRoeRoaInfo: function(date) {
      const info = fs.readFileSync(`${DBpath}${date}`);
      const dom = new jsdom.JSDOM(info);
      console.warn(dom);
      
      stockRoeRoaInfo[date] = dom;
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
