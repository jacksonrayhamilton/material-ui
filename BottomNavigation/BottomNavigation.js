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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TODOs:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Support custom highlight colors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Support custom highlight color per selected item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Support badged icons
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Support showing label only for selected item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Add constraints for number of children provided
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Enforce appropriate label length and avoid overflows/breaks
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - V2: Support custom background color on bar depending on selected item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - V2: Support expanding width of selected item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - V2: Add scrolling behaviours (hiding)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - V2: Determine how to handle larger displays (menu on left)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme;
  var bottomNavigation = _context$muiTheme.bottomNavigation;
  var zIndex = _context$muiTheme.zIndex;


  var styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.bottomNavigation,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: bottomNavigation.color,
      height: bottomNavigation.height
    },
    item: {
      flex: '1'
    }
  };

  return styles;
}

var BottomNavigation = function (_React$Component) {
  _inherits(BottomNavigation, _React$Component);

  function BottomNavigation() {
    _classCallCheck(this, BottomNavigation);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BottomNavigation).apply(this, arguments));
  }

  _createClass(BottomNavigation, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var style = _props.style;
      var selectedIndex = _props.selectedIndex;

      var other = _objectWithoutProperties(_props, ['className', 'children', 'style', 'selectedIndex']);

      var styles = getStyles(this.props, this.context);

      var preparedChildren = _react2.default.Children.map(children, function (child, index) {
        return _react2.default.cloneElement(child, {
          style: (0, _simpleAssign2.default)({}, styles.item, child.props.style),
          selected: index === selectedIndex
        });
      });

      return _react2.default.createElement(
        'div',
        _extends({}, other, {
          className: className,
          style: (0, _simpleAssign2.default)({}, styles.root, style)
        }),
        preparedChildren
      );
    }
  }]);

  return BottomNavigation;
}(_react2.default.Component);

BottomNavigation.muiName = 'BottomNavigation';
BottomNavigation.propTypes = {
  /**
   * The `BottomNavigationItem`s to populate the `BottomNavigation` with.
   */
  children: _react2.default.PropTypes.node,

  /**
   * Applied to the bottom navigation's root element.
   */
  className: _react2.default.PropTypes.string,

  /**
   * The index of the currently selected navigation item.
   */
  selectedIndex: _react2.default.PropTypes.number,

  /**
   * Override the inline-styles of the root element.
   */
  style: _react2.default.PropTypes.object
};
BottomNavigation.contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};
exports.default = BottomNavigation;