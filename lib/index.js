'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _suiLinkItem = require('./sui-link-item');

var _suiLinkItem2 = _interopRequireDefault(_suiLinkItem);

var _suiLinkList = require('./sui-link-list');

var _suiLinkList2 = _interopRequireDefault(_suiLinkList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { Link: _suiLinkItem2.default, LinkList: _suiLinkList2.default };