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
    var _this = this;

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      console.log('HOC log');
      return function () {};
    }, []);
    var onClickHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
      console.log('onclick, in HOC log: ', _this);
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "1"), __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onClick: function onClick() {
        return onClickHandler();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })));
  };
}

/***/ })

})
//# sourceMappingURL=magic.js.eeff9d1ca844218674cb.hot-update.js.map