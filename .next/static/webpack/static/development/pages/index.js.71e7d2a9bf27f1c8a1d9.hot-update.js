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

var JobList = function JobList(_ref) {
  var _ref$company = _ref.company,
      company = _ref$company === void 0 ? "No company provided" : _ref$company,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "No title provided" : _ref$title,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? "No image provided" : _ref$image,
      _ref$location = _ref.location,
      location = _ref$location === void 0 ? "no location provided" : _ref$location,
      _ref$how_to_apply = _ref.how_to_apply,
      how_to_apply = _ref$how_to_apply === void 0 ? "Check description on how to apply" : _ref$how_to_apply,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? "no description provided" : _ref$description;
  return __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "list-group list-group-flush",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("img", {
    style: styles.imageStyle,
    src: image,
    alt: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "col-xs-5",
    style: styles.listDiv,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, company), __jsx("p", {
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
  }, "Location:"), " ", location), __jsx("p", {
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
  }, "Title:"), " ", title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 32
    }
  }, "How to apply: "), stripHtml(how_to_apply)), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 32
    }
  }, "Description:"), " ", stripHtml(description)))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYkxpc3RzLmpzIl0sIm5hbWVzIjpbInN0cmlwSHRtbCIsInN0cmluZyIsInN0cmlwcGVkU3RyaW5nIiwicmVwbGFjZSIsIkpvYkxpc3QiLCJjb21wYW55IiwidGl0bGUiLCJpbWFnZSIsImxvY2F0aW9uIiwiaG93X3RvX2FwcGx5IiwiZGVzY3JpcHRpb24iLCJzdHlsZXMiLCJpbWFnZVN0eWxlIiwibGlzdERpdiIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwidmVydGljYWxBbGlnbiIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN2QixNQUFJQyxjQUFjLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLGVBQWYsRUFBZ0MsRUFBaEMsQ0FBckI7QUFDQSxTQUFPRCxjQUFQO0FBRUg7O0FBQ0QsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FFc0Y7QUFBQSwwQkFGbkZDLE9BRW1GO0FBQUEsTUFGbkZBLE9BRW1GLDZCQUZ6RSxxQkFFeUU7QUFBQSx3QkFGbERDLEtBRWtEO0FBQUEsTUFGbERBLEtBRWtELDJCQUYxQyxtQkFFMEM7QUFBQSx3QkFEbEdDLEtBQ2tHO0FBQUEsTUFEbEdBLEtBQ2tHLDJCQUQxRixtQkFDMEY7QUFBQSwyQkFEckVDLFFBQ3FFO0FBQUEsTUFEckVBLFFBQ3FFLDhCQUQxRCxzQkFDMEQ7QUFBQSwrQkFBbEdDLFlBQWtHO0FBQUEsTUFBbEdBLFlBQWtHLGtDQUFuRixtQ0FBbUY7QUFBQSw4QkFBOUNDLFdBQThDO0FBQUEsTUFBOUNBLFdBQThDLGlDQUFoQyx5QkFBZ0M7QUFDbEcsU0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRUMsTUFBTSxDQUFDQyxVQUFuQjtBQUErQixPQUFHLEVBQUVMLEtBQXBDO0FBQTJDLE9BQUcsRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBRUksTUFBTSxDQUFDRSxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLUixPQUFMLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVNLE1BQU0sQ0FBQ0wsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxPQUFnREUsUUFBaEQsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRUcsTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsT0FBNkNBLEtBQTdDLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVLLE1BQU0sQ0FBQ0wsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBSCxFQUFvRE4sU0FBUyxDQUFDUyxZQUFELENBQTdELENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVFLE1BQU0sQ0FBQ0wsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxPQUFtRE4sU0FBUyxDQUFDVSxXQUFELENBQTVELENBTEosQ0FGSixDQURKLENBREosQ0FESixDQURKO0FBbUJILENBdEJEOztLQUFNTixPO0FBd0JOLElBQU1PLE1BQU0sR0FBRztBQUNYQyxZQUFVLEVBQUU7QUFDUkUsVUFBTSxFQUFFLE1BREE7QUFFUkMsVUFBTSxFQUFFLEdBRkE7QUFHUkMsU0FBSyxFQUFFLEdBSEM7QUFJUkMsaUJBQWEsRUFBRTtBQUpQLEdBREQ7QUFPWEosU0FBTyxFQUFFO0FBQ0xLLFdBQU8sRUFBRTtBQURKLEdBUEU7QUFVWFosT0FBSyxFQUFFO0FBQ0hhLGNBQVUsRUFBRSxHQURUO0FBRUhDLFlBQVEsRUFBRTtBQUZQO0FBVkksQ0FBZjtBQWlCZWhCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43MWU3ZDJhOWJmMjdmMWM4YTFkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIHN0cmlwSHRtbChzdHJpbmcpIHtcclxuICAgIHZhciBzdHJpcHBlZFN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgXCJcIilcclxuICAgIHJldHVybiBzdHJpcHBlZFN0cmluZ1xyXG5cclxufVxyXG5jb25zdCBKb2JMaXN0ID0gKHsgY29tcGFueSA9IFwiTm8gY29tcGFueSBwcm92aWRlZFwiLCB0aXRsZSA9IFwiTm8gdGl0bGUgcHJvdmlkZWRcIixcclxuICAgIGltYWdlID0gXCJObyBpbWFnZSBwcm92aWRlZFwiLCBsb2NhdGlvbiA9IFwibm8gbG9jYXRpb24gcHJvdmlkZWRcIixcclxuICAgIGhvd190b19hcHBseSA9IFwiQ2hlY2sgZGVzY3JpcHRpb24gb24gaG93IHRvIGFwcGx5XCIsIGRlc2NyaXB0aW9uID0gXCJubyBkZXNjcmlwdGlvbiBwcm92aWRlZFwiIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3N0eWxlcy5pbWFnZVN0eWxlfSBzcmM9e2ltYWdlfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNVwiIHN0eWxlPXtzdHlsZXMubGlzdERpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2NvbXBhbnl9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkxvY2F0aW9uOjwvc3Bhbj4ge2xvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PlRpdGxlOjwvc3Bhbj4ge3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkhvdyB0byBhcHBseTogPC9zcGFuPntzdHJpcEh0bWwoaG93X3RvX2FwcGx5KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT5EZXNjcmlwdGlvbjo8L3NwYW4+IHtzdHJpcEh0bWwoZGVzY3JpcHRpb24pfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgaW1hZ2VTdHlsZToge1xyXG4gICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJcclxuICAgIH0sXHJcbiAgICBsaXN0RGl2OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICBmb250U2l6ZTogXCIxcmVtXCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvYkxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==