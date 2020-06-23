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
      cityZip: "",
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
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york").then(function (response) {
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
          lineNumber: 39,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
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
          lineNumber: 42,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
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
          lineNumber: 46,
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
          lineNumber: 48,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
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
          lineNumber: 52,
          columnNumber: 48
        }
      })) : __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5WmlwIiwic3RhdGUiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJiaW5kIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic3R5bGVzIiwiZm9ybUNvbnRhaW5lciIsImRlc2NyaXB0aW9uQ2hhbmdlIiwiY2l0eVppcENoYW5nZSIsImNpdHlJbnB1dCIsImJ1dHRvblN0eWxlIiwibG9hZGVyU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNE5BV0MsVUFBQ0MsS0FBRCxFQUFXO0FBRTNCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxtQkFBVyxFQUFFRixLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBNUIsT0FBZDtBQUNILEtBZGtCOztBQUFBLHdOQWdCSCxVQUFDSixLQUFELEVBQVc7QUFDdkIsWUFBS0MsUUFBTCxDQUFjO0FBQUVJLGVBQU8sRUFBRUwsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQXhCLE9BQWQ7QUFDSCxLQWxCa0I7O0FBRWYsVUFBS0UsS0FBTCxHQUFhO0FBQ1RKLGlCQUFXLEVBQUUsRUFESjtBQUVURyxhQUFPLEVBQUUsRUFGQTtBQUdURSxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBTUEsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENB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S1hMLGFBQVcsRUFBRTtBQUNUTSxjQUFVLEVBQUU7QUFESCxHQUxGO0FBUVhMLGFBQVcsRUFBRTtBQUNUTSxhQUFTLEVBQUU7QUFERjtBQVJGLENBQWY7QUFlZWhDLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43MmNmZWE0YjQyZDIwODEyMDJmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvYkxpc3RzIGZyb20gJy4vSm9iTGlzdHMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgY2l0eVppcDogXCJcIixcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBkZXNjcmlwdGlvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNpdHlaaXBDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2l0eVppcDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoIGJ1dHRvbiBjbGlja2VkXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9qb2JzLmdpdGh1Yi5jb20vcG9zaXRpb25zLmpzb24/ZGVzY3JpcHRpb249cHl0aG9uJmxvY2F0aW9uPW5ldyt5b3JrYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmRlc2NyaXB0aW9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBleDogSmF2YSwgUnVieSwgSmF2YXNjcmlwdFwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaXR5WmlwQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5WmlwfSBzdHlsZT17c3R5bGVzLmNpdHlJbnB1dH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDaXR5IE5hbWUgb3IgWmlwY29kZVwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblN1Ym1pdH0gc3R5bGU9e3N0eWxlcy5idXR0b25TdHlsZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxkaXY+PExvYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMubG9hZGVyU3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJPdmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjMDBCRkZGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezMwMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPEpvYkxpc3RzIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBmb3JtQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaydcclxuICAgIH0sXHJcbiAgICBidXR0b25TdHlsZToge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIGxvYWRlclN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9