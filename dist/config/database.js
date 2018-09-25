'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConnection = exports.tokenExpiry = exports.secret = exports.db = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = 'mongodb://localhost:27017/flair';
var secret = 'my_secret_key';
var tokenExpiry = 86400;

// Database connection setup
var dbConnection = function dbConnection(next) {
  _mongoose2.default.set('useCreateIndex', true);
  _mongoose2.default.connect(db, { useNewUrlParser: true }, function (err) {
    if (err) next('database connection problem - ensure MongoDB is turned on or not ! : ' + err, err);else next('\nconnected to database.\n\n\turi:\t' + db);
  });
};

exports.db = db;
exports.secret = secret;
exports.tokenExpiry = tokenExpiry;
exports.dbConnection = dbConnection;