const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
const fetch = require("node-fetch");
const companies = require("./model/companies");
const stockHistoryInfoList = require("./model/stockHistoryInfoList");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/stockInfo", (req, res) => {
  if (!req.query.filter) {
    res.send({});
    return;
  }
  fetch(
    `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${req.query.filter
      .map(companyId => `tse_${companyId}.tw|`)
      .join("")}`
  )
    .then(result => {
      return result.json();
    })
    .then(result => {
      res.send(result);
    });
});

const category = require("./model/category");

app.get("/stockCategory", (req, res) => {
  res.send(category);
});

app.get("/stockCategoryContent", (req, res) => {
  const content = companies.get(req.query.filter);
  if (!content) {
    fetch(
      "https://www.twse.com.tw/zh/api/codeFilters?filter=" + req.query.filter
    )
      .then(result => {
        return result.json();
      })
      .then(result => {
        companies.set(req.query.filter, result);
        res.send(companies.get(req.query.filter));
      });
  } else {
    res.send(content);
  }
});

app.get("/stockHistoryInfoList", (req, res) => {
  const content = stockHistoryInfoList.get(req.query.companyId, req.query.date);
  if (!content) {
    fetch(
      `https://www.twse.com.tw/exchangeReport/FMSRFK?response=json&date=${req.query.date}&stockNo=${req.query.companyId}`
    )
      .then(result => {
        return result.json();
      })
      .then(result => {
        console.warn(result);
        stockHistoryInfoList.set(req.query.companyId, req.query.date, result);
        res.send(stockHistoryInfoList.get(req.query.companyId, req.query.date));
      });
  } else {
    res.send(content);
  }
});

// https://www.twse.com.tw/zh/api/codeFilters?filter=01
// https://www.twse.com.tw/zh/api/codeFilters?filter=23

app.listen(port, () => console.log(`Listening on port ${port}`));
