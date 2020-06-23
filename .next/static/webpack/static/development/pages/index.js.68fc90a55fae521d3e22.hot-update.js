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
          _this2.state.jobs.push(response.data); // console.log(this.state.jobs[0])


          _this2.setState({
            jobs: _this2.state.jobs[0]
          });

          console.log(_this2.state.jobs);

          _this2.state.jobs.map(function (job) {
            listItem = __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
              company: job.company,
              title: job.title,
              image: job.company_logo,
              location: job.location,
              how_to_apply: job.how_to_apply,
              description: job.description,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 36
              }
            });
          });
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
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
          lineNumber: 67,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
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
          lineNumber: 71,
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
          lineNumber: 73,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
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
          lineNumber: 77,
          columnNumber: 48
        }
      })) : __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }
      }, __jsx("ul", {
        className: "list-group list-group-flush",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsibGlzdEl0ZW0iLCJGb3JtIiwicHJvcHMiLCJldmVudCIsInNldFN0YXRlIiwiZGVzY3JpcHRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNpdHlaaXAiLCJzdGF0ZSIsImpvYnMiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJiaW5kIiwicHJldmVudERlZmF1bHQiLCJzcGxpdENpdHkiLCJzcGxpdCIsImpvaW4iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJsZW5ndGgiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImpvYiIsImNvbXBhbnkiLCJ0aXRsZSIsImNvbXBhbnlfbG9nbyIsImxvY2F0aW9uIiwiaG93X3RvX2FwcGx5IiwiZXJyb3IiLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiZGVzY3JpcHRpb25DaGFuZ2UiLCJjaXR5WmlwQ2hhbmdlIiwiY2l0eUlucHV0IiwiYnV0dG9uU3R5bGUiLCJsb2FkZXJTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjs7SUFDTUMsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDROQVlDLFVBQUNDLEtBQUQsRUFBVztBQUUzQixZQUFLQyxRQUFMLENBQWM7QUFBRUMsbUJBQVcsRUFBRUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQTVCLE9BQWQ7QUFDSCxLQWZrQjs7QUFBQSx3TkFpQkgsVUFBQ0osS0FBRCxFQUFXO0FBQ3ZCLFlBQUtDLFFBQUwsQ0FBYztBQUFFSSxlQUFPLEVBQUVMLEtBQUss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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSSxpQkFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS3pDLFFBREwsQ0FESixDQVZSLENBWkosQ0FESjtBQWdDSDs7OztFQXpGYzBDLDRDQUFLLENBQUNDLFM7O0FBMkZ4QjtBQUVELElBQU1SLE1BQU0sR0FBRztBQUNYQyxlQUFhLEVBQUU7QUFDWFEsV0FBTyxFQUFFLE1BREU7QUFFWEMsVUFBTSxFQUFFO0FBRkcsR0FESjtBQUtYTCxhQUFXLEVBQUU7QUFDVE0sY0FBVSxFQUFFO0FBREgsR0FMRjtBQVFYTCxhQUFXLEVBQUU7QUFDVE0sYUFBUyxFQUFFO0FBREY7QUFSRixDQUFmO0FBZWU5QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjhmYzkwYTU1ZmFlNTIxZDNlMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2JMaXN0cyBmcm9tICcuL0pvYkxpc3RzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5sZXQgbGlzdEl0ZW0gPSBcIlwiO1xyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicHl0aG9uXCIsXHJcbiAgICAgICAgICAgIGNpdHlaaXA6IFwibmV3IHlvcmtcIixcclxuICAgICAgICAgICAgam9iczogW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpcHRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaXR5WmlwQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlaaXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIC8vbmVlZCB0byByZXBsYWNlIGZvciBjaXR5emlwIGluIHVybFxyXG4gICAgICAgIGxldCBzcGxpdENpdHkgPSB0aGlzLnN0YXRlLmNpdHlaaXAuc3BsaXQoXCIgXCIpLmpvaW4oXCIrXCIpXHJcblxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9qb2JzLmdpdGh1Yi5jb20vcG9zaXRpb25zLmpzb24/ZGVzY3JpcHRpb249JHt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSZsb2NhdGlvbj0ke3RoaXMuc3RhdGUuY2l0eVppcH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IDxwPlRoZXJlIHdlcmUgbm8gam9iIHJlc3VsdHMgZm9yIHRoaXMgc2VhcmNoPC9wPjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuam9icy5wdXNoKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5qb2JzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqb2JzOiB0aGlzLnN0YXRlLmpvYnNbMF0gfSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpvYnMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qb2JzLm1hcChqb2IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IDxKb2JMaXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueT17am9iLmNvbXBhbnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17am9iLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2pvYi5jb21wYW55X2xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17am9iLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG93X3RvX2FwcGx5PXtqb2IuaG93X3RvX2FwcGx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2pvYi5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5kZXNjcmlwdGlvbkNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24gZXg6IEphdmEsIFJ1YnksIEphdmFzY3JpcHRcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuY2l0eVppcENoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY2l0eVppcH0gc3R5bGU9e3N0eWxlcy5jaXR5SW5wdXR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQ2l0eSBOYW1lIG9yIFppcGNvZGVcIiBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9IHN0eWxlPXtzdHlsZXMuYnV0dG9uU3R5bGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8ZGl2PjxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmxvYWRlclN0eWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiT3ZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXszMDAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBmb3JtQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaydcclxuICAgIH0sXHJcbiAgICBidXR0b25TdHlsZToge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIGxvYWRlclN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9