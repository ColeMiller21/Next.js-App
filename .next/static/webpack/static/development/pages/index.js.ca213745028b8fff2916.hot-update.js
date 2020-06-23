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

var JobLists = function JobLists(_ref) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYkxpc3RzLmpzIl0sIm5hbWVzIjpbInN0cmlwSHRtbCIsInN0cmluZyIsInN0cmlwcGVkU3RyaW5nIiwicmVwbGFjZSIsIkpvYkxpc3RzIiwiY29tcGFueSIsInRpdGxlIiwiaW1hZ2UiLCJsb2NhdGlvbiIsImhvd190b19hcHBseSIsImRlc2NyaXB0aW9uIiwic3R5bGVzIiwiaW1hZ2VTdHlsZSIsImxpc3REaXYiLCJtYXJnaW4iLCJoZWlnaHQiLCJ3aWR0aCIsInZlcnRpY2FsQWxpZ24iLCJkaXNwbGF5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkIsTUFBSUMsY0FBYyxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxlQUFmLEVBQWdDLEVBQWhDLENBQXJCO0FBQ0EsU0FBT0QsY0FBUDtBQUVIOztBQUNELElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BRXFGO0FBQUEsMEJBRmxGQyxPQUVrRjtBQUFBLE1BRmxGQSxPQUVrRiw2QkFGeEUscUJBRXdFO0FBQUEsd0JBRmpEQyxLQUVpRDtBQUFBLE1BRmpEQSxLQUVpRCwyQkFGekMsbUJBRXlDO0FBQUEsd0JBRGxHQyxLQUNrRztBQUFBLE1BRGxHQSxLQUNrRywyQkFEMUYsbUJBQzBGO0FBQUEsMkJBRHJFQyxRQUNxRTtBQUFBLE1BRHJFQSxRQUNxRSw4QkFEMUQsc0JBQzBEO0FBQUEsK0JBQWxHQyxZQUFrRztBQUFBLE1BQWxHQSxZQUFrRyxrQ0FBbkYsbUNBQW1GO0FBQUEsOEJBQTlDQyxXQUE4QztBQUFBLE1BQTlDQSxXQUE4QyxpQ0FBaEMseUJBQWdDO0FBQ2xHLFNBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsVUFBbkI7QUFBK0IsT0FBRyxFQUFFTCxLQUFwQztBQUEyQyxPQUFHLEVBQUMsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUVJLE1BQU0sQ0FBQ0UsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1IsT0FBTCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFTSxNQUFNLENBQUNMLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsT0FBZ0RFLFFBQWhELENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVHLE1BQU0sQ0FBQ0wsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILE9BQTZDQSxLQUE3QyxDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFSyxNQUFNLENBQUNMLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQUgsRUFBb0ROLFNBQVMsQ0FBQ1MsWUFBRCxDQUE3RCxDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFRSxNQUFNLENBQUNMLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsT0FBbUROLFNBQVMsQ0FBQ1UsV0FBRCxDQUE1RCxDQUxKLENBRkosQ0FESixDQURKLENBREosQ0FESjtBQW1CSCxDQXRCRDs7S0FBTU4sUTtBQXdCTixJQUFNTyxNQUFNLEdBQUc7QUFDWEMsWUFBVSxFQUFFO0FBQ1JFLFVBQU0sRUFBRSxNQURBO0FBRVJDLFVBQU0sRUFBRSxHQUZBO0FBR1JDLFNBQUssRUFBRSxHQUhDO0FBSVJDLGlCQUFhLEVBQUU7QUFKUCxHQUREO0FBT1hKLFNBQU8sRUFBRTtBQUNMSyxXQUFPLEVBQUU7QUFESixHQVBFO0FBVVhaLE9BQUssRUFBRTtBQUNIYSxjQUFVLEVBQUUsR0FEVDtBQUVIQyxZQUFRLEVBQUU7QUFGUDtBQVZJLENBQWY7QUFpQmVoQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2EyMTM3NDUwMjhiOGZmZjI5MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiBzdHJpcEh0bWwoc3RyaW5nKSB7XHJcbiAgICB2YXIgc3RyaXBwZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvaWcsIFwiXCIpXHJcbiAgICByZXR1cm4gc3RyaXBwZWRTdHJpbmdcclxuXHJcbn1cclxuY29uc3QgSm9iTGlzdHMgPSAoeyBjb21wYW55ID0gXCJObyBjb21wYW55IHByb3ZpZGVkXCIsIHRpdGxlID0gXCJObyB0aXRsZSBwcm92aWRlZFwiLFxyXG4gICAgaW1hZ2UgPSBcIk5vIGltYWdlIHByb3ZpZGVkXCIsIGxvY2F0aW9uID0gXCJubyBsb2NhdGlvbiBwcm92aWRlZFwiLFxyXG4gICAgaG93X3RvX2FwcGx5ID0gXCJDaGVjayBkZXNjcmlwdGlvbiBvbiBob3cgdG8gYXBwbHlcIiwgZGVzY3JpcHRpb24gPSBcIm5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkXCIgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17c3R5bGVzLmltYWdlU3R5bGV9IHNyYz17aW1hZ2V9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy01XCIgc3R5bGU9e3N0eWxlcy5saXN0RGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57Y29tcGFueX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+TG9jYXRpb246PC9zcGFuPiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+VGl0bGU6PC9zcGFuPiB7dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+SG93IHRvIGFwcGx5OiA8L3NwYW4+e3N0cmlwSHRtbChob3dfdG9fYXBwbHkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkRlc2NyaXB0aW9uOjwvc3Bhbj4ge3N0cmlwSHRtbChkZXNjcmlwdGlvbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBpbWFnZVN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgfSxcclxuICAgIGxpc3REaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIlxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9iTGlzdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==