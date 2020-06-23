webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/JobList.js":
/*!*******************************!*\
  !*** ./components/JobList.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\JobList.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function stripHtml(string) {
  var strippedString = string.replace(/(<([^>]+)>)/ig, "");
  return strippedString;
}

var JobList = function JobList(props) {
  return __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: styles.imageStyle,
    src: image,
    alt: "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "col-xs-5",
    style: styles.listDiv,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, company), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 24
    }
  }, "Location:"), " ", location), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 24
    }
  }, "Title:"), " ", title), __jsx("p", {
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
  }, "How to apply: "), stripHtml(how_to_apply)), __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0pvYkxpc3QuanMiXSwibmFtZXMiOlsic3RyaXBIdG1sIiwic3RyaW5nIiwic3RyaXBwZWRTdHJpbmciLCJyZXBsYWNlIiwiSm9iTGlzdCIsInByb3BzIiwic3R5bGVzIiwiaW1hZ2VTdHlsZSIsImltYWdlIiwibGlzdERpdiIsImNvbXBhbnkiLCJ0aXRsZSIsImxvY2F0aW9uIiwiaG93X3RvX2FwcGx5IiwiZGVzY3JpcHRpb24iLCJtYXJnaW4iLCJoZWlnaHQiLCJ3aWR0aCIsInZlcnRpY2FsQWxpZ24iLCJkaXNwbGF5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDdkIsTUFBSUMsY0FBYyxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxlQUFmLEVBQWdDLEVBQWhDLENBQXJCO0FBQ0EsU0FBT0QsY0FBUDtBQUNIOztBQUVELElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN2QixTQUVJO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsVUFBbkI7QUFBK0IsT0FBRyxFQUFFQyxLQUFwQztBQUEyQyxPQUFHLEVBQUMsTUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUVGLE1BQU0sQ0FBQ0csT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0MsT0FBTCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFSixNQUFNLENBQUNLLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUgsT0FBZ0RDLFFBQWhELENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBTSxTQUFLLEVBQUVOLE1BQU0sQ0FBQ0ssS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILE9BQTZDQSxLQUE3QyxDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFTCxNQUFNLENBQUNLLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQUgsRUFBb0RYLFNBQVMsQ0FBQ2EsWUFBRCxDQUE3RCxDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQU0sU0FBSyxFQUFFUCxNQUFNLENBQUNLLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsT0FBbURYLFNBQVMsQ0FBQ2MsV0FBRCxDQUE1RCxDQUxKLENBRkosQ0FESixDQUZKO0FBZUgsQ0FoQkQ7O0tBQU1WLE87QUFrQk4sSUFBTUUsTUFBTSxHQUFHO0FBQ1hDLFlBQVUsRUFBRTtBQUNSUSxVQUFNLEVBQUUsTUFEQTtBQUVSQyxVQUFNLEVBQUUsR0FGQTtBQUdSQyxTQUFLLEVBQUUsR0FIQztBQUlSQyxpQkFBYSxFQUFFO0FBSlAsR0FERDtBQU9YVCxTQUFPLEVBQUU7QUFDTFUsV0FBTyxFQUFFO0FBREosR0FQRTtBQVVYUixPQUFLLEVBQUU7QUFDSFMsY0FBVSxFQUFFLEdBRFQ7QUFFSEMsWUFBUSxFQUFFO0FBRlA7QUFWSSxDQUFmO0FBaUJlakIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmRkNjJhMTVkNzExYzcxZGVmZmJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gc3RyaXBIdG1sKHN0cmluZykge1xyXG4gICAgdmFyIHN0cmlwcGVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLCBcIlwiKVxyXG4gICAgcmV0dXJuIHN0cmlwcGVkU3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEpvYkxpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3N0eWxlcy5pbWFnZVN0eWxlfSBzcmM9e2ltYWdlfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTVcIiBzdHlsZT17c3R5bGVzLmxpc3REaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57Y29tcGFueX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkxvY2F0aW9uOjwvc3Bhbj4ge2xvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT5UaXRsZTo8L3NwYW4+IHt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+SG93IHRvIGFwcGx5OiA8L3NwYW4+e3N0cmlwSHRtbChob3dfdG9fYXBwbHkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT5EZXNjcmlwdGlvbjo8L3NwYW4+IHtzdHJpcEh0bWwoZGVzY3JpcHRpb24pfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBpbWFnZVN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IDEwMCxcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIlxyXG4gICAgfSxcclxuICAgIGxpc3REaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIlxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9iTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9