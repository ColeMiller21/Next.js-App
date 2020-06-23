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

var JobLists = function JobLists() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYkxpc3RzLmpzIl0sIm5hbWVzIjpbInN0cmlwSHRtbCIsInN0cmluZyIsInN0cmlwcGVkU3RyaW5nIiwicmVwbGFjZSIsIkpvYkxpc3RzIiwiY29tcGFueSIsInRpdGxlIiwiaW1hZ2UiLCJsb2NhdGlvbiIsImhvd190b19hcHBseSIsImRlc2NyaXB0aW9uIiwic3R5bGVzIiwiaW1hZ2VTdHlsZSIsImxpc3REaXYiLCJtYXJnaW4iLCJoZWlnaHQiLCJ3aWR0aCIsInZlcnRpY2FsQWxpZ24iLCJkaXNwbGF5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkIsTUFBSUMsY0FBYyxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxlQUFmLEVBQWdDLEVBQWhDLENBQXJCO0FBQ0EsU0FBT0QsY0FBUDtBQUVIOztBQUNELElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBRW1GO0FBQUEsTUFGbEZDLE9BRWtGLHVFQUZ4RSxxQkFFd0U7QUFBQSxNQUZqREMsS0FFaUQsdUVBRnpDLG1CQUV5QztBQUFBLE1BRGhHQyxLQUNnRyx1RUFEeEYsbUJBQ3dGO0FBQUEsTUFEbkVDLFFBQ21FLHVFQUR4RCxzQkFDd0Q7QUFBQSxNQUFoR0MsWUFBZ0csdUVBQWpGLG1DQUFpRjtBQUFBLE1BQTVDQyxXQUE0Qyx1RUFBOUIseUJBQThCO0FBQ2hHLFNBRUk7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRUMsTUFBTSxDQUFDQyxVQUFuQjtBQUErQixPQUFHLEVBQUVMLEtBQXBDO0FBQTJDLE9BQUcsRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBRUksTUFBTSxDQUFDRSxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLUixPQUFMLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVNLE1BQU0sQ0FBQ0wsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSCxPQUFnREUsUUFBaEQsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRUcsTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsT0FBNkNBLEtBQTdDLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVLLE1BQU0sQ0FBQ0wsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBSCxFQUFvRE4sU0FBUyxDQUFDUyxZQUFELENBQTdELENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVFLE1BQU0sQ0FBQ0wsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBSCxPQUFtRE4sU0FBUyxDQUFDVSxXQUFELENBQTVELENBTEosQ0FGSixDQURKLENBRko7QUFlSCxDQWxCRDs7S0FBTU4sUTtBQW9CTixJQUFNTyxNQUFNLEdBQUc7QUFDWEMsWUFBVSxFQUFFO0FBQ1JFLFVBQU0sRUFBRSxNQURBO0FBRVJDLFVBQU0sRUFBRSxHQUZBO0FBR1JDLFNBQUssRUFBRSxHQUhDO0FBSVJDLGlCQUFhLEVBQUU7QUFKUCxHQUREO0FBT1hKLFNBQU8sRUFBRTtBQUNMSyxXQUFPLEVBQUU7QUFESixHQVBFO0FBVVhaLE9BQUssRUFBRTtBQUNIYSxjQUFVLEVBQUUsR0FEVDtBQUVIQyxZQUFRLEVBQUU7QUFGUDtBQVZJLENBQWY7QUFpQmVoQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTE1M2NjMjdjZDAzMGFjNDNjZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiBzdHJpcEh0bWwoc3RyaW5nKSB7XHJcbiAgICB2YXIgc3RyaXBwZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvaWcsIFwiXCIpXHJcbiAgICByZXR1cm4gc3RyaXBwZWRTdHJpbmdcclxuXHJcbn1cclxuY29uc3QgSm9iTGlzdHMgPSAoY29tcGFueSA9IFwiTm8gY29tcGFueSBwcm92aWRlZFwiLCB0aXRsZSA9IFwiTm8gdGl0bGUgcHJvdmlkZWRcIixcclxuICAgIGltYWdlID0gXCJObyBpbWFnZSBwcm92aWRlZFwiLCBsb2NhdGlvbiA9IFwibm8gbG9jYXRpb24gcHJvdmlkZWRcIixcclxuICAgIGhvd190b19hcHBseSA9IFwiQ2hlY2sgZGVzY3JpcHRpb24gb24gaG93IHRvIGFwcGx5XCIsIGRlc2NyaXB0aW9uID0gXCJubyBkZXNjcmlwdGlvbiBwcm92aWRlZFwiKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2VTdHlsZX0gc3JjPXtpbWFnZX0gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy01XCIgc3R5bGU9e3N0eWxlcy5saXN0RGl2fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2NvbXBhbnl9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT5Mb2NhdGlvbjo8L3NwYW4+IHtsb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+VGl0bGU6PC9zcGFuPiB7dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkhvdyB0byBhcHBseTogPC9zcGFuPntzdHJpcEh0bWwoaG93X3RvX2FwcGx5KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+RGVzY3JpcHRpb246PC9zcGFuPiB7c3RyaXBIdG1sKGRlc2NyaXB0aW9uKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgaW1hZ2VTdHlsZToge1xyXG4gICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCJcclxuICAgIH0sXHJcbiAgICBsaXN0RGl2OiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICBmb250U2l6ZTogXCIxcmVtXCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvYkxpc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=