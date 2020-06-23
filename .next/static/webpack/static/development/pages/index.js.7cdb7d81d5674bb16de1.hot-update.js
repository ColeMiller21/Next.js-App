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




var listItem = "";

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
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(this.state.description, "&location=").concat(this.state.cityZip)).then(function (response) {
        //console.log(response.data)
        if (response.data.length === 0) {
          listItem = __jsx("p", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 32
            }
          }, "There were no job results for this search");
        } else {
          _this2.state.jobs.push(response.data);

          console.log(_this2.state.jobs[0]);

          _this2.state.jobs.map(function (job) {
            listItem = __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
              title: job.title,
              image: job.company_logo,
              location: job.location,
              how_to_apply: job.how_to_apply,
              description: job.description,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 36
              }
            });
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
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
          lineNumber: 62,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
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
          lineNumber: 66,
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
          lineNumber: 68,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
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
          lineNumber: 72,
          columnNumber: 48
        }
      })) : __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }
      }, __jsx("ul", {
        className: "list-group list-group-flush",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }
      }, listItem))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsibGlzdEl0ZW0iLCJGb3JtIiwicHJvcHMiLCJldmVudCIsInNldFN0YXRlIiwiZGVzY3JpcHRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNpdHlaaXAiLCJzdGF0ZSIsImpvYnMiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJiaW5kIiwicHJldmVudERlZmF1bHQiLCJzcGxpdENpdHkiLCJzcGxpdCIsImpvaW4iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJsZW5ndGgiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImpvYiIsInRpdGxlIiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJob3dfdG9fYXBwbHkiLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiZGVzY3JpcHRpb25DaGFuZ2UiLCJjaXR5WmlwQ2hhbmdlIiwiY2l0eUlucHV0IiwiYnV0dG9uU3R5bGUiLCJsb2FkZXJTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjs7SUFDTUMsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDROQVlDLFVBQUNDLEtBQUQsRUFBVztBQUUzQixZQUFLQyxRQUFMLENBQWM7QUFBRUMsbUJBQVcsRUFBRUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQTVCLE9BQWQ7QUFDSCxLQWZrQjs7QUFBQSx3TkFpQkgsVUFBQ0osS0FBRCxFQUFXO0FBQ3ZCLFlBQUtDLFFBQUwsQ0FBYztBQUFFSSxlQUFPLEVBQUVMLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUF4QixPQUFkO0FBQ0gsS0FuQmtCOztBQUVmLFVBQUtFLEtBQUwsR0FBYTtBQUNUSixpQkFBVyxFQUFFLFFBREo7QUFFVEcsYUFBTyxFQUFFLFVBRkE7QUFHVEUsVUFBSSxFQUFFLEVBSEc7QUFJVEMsYUFBTyxFQUFFO0FBSkEsS0FBYjtBQU9BLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLHlHQUFoQjtBQVRlO0FBVWxCOzs7OzZCQVdRVixLLEVBQU87QUFBQTs7QUFDWkEsV0FBSyxDQUFDVyxjQUFOO0FBQ0EsV0FBS1YsUUFBTCxDQUFjO0FBQUVPLGVBQU8sRUFBRTtBQUFYLE9BQWQ7QUFDQSxVQUFJSSxTQUFTLEdBQUcsS0FBS04sS0FBTCxDQUFXRCxPQUFYLENBQW1CUSxLQUFuQixDQUF5QixHQUF6QixFQUE4QkMsSUFBOUIsQ0FBbUMsR0FBbkMsQ0FBaEI7QUFFQUMsbURBQUssQ0FBQ0MsR0FBTixrR0FBb0csS0FBS1YsS0FBTCxDQUFXSixXQUEvRyx1QkFBdUksS0FBS0ksS0FBTCxDQUFXRCxPQUFsSixHQUNLWSxJQURMLENBQ1UsVUFBQUMsUUFBUSxFQUFJO0FBQ2Q7QUFDQSxZQUFJQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM1QnZCLGtCQUFRLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBWDtBQUNILFNBRkQsTUFHSztBQUNELGdCQUFJLENBQUNTLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQmMsSUFBaEIsQ0FBcUJILFFBQVEsQ0FBQ0MsSUFBOUI7O0FBQ0FHLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUNqQixLQUFMLENBQVdDLElBQVgsQ0FBZ0IsQ0FBaEIsQ0FBWjs7QUFDQSxnQkFBSSxDQUFDRCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JpQixHQUFoQixDQUFvQixVQUFBQyxHQUFHLEVBQUk7QUFDdkI1QixvQkFBUSxHQUFHLE1BQUMsaURBQUQ7QUFDUCxtQkFBSyxFQUFFNEIsR0FBRyxDQUFDQyxLQURKO0FBRVAsbUJBQUssRUFBRUQsR0FBRyxDQUFDRSxZQUZKO0FBR1Asc0JBQVEsRUFBRUYsR0FBRyxDQUFDRyxRQUhQO0FBSVAsMEJBQVksRUFBRUgsR0FBRyxDQUFDSSxZQUpYO0FBS1AseUJBQVcsRUFBRUosR0FBRyxDQUFDdkIsV0FMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVg7QUFRSCxXQVREO0FBVUg7QUFFSixPQXJCTDtBQXVCSDs7OzZCQUNRO0FBQ0wsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBMkIsYUFBSyxFQUFFNEIsTUFBTSxDQUFDQyxhQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUUsS0FBS0MsaUJBQWxDO0FBQXFELGFBQUssRUFBRSxLQUFLMUIsS0FBTCxDQUFXSixXQUF2RTtBQUFvRixpQkFBUyxFQUFDLGNBQTlGO0FBQTZHLG1CQUFXLEVBQUMsd0NBQXpIO0FBQWtLLHNCQUFXLFVBQTdLO0FBQXdMLDRCQUFpQixjQUF6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixFQUlJO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVEsRUFBRSxLQUFLK0IsYUFBbEM7QUFBaUQsYUFBSyxFQUFFLEtBQUszQixLQUFMLENBQVdELE9BQW5FO0FBQTRFLGFBQUssRUFBRXlCLE1BQU0sQ0FBQ0ksU0FBMUY7QUFBcUcsaUJBQVMsRUFBQyxjQUEvRztBQUE4SCxtQkFBVyxFQUFDLHNCQUExSTtBQUFpSyxzQkFBVyxVQUE1SztBQUF1TCw0QkFBaUIsY0FBeE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxLQUFLekIsUUFBcEM7QUFBOEMsYUFBSyxFQUFFcUIsTUFBTSxDQUFDSyxXQUE1RDtBQUF5RSxpQkFBUyxFQUFDLGlCQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLENBSkosQ0FESixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLN0IsS0FBTCxDQUFXRSxPQUFYLEdBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxNQUFDLDJEQUFEO0FBQ3ZCLGlCQUFTLEVBQUMsYUFEYTtBQUV2QixhQUFLLEVBQUVzQixNQUFNLENBQUNNLFdBRlM7QUFHdkIsWUFBSSxFQUFDLE1BSGtCO0FBSXZCLGFBQUssRUFBQyxTQUppQjtBQUt2QixjQUFNLEVBQUUsR0FMZTtBQU12QixhQUFLLEVBQUUsR0FOZ0I7QUFPdkIsZUFBTyxFQUFFLElBUGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFMLENBQXJCLEdBU0c7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUksaUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0t2QyxRQURMLENBREosQ0FWUixDQVpKLENBREo7QUFpQ0g7Ozs7RUFyRmN3Qyw0Q0FBSyxDQUFDQyxTOztBQXVGeEI7QUFFRCxJQUFNUixNQUFNLEdBQUc7QUFDWEMsZUFBYSxFQUFFO0FBQ1hRLFdBQU8sRUFBRSxNQURFO0FBRVhDLFVBQU0sRUFBRTtBQUZHLEdBREo7QUFLWEwsYUFBVyxFQUFFO0FBQ1RNLGNBQVUsRUFBRTtBQURILEdBTEY7QUFRWEwsYUFBVyxFQUFFO0FBQ1RNLGFBQVMsRUFBRTtBQURGO0FBUkYsQ0FBZjtBQWVlNUMsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdjZGI3ZDgxZDU2NzRiYjE2ZGUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9iTGlzdHMgZnJvbSAnLi9Kb2JMaXN0cyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxubGV0IGxpc3RJdGVtID0gXCJcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInB5dGhvblwiLFxyXG4gICAgICAgICAgICBjaXR5WmlwOiBcIm5ldyB5b3JrXCIsXHJcbiAgICAgICAgICAgIGpvYnM6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaXB0aW9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2l0eVppcENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5WmlwOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICBsZXQgc3BsaXRDaXR5ID0gdGhpcy5zdGF0ZS5jaXR5WmlwLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKVxyXG5cclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP2Rlc2NyaXB0aW9uPSR7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0mbG9jYXRpb249JHt0aGlzLnN0YXRlLmNpdHlaaXB9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0gPSA8cD5UaGVyZSB3ZXJlIG5vIGpvYiByZXN1bHRzIGZvciB0aGlzIHNlYXJjaDwvcD47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYnMucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuam9ic1swXSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYnMubWFwKGpvYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtID0gPEpvYkxpc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17am9iLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2pvYi5jb21wYW55X2xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17am9iLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG93X3RvX2FwcGx5PXtqb2IuaG93X3RvX2FwcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2pvYi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuZGVzY3JpcHRpb25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGV4OiBKYXZhLCBSdWJ5LCBKYXZhc2NyaXB0XCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmNpdHlaaXBDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlaaXB9IHN0eWxlPXtzdHlsZXMuY2l0eUlucHV0fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNpdHkgTmFtZSBvciBaaXBjb2RlXCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fSBzdHlsZT17c3R5bGVzLmJ1dHRvblN0eWxlfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPGRpdj48TG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sb2FkZXJTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIk92YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMwMEJGRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17MzAwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGZvcm1Db250YWluZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvblN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgbG9hZGVyU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=