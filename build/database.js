"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config({
  path: '.env'
});
var MONGODB_URI = process.env.MONGODB_URI;
var connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
_mongoose["default"].set("strictQuery", false);
_mongoose["default"].connect(MONGODB_URI, connectionOptions).then(function (db) {
  return console.log("Db is connected");
})["catch"](function (error) {
  return console.log(error);
});