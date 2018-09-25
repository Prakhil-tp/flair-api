'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _database = require('./config/database');

var _CORS = require('./config/CORS');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use((0, _morgan2.default)('dev'));
app.use(_CORS.cors);

(0, _database.dbConnection)(function (msg, err) {
  if (err) console.error(msg);else console.log(msg);
});

var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('\n You can view api in the browser\n\t \n    Local:\t\thttp://localhost:' + PORT + '\t\n    On Your Network:\thttp://192.168.0.126:' + PORT);
});