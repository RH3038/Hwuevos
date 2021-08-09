"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var addAccount = new index_1.AddAccount("Retirement", 1000);
var account = new index_1.Account(addAccount);
console.log(account);
