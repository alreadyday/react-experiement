const fs = require("fs");
const DBpath = __dirname + "\\..\\DB\\companies\\";

function Companies() {
  const companiesList = {};

  return {
    initCompanies: function(category) {
      const companies = fs.readFileSync(DBpath + category);
      const companiesJSON = JSON.parse(companies);
      companiesList[category] = companiesJSON;
    },
    initAll: function() {
      const categories = fs.readdirSync(DBpath);
      categories.forEach(category => {
        this.initCompanies(category);
      });
    },
    get: function(category) {
      return companiesList[category];
    },
    set: function(category, data) {
      fs.writeFileSync(DBpath + category, JSON.stringify(data));
      this.initCompanies(category, data);
      return this.get(category);
    }
  };
}

const companiesObject = new Companies();
companiesObject.initAll();

module.exports = companiesObject;
