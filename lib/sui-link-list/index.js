'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _suiLinkItem = require('../sui-link-item');

var _suiLinkItem2 = _interopRequireDefault(_suiLinkItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkList = function (_Component) {
  (0, _inherits3.default)(LinkList, _Component);

  function LinkList() {
    (0, _classCallCheck3.default)(this, LinkList);
    return (0, _possibleConstructorReturn3.default)(this, (LinkList.__proto__ || (0, _getPrototypeOf2.default)(LinkList)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classListItem = (0, _classnames2.default)('sui-LinkList-listItem', {
        'sui-ListItem--inline': this.props.displayInline
      });

      return _react2.default.createElement(
        'ul',
        { className: 'sui-LinkList' },
        this.props.list.map(function (item, index) {
          return _react2.default.createElement(
            'li',
            { className: classListItem, key: index },
            _react2.default.createElement(_suiLinkItem2.default, (0, _extends3.default)({}, item, { useReactRouterLinks: _this2.props.useReactRouterLinks }))
          );
        })
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        displayInline: _react.PropTypes.bool,
        list: _react.PropTypes.array,
        useReactRouterLinks: _react.PropTypes.bool
      };
    }
  }]);
  return LinkList;
}(_react.Component);

exports.default = LinkList;