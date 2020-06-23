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
        console.log(response.data);

        _this2.state.jobs.push(response.data);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
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
          lineNumber: 45,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
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
          lineNumber: 49,
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
          lineNumber: 51,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
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
          lineNumber: 55,
          columnNumber: 48
        }
      })) : __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
        jobs: this.state.jobs,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5WmlwIiwic3RhdGUiLCJqb2JzIiwibG9hZGluZyIsIm9uU3VibWl0IiwiYmluZCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXRDaXR5Iiwic3BsaXQiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInB1c2giLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiZGVzY3JpcHRpb25DaGFuZ2UiLCJjaXR5WmlwQ2hhbmdlIiwiY2l0eUlucHV0IiwiYnV0dG9uU3R5bGUiLCJsb2FkZXJTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw0TkFZQyxVQUFDQyxLQUFELEVBQVc7QUFFM0IsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLG1CQUFXLEVBQUVGLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUE1QixPQUFkO0FBQ0gsS0Fma0I7O0FBQUEsd05BaUJILFVBQUNKLEtBQUQsRUFBVztBQUN2QixZQUFLQyxRQUFMLENBQWM7QUFBRUksZUFBTyxFQUFFTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBeEIsT0FBZDtBQUNILEtBbkJrQjs7QUFFZixVQUFLRSxLQUFMLEdBQWE7QUFDVEosaUJBQVcsRUFBRSxRQURKO0FBRVRHLGFBQU8sRUFBRSxVQUZBO0FBR1RFLFVBQUksRUFBRSxFQUhHO0FBSVRDLGFBQU8sRUFBRTtBQUpBLEtBQWI7QUFPQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCx5R0FBaEI7QUFUZTtBQVVsQjs7Ozs2QkFXUVYsSyxFQUFPO0FBQUE7O0FBQ1pBLFdBQUssQ0FBQ1csY0FBTjtBQUNBLFdBQUtWLFFBQUwsQ0FBYztBQUFFTyxlQUFPLEVBQUU7QUFBWCxPQUFkO0FBQ0EsVUFBSUksU0FBUyxHQUFHLEtBQUtOLEtBQUwsQ0FBV0QsT0FBWCxDQUFtQlEsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLElBQTlCLENBQW1DLEdBQW5DLENBQWhCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFaO0FBQ0FLLG1EQUFLLENBQUNDLEdBQU4sa0dBQW9HLEtBQUtaLEtBQUwsQ0FBV0osV0FBL0csdUJBQXVJLEtBQUtJLEtBQUwsQ0FBV0QsT0FBbEosR0FDS2MsSUFETCxDQUNVLFVBQUFDLFFBQVEsRUFBSTtBQUNkTCxlQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBUSxDQUFDQyxJQUFyQjs7QUFDQSxjQUFJLENBQUNmLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmUsSUFBaEIsQ0FBcUJGLFFBQVEsQ0FBQ0MsSUFBOUI7QUFFSCxPQUxMO0FBT0g7Ozs2QkFDUTtBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQTJCLGFBQUssRUFBRUUsTUFBTSxDQUFDQyxhQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUUsS0FBS0MsaUJBQWxDO0FBQXFELGFBQUssRUFBRSxLQUFLbkIsS0FBTCxDQUFXSixXQUF2RTtBQUFvRixpQkFBUyxFQUFDLGNBQTlGO0FBQTZHLG1CQUFXLEVBQUMsd0NBQXpIO0FBQWtLLHNCQUFXLFVBQTdLO0FBQXdMLDRCQUFpQixjQUF6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixFQUlJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRSxLQUFLd0IsYUFBbEM7QUFBaUQsYUFBSyxFQUFFLEtBQUtwQixLQUFMLENBQVdELE9BQW5FO0FBQTRFLGFBQUssRUFBRWtCLE1BQU0sQ0FBQ0ksU0FBMUY7QUFBcUcsaUJBQVMsRUFBQyxjQUEvRztBQUE4SCxtQkFBVyxFQUFDLHNCQUExSTtBQUFpSyxzQkFBVyxVQUE1SztBQUF1TCw0QkFBaUIsY0FBeE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxLQUFLbEIsUUFBcEM7QUFBOEMsYUFBSyxFQUFFYyxNQUFNLENBQUNLLFdBQTVEO0FBQXlFLGlCQUFTLEVBQUMsaUJBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosQ0FKSixDQURKLEVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUt0QixLQUFMLENBQVdFLE9BQVgsR0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLE1BQUMsMkRBQUQ7QUFDdkIsaUJBQVMsRUFBQyxhQURhO0FBRXZCLGFBQUssRUFBRWUsTUFBTSxDQUFDTSxXQUZTO0FBR3ZCLFlBQUksRUFBQyxNQUhrQjtBQUl2QixhQUFLLEVBQUMsU0FKaUI7QUFLdkIsY0FBTSxFQUFFLEdBTGU7QUFNdkIsYUFBSyxFQUFFLEdBTmdCO0FBT3ZCLGVBQU8sRUFBRSxJQVBjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBTCxDQUFyQixHQVFRLE1BQUMsaURBQUQ7QUFBVSxZQUFJLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV0MsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVRiLENBWkosQ0FESjtBQTJCSDs7OztFQS9EY3VCLDRDQUFLLENBQUNDLFM7O0FBaUV4QjtBQUVELElBQU1SLE1BQU0sR0FBRztBQUNYQyxlQUFhLEVBQUU7QUFDWFEsV0FBTyxFQUFFLE1BREU7QUFFWEMsVUFBTSxFQUFFO0FBRkcsR0FESjtBQUtYTCxhQUFXLEVBQUU7QUFDVE0sY0FBVSxFQUFFO0FBREgsR0FMRjtBQVFYTCxhQUFXLEVBQUU7QUFDVE0sYUFBUyxFQUFFO0FBREY7QUFSRixDQUFmO0FBZWVyQyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2Y4MTllNGRmYjFmZTY0N2IyMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2JMaXN0cyBmcm9tICcuL0pvYkxpc3RzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicHl0aG9uXCIsXHJcbiAgICAgICAgICAgIGNpdHlaaXA6IFwibmV3IHlvcmtcIixcclxuICAgICAgICAgICAgam9iczogW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpcHRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaXR5WmlwQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlaaXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGxldCBzcGxpdENpdHkgPSB0aGlzLnN0YXRlLmNpdHlaaXAuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3BsaXRDaXR5KVxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9qb2JzLmdpdGh1Yi5jb20vcG9zaXRpb25zLmpzb24/ZGVzY3JpcHRpb249JHt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSZsb2NhdGlvbj0ke3RoaXMuc3RhdGUuY2l0eVppcH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JzLnB1c2gocmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5kZXNjcmlwdGlvbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gZXg6IEphdmEsIFJ1YnksIEphdmFzY3JpcHRcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuY2l0eVppcENoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY2l0eVppcH0gc3R5bGU9e3N0eWxlcy5jaXR5SW5wdXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2l0eSBOYW1lIG9yIFppcGNvZGVcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uU3R5bGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8ZGl2PjxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxvYWRlclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiT3ZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxKb2JMaXN0cyBqb2JzPXt0aGlzLnN0YXRlLmpvYnN9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBmb3JtQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaydcclxuICAgIH0sXHJcbiAgICBidXR0b25TdHlsZToge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIGxvYWRlclN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9