'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _Link = require('react-router/lib/Link');

var _Link2 = _interopRequireDefault(_Link);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkItem = function (_Component) {
  (0, _inherits3.default)(LinkItem, _Component);

  function LinkItem() {
    (0, _classCallCheck3.default)(this, LinkItem);
    return (0, _possibleConstructorReturn3.default)(this, (LinkItem.__proto__ || (0, _getPrototypeOf2.default)(LinkItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinkItem, [{
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)('sui-Link', this.props.className);

      var _props = this.props,
          disabled = _props.disabled,
          handleClick = _props.handleClick,
          icon = _props.icon,
          literal = _props.literal,
          rel = _props.rel,
          target = _props.target,
          title = _props.title,
          useReactRouterLinks = _props.useReactRouterLinks,
          url = _props.url;


      if (disabled) {
        return _react2.default.createElement(
          'span',
          { className: className,
            onClick: handleClick,
            title: title },
          icon,
          literal
        );
      }

      if (useReactRouterLinks) {
        return _react2.default.createElement(
          _Link2.default,
          { className: className,
            target: target,
            title: title,
            to: url,
            onClick: handleClick,
            rel: rel },
          icon,
          literal
        );
      }

      return _react2.default.createElement(
        'a',
        { className: className,
          href: url,
          title: title,
          target: target,
          onClick: handleClick,
          rel: rel },
        icon,
        literal
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        disabled: _react.PropTypes.bool,
        handleClick: _react.PropTypes.func,
        icon: _react.PropTypes.element,
        literal: _react.PropTypes.string,
        rel: _react.PropTypes.string,
        target: _react.PropTypes.string,
        title: _react.PropTypes.string,
        url: _react.PropTypes.string.isRequired,
        useReactRouterLinks: _react.PropTypes.bool
      };
    }
  }]);
  return LinkItem;
}(_react.Component);

exports.default = LinkItem;