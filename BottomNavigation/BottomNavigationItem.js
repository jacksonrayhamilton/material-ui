'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _EnhancedButton = require('../internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context, state) {
  var selected = props.selected;
  var muiTheme = context.muiTheme;
  var bottomNavigation = muiTheme.bottomNavigation;


  var color = selected ? bottomNavigation.selectedColor : bottomNavigation.unselectedColor;
  var styles = {
    root: {
      transition: 'all 0.3s',
      paddingTop: selected ? '6px' : '8px',
      paddingBottom: '10px',
      paddingLeft: '12px',
      paddingRight: '12px',
      minWidth: '80px',
      maxWidth: '168px'
    },
    label: {
      fontSize: selected ? bottomNavigation.selectedFontSize : bottomNavigation.unselectedFontSize,
      transition: 'all 0.3s',
      color: color
    },
    icon: {
      display: 'block'
    },
    iconColor: color
  };

  return styles;
}

var BottomNavigationItem = function (_React$Component) {
  _inherits(BottomNavigationItem, _React$Component);

  function BottomNavigationItem() {
    _classCallCheck(this, BottomNavigationItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BottomNavigationItem).apply(this, arguments));
  }

  _createClass(BottomNavigationItem, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var label = _props.label;
      var icon = _props.icon;
      var style = _props.style;

      var other = _objectWithoutProperties(_props, ['label', 'icon', 'style']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var styledIcon = _react2.default.cloneElement(icon, {
        style: (0, _simpleAssign2.default)({}, icon.style, styles.icon),
        color: styles.iconColor
      });

      return _react2.default.createElement(
        _EnhancedButton2.default,
        _extends({}, other, {
          style: (0, _simpleAssign2.default)({}, styles.root, style)
        }),
        styledIcon,
        _react2.default.createElement(
          'div',
          { style: styles.label },
          label
        )
      );
    }
  }]);

  return BottomNavigationItem;
}(_react2.default.Component);

BottomNavigationItem.muiName = 'BottomNavigationItem';
BottomNavigationItem.propTypes = {
  /**
   * Set the label describing the view for this item.
   */
  label: _react2.default.PropTypes.string,

  /**
   * Set the icon representing the view for this item.
   */
  icon: _react2.default.PropTypes.node,

  /**
   * Override the inline-styles of the root element.
   */
  style: _react2.default.PropTypes.object
};
BottomNavigationItem.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};
exports.default = BottomNavigationItem;