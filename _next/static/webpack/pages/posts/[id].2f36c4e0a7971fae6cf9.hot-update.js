webpackHotUpdate_N_E("pages/posts/[id]",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/username/projects/liveaboard/components/layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var name = 'LiveaboardSource';

function NavigationBar(_ref) {
  var home = _ref.home;
  return __jsx("p", {
    className: home ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.p15 : null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/posts/books",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 49
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 75
    }
  }, "Books")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/posts/channels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 95
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 124
    }
  }, "Channels")), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/posts/communities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 147
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 179
    }
  }, "Communities")));
}

_c = NavigationBar;
var siteTitle = 'LiveaboardSource';
function Layout(_ref2) {
  _s();

  var children = _ref2.children,
      home = _ref2.home;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log(error);
    }
  }, []);
  return __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "description",
    content: "LiveaboardSource",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(NavigationBar, {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.heading2Xl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, name)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(NavigationBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingLg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.colorInherit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, name))))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("script", {
    async: true,
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), children), !home && __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backToHome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsibmFtZSIsIk5hdmlnYXRpb25CYXIiLCJob21lIiwidXRpbFN0eWxlcyIsInAxNSIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRzYnlnb29nbGUiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaGVhZGVyIiwiaGVhZGluZzJYbCIsImhlYWRpbmdMZyIsImNvbG9ySW5oZXJpdCIsImRpc3BsYXkiLCJiYWNrVG9Ib21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxrQkFBYjs7QUFFQSxTQUFTQyxhQUFULE9BQWlDO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQy9CLFNBQ0U7QUFBRyxhQUFTLEVBQUVBLElBQUksR0FBR0MsK0RBQVUsQ0FBQ0MsR0FBZCxHQUFvQixJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUIsQ0FBNUMsT0FBMEYsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTdCLENBQTFGLE9BQThJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFoQyxDQUE5SSxDQURGO0FBR0Q7O0tBSlFILGE7QUFNRixJQUFNSSxTQUFTLEdBQUcsa0JBQWxCO0FBRVEsU0FBU0MsTUFBVCxRQUFvQztBQUFBOztBQUFBLE1BQWxCQyxRQUFrQixTQUFsQkEsUUFBa0I7QUFBQSxNQUFSTCxJQUFRLFNBQVJBLElBQVE7QUFDakRNLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUk7QUFDRixPQUFDQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJELE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQixFQUE1QyxFQUFnREMsSUFBaEQsQ0FBcUQsRUFBckQ7QUFDRCxLQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBRUcseURBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxXQUFPLEVBQUMsa0JBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFnQkU7QUFBUSxhQUFTLEVBQUVELHlEQUFNLENBQUNFLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2YsSUFBSSxHQUNILG1FQU1FLE1BQUMsYUFBRDtBQUFlLFFBQUksTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBT0U7QUFBSSxhQUFTLEVBQUVDLCtEQUFVLENBQUNlLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNsQixJQUF2QyxDQVBGLENBREcsR0FXSCxtRUFVRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBSSxhQUFTLEVBQUVHLCtEQUFVLENBQUNnQixTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRWhCLCtEQUFVLENBQUNpQixZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDcEIsSUFBeEMsQ0FERixDQURGLENBWEYsQ0FaSixDQWhCRixFQStDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsYUFEWjtBQUVFLHNCQUFlLHlCQUZqQjtBQUdFLHNCQUFlLE1BSGpCO0FBSUUsb0JBQWEsWUFKZjtBQUtFLGtDQUEyQixNQUw3QjtBQU1FLFNBQUssRUFBRTtBQUFFcUIsYUFBTyxFQUFFO0FBQVgsS0FOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTRTtBQUNFLFNBQUssTUFEUDtBQUVFLE9BQUcsRUFBQyxnRUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFhR2QsUUFiSCxDQS9DRixFQThERyxDQUFDTCxJQUFELElBQ0M7QUFBSyxhQUFTLEVBQUVhLHlEQUFNLENBQUNPLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FERixDQS9ESixDQURGO0FBd0VEOztHQWhGdUJoQixNOztNQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uMmYzNmM0ZTBhNzk3MWZhZTZjZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcblxuY29uc3QgbmFtZSA9ICdMaXZlYWJvYXJkU291cmNlJ1xuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uQmFyKHsgaG9tZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHAgY2xhc3NOYW1lPXtob21lID8gdXRpbFN0eWxlcy5wMTUgOiBudWxsfT48TGluayBocmVmPVwiL3Bvc3RzL2Jvb2tzXCI+PGE+Qm9va3M8L2E+PC9MaW5rPiA8TGluayBocmVmPVwiL3Bvc3RzL2NoYW5uZWxzXCI+PGE+Q2hhbm5lbHM8L2E+PC9MaW5rPiA8TGluayBocmVmPVwiL3Bvc3RzL2NvbW11bml0aWVzXCI+PGE+Q29tbXVuaXRpZXM8L2E+PC9MaW5rPjwvcD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ0xpdmVhYm9hcmRTb3VyY2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBob21lIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgKHdpbmRvdy5hZHNieWdvb2dsZSA9IHdpbmRvdy5hZHNieWdvb2dsZSB8fCBbXSkucHVzaCh7fSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgey8qPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiovfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkxpdmVhYm9hcmRTb3VyY2VcIlxuICAgICAgICAvPlxuICAgICAgICB7Lyo8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL29nLWltYWdlLm5vdy5zaC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIHNpdGVUaXRsZVxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnplaXQuY28lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cbiAgICAgICAgLz4qL31cbiAgICAgICAgey8qPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPiovfVxuICAgICAgICB7Lyo8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPiovfVxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICB7aG9tZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgey8qPGltZ1xuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySG9tZUltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciBob21lIC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmcyWGx9PntuYW1lfTwvaDE+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySW1hZ2V9ICR7dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+Ki99XG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciAvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jb2xvckluaGVyaXR9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxpbnNcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZHNieWdvb2dsZVwiXG4gICAgICAgICAgZGF0YS1hZC1jbGllbnQ9XCJjYS1wdWItNDc0MTc4NzEzODgyMDc2NlwiXG4gICAgICAgICAgZGF0YS1hZC1mb3JtYXQ9XCJhdXRvXCJcbiAgICAgICAgICBkYXRhLWFkLXNsb3Q9XCI0MDg1ODk3NzQ5XCJcbiAgICAgICAgICBkYXRhLWZ1bGwtd2lkdGgtcmVzcG9uc2l2ZT1cInRydWVcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanNcIlxuICAgICAgICAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICB7IWhvbWUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tUb0hvbWV9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9