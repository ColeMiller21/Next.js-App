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
  }, props.company), __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYkxpc3RzLmpzIl0sIm5hbWVzIjpbInN0cmlwSHRtbCIsInN0cmluZyIsInN0cmlwcGVkU3RyaW5nIiwicmVwbGFjZSIsIkpvYkxpc3RzIiwiY29tcGFueSIsInRpdGxlIiwiaW1hZ2UiLCJsb2NhdGlvbiIsImhvd190b19hcHBseSIsImRlc2NyaXB0aW9uIiwic3R5bGVzIiwiaW1hZ2VTdHlsZSIsImxpc3REaXYiLCJwcm9wcyIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwidmVydGljYWxBbGlnbiIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN2QixNQUFJQyxjQUFjLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLGVBQWYsRUFBZ0MsRUFBaEMsQ0FBckI7QUFDQSxTQUFPRCxjQUFQO0FBRUg7O0FBQ0QsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FFbUY7QUFBQSxNQUZsRkMsT0FFa0YsdUVBRnhFLHFCQUV3RTtBQUFBLE1BRmpEQyxLQUVpRCx1RUFGekMsbUJBRXlDO0FBQUEsTUFEaEdDLEtBQ2dHLHVFQUR4RixtQkFDd0Y7QUFBQSxNQURuRUMsUUFDbUUsdUVBRHhELHNCQUN3RDtBQUFBLE1BQWhHQyxZQUFnRyx1RUFBakYsbUNBQWlGO0FBQUEsTUFBNUNDLFdBQTRDLHVFQUE5Qix5QkFBOEI7QUFDaEcsU0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRUMsTUFBTSxDQUFDQyxVQUFuQjtBQUErQixPQUFHLEVBQUVMLEtBQXBDO0FBQTJDLE9BQUcsRUFBQyxNQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQTBCLFNBQUssRUFBRUksTUFBTSxDQUFDRSxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQyxLQUFLLENBQUNULE9BQVgsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRU0sTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILE9BQWdERSxRQUFoRCxDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFRyxNQUFNLENBQUNMLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxPQUE2Q0EsS0FBN0MsQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRUssTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFILEVBQW9ETixTQUFTLENBQUNTLFlBQUQsQ0FBN0QsQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLFNBQUssRUFBRUUsTUFBTSxDQUFDTCxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFILE9BQW1ETixTQUFTLENBQUNVLFdBQUQsQ0FBNUQsQ0FMSixDQUZKLENBREosQ0FESixDQURKLENBREo7QUFtQkgsQ0F0QkQ7O0tBQU1OLFE7QUF3Qk4sSUFBTU8sTUFBTSxHQUFHO0FBQ1hDLFlBQVUsRUFBRTtBQUNSRyxVQUFNLEVBQUUsTUFEQTtBQUVSQyxVQUFNLEVBQUUsR0FGQTtBQUdSQyxTQUFLLEVBQUUsR0FIQztBQUlSQyxpQkFBYSxFQUFFO0FBSlAsR0FERDtBQU9YTCxTQUFPLEVBQUU7QUFDTE0sV0FBTyxFQUFFO0FBREosR0FQRTtBQVVYYixPQUFLLEVBQUU7QUFDSGMsY0FBVSxFQUFFLEdBRFQ7QUFFSEMsWUFBUSxFQUFFO0FBRlA7QUFWSSxDQUFmO0FBaUJlakIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjgzYTY4ZDEwODFiM2U4ZGRjMTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gc3RyaXBIdG1sKHN0cmluZykge1xyXG4gICAgdmFyIHN0cmlwcGVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLCBcIlwiKVxyXG4gICAgcmV0dXJuIHN0cmlwcGVkU3RyaW5nXHJcblxyXG59XHJcbmNvbnN0IEpvYkxpc3RzID0gKGNvbXBhbnkgPSBcIk5vIGNvbXBhbnkgcHJvdmlkZWRcIiwgdGl0bGUgPSBcIk5vIHRpdGxlIHByb3ZpZGVkXCIsXHJcbiAgICBpbWFnZSA9IFwiTm8gaW1hZ2UgcHJvdmlkZWRcIiwgbG9jYXRpb24gPSBcIm5vIGxvY2F0aW9uIHByb3ZpZGVkXCIsXHJcbiAgICBob3dfdG9fYXBwbHkgPSBcIkNoZWNrIGRlc2NyaXB0aW9uIG9uIGhvdyB0byBhcHBseVwiLCBkZXNjcmlwdGlvbiA9IFwibm8gZGVzY3JpcHRpb24gcHJvdmlkZWRcIikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17c3R5bGVzLmltYWdlU3R5bGV9IHNyYz17aW1hZ2V9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy01XCIgc3R5bGU9e3N0eWxlcy5saXN0RGl2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57cHJvcHMuY29tcGFueX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+TG9jYXRpb246PC9zcGFuPiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+VGl0bGU6PC9zcGFuPiB7dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+SG93IHRvIGFwcGx5OiA8L3NwYW4+e3N0cmlwSHRtbChob3dfdG9fYXBwbHkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkRlc2NyaXB0aW9uOjwvc3Bhbj4ge3N0cmlwSHRtbChkZXNjcmlwdGlvbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBpbWFnZVN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgfSxcclxuICAgIGxpc3REaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIlxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9iTGlzdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==