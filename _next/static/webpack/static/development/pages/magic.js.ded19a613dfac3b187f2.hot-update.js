webpackHotUpdate("static/development/pages/magic.js",{

/***/ "./components/proxyHOC.js":
/*!********************************!*\
  !*** ./components/proxyHOC.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return proxyHOC; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/vzt7/pro/vvzt.github.io/components/proxyHOC.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function proxyHOC(WrappedComponent) {
  return function (props) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      console.log('HOC log');
      return function () {};
    }, []);
    return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  };
}

/***/ }),

/***/ "./components/test.js":
/*!****************************!*\
  !*** ./components/test.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _proxyHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxyHOC */ "./components/proxyHOC.js");
var _jsxFileName = "/Users/vzt7/pro/vvzt.github.io/components/test.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var test = function test() {
  var s = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (store) {
    return store;
  });
  console.log(s);
  return __jsx("div", {
    id: "world",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_proxyHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(test));

/***/ })

})
//# sourceMappingURL=magic.js.ded19a613dfac3b187f2.hot-update.js.map