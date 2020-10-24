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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/username/projects/liveaboard/components/layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var name = 'Liveaboard';

function NavigationBar(_ref) {
  var home = _ref.home;
  return __jsx("p", {
    className: home ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.p15 : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/posts/books",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 49
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 75
    }
  }, "Books")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/posts/channels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 95
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 124
    }
  }, "Channels")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/posts/communities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 147
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 179
    }
  }, "Communities")));
}

_c = NavigationBar;
var siteTitle = 'Liveaboard';
function Layout(_ref2) {
  _s();

  var children = _ref2.children,
      home = _ref2.home;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "description",
    content: "Liveaboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(NavigationBar, {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.heading2Xl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, name)) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(NavigationBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.colorInherit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, name))))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("ins", {
    className: "adsbygoogle",
    "data-ad-client": "ca-pub-4741787138820766",
    "data-ad-format": "auto",
    "data-ad-slot": "4085897749",
    "data-full-width-responsive": "true",
    style: {
      display: 'block'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "\u2190 Back to home"))));
}

_s(Layout, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c2 = Layout;

var _c, _c2;

$RefreshReg$(_c, "NavigationBar");
$RefreshReg$(_c2, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsibmFtZSIsIk5hdmlnYXRpb25CYXIiLCJob21lIiwidXRpbFN0eWxlcyIsInAxNSIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwidXNlRWZmZWN0IiwiYWRzYnlnb29nbGUiLCJ3aW5kb3ciLCJwdXNoIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGluZzJYbCIsImhlYWRpbmdMZyIsImNvbG9ySW5oZXJpdCIsImRpc3BsYXkiLCJiYWNrVG9Ib21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLFlBQWI7O0FBRUEsU0FBU0MsYUFBVCxPQUFpQztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMvQixTQUNFO0FBQUcsYUFBUyxFQUFFQSxJQUFJLEdBQUdDLCtEQUFVLENBQUNDLEdBQWQsR0FBb0IsSUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTFCLENBQTVDLE9BQTBGLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUE3QixDQUExRixPQUE4SSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLG9CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBaEMsQ0FBOUksQ0FERjtBQUdEOztLQUpRSCxhO0FBTUYsSUFBTUksU0FBUyxHQUFHLFlBQWxCO0FBRVEsU0FBU0MsTUFBVCxRQUFvQztBQUFBOztBQUFBLE1BQWxCQyxRQUFrQixTQUFsQkEsUUFBa0I7QUFBQSxNQUFSTCxJQUFRLFNBQVJBLElBQVE7QUFDakRNLHlEQUFTLENBQUMsWUFBTTtBQUNkLEtBQUNDLFdBQVcsR0FBR0MsTUFBTSxDQUFDRCxXQUFQLElBQXNCLEVBQXJDLEVBQXlDRSxJQUF6QyxDQUE4QyxFQUE5QztBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxTQUNFO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLFdBQU8sRUFBQyxZQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQWNFO0FBQVEsU0FBSyxNQUFiO0FBQWMsT0FBRyxFQUFDLGdFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERixFQWlCRTtBQUFRLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixJQUFJLEdBQ0gsbUVBTUUsTUFBQyxhQUFEO0FBQWUsUUFBSSxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRTtBQUFJLGFBQVMsRUFBRUMsK0RBQVUsQ0FBQ1ksVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q2YsSUFBdkMsQ0FQRixDQURHLEdBV0gsbUVBVUUsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQUksYUFBUyxFQUFFRywrREFBVSxDQUFDYSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRWIsK0RBQVUsQ0FBQ2MsWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q2pCLElBQXhDLENBREYsQ0FERixDQVhGLENBWkosQ0FqQkYsRUFnREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGFBRFo7QUFFRSxzQkFBZSx5QkFGakI7QUFHRSxzQkFBZSxNQUhqQjtBQUlFLG9CQUFhLFlBSmY7QUFLRSxrQ0FBMkIsTUFMN0I7QUFNRSxTQUFLLEVBQUU7QUFBRWtCLGFBQU8sRUFBRTtBQUFYLEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUdYLFFBVkgsQ0FoREYsRUE0REcsQ0FBQ0wsSUFBRCxJQUNDO0FBQUssYUFBUyxFQUFFVSx5REFBTSxDQUFDTyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsQ0E3REosQ0FERjtBQXNFRDs7R0ExRXVCYixNOztNQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzMDRkOTY2YzdhOTZkNmNjODgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbmFtZSA9ICdMaXZlYWJvYXJkJ1xuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKHsgaG9tZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHAgY2xhc3NOYW1lPXtob21lID8gdXRpbFN0eWxlcy5wMTUgOiBudWxsfT48TGluayBocmVmPVwiL3Bvc3RzL2Jvb2tzXCI+PGE+Qm9va3M8L2E+PC9MaW5rPiA8TGluayBocmVmPVwiL3Bvc3RzL2NoYW5uZWxzXCI+PGE+Q2hhbm5lbHM8L2E+PC9MaW5rPiA8TGluayBocmVmPVwiL3Bvc3RzL2NvbW11bml0aWVzXCI+PGE+Q29tbXVuaXRpZXM8L2E+PC9MaW5rPjwvcD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ0xpdmVhYm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBob21lIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYWRzYnlnb29nbGUgPSB3aW5kb3cuYWRzYnlnb29nbGUgfHwgW10pLnB1c2goe30pXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICB7Lyo8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+Ki99XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiTGl2ZWFib2FyZFwiXG4gICAgICAgIC8+XG4gICAgICAgIHsvKjxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vb2ctaW1hZ2Uubm93LnNoLyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgc2l0ZVRpdGxlXG4gICAgICAgICAgKX0ucG5nP3RoZW1lPWxpZ2h0Jm1kPTAmZm9udFNpemU9NzVweCZpbWFnZXM9aHR0cHMlM0ElMkYlMkZhc3NldHMuemVpdC5jbyUyRmltYWdlJTJGdXBsb2FkJTJGZnJvbnQlMkZhc3NldHMlMkZkZXNpZ24lMkZuZXh0anMtYmxhY2stbG9nby5zdmdgfVxuICAgICAgICAvPiovfVxuICAgICAgICB7Lyo8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+Ki99XG4gICAgICAgIHsvKjxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+Ki99XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAge2hvbWUgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKjxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLmpwZ1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxuICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgaG9tZSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPiovfVxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT57bmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aW5zXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWRzYnlnb29nbGVcIlxuICAgICAgICAgIGRhdGEtYWQtY2xpZW50PVwiY2EtcHViLTQ3NDE3ODcxMzg4MjA3NjZcIlxuICAgICAgICAgIGRhdGEtYWQtZm9ybWF0PVwiYXV0b1wiXG4gICAgICAgICAgZGF0YS1hZC1zbG90PVwiNDA4NTg5Nzc0OVwiXG4gICAgICAgICAgZGF0YS1mdWxsLXdpZHRoLXJlc3BvbnNpdmU9XCJ0cnVlXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgICAgID5cbiAgICAgICAgPC9pbnM+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIHshaG9tZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RvSG9tZX0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=