webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/home/username/projects/liveaboard/components/layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // To do: Remove React import



var name = 'Liveaboard';

var Ad = function Ad() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []); // To do: Organize ins element
  // To do: Terminate ins element with />

  return __jsx("ins", {
    "class": "adsbygoogle",
    style: "display:block",
    "data-ad-client": "ca-pub-4741787138820766",
    "data-ad-slot": "4085897749",
    "data-ad-format": "auto",
    "data-full-width-responsive": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  });
};

_s(Ad, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Ad;

function NavigationBar(_ref) {
  var home = _ref.home;
  return __jsx("p", {
    className: home ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.p15 : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/books",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 49
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 75
    }
  }, "Books")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/channels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 95
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 124
    }
  }, "Channels")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/communities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 147
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 179
    }
  }, "Communities")));
}

_c2 = NavigationBar;
var siteTitle = 'Liveaboard';
function Layout(_ref2) {
  var children = _ref2.children,
      home = _ref2.home;
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "description",
    content: "Liveaboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(NavigationBar, {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.heading2Xl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, name)) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(NavigationBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingLg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.colorInherit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, name))))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx(Ad, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "\u2190 Back to home"))));
}
_c3 = Layout;

var _c, _c2, _c3;

$RefreshReg$(_c, "Ad");
$RefreshReg$(_c2, "NavigationBar");
$RefreshReg$(_c3, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsibmFtZSIsIkFkIiwidXNlRWZmZWN0IiwiYWRzYnlnb29nbGUiLCJ3aW5kb3ciLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiTmF2aWdhdGlvbkJhciIsImhvbWUiLCJ1dGlsU3R5bGVzIiwicDE1Iiwic2l0ZVRpdGxlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJzdHlsZXMiLCJjb250YWluZXIiLCJoZWFkZXIiLCJoZWFkaW5nMlhsIiwiaGVhZGluZ0xnIiwiY29sb3JJbmhlcml0IiwiYmFja1RvSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FDeUM7O0FBRXpDO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsWUFBYjs7QUFFQSxJQUFNQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxHQUFNO0FBQUE7O0FBQ2ZDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk7QUFDRixPQUFDQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0QsV0FBUCxJQUFzQixFQUFyQyxFQUF5Q0UsSUFBekMsQ0FBOEMsRUFBOUM7QUFDRCxLQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFULENBRGUsQ0FRZjtBQUNBOztBQUNBLFNBQ0U7QUFBSyxhQUFNLGFBQVg7QUFDRSxTQUFLLEVBQUMsZUFEUjtBQUVFLHNCQUFlLHlCQUZqQjtBQUdFLG9CQUFhLFlBSGY7QUFJRSxzQkFBZSxNQUpqQjtBQUtFLGtDQUEyQixNQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFRRCxDQWxCRDs7R0FBTUwsRTs7S0FBQUEsRTs7QUFvQk4sU0FBU1EsYUFBVCxPQUFpQztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtB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MjI2NTFmMGY2YTQxN2NjMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCcgLy8gVG8gZG86IFJlbW92ZSBSZWFjdCBpbXBvcnRcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5cbmNvbnN0IG5hbWUgPSAnTGl2ZWFib2FyZCdcblxuY29uc3QgQWQgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIChhZHNieWdvb2dsZSA9IHdpbmRvdy5hZHNieWdvb2dsZSB8fCBbXSkucHVzaCh7fSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9LCBbXSlcbiAgLy8gVG8gZG86IE9yZ2FuaXplIGlucyBlbGVtZW50XG4gIC8vIFRvIGRvOiBUZXJtaW5hdGUgaW5zIGVsZW1lbnQgd2l0aCAvPlxuICByZXR1cm4gKFxuICAgIDxpbnMgY2xhc3M9XCJhZHNieWdvb2dsZVwiXG4gICAgICBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIlxuICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNDc0MTc4NzEzODgyMDc2NlwiXG4gICAgICBkYXRhLWFkLXNsb3Q9XCI0MDg1ODk3NzQ5XCJcbiAgICAgIGRhdGEtYWQtZm9ybWF0PVwiYXV0b1wiXG4gICAgICBkYXRhLWZ1bGwtd2lkdGgtcmVzcG9uc2l2ZT1cInRydWVcIj48L2lucz5cbiAgKVxufVxuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKHsgaG9tZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHAgY2xhc3NOYW1lPXtob21lID8gdXRpbFN0eWxlcy5wMTUgOiBudWxsfT48TGluayBocmVmPVwiL3Bvc3RzL2Jvb2tzXCI+PGE+Qm9va3M8L2E+PC9MaW5rPiA8TGluayBocmVmPVwiL3Bvc3RzL2NoYW5uZWxzXCI+PGE+Q2hhbm5lbHM8L2E+PC9MaW5rPiA8TGluayBocmVmPVwiL3Bvc3RzL2NvbW11bml0aWVzXCI+PGE+Q29tbXVuaXRpZXM8L2E+PC9MaW5rPjwvcD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ0xpdmVhYm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBob21lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgey8qPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiovfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkxpdmVhYm9hcmRcIlxuICAgICAgICAvPlxuICAgICAgICB7Lyo8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL29nLWltYWdlLm5vdy5zaC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIHNpdGVUaXRsZVxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnplaXQuY28lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cbiAgICAgICAgLz4qL31cbiAgICAgICAgey8qPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPiovfVxuICAgICAgICB7Lyo8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPiovfVxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICB7aG9tZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgey8qPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySG9tZUltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciBob21lIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmcyWGx9PntuYW1lfTwvaDE+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySW1hZ2V9ICR7dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+Ki99XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciAvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb2xvckluaGVyaXR9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxBZCAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICB7IWhvbWUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tUb0hvbWV9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9