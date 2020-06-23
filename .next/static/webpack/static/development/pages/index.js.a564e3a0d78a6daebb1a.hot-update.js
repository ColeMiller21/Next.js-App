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
      description: "python",
      cityZip: "new york",
      jobs: [],
      loading: false
    };
    _this.onSubmit = _this.onSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "onSubmit",
    value: function onSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({
        loading: true
      });
      var splitCity = this.state.cityZip.split(" ").join("+");
      console.log(splitCity);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(this.state.description, "&location=").concat(this.state.cityZip)).then(function (response) {
        //console.log(response.data)
        _this2.state.jobs.push(response.data);

        console.log(_this2.state.jobs[0]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
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
          lineNumber: 46,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
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
          lineNumber: 50,
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
          lineNumber: 52,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          lineNumber: 56,
          columnNumber: 48
        }
      })) : __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }
      }, __jsx("ul", {
        className: "list-group list-group-flush",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 29
        }
      }, this.state.jobs.map(function (job) {
        return __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: job.title,
          image: job.company_logo,
          location: job.location,
          how_to_apply: job.how_to_apply,
          description: job.description,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 44
          }
        });
      })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5WmlwIiwic3RhdGUiLCJqb2JzIiwibG9hZGluZyIsIm9uU3VibWl0IiwiYmluZCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXRDaXR5Iiwic3BsaXQiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicHVzaCIsImRhdGEiLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiZGVzY3JpcHRpb25DaGFuZ2UiLCJjaXR5WmlwQ2hhbmdlIiwiY2l0eUlucHV0IiwiYnV0dG9uU3R5bGUiLCJsb2FkZXJTdHlsZSIsIm1hcCIsImpvYiIsInRpdGxlIiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJob3dfdG9fYXBwbHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNE5BWUMsVUFBQ0MsS0FBRCxFQUFXO0FBRTNCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxtQkFBVyxFQUFFRixLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBNUIsT0FBZDtBQUNILEtBZmtCOztBQUFBLHdOQWlCSCxVQUFDSixLQUFELEVBQVc7QUFDdkIsWUFBS0MsUUFBTCxDQUFjO0FBQUVJLGVBQU8sRUFBRUwsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQXhCLE9BQWQ7QUFDSCxLQW5Ca0I7O0FBRWYsVUFBS0UsS0FBTCxHQUFhO0FB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LmpzLmE1NjRlM2EwZDc4YTZkYWViYjFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9iTGlzdHMgZnJvbSAnLi9Kb2JMaXN0cyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInB5dGhvblwiLFxyXG4gICAgICAgICAgICBjaXR5WmlwOiBcIm5ldyB5b3JrXCIsXHJcbiAgICAgICAgICAgIGpvYnM6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaXB0aW9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2l0eVppcENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5WmlwOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICBsZXQgc3BsaXRDaXR5ID0gdGhpcy5zdGF0ZS5jaXR5WmlwLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNwbGl0Q2l0eSlcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP2Rlc2NyaXB0aW9uPSR7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0mbG9jYXRpb249JHt0aGlzLnN0YXRlLmNpdHlaaXB9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JzLnB1c2gocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuam9ic1swXSlcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5kZXNjcmlwdGlvbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gZXg6IEphdmEsIFJ1YnksIEphdmFzY3JpcHRcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuY2l0eVppcENoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY2l0eVppcH0gc3R5bGU9e3N0eWxlcy5jaXR5SW5wdXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2l0eSBOYW1lIG9yIFppcGNvZGVcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uU3R5bGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8ZGl2PjxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxvYWRlclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiT3ZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9icy5tYXAoam9iID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxKb2JMaXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2pvYi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtqb2IuY29tcGFueV9sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2pvYi5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvd190b19hcHBseT17am9iLmhvd190b19hcHBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtqb2IuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZm9ybUNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCdcclxuICAgIH0sXHJcbiAgICBsb2FkZXJTdHlsZToge1xyXG4gICAgICAgIG1hcmdpblRvcDogJzEwMHB4J1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==