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
      jobs: "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5WmlwIiwic3RhdGUiLCJqb2JzIiwibG9hZGluZyIsIm9uU3VibWl0IiwiYmluZCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXRDaXR5Iiwic3BsaXQiLCJqb2luIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwicHVzaCIsImRhdGEiLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiZGVzY3JpcHRpb25DaGFuZ2UiLCJjaXR5WmlwQ2hhbmdlIiwiY2l0eUlucHV0IiwiYnV0dG9uU3R5bGUiLCJsb2FkZXJTdHlsZSIsIm1hcCIsImpvYiIsInRpdGxlIiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJob3dfdG9fYXBwbHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNE5BWUMsVUFBQ0MsS0FBRCxFQUFXO0FBRTNCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxtQkFBVyxFQUFFRixLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBNUIsT0FBZDtBQUNILEtBZmtCOztBQUFBLHdOQWlCSCxVQUFDSixLQUFELEVBQVc7QUFDdkIsWUFBS0MsUUFBTCxDQUFjO0FBQUVJLGVBQU8sRUFBRUwsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQXhCLE9BQWQ7QUFDSCxLQW5Ca0I7O0FBRWYsVUFBS0UsS0FBTCxHQUFhO0FBQ1RKLGlCQUFXLEVBQUUsUUFESjtBQUVURyxhQUFPLEVBQUUsVUFGQTtBQUdURSxVQUFJLEVBQUUsRUFIRztBQUlUQyxhQUFPLEVBQUU7QUFKQSxLQUFiO0FBT0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQseUdBQWhCO0FBVGU7QUFVbEI7Ozs7NkJBV1FWLEssRUFBTztBQUFBOztBQUNaQSxXQUFLLENBQUNXLGNBQU47QUFDQSxXQUFLVixRQUFMLENBQWM7QUFBRU8sZUFBTyxFQUFFO0FBQVgsT0FBZDtBQUNBLFVBQUlJLFNBQVMsR0FBRyxLQUFLTixLQUFMLENBQVdELE9BQVgsQ0FBbUJRLEtBQW5CLENBQXlCLEdBQXpCLEVBQThCQyxJQUE5QixDQUFtQyxHQUFuQyxDQUFoQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWjtBQUNBSyxtREFBSyxDQUFDQyxHQUFOLGtHQUFvRyxLQUFLWixLQUFMLENBQVdKLFdBQS9HLHVCQUF1SSxLQUFLSSxLQUFMLENBQVdELE9BQWxKLEdBQ0tjLElBREwsQ0FDVSxVQUFBQyxRQUFRLEVBQUk7QUFDZDtBQUNBLGNBQUksQ0FBQ2QsS0FBTCxDQUFXQyxJQUFYLENBQWdCYyxJQUFoQixDQUFxQkQsUUFBUSxDQUFDRSxJQUE5Qjs7QUFDQVAsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBSSxDQUFDVixLQUFMLENBQVdDLElBQVgsQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUVILE9BTkw7QUFRSDs7OzZCQUNRO0FBQUE7O0FBQ0wsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsYUFBSyxFQUFFZ0IsTUFBTSxDQUFDQyxhQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUUsS0FBS0MsaUJBQWxDO0FBQXFELGFBQUssRUFBRSxLQUFLbkIsS0FBTCxDQUFXSixXQUF2RTtBQUFvRixpQkFBUyxFQUFDLGNBQTlGO0FBQTZHLG1CQUFXLEVBQUMsd0NBQXpIO0FBQWtLLHNCQUFXLFVBQTdLO0FBQXdMLDRCQUFpQixjQUF6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixFQUlJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRSxLQUFLd0IsYUFBbEM7QUFBaUQsYUFBSyxFQUFFLEtBQUtwQixLQUFMLENBQVdELE9BQW5FO0FBQTRFLGFBQUssRUFBRWtCLE1BQU0sQ0FBQ0ksU0FBMUY7QUFBcUcsaUJBQVMsRUFBQyxjQUEvRztBQUE4SCxtQkFBVyxFQUFDLHNCQUExSTtBQUFpSyxzQkFBVyxVQUE1SztBQUF1TCw0QkFBaUIsY0FBeE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxLQUFLbEIsUUFBcEM7QUFBOEMsYUFBSyxFQUFFYyxNQUFNLENBQUNLLFdBQTVEO0FBQXlFLGlCQUFTLEVBQUMsaUJBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosQ0FKSixDQURKLEVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUt0QixLQUFMLENBQVdFLE9BQVgsR0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLE1BQUMsMkRBQUQ7QUFDdkIsaUJBQVMsRUFBQyxhQURhO0FBRXZCLGFBQUssRUFBRWUsTUFBTSxDQUFDTSxXQUZTO0FBR3ZCLFlBQUksRUFBQyxNQUhrQjtBQUl2QixhQUFLLEVBQUMsU0FKaUI7QUFLdkIsY0FBTSxFQUFFLEdBTGU7QUFNdkIsYUFBSyxFQUFFLEdBTmdCO0FBT3ZCLGVBQU8sRUFBRSxJQVBjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBTCxDQUFyQixHQVNHO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsNkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUt2QixLQUFMLENBQVdDLElBQVgsQ0FBZ0J1QixHQUFoQixDQUFvQixVQUFBQyxHQUFHLEVBQUk7QUFDeEIsZUFBTyxNQUFDLGlEQUFEO0FBQ0gsZUFBSyxFQUFFQSxHQUFHLENBQUNDLEtBRFI7QUFFSCxlQUFLLEVBQUVELEdBQUcsQ0FBQ0UsWUFGUjtBQUdILGtCQUFRLEVBQUVGLEdBQUcsQ0FBQ0csUUFIWDtBQUlILHNCQUFZLEVBQUVILEdBQUcsQ0FBQ0ksWUFKZjtBQUtILHFCQUFXLEVBQUVKLEdBQUcsQ0FBQzdCLFdBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBUUgsT0FUQSxDQURMLENBREosQ0FWUixDQVpKLENBREo7QUEwQ0g7Ozs7RUEvRWNrQyw0Q0FBSyxDQUFDQyxTOztBQWlGeEI7QUFFRCxJQUFNZCxNQUFNLEdBQUc7QUFDWEMsZUFBYSxFQUFFO0FBQ1hjLFdBQU8sRUFBRSxNQURFO0FBRVhDLFVBQU0sRUFBRTtBQUZHLEdBREo7QUFLWFgsYUFBVyxFQUFFO0FBQ1RZLGNBQVUsRUFBRTtBQURILEdBTEY7QUFRWFgsYUFBVyxFQUFFO0FBQ1RZLGFBQVMsRUFBRTtBQURGO0FBUkYsQ0FBZjtBQWVlM0MsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmZmMjNhNTBiMDNjNzAzYzhkN2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9iTGlzdHMgZnJvbSAnLi9Kb2JMaXN0cyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInB5dGhvblwiLFxyXG4gICAgICAgICAgICBjaXR5WmlwOiBcIm5ldyB5b3JrXCIsXHJcbiAgICAgICAgICAgIGpvYnM6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpcHRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaXR5WmlwQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlaaXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGxldCBzcGxpdENpdHkgPSB0aGlzLnN0YXRlLmNpdHlaaXAuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coc3BsaXRDaXR5KVxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9qb2JzLmdpdGh1Yi5jb20vcG9zaXRpb25zLmpzb24/ZGVzY3JpcHRpb249JHt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSZsb2NhdGlvbj0ke3RoaXMuc3RhdGUuY2l0eVppcH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYnMucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5qb2JzWzBdKVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmRlc2NyaXB0aW9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBleDogSmF2YSwgUnVieSwgSmF2YXNjcmlwdFwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaXR5WmlwQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5WmlwfSBzdHlsZT17c3R5bGVzLmNpdHlJbnB1dH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDaXR5IE5hbWUgb3IgWmlwY29kZVwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblN1Ym1pdH0gc3R5bGU9e3N0eWxlcy5idXR0b25TdHlsZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxkaXY+PExvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubG9hZGVyU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJPdmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMDBCRkZGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezMwMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JzLm1hcChqb2IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEpvYkxpc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17am9iLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2pvYi5jb21wYW55X2xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17am9iLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG93X3RvX2FwcGx5PXtqb2IuaG93X3RvX2FwcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2pvYi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBmb3JtQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaydcclxuICAgIH0sXHJcbiAgICBidXR0b25TdHlsZToge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIGxvYWRlclN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9