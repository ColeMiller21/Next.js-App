webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Form = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    _this = _super.call(this, props);
    _this.state = {
      description: "",
      cityZip: "",
      loading: true
    };
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "descriptionChange",
    value: function descriptionChange(event) {}
  }, {
    key: "cityZipChange",
    value: function cityZipChange(event) {}
  }, {
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      console.log("Search button clicked");
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.descriptionChange,
        className: "form-control",
        placeholder: "Description ex: Java, Ruby, Javascript",
        "aria-label": "Username",
        "aria-describedby": "basic-addon1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.cityZipChange,
        style: styles.cityInput,
        className: "form-control",
        placeholder: "City Name or Zipcode",
        "aria-label": "Username",
        "aria-describedby": "basic-addon1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }
      })), __jsx("button", {
        type: "button",
        onClick: this.onSubmit,
        style: styles.buttonStyle,
        className: "btn btn-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }
      }, "Search")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

;
var styles = {
  formContainer: {
    padding: '10px',
    border: '1px solid black'
  },
  buttonStyle: {
    marginLeft: '20px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImNpdHlaaXAiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJiaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiZGVzY3JpcHRpb25DaGFuZ2UiLCJjaXR5WmlwQ2hhbmdlIiwiY2l0eUlucHV0IiwiYnV0dG9uU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGlCQUFXLEVBQUUsRUFESjtBQUVUQyxhQUFPLEVBQUUsRUFGQTtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBTUEsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQseUdBQWhCO0FBUmU7QUFTbEI7Ozs7c0NBRWlCQyxLLEVBQU8sQ0FFeEI7OztrQ0FFYUEsSyxFQUFPLENBRXBCOzs7NkJBRVFBLEssRUFBTztBQUNaQSxXQUFLLENBQUNDLGNBQU47QUFFQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFFSDs7OzZCQUNRO0FBQ0wsYUFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixhQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsYUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFLEtBQUtDLGlCQUFsQztBQUFxRCxpQkFBUyxFQUFDLGNBQS9EO0FBQThFLG1CQUFXLEVBQUMsd0NBQTFGO0FBQW1JLHNCQUFXLFVBQTlJO0FBQXlKLDRCQUFpQixjQUExSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixFQUlJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRSxLQUFLQyxhQUFsQztBQUFpRCxhQUFLLEVBQUVILE1BQU0sQ0FBQ0ksU0FBL0Q7QUFBMEUsaUJBQVMsRUFBQyxjQUFwRjtBQUFtRyxtQkFBVyxFQUFDLHNCQUEvRztBQUFzSSxzQkFBVyxVQUFqSjtBQUE0Siw0QkFBaUIsY0FBN0s7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxLQUFLVixRQUFwQztBQUE4QyxhQUFLLEVBQUVNLE1BQU0sQ0FBQ0ssV0FBNUQ7QUFBeUUsaUJBQVMsRUFBQyxpQkFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixDQUpKLENBREo7QUFnQkg7Ozs7RUEzQ2NDLDRDQUFLLENBQUNDLFM7O0FBNkN4QjtBQUVELElBQU1QLE1BQU0sR0FBRztBQUNYQyxlQUFhLEVBQUU7QUFDWE8sV0FBTyxFQUFFLE1BREU7QUFFWEMsVUFBTSxFQUFFO0FBRkcsR0FESjtBQUtYSixhQUFXLEVBQUU7QUFDVEssY0FBVSxFQUFFO0FBREg7QUFMRixDQUFmO0FBWWV0QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDAwNTVlY2E3OGVjYjUxNjE3OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgY2l0eVppcDogXCJcIixcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaXB0aW9uQ2hhbmdlKGV2ZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNpdHlaaXBDaGFuZ2UoZXZlbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaCBidXR0b24gY2xpY2tlZFwiKVxyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5kZXNjcmlwdGlvbkNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBleDogSmF2YSwgUnVieSwgSmF2YXNjcmlwdFwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmNpdHlaaXBDaGFuZ2V9IHN0eWxlPXtzdHlsZXMuY2l0eUlucHV0fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNpdHkgTmFtZSBvciBaaXBjb2RlXCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblN1Ym1pdH0gc3R5bGU9e3N0eWxlcy5idXR0b25TdHlsZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZm9ybUNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCdcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=