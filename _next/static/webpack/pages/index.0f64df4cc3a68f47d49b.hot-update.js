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





var name = 'Liveaboard';

var AdBanner = function AdBanner() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);
  return __jsx("ins", {
    className: "adsbygoogle adbanner-customize",
    style: {
      display: "block"
    },
    "data-ad-client": "ca-pub-4741787138820766",
    "data-ad-slot": "4085897749",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  });
};

_s(AdBanner, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = AdBanner;

function NavigationBar(_ref) {
  var home = _ref.home;
  return __jsx("p", {
    className: home ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.p15 : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/books",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 49
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 75
    }
  }, "Books")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/channels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 95
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 124
    }
  }, "Channels")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/communities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 147
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "description",
    content: "Liveaboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(NavigationBar, {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.heading2Xl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, name)) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(NavigationBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingLg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.colorInherit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, name))))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(AdBanner, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "\u2190 Back to home"))));
}
_c3 = Layout;

var _c, _c2, _c3;

$RefreshReg$(_c, "AdBanner");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsibmFtZSIsIkFkQmFubmVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRzYnlnb29nbGUiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsIk5hdmlnYXRpb25CYXIiLCJob21lIiwidXRpbFN0eWxlcyIsInAxNSIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGluZzJYbCIsImhlYWRpbmdMZyIsImNvbG9ySW5oZXJpdCIsImJhY2tUb0hvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLFlBQWI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTtBQUNGLE9BQUNDLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQkQsTUFBTSxDQUFDQyxXQUFQLElBQXNCLEVBQTVDLEVBQWdEQyxJQUFoRCxDQUFxRCxFQUFyRDtBQUNELEtBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxTQUNFO0FBQ0UsYUFBUyxFQUFDLGdDQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xHLGFBQU8sRUFBRTtBQURKLEtBRlQ7QUFLRSxzQkFBZSx5QkFMakI7QUFNRSxvQkFBYSxZQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVVELENBbkJEOztHQUFNUixROztLQUFBQSxROztBQXFCTixTQUFTUyxhQUFULE9BQWlDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFR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MGY2NGRmNGNjM2E2OGY0N2Q0OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5cbmNvbnN0IG5hbWUgPSAnTGl2ZWFib2FyZCdcblxuY29uc3QgQWRCYW5uZXIgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICh3aW5kb3cuYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5zXG4gICAgICBjbGFzc05hbWU9XCJhZHNieWdvb2dsZSBhZGJhbm5lci1jdXN0b21pemVcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgICB9fVxuICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNDc0MTc4NzEzODgyMDc2NlwiXG4gICAgICBkYXRhLWFkLXNsb3Q9XCI0MDg1ODk3NzQ5XCJcbiAgICAvPlxuICApO1xufTtcblxuZnVuY3Rpb24gTmF2aWdhdGlvbkJhcih7IGhvbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxwIGNsYXNzTmFtZT17aG9tZSA/IHV0aWxTdHlsZXMucDE1IDogbnVsbH0+PExpbmsgaHJlZj1cIi9wb3N0cy9ib29rc1wiPjxhPkJvb2tzPC9hPjwvTGluaz4gPExpbmsgaHJlZj1cIi9wb3N0cy9jaGFubmVsc1wiPjxhPkNoYW5uZWxzPC9hPjwvTGluaz4gPExpbmsgaHJlZj1cIi9wb3N0cy9jb21tdW5pdGllc1wiPjxhPkNvbW11bml0aWVzPC9hPjwvTGluaz48L3A+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdMaXZlYWJvYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKjxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4qL31cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJMaXZlYWJvYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICAgey8qPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9vZy1pbWFnZS5ub3cuc2gvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBzaXRlVGl0bGVcbiAgICAgICAgICApfS5wbmc/dGhlbWU9bGlnaHQmbWQ9MCZmb250U2l6ZT03NXB4JmltYWdlcz1odHRwcyUzQSUyRiUyRmFzc2V0cy56ZWl0LmNvJTJGaW1hZ2UlMkZ1cGxvYWQlMkZmcm9udCUyRmFzc2V0cyUyRmRlc2lnbiUyRm5leHRqcy1ibGFjay1sb2dvLnN2Z2B9XG4gICAgICAgIC8+Ki99XG4gICAgICAgIHsvKjxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz4qL31cbiAgICAgICAgey8qPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz4qL31cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAge2hvbWUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKjxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLmpwZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxuICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgaG9tZSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPiovfVxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8QWRCYW5uZXIgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgeyFob21lICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==