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
/* harmony import */ var _JobList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JobList */ "./components/JobList.js");
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
      description: "",
      cityZip: "",
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

          _this2.setState({
            jobs: _this2.state.jobs[0],
            loading: false
          });
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
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
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
          lineNumber: 58,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }
      }, __jsx("input", {
        type: "text",
        onChange: this.cityZipChange,
        value: this.state.cityZip,
        style: styles.cityInput,
        className: "form-control",
        placeholder: "City or Zipcode",
        "aria-label": "Username",
        "aria-describedby": "basic-addon1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
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
          lineNumber: 64,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
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
          lineNumber: 68,
          columnNumber: 48
        }
      })) : __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, __jsx("ul", {
        className: "list-group list-group-flush",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 29
        }
      }, this.state.jobs.map(function (job, i) {
        return __jsx(_JobList__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: job.company + i,
          company: job.company,
          title: job.title,
          image: job.company_logo,
          location: job.location,
          how_to_apply: job.how_to_apply,
          description: job.description,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
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
    borderBottom: '1px solid #5bc0de'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsibGlzdEl0ZW0iLCJGb3JtIiwicHJvcHMiLCJldmVudCIsInNldFN0YXRlIiwiZGVzY3JpcHRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNpdHlaaXAiLCJzdGF0ZSIsImpvYnMiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJiaW5kIiwicHJldmVudERlZmF1bHQiLCJzcGxpdENpdHkiLCJzcGxpdCIsImpvaW4iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJsZW5ndGgiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZm9ybUNvbnRhaW5lciIsImRlc2NyaXB0aW9uQ2hhbmdlIiwiY2l0eVppcENoYW5nZSIsImNpdHlJbnB1dCIsImJ1dHRvblN0eWxlIiwibG9hZGVyU3R5bGUiLCJtYXAiLCJqb2IiLCJpIiwiY29tcGFueSIsInRpdGxlIiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJob3dfdG9fYXBwbHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhZGRpbmciLCJib3JkZXJCb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7O0lBQ01DLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw0TkFZQyxVQUFDQyxLQUFELEVBQVc7QUFFM0IsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLG1CQUFXLEVBQUVGLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUE1QixPQUFkO0FBQ0gsS0Fma0I7O0FBQUEsd05BaUJILFVBQUNKLEtBQUQsRUFBVztBQUN2QixZQUFLQyxRQUFMLENBQWM7QUFBRUksZUFBTyxF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WUFOZjtBQU9ILHFCQUFXLEVBQUVOLEdBQUcsQ0FBQy9CLFdBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBVUgsT0FaQSxDQURMLENBREosQ0FWUixDQVpKLENBREo7QUE0Q0g7Ozs7RUE1RmNzQyw0Q0FBSyxDQUFDQyxTOztBQThGeEI7QUFFRCxJQUFNaEIsTUFBTSxHQUFHO0FBQ1hDLGVBQWEsRUFBRTtBQUNYZ0IsV0FBTyxFQUFFLE1BREU7QUFFWEMsZ0JBQVksRUFBRTtBQUZILEdBREo7QUFLWGIsYUFBVyxFQUFFO0FBQ1RjLGNBQVUsRUFBRTtBQURILEdBTEY7QUFRWGIsYUFBVyxFQUFFO0FBQ1RjLGFBQVMsRUFBRTtBQURGO0FBUkYsQ0FBZjtBQWVlL0MsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjJlZDJiOWZjZGQ0MTkxZTRlOTU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9iTGlzdCBmcm9tICcuL0pvYkxpc3QnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmxldCBsaXN0SXRlbSA9IFwiXCI7XHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgY2l0eVppcDogXCJcIixcclxuICAgICAgICAgICAgam9iczogW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpcHRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaXR5WmlwQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlaaXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIC8vbmVlZCB0byByZXBsYWNlIGZvciBjaXR5emlwIGluIHVybFxyXG4gICAgICAgIGxldCBzcGxpdENpdHkgPSB0aGlzLnN0YXRlLmNpdHlaaXAuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpXHJcblxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9qb2JzLmdpdGh1Yi5jb20vcG9zaXRpb25zLmpzb24/ZGVzY3JpcHRpb249JHt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSZsb2NhdGlvbj0ke3RoaXMuc3RhdGUuY2l0eVppcH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IDxwPlRoZXJlIHdlcmUgbm8gam9iIHJlc3VsdHMgZm9yIHRoaXMgc2VhcmNoPC9wPjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9icy5wdXNoKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYnM6IHRoaXMuc3RhdGUuam9ic1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmRlc2NyaXB0aW9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBleDogSmF2YSwgUnVieSwgSmF2YXNjcmlwdFwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaXR5WmlwQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5WmlwfSBzdHlsZT17c3R5bGVzLmNpdHlJbnB1dH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDaXR5IG9yIFppcGNvZGVcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uU3R5bGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8ZGl2PjxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxvYWRlclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiT3ZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9icy5tYXAoKGpvYiwgaSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxKb2JMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2pvYi5jb21wYW55ICsgaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2pvYi5jb21wYW55fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2pvYi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtqb2IuY29tcGFueV9sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2pvYi5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvd190b19hcHBseT17am9iLmhvd190b19hcHBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtqb2IuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBmb3JtQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjNWJjMGRlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvblN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgbG9hZGVyU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6ICcxMDBweCdcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=