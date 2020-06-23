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

var JobList = function JobList() {
  var company = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "No company provided";
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "No title provided";
  var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "No image provided";
  var location = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "no location provided";
  var how_to_apply = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Check description on how to apply";
  var description = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "no description provided";
  return __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: styles.imageStyle,
    src: image,
    alt: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "col-xs-5",
    style: styles.listDiv,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, company), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 24
    }
  }, "Location:"), " ", location), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 24
    }
  }, "Title:"), " ", title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 24
    }
  }, "How to apply: "), stripHtml(how_to_apply)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 24
    }
  }, "Description:"), " ", stripHtml(description)))));
};

_c = JobList;
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
/* harmony default export */ __webpack_exports__["default"] = (JobList);

var _c;

$RefreshReg$(_c, "JobList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYkxpc3RzLmpzIl0sIm5hbWVzIjpbInN0cmlwSHRtbCIsInN0cmluZyIsInN0cmlwcGVkU3RyaW5nIiwicmVwbGFjZSIsIkpvYkxpc3QiLCJjb21wYW55IiwidGl0bGUiLCJpbWFnZSIsImxvY2F0aW9uIiwiaG93X3RvX2FwcGx5IiwiZGVzY3JpcHRpb24iLCJzdHlsZXMiLCJpbWFnZVN0eWxlIiwibGlzdERpdiIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwidmVydGljYWxBbGlnbiIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN2QixNQUFJQyxjQUFjLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLGVBQWYsRUFBZ0MsRUFBaEMsQ0FBckI7QUFDQSxTQUFPRCxjQUFQO0FBQ0g7O0FBRUQsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FFb0Y7QUFBQSxNQUZuRkMsT0FFbUYsdUVBRnpFLHFCQUV5RTtBQUFBLE1BRmxEQyxLQUVrRCx1RUFGMUMsbUJBRTBDO0FBQUEsTUFEaEdDLEtBQ2dHLHVFQUR4RixtQkFDd0Y7QUFBQSxNQURuRUMsUUFDbUUsdUVBRHhELHNCQUN3RDtBQUFBLE1BQWhHQyxZQUFnRyx1RUFBakYsbUNBQWlGO0FBQUEsTUFBNUNDLFdBQTRDLHVFQUE5Qix5QkFBOEI7QUFDaEcsU0FFSTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFQyxNQUFNLENBQUNDLFVBQW5CO0FBQStCLE9BQUcsRUFBRUwsS0FBcEM7QUFBMkMsT0FBRyxFQUFDLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFSSxNQUFNLENBQUNFLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLE9BQUwsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRU0sTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILE9BQWdERSxRQUFoRCxDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFRyxNQUFNLENBQUNMLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxPQUE2Q0EsS0FBN0MsQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRUssTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFILEVBQW9ETixTQUFTLENBQUNTLFlBQUQsQ0FBN0QsQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRUUsTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILE9BQW1ETixTQUFTLENBQUNVLFdBQUQsQ0FBNUQsQ0FMSixDQUZKLENBREosQ0FGSjtBQWVILENBbEJEOztLQUFNTixPO0FBb0JOLElBQU1PLE1BQU0sR0FBRztBQUNYQyxZQUFVLEVBQUU7QUFDUkUsVUFBTSxFQUFFLE1BREE7QUFFUkMsVUFBTSxFQUFFLEdBRkE7QUFHUkMsU0FBSyxFQUFFLEdBSEM7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBREQ7QUFPWEosU0FBTyxFQUFFO0FBQ0xLLFdBQU8sRUFBRTtBQURKLEdBUEU7QUFVWFosT0FBSyxFQUFFO0FBQ0hhLGNBQVUsRUFBRSxHQURUO0FBRUhDLFlBQVEsRUFBRTtBQUZQO0FBVkksQ0FBZjtBQWlCZWhCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yMGQ0MzExYTZiYzBmNTJmZjc3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIHN0cmlwSHRtbChzdHJpbmcpIHtcclxuICAgIHZhciBzdHJpcHBlZFN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgXCJcIilcclxuICAgIHJldHVybiBzdHJpcHBlZFN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBKb2JMaXN0ID0gKGNvbXBhbnkgPSBcIk5vIGNvbXBhbnkgcHJvdmlkZWRcIiwgdGl0bGUgPSBcIk5vIHRpdGxlIHByb3ZpZGVkXCIsXHJcbiAgICBpbWFnZSA9IFwiTm8gaW1hZ2UgcHJvdmlkZWRcIiwgbG9jYXRpb24gPSBcIm5vIGxvY2F0aW9uIHByb3ZpZGVkXCIsXHJcbiAgICBob3dfdG9fYXBwbHkgPSBcIkNoZWNrIGRlc2NyaXB0aW9uIG9uIGhvdyB0byBhcHBseVwiLCBkZXNjcmlwdGlvbiA9IFwibm8gZGVzY3JpcHRpb24gcHJvdmlkZWRcIikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17c3R5bGVzLmltYWdlU3R5bGV9IHNyYz17aW1hZ2V9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNVwiIHN0eWxlPXtzdHlsZXMubGlzdERpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntjb21wYW55fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+TG9jYXRpb246PC9zcGFuPiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PlRpdGxlOjwvc3Bhbj4ge3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT5Ib3cgdG8gYXBwbHk6IDwvc3Bhbj57c3RyaXBIdG1sKGhvd190b19hcHBseSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkRlc2NyaXB0aW9uOjwvc3Bhbj4ge3N0cmlwSHRtbChkZXNjcmlwdGlvbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGltYWdlU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiXHJcbiAgICB9LFxyXG4gICAgbGlzdERpdjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2JMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=