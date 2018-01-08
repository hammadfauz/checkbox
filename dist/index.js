(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["CheckBox"] = factory(require("react"));
	else
		root["CheckBox"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _palette = __webpack_require__(2);

var _palette2 = _interopRequireDefault(_palette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_React$Component) {
  _inherits(CheckBox, _React$Component);

  function CheckBox(props) {
    _classCallCheck(this, CheckBox);

    var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  _createClass(CheckBox, [{
    key: 'handleToggle',
    value: function handleToggle() {
      if (typeof this.props.onToggle === 'function') {
        this.props.onToggle(this.props.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var mainColor = this.props.blue ? _palette2.default.blue : _palette2.default.yellow;
      var styles = {
        main: {
          textAlign: 'left',
          fontSize: this.props.small ? '11pt' : '14pt'
        },
        option: {
          position: 'relative',
          marginLeft: '30px',
          cursor: 'pointer'
        },
        check: {
          position: 'absolute',
          left: '-25px',
          top: this.props.small ? '3px' : '5px',
          width: this.props.small ? '10px' : '15px',
          height: this.props.small ? '10px' : '15px',
          transform: this.props.value ? 'rotate(45deg) scaleX(0.5)' : 'rotate(0deg) scaleX(1)',
          borderTop: this.props.value ? 'none' : '2px solid ' + mainColor,
          borderRight: this.props.value ? '4px solid ' + mainColor : '2px solid ' + mainColor,
          borderBottom: '2px solid ' + mainColor,
          borderLeft: this.props.value ? 'none' : '2px solid ' + mainColor,
          transition: 'all 300ms ease-in-out'
        }
      };
      return _react2.default.createElement(
        'div',
        { style: styles.main },
        _react2.default.createElement(
          'div',
          { style: styles.option, onClick: this.handleToggle },
          _react2.default.createElement('div', { style: styles.check }),
          this.props.label
        )
      );
    }
  }]);

  return CheckBox;
}(_react2.default.Component);

;

module.exports = CheckBox;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var palette = {
  red: '#ff5353',
  redDark: '#e43e3e',
  errorOrange: '#f7814c',
  blue: '#344164',
  blueDark: '#283760',
  blueLight: '#526490',
  blueDarkTransparent: 'rgba(40, 55, 96, 0.83)',
  linkedInBlueDark: '#0077B5',
  linkedInBlueLight: '#54A4CD',
  linkedInBlueHover: '#006BA3',
  green: '#2EBE71',
  greenDark: '#29AC66',
  greenLight: '#9FE6BA',
  yellow: '#FFB200',
  yellowDark: '#E9A300',
  yellowLight: '#FCC700',
  whiteReal: '#FFFFFF',
  white: '#FAFAF9',
  whiteDarker: '#F6F6F6',
  grey: '#3F454A',
  greyTransparent: 'rgba(45,51,56,0.95)',
  greyMedium: '#797979',
  greyLight: '#AEAEAE',
  greyLightTransparent: 'rgba(174, 174, 174, 0.58)',
  black: '#000000',
  realWhite: '#FFFFFF'
};

module.exports = palette;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map