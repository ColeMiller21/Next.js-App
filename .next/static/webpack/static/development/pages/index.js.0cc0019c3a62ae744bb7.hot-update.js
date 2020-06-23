webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/JobLists.js":
/*!********************************!*\
  !*** ./components/JobLists.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\JobLists.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function stripHtml(string) {
  var strippedString = string.replace(/(<([^>]+)>)/ig, "");
  return strippedString;
}

var JobLists = function JobLists(props) {
  return __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "list-group list-group-flush",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: styles.imageStyle,
    src: image,
    alt: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "col-xs-5",
    style: styles.listDiv,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, props.company), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 32
    }
  }, "Location:"), " ", location), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 32
    }
  }, "Title:"), " ", title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 32
    }
  }, "How to apply: "), stripHtml(how_to_apply)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 32
    }
  }, "Description:"), " ", stripHtml(description)))))));
};

_c = JobLists;
var styles = {
  imageStyle: {
    margin: "10px",
    height: 100,
    width: 100,
    verticalAlign: "baseline"
  },
  listDiv: {
    display: "inline-block"
  },
  title: {
    fontWeight: 600,
    fontSize: "1rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (JobLists);

var _c;

$RefreshReg$(_c, "JobLists");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYkxpc3RzLmpzIl0sIm5hbWVzIjpbInN0cmlwSHRtbCIsInN0cmluZyIsInN0cmlwcGVkU3RyaW5nIiwicmVwbGFjZSIsIkpvYkxpc3RzIiwicHJvcHMiLCJzdHlsZXMiLCJpbWFnZVN0eWxlIiwiaW1hZ2UiLCJsaXN0RGl2IiwiY29tcGFueSIsInRpdGxlIiwibG9jYXRpb24iLCJob3dfdG9fYXBwbHkiLCJkZXNjcmlwdGlvbiIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwidmVydGljYWxBbGlnbiIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN2QixNQUFJQyxjQUFjLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLGVBQWYsRUFBZ0MsRUFBaEMsQ0FBckI7QUFDQSxTQUFPRCxjQUFQO0FBRUg7O0FBQ0QsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLFNBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsVUFBbkI7QUFBK0IsT0FBRyxFQUFFQyxLQUFwQztBQUEyQyxPQUFHLEVBQUMsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUVGLE1BQU0sQ0FBQ0csT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0osS0FBSyxDQUFDSyxPQUFYLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVKLE1BQU0sQ0FBQ0ssS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxPQUFnREMsUUFBaEQsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRU4sTUFBTSxDQUFDSyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsT0FBNkNBLEtBQTdDLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVMLE1BQU0sQ0FBQ0ssS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBSCxFQUFvRFgsU0FBUyxDQUFDYSxZQUFELENBQTdELENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVQLE1BQU0sQ0FBQ0ssS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxPQUFtRFgsU0FBUyxDQUFDYyxXQUFELENBQTVELENBTEosQ0FGSixDQURKLENBREosQ0FESixDQURKO0FBbUJILENBcEJEOztLQUFNVixRO0FBc0JOLElBQU1FLE1BQU0sR0FBRztBQUNYQyxZQUFVLEVBQUU7QUFDUlEsVUFBTSxFQUFFLE1BREE7QUFFUkMsVUFBTSxFQUFFLEdBRkE7QUFHUkMsU0FBSyxFQUFFLEdBSEM7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBREQ7QUFPWFQsU0FBTyxFQUFFO0FBQ0xVLFdBQU8sRUFBRTtBQURKLEdBUEU7QUFVWFIsT0FBSyxFQUFFO0FBQ0hTLGNBQVUsRUFBRSxHQURUO0FBRUhDLFlBQVEsRUFBRTtBQUZQO0FBVkksQ0FBZjtBQWlCZWpCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wY2MwMDE5YzNhNjJhZTc0NGJiNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIHN0cmlwSHRtbChzdHJpbmcpIHtcclxuICAgIHZhciBzdHJpcHBlZFN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgXCJcIilcclxuICAgIHJldHVybiBzdHJpcHBlZFN0cmluZ1xyXG5cclxufVxyXG5jb25zdCBKb2JMaXN0cyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17c3R5bGVzLmltYWdlU3R5bGV9IHNyYz17aW1hZ2V9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy01XCIgc3R5bGU9e3N0eWxlcy5saXN0RGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57cHJvcHMuY29tcGFueX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+TG9jYXRpb246PC9zcGFuPiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+VGl0bGU6PC9zcGFuPiB7dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+SG93IHRvIGFwcGx5OiA8L3NwYW4+e3N0cmlwSHRtbChob3dfdG9fYXBwbHkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkRlc2NyaXB0aW9uOjwvc3Bhbj4ge3N0cmlwSHRtbChkZXNjcmlwdGlvbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBpbWFnZVN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgfSxcclxuICAgIGxpc3REaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIlxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9iTGlzdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==