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
      var listItem = "";
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(this.state.description, "&location=").concat(this.state.cityZip)).then(function (response) {
        console.log(response.data);

        _this2.state.jobs.push(response.data);

        console.log(_this2.state.jobs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5WmlwIiwic3RhdGUiLCJqb2JzIiwibG9hZGluZyIsIm9uU3VibWl0IiwiYmluZCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXRDaXR5Iiwic3BsaXQiLCJqb2luIiwibGlzdEl0ZW0iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicHVzaCIsInN0eWxlcyIsImZvcm1Db250YWluZXIiLCJkZXNjcmlwdGlvbkNoYW5nZSIsImNpdHlaaXBDaGFuZ2UiLCJjaXR5SW5wdXQiLCJidXR0b25TdHlsZSIsImxvYWRlclN0eWxlIiwibWFwIiwiam9iIiwidGl0bGUiLCJjb21wYW55X2xvZ28iLCJsb2NhdGlvbiIsImhvd190b19hcHBseSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw0TkFZQyxVQUFDQyxLQUFELEVBQVc7QUFFM0IsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLG1CQUFXLEVBQUVGLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUE1QixPQUFkO0FBQ0gsS0Fma0I7O0FBQUEsd05BaUJILFVBQUNKLEtBQUQsRUFBVztBQUN2QixZQUFLQyxRQUFMLENBQWM7QUFBRUksZUFBTyxFQUFFTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBeEIsT0FBZDtBQUNILEtBbkJrQjs7QUFFZixVQUFLRSxL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dGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2M5MzNiMDM4ZjY0Zjg2M2NlZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2JMaXN0cyBmcm9tICcuL0pvYkxpc3RzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicHl0aG9uXCIsXHJcbiAgICAgICAgICAgIGNpdHlaaXA6IFwibmV3IHlvcmtcIixcclxuICAgICAgICAgICAgam9iczogW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpcHRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaXR5WmlwQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlaaXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGxldCBzcGxpdENpdHkgPSB0aGlzLnN0YXRlLmNpdHlaaXAuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpXHJcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gXCJcIjtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP2Rlc2NyaXB0aW9uPSR7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0mbG9jYXRpb249JHt0aGlzLnN0YXRlLmNpdHlaaXB9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9icy5wdXNoKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpvYnMpXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuZGVzY3JpcHRpb25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGV4OiBKYXZhLCBSdWJ5LCBKYXZhc2NyaXB0XCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmNpdHlaaXBDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlaaXB9IHN0eWxlPXtzdHlsZXMuY2l0eUlucHV0fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNpdHkgTmFtZSBvciBaaXBjb2RlXCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fSBzdHlsZT17c3R5bGVzLmJ1dHRvblN0eWxlfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPGRpdj48TG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sb2FkZXJTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIk92YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMwMEJGRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17MzAwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYnMubWFwKGpvYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iTGlzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtqb2IudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17am9iLmNvbXBhbnlfbG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtqb2IubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3dfdG9fYXBwbHk9e2pvYi5ob3dfdG9fYXBwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17am9iLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGZvcm1Db250YWluZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvblN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgbG9hZGVyU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=