"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config({
  path: '.env'
});
var PORT = process.env.PORT || 3000;
_app["default"].listen(PORT);
console.log("server listen on port " + PORT);