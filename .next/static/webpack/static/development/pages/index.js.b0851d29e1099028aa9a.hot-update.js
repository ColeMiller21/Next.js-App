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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _JobLists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JobLists */ "./components/JobLists.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Form = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "descriptionChange", function (event) {
      _this.setState({
        description: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "cityZipChange", function (event) {
      _this.setState({
        cityZip: event.target.value
      });
    });

    _this.state = {
      description: "",
      cityZip: "new york",
      loading: false
    };
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      event.preventDefault();
      console.log("Search button clicked");
      console.log(this.state);
      this.setState({
        loading: true
      });
      var splitCity = axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york").then(function (response) {
        console.log(response.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.descriptionChange,
        value: this.state.description,
        className: "form-control",
        placeholder: "Description ex: Java, Ruby, Javascript",
        "aria-label": "Username",
        "aria-describedby": "basic-addon1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.cityZipChange,
        value: this.state.cityZip,
        style: styles.cityInput,
        className: "form-control",
        placeholder: "City Name or Zipcode",
        "aria-label": "Username",
        "aria-describedby": "basic-addon1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }
      })), __jsx("button", {
        type: "button",
        onClick: this.onSubmit,
        style: styles.buttonStyle,
        className: "btn btn-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 43
        }
      }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: "text-center",
        style: styles.loaderStyle,
        type: "Oval",
        color: "#00BFFF",
        height: 100,
        width: 100,
        timeout: 3000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 48
        }
      })) : __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 30
        }
      })));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
var styles = {
  formContainer: {
    padding: '10px',
    border: '1px solid black'
  },
  buttonStyle: {
    marginLeft: '20px'
  },
  loaderStyle: {
    marginTop: '100px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5WmlwIiwic3RhdGUiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJiaW5kIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3BsaXRDaXR5IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic3R5bGVzIiwiZm9ybUNvbnRhaW5lciIsImRlc2NyaXB0aW9uQ2hhbmdlIiwiY2l0eVppcENoYW5nZSIsImNpdHlJbnB1dCIsImJ1dHRvblN0eWxlIiwibG9hZGVyU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNE5BV0MsVUFBQ0MsS0FBRCxFQUFXO0FBRTNCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxtQkFBVyxFQUFFRixLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBNUIsT0FBZDtBQUNILEtBZGtCOztBQUFBLHdOQWdCSCxVQUFDSixLQUFELEVBQVc7QUFDdkIsWUFBS0MsUUFBTCxDQUFjO0FBQUVJLGVBQU8sRUFBRUwsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQXhCLE9BQWQ7QUFDSCxLQWxCa0I7O0FBRWYsVUFBS0UsS0FBTCxHQUFhO0FBQ1RKLGlCQUFXLEVBQUUsRUFESjtBQUVURyxhQUFPLEVBQUUsVUFGQTtBQUdURSxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBTUEsVUFBS0MsUUFBTCxHQUFnQixN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LE1BREU7QUFFWEMsVUFBTSxFQUFFO0FBRkcsR0FESjtBQUtYTCxhQUFXLEVBQUU7QUFDVE0sY0FBVSxFQUFFO0FBREgsR0FMRjtBQVFYTCxhQUFXLEVBQUU7QUFDVE0sYUFBUyxFQUFFO0FBREY7QUFSRixDQUFmO0FBZWVqQyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjA4NTFkMjllMTA5OTAyOGFhOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2JMaXN0cyBmcm9tICcuL0pvYkxpc3RzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIGNpdHlaaXA6IFwibmV3IHlvcmtcIixcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmlwdGlvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNpdHlaaXBDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0eVppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoIGJ1dHRvbiBjbGlja2VkXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGxldCBzcGxpdENpdHkgPVxyXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP2Rlc2NyaXB0aW9uPXB5dGhvbiZsb2NhdGlvbj1uZXcreW9ya2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5kZXNjcmlwdGlvbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gZXg6IEphdmEsIFJ1YnksIEphdmFzY3JpcHRcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuY2l0eVppcENoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY2l0eVppcH0gc3R5bGU9e3N0eWxlcy5jaXR5SW5wdXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2l0eSBOYW1lIG9yIFppcGNvZGVcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uU3R5bGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8ZGl2PjxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxvYWRlclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiT3ZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxKb2JMaXN0cyAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZm9ybUNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCdcclxuICAgIH0sXHJcbiAgICBsb2FkZXJTdHlsZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzEwMHB4J1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==