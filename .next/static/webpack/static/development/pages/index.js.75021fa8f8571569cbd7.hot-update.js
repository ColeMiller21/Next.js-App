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
      }); //need to replace for cityzip in url

      var splitCity = this.state.cityZip.split(" ").join("+");
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(this.state.description, "&location=").concat(this.state.cityZip)).then(function (response) {
        //console.log(response.data)
        if (response.data.length === 0) {
          listItem = __jsx("p", {
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 32
            }
          }, "There were no job results for this search");
        } else {
          _this2.state.jobs.push(response.data);

          console.log(_this2.state.jobs);

          _this2.setState({
            jobs: _this2.state.jobs[0]
          });

          console.log(_this2.state.jobs);
        }
      })["catch"](function (error) {
        return console.log(error);
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
          lineNumber: 54,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          lineNumber: 57,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
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
          lineNumber: 61,
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
          lineNumber: 63,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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
          lineNumber: 67,
          columnNumber: 48
        }
      })) : __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, __jsx("ul", {
        className: "list-group list-group-flush",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 29
        }
      }, this.state.jobs.map(function (job) {
        return __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
          company: job.company,
          title: job.title,
          image: job.company_logo,
          location: job.location,
          how_to_apply: job.how_to_apply,
          description: job.description,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 44
          }
        });
      }), ";"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsibGlzdEl0ZW0iLCJGb3JtIiwicHJvcHMiLCJldmVudCIsInNldFN0YXRlIiwiZGVzY3JpcHRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNpdHlaaXAiLCJzdGF0ZSIsImpvYnMiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJiaW5kIiwicHJldmVudERlZmF1bHQiLCJzcGxpdENpdHkiLCJzcGxpdCIsImpvaW4iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJsZW5ndGgiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3R5bGVzIiwiZm9ybUNvbnRhaW5lciIsImRlc2NyaXB0aW9uQ2hhbmdlIiwiY2l0eVppcENoYW5nZSIsImNpdHlJbnB1dCIsImJ1dHRvblN0eWxlIiwibG9hZGVyU3R5bGUiLCJtYXAiLCJqb2IiLCJjb21wYW55IiwidGl0bGUiLCJjb21wYW55X2xvZ28iLCJsb2NhdGlvbiIsImhvd190b19hcHBseSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjs7SUFDTUMsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDROQVlDLFVBQUNDLEtBQUQsRUFBVztBQUUzQixZQUFLQyxRQUFMLENBQWM7QUFBRUMsbUJBQVcsRUFBRUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQTVCLE9BQWQ7QUFDSCxLQWZrQjs7QUFBQSx3TkFpQkgsVUFBQ0osS0FBRCxFQUFXO0FBQ3ZCLFlBQUtDLFFBQUwsQ0FBYztBQUFFSSxlQUFPLEVBQUVMLEtBQUss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QUtILHNCQUFZLEVBQUVKLEdBQUcsQ0FBQ0ssWUFMZjtBQU1ILHFCQUFXLEVBQUVMLEdBQUcsQ0FBQy9CLFdBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBU0gsT0FWQSxDQURMLE1BREosQ0FWUixDQVpKLENBREo7QUEwQ0g7Ozs7RUF6RmNxQyw0Q0FBSyxDQUFDQyxTOztBQTJGeEI7QUFFRCxJQUFNZixNQUFNLEdBQUc7QUFDWEMsZUFBYSxFQUFFO0FBQ1hlLFdBQU8sRUFBRSxNQURFO0FBRVhDLFVBQU0sRUFBRTtBQUZHLEdBREo7QUFLWFosYUFBVyxFQUFFO0FBQ1RhLGNBQVUsRUFBRTtBQURILEdBTEY7QUFRWFosYUFBVyxFQUFFO0FBQ1RhLGFBQVMsRUFBRTtBQURGO0FBUkYsQ0FBZjtBQWVlOUMsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc1MDIxZmE4Zjg1NzE1NjljYmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9iTGlzdHMgZnJvbSAnLi9Kb2JMaXN0cyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxubGV0IGxpc3RJdGVtID0gXCJcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInB5dGhvblwiLFxyXG4gICAgICAgICAgICBjaXR5WmlwOiBcIm5ldyB5b3JrXCIsXHJcbiAgICAgICAgICAgIGpvYnM6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaXB0aW9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2l0eVppcENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5WmlwOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICAvL25lZWQgdG8gcmVwbGFjZSBmb3IgY2l0eXppcCBpbiB1cmxcclxuICAgICAgICBsZXQgc3BsaXRDaXR5ID0gdGhpcy5zdGF0ZS5jaXR5WmlwLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKVxyXG5cclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP2Rlc2NyaXB0aW9uPSR7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0mbG9jYXRpb249JHt0aGlzLnN0YXRlLmNpdHlaaXB9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0gPSA8cD5UaGVyZSB3ZXJlIG5vIGpvYiByZXN1bHRzIGZvciB0aGlzIHNlYXJjaDwvcD47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYnMucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuam9icylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgam9iczogdGhpcy5zdGF0ZS5qb2JzWzBdIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5qb2JzKVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmRlc2NyaXB0aW9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBleDogSmF2YSwgUnVieSwgSmF2YXNjcmlwdFwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaXR5WmlwQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5WmlwfSBzdHlsZT17c3R5bGVzLmNpdHlJbnB1dH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDaXR5IE5hbWUgb3IgWmlwY29kZVwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblN1Ym1pdH0gc3R5bGU9e3N0eWxlcy5idXR0b25TdHlsZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxkaXY+PExvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubG9hZGVyU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJPdmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMDBCRkZGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezMwMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5qb2JzLm1hcChqb2IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEpvYkxpc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55PXtqb2IuY29tcGFueX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtqb2IudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17am9iLmNvbXBhbnlfbG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtqb2IubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3dfdG9fYXBwbHk9e2pvYi5ob3dfdG9fYXBwbHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17am9iLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGZvcm1Db250YWluZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvblN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgbG9hZGVyU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=