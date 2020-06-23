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
      loading: true
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
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container",
        style: styles.formContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
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
          lineNumber: 36,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "input-group mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-xs-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
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
          lineNumber: 40,
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
          lineNumber: 42,
          columnNumber: 25
        }
      }, "Search"))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, this.state.loading ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 43
        }
      }, "loading jobs....") : __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 73
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

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5030f387d328e4415785 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5030f387d328e4415785 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ./loader */ "./node_modules/react-loader-spinner/dist/loader/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _loader) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Loader;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var componentNames = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots", "Watch", "RevolvingDot", "Triangle", "Plane", "MutatingDots", "CradleLoader"];

  function componentName(type) {
    if (componentNames.includes(type)) {
      return _loader.Spinner[type];
    }
    return _loader.Spinner.Audio;
  }

  /**
   * @return {null}
   */
  function Loader(props) {
    var _useState = (0, _react.useState)(true),
        _useState2 = _slicedToArray(_useState, 2),
        display = _useState2[0],
        setDisplay = _useState2[1];

    (0, _react.useEffect)(function () {
      var timer = void 0;
      if (props.timeout && props.timeout > 0) {
        timer = setTimeout(function () {
          setDisplay(false);
        }, props.timeout);
      }

      return function () {
        if (timer) clearTimeout(timer);
      };
    });

    if (!props.visible || props.visible === "false") {
      return null;
    }
    return display ? _react2.default.createElement(
      "div",
      { "aria-busy": "true", className: props.className, style: props.style },
      _react2.default.createElement(componentName(props.type), _extends({}, props))
    ) : null;
  }

  Loader.propTypes = {
    type: _propTypes2.default.oneOf([].concat(componentNames)),
    style: _propTypes2.default.objectOf(_propTypes2.default.string),
    className: _propTypes2.default.string,
    visible: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    timeout: _propTypes2.default.number
  };

  Loader.defaultProps = {
    type: "Audio",
    style: {},
    className: "",
    visible: true,
    timeout: 0
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Audio.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Audio.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Audio = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Audio = exports.Audio = function Audio(props) {
    return _react2.default.createElement(
      "svg",
      {
        height: props.height,
        width: props.width,
        fill: props.color,
        viewBox: "0 0 55 80",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { transform: "matrix(1 0 0 -1 0 80)" },
        _react2.default.createElement(
          "rect",
          { width: "10", height: "20", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "4.3s",
            values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "15", width: "10", height: "80", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "80;55;33;5;75;23;73;33;12;14;60;80",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "30", width: "10", height: "50", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "1.4s",
            values: "50;34;78;23;56;23;34;76;80;54;21;50",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "45", width: "10", height: "30", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "30;45;13;80;56;72;45;76;34;23;67;30",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };

  Audio.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Audio.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/BallTriangle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BallTriangle = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BallTriangle = exports.BallTriangle = function BallTriangle(props) {
    return _react2.default.createElement(
      "svg",
      {
        height: props.height,
        width: props.width,
        stroke: props.color,
        viewBox: "0 0 57 57",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          _react2.default.createElement(
            "circle",
            { cx: "5", cy: "50", r: props.radius },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;5;50;50",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              values: "5;27;49;5",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { cx: "27", cy: "5", r: props.radius },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              from: "5",
              to: "5",
              values: "5;50;50;5",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              from: "27",
              to: "27",
              values: "27;49;5;27",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { cx: "49", cy: "50", r: props.radius },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;50;5;50",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              from: "49",
              to: "49",
              begin: "0s",
              dur: "2.2s",
              values: "49;5;27;49",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };

  BallTriangle.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  BallTriangle.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 5,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Bars.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Bars.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Bars = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Bars = exports.Bars = function Bars(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        fill: props.color,
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "rect",
        { y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "30", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "60", width: "15", height: "140", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "90", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "120", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Bars.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Bars.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Circles.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Circles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Circles = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Circles = exports.Circles = function Circles(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 135 135",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "path",
        { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "-360 67 67",
          dur: "2.5s",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "path",
        { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "360 67 67",
          dur: "8s",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Circles.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Circles.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/CradleLoader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CradleLoader = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var CradleLoader = exports.CradleLoader = function CradleLoader(props) {
    return _react2.default.createElement(
      "div",
      { "aria-label": props.label, role: "presentation", className: "container" },
      _react2.default.createElement(
        "div",
        { className: "react-spinner-loader-swing" },
        _react2.default.createElement("div", { className: "react-spinner-loader-swing-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "react-spinner-loader-swing-r" })
      ),
      _react2.default.createElement(
        "div",
        { className: "react-spinner-loader-shadow" },
        _react2.default.createElement("div", { className: "react-spinner-loader-shadow-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "react-spinner-loader-shadow-r" })
      )
    );
  };

  CradleLoader.propTypes = {
    label: _propTypes2.default.string
  };

  CradleLoader.defaultProps = {
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Grid.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Grid.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Grid = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Grid = exports.Grid = function Grid(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 105 105",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "12.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "52.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "100ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "12.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "300ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "52.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "600ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "12.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "800ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "52.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "400ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "92.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "700ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "92.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "500ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "92.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "200ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Grid.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Grid.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 12.5,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Hearts.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Hearts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hearts = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Hearts = exports.Hearts = function Hearts(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 140 64",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "path",
        {
          d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5"
        },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "path",
        {
          d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5"
        },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0.7s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })
    );
  };

  Hearts.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Hearts.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/MutatingDots.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MutatingDots = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var MutatingDots = exports.MutatingDots = function MutatingDots(props) {
    return _react2.default.createElement(
      "svg",
      { id: "goo-loader", width: props.width, height: props.height, "aria-label": props.label },
      _react2.default.createElement(
        "filter",
        { id: "fancy-goo" },
        _react2.default.createElement("feGaussianBlur", { "in": "SourceGraphic", stdDeviation: "6", result: "blur" }),
        _react2.default.createElement("feColorMatrix", {
          "in": "blur",
          mode: "matrix",
          values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
          result: "goo"
        }),
        _react2.default.createElement("feComposite", { "in": "SourceGraphic", in2: "goo", operator: "atop" })
      ),
      _react2.default.createElement(
        "g",
        { filter: "url(#fancy-goo)" },
        _react2.default.createElement("animateTransform", {
          id: "mainAnim",
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          from: "0 50 50",
          to: "359 50 50",
          dur: "1.2s",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement(
          "circle",
          { cx: "50%", cy: "40", r: props.radius, fill: props.color },
          _react2.default.createElement("animate", {
            id: "cAnim1",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0;cAnim1.end+0.2s",
            calcMode: "spline",
            values: "40;20;40",
            keyTimes: "0;0.3;1",
            keySplines: "0.175, 0.885, 0.320, 1.5; 0.175, 0.885, 0.320, 1.5"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "50%", cy: "60", r: props.radius, fill: props.secondaryColor },
          _react2.default.createElement("animate", {
            id: "cAnim2",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0.4s;cAnim2.end+0.2s",
            calcMode: "spline",
            values: "60;80;60",
            keyTimes: "0;0.3;1",
            keySplines: "0.175, 0.885, 0.320, 1.5;0.175, 0.885, 0.320, 1.5"
          })
        )
      )
    );
  };

  MutatingDots.propTypes = {
    width: _propTypes2.default.number,
    secondaryColor: _propTypes2.default.string,
    height: _propTypes2.default.number,
    color: _propTypes2.default.string,
    radius: _propTypes2.default.number,
    label: _propTypes2.default.string
  };

  MutatingDots.defaultProps = {
    width: 80,
    height: 90,
    color: "green",
    radius: 11,
    secondaryColor: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Oval.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Oval.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Oval = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Oval = exports.Oval = function Oval(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          _react2.default.createElement("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: props.radius }),
          _react2.default.createElement(
            "path",
            { d: "M36 18c0-9.94-8.06-18-18-18" },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "1s",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };

  Oval.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Oval.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 18
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Plane.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Plane.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Plane = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Plane = exports.Plane = function Plane(props) {
    return _react2.default.createElement(
      "svg",
      {
        className: "react-spinner-loader-svg-calLoader",
        xmlns: "http://www.w3.org/2000/svg",
        width: "230",
        height: "230",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "desc",
        null,
        "Plane animation. Loading "
      ),
      _react2.default.createElement("path", {
        className: "react-spinner-loader-cal-loader__path",
        style: { stroke: props.secondaryColor },
        d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
        fill: "none",
        stroke: "#0099cc",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "10 10 10 10 10 10 10 432",
        strokeDashoffset: "77"
      }),
      _react2.default.createElement("path", {
        className: "cal-loader__plane",
        style: { fill: props.color },
        d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
        fill: "#000033"
      })
    );
  };

  Plane.propTypes = {
    secondaryColor: _propTypes2.default.string,
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Plane.defaultProps = {
    secondaryColor: "grey",
    color: "#FFA500",
    label: "async-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Puff.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Puff.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Puff = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Puff = exports.Puff = function Puff(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "0s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };

  Puff.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Puff.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 1
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RevolvingDot = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var RevolvingDot = exports.RevolvingDot = function RevolvingDot(props) {
    return _react2.default.createElement(
      "svg",
      {
        version: "1.1",
        width: props.width,
        height: props.height,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        "aria-label": props.label
      },
      _react2.default.createElement("circle", {
        fill: "none",
        stroke: props.color,
        strokeWidth: "4",
        cx: "50",
        cy: "50",
        r: props.radius + 38,
        style: { opacity: 0.5 }
      }),
      _react2.default.createElement(
        "circle",
        { fill: props.color, stroke: props.color, strokeWidth: "3", cx: "8", cy: "54", r: props.radius },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0 50 48",
          to: "360 50 52",
          repeatCount: "indefinite"
        })
      )
    );
  };

  RevolvingDot.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  RevolvingDot.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 6
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Rings.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Rings.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Rings = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Rings = exports.Rings = function Rings(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 45 45",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius, strokeOpacity: "0" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "1.5s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "stroke-opacity",
            begin: "1.5s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "stroke-width",
            begin: "1.5s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius, strokeOpacity: "0" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "3s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "3s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeWidth",
            begin: "3s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius + 2 },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.5s",
            values: "6;1;2;3;4;5;6",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };

  Rings.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Rings.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 6,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/TailSpin.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TailSpin = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TailSpin = exports.TailSpin = function TailSpin(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement(
          "linearGradient",
          { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
          _react2.default.createElement("stop", { stopColor: props.color, stopOpacity: "0", offset: "0%" }),
          _react2.default.createElement("stop", { stopColor: props.color, stopOpacity: ".631", offset: "63.146%" }),
          _react2.default.createElement("stop", { stopColor: props.color, offset: "100%" })
        )
      ),
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)" },
          _react2.default.createElement(
            "path",
            { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: props.color, strokeWidth: "2" },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { fill: "#fff", cx: "36", cy: "18", r: props.radius },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };

  TailSpin.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  TailSpin.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 1,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/ThreeDots.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ThreeDots = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ThreeDots = exports.ThreeDots = function ThreeDots(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "circle",
        { cx: "15", cy: "15", r: props.radius + 6 },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        {
          cx: "60",
          cy: "15",
          r: props.radius,
          attributeName: "fillOpacity",
          from: "1",
          to: "0.3"
        },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "9",
          to: "9",
          begin: "0s",
          dur: "0.8s",
          values: "9;15;9",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "0.5",
          to: "0.5",
          begin: "0s",
          dur: "0.8s",
          values: ".5;1;.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "105", cy: "15", r: props.radius + 6 },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };

  ThreeDots.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  ThreeDots.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 9
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Triangle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Triangle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Triangle = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Triangle = exports.Triangle = function Triangle(props) {
    return _react2.default.createElement(
      "div",
      { className: "react-spinner-loader-svg" },
      _react2.default.createElement(
        "svg",
        {
          id: "triangle",
          width: props.width,
          height: props.height,
          viewBox: "-3 -4 39 39",
          "aria-label": props.label
        },
        _react2.default.createElement("polygon", { fill: "transparent", stroke: props.color, strokeWidth: "1", points: "16,0 32,32 0,32" })
      )
    );
  };

  Triangle.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Triangle.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Watch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Watch = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Watch = exports.Watch = function Watch(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        version: "1.1",
        id: "L2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "aria-label": props.label
      },
      _react2.default.createElement("circle", {
        fill: "none",
        stroke: props.color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        cx: "50",
        cy: "50",
        r: props.radius
      }),
      _react2.default.createElement(
        "line",
        {
          fill: "none",
          strokeLinecap: "round",
          stroke: props.color,
          strokeWidth: "4",
          strokeMiterlimit: "10",
          x1: "50",
          y1: "50",
          x2: "85",
          y2: "50.5"
        },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "line",
        {
          fill: "none",
          strokeLinecap: "round",
          stroke: props.color,
          strokeWidth: "4",
          strokeMiterlimit: "10",
          x1: "50",
          y1: "50",
          x2: "49.5",
          y2: "74"
        },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "15s",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Watch.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Watch.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 48
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Circles */ "./node_modules/react-loader-spinner/dist/loader/Circles.js"), __webpack_require__(/*! ./Watch */ "./node_modules/react-loader-spinner/dist/loader/Watch.js"), __webpack_require__(/*! ./Audio */ "./node_modules/react-loader-spinner/dist/loader/Audio.js"), __webpack_require__(/*! ./BallTriangle */ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js"), __webpack_require__(/*! ./Bars */ "./node_modules/react-loader-spinner/dist/loader/Bars.js"), __webpack_require__(/*! ./CradleLoader */ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js"), __webpack_require__(/*! ./Grid */ "./node_modules/react-loader-spinner/dist/loader/Grid.js"), __webpack_require__(/*! ./Hearts */ "./node_modules/react-loader-spinner/dist/loader/Hearts.js"), __webpack_require__(/*! ./MutatingDots */ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js"), __webpack_require__(/*! ./Oval */ "./node_modules/react-loader-spinner/dist/loader/Oval.js"), __webpack_require__(/*! ./Plane */ "./node_modules/react-loader-spinner/dist/loader/Plane.js"), __webpack_require__(/*! ./Puff */ "./node_modules/react-loader-spinner/dist/loader/Puff.js"), __webpack_require__(/*! ./RevolvingDot */ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js"), __webpack_require__(/*! ./Rings */ "./node_modules/react-loader-spinner/dist/loader/Rings.js"), __webpack_require__(/*! ./TailSpin */ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js"), __webpack_require__(/*! ./ThreeDots */ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js"), __webpack_require__(/*! ./Triangle */ "./node_modules/react-loader-spinner/dist/loader/Triangle.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _Circles, _Watch, _Audio, _BallTriangle, _Bars, _CradleLoader, _Grid, _Hearts, _MutatingDots, _Oval, _Plane, _Puff, _RevolvingDot, _Rings, _TailSpin, _ThreeDots, _Triangle) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Spinner = undefined;
  var Spinner = exports.Spinner = {
    Circles: _Circles.Circles,
    Audio: _Audio.Audio,
    BallTriangle: _BallTriangle.BallTriangle,
    Bars: _Bars.Bars,
    CradleLoader: _CradleLoader.CradleLoader,
    Grid: _Grid.Grid,
    Hearts: _Hearts.Hearts,
    MutatingDots: _MutatingDots.MutatingDots,
    Oval: _Oval.Oval,
    Plane: _Plane.Plane,
    Puff: _Puff.Puff,
    RevolvingDot: _RevolvingDot.RevolvingDot,
    Rings: _Rings.Rings,
    TailSpin: _TailSpin.TailSpin,
    ThreeDots: _ThreeDots.ThreeDots,
    Triangle: _Triangle.Triangle,
    Watch: _Watch.Watch
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-loader-spinner/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/react-loader-spinner/dist/index.js");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0F1ZGlvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9CYWxsVHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0JhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0NpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0NyYWRsZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvSGVhcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9NdXRhdGluZ0RvdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL092YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL1BsYW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9QdWZmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9SZXZvbHZpbmdEb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL1JpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9UYWlsU3Bpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvVGhyZWVEb3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9pbmRleC5qcyJdLCJuYW1lcyI6WyJGb3JtIiwicHJvcHMiLCJldmVudCIsInNldFN0YXRlIiwiZGVzY3JpcHRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsImNpdHlaaXAiLCJzdGF0ZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImJpbmQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJmb3JtQ29udGFpbmVyIiwiZGVzY3JpcHRpb25DaGFuZ2UiLCJjaXR5WmlwQ2hhbmdlIiwiY2l0eUlucHV0IiwiYnV0dG9uU3R5bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw0TkFXQyxVQUFDQyxLQUFELEVBQVc7QUFFM0IsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLG1CQUFXLEVBQUVGLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUE1QixPQUFkO0FBQ0gsS0Fka0I7O0FBQUEsd05BZ0JILFVBQUNKLEtBQUQsRUFBVztBQUN2QixZQUFLQyxRQUFMLENBQWM7QUFBRUksZUFBTyxFQUFFTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUM7QUFBeEIsT0FBZDtBQUNILEtBbEJrQjs7QUFFZixVQUFLRSxLQUFMLEdBQWE7QUFDVEosaUJBQVcsRUFBRSxFQURKO0FBRVRHLGFBQU8sRUFBRSxFQUZBO0FBR1RFLGFBQU8sRUFBRTtBQUhBLEtBQWI7QUFNQSxVQUFLQyxRQUFMLEdB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLEtBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyw0RkFBNEYsU0FBTTtBQUM3STtBQUNBOztBQUVBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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LDRHQUFnQixFQUFFLDhGQUFTLEVBQUUsb0dBQVksRUFBRSxzR0FBYSxFQUFFLG9HQUFZLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUNoUSxHQUFHLE1BQU0sWUFRTjtBQUNILENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDdENELGlCQUFpQixtQkFBTyxDQUFDLHVFQUFjLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY3ODgzYWJhMDNlMjUxYmY5OGY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm9iTGlzdHMgZnJvbSAnLi9Kb2JMaXN0cyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5cclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICBjaXR5WmlwOiBcIlwiLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVzY3JpcHRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaXR5WmlwQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNpdHlaaXA6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaCBidXR0b24gY2xpY2tlZFwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmRlc2NyaXB0aW9uQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvbiBleDogSmF2YSwgUnVieSwgSmF2YXNjcmlwdFwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaXR5WmlwQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jaXR5WmlwfSBzdHlsZT17c3R5bGVzLmNpdHlJbnB1dH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJDaXR5IE5hbWUgb3IgWmlwY29kZVwiIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblN1Ym1pdH0gc3R5bGU9e3N0eWxlcy5idXR0b25TdHlsZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxkaXY+bG9hZGluZyBqb2JzLi4uLjwvZGl2PiA6IDxKb2JMaXN0cyAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZm9ybUNvbnRhaW5lcjoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCdcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1wiKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1wiKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiLCBcIi4vbG9hZGVyXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSwgcmVxdWlyZShcIi4vbG9hZGVyXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcywgZ2xvYmFsLmxvYWRlcik7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMsIF9sb2FkZXIpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgICAgdmFyIF9hcnIgPSBbXTtcbiAgICAgIHZhciBfbiA9IHRydWU7XG4gICAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZCA9IHRydWU7XG4gICAgICAgIF9lID0gZXJyO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9hcnI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KCk7XG5cbiAgdmFyIGNvbXBvbmVudE5hbWVzID0gW1wiQXVkaW9cIiwgXCJCYWxsVHJpYW5nbGVcIiwgXCJCYXJzXCIsIFwiQ2lyY2xlc1wiLCBcIkdyaWRcIiwgXCJIZWFydHNcIiwgXCJPdmFsXCIsIFwiUHVmZlwiLCBcIlJpbmdzXCIsIFwiVGFpbFNwaW5cIiwgXCJUaHJlZURvdHNcIiwgXCJXYXRjaFwiLCBcIlJldm9sdmluZ0RvdFwiLCBcIlRyaWFuZ2xlXCIsIFwiUGxhbmVcIiwgXCJNdXRhdGluZ0RvdHNcIiwgXCJDcmFkbGVMb2FkZXJcIl07XG5cbiAgZnVuY3Rpb24gY29tcG9uZW50TmFtZSh0eXBlKSB7XG4gICAgaWYgKGNvbXBvbmVudE5hbWVzLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgICByZXR1cm4gX2xvYWRlci5TcGlubmVyW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gX2xvYWRlci5TcGlubmVyLkF1ZGlvO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge251bGx9XG4gICAqL1xuICBmdW5jdGlvbiBMb2FkZXIocHJvcHMpIHtcbiAgICB2YXIgX3VzZVN0YXRlID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkodHJ1ZSksXG4gICAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgICBkaXNwbGF5ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgICAgc2V0RGlzcGxheSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgICAoMCwgX3JlYWN0LnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRpbWVyID0gdm9pZCAwO1xuICAgICAgaWYgKHByb3BzLnRpbWVvdXQgJiYgcHJvcHMudGltZW91dCA+IDApIHtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXREaXNwbGF5KGZhbHNlKTtcbiAgICAgICAgfSwgcHJvcHMudGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAoIXByb3BzLnZpc2libGUgfHwgcHJvcHMudmlzaWJsZSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXkgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IFwiYXJpYS1idXN5XCI6IFwidHJ1ZVwiLCBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSwgc3R5bGU6IHByb3BzLnN0eWxlIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChjb21wb25lbnROYW1lKHByb3BzLnR5cGUpLCBfZXh0ZW5kcyh7fSwgcHJvcHMpKVxuICAgICkgOiBudWxsO1xuICB9XG5cbiAgTG9hZGVyLnByb3BUeXBlcyA9IHtcbiAgICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFtdLmNvbmNhdChjb21wb25lbnROYW1lcykpLFxuICAgIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKSxcbiAgICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHZpc2libGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG4gICAgdGltZW91dDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBMb2FkZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6IFwiQXVkaW9cIixcbiAgICBzdHlsZToge30sXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgdGltZW91dDogMFxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLkF1ZGlvID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuQXVkaW8gPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIEF1ZGlvID0gZXhwb3J0cy5BdWRpbyA9IGZ1bmN0aW9uIEF1ZGlvKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgZmlsbDogcHJvcHMuY29sb3IsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDU1IDgwXCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyB0cmFuc2Zvcm06IFwibWF0cml4KDEgMCAwIC0xIDAgODApXCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJyZWN0XCIsXG4gICAgICAgICAgeyB3aWR0aDogXCIxMFwiLCBoZWlnaHQ6IFwiMjBcIiwgcng6IFwiM1wiIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjQuM3NcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIyMDs0NTs1Nzs4MDs2NDszMjs2Njs0NTs2NDsyMzs2NjsxMzs2NDs1NjszNDszNDsyOzIzOzc2Ozc5OzIwXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwicmVjdFwiLFxuICAgICAgICAgIHsgeDogXCIxNVwiLCB3aWR0aDogXCIxMFwiLCBoZWlnaHQ6IFwiODBcIiwgcng6IFwiM1wiIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjJzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiODA7NTU7MzM7NTs3NTsyMzs3MzszMzsxMjsxNDs2MDs4MFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcInJlY3RcIixcbiAgICAgICAgICB7IHg6IFwiMzBcIiwgd2lkdGg6IFwiMTBcIiwgaGVpZ2h0OiBcIjUwXCIsIHJ4OiBcIjNcIiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgIGR1cjogXCIxLjRzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiNTA7MzQ7Nzg7MjM7NTY7MjM7MzQ7NzY7ODA7NTQ7MjE7NTBcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJyZWN0XCIsXG4gICAgICAgICAgeyB4OiBcIjQ1XCIsIHdpZHRoOiBcIjEwXCIsIGhlaWdodDogXCIzMFwiLCByeDogXCIzXCIgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJoZWlnaHRcIixcbiAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICBkdXI6IFwiMnNcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIzMDs0NTsxMzs4MDs1Njs3Mjs0NTs3NjszNDsyMzs2NzszMFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBBdWRpby5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH07XG5cbiAgQXVkaW8uZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuQmFsbFRyaWFuZ2xlID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuQmFsbFRyaWFuZ2xlID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBCYWxsVHJpYW5nbGUgPSBleHBvcnRzLkJhbGxUcmlhbmdsZSA9IGZ1bmN0aW9uIEJhbGxUcmlhbmdsZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIHN0cm9rZTogcHJvcHMuY29sb3IsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDU3IDU3XCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBmaWxsOiBcIm5vbmVcIiwgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZ1wiLFxuICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxIDEpXCIsIHN0cm9rZVdpZHRoOiBcIjJcIiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICAgIHsgY3g6IFwiNVwiLCBjeTogXCI1MFwiLCByOiBwcm9wcy5yYWRpdXMgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3lcIixcbiAgICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgICAgZHVyOiBcIjIuMnNcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBcIjUwOzU7NTA7NTBcIixcbiAgICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN4XCIsXG4gICAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICAgIGR1cjogXCIyLjJzXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogXCI1OzI3OzQ5OzVcIixcbiAgICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICAgIHsgY3g6IFwiMjdcIiwgY3k6IFwiNVwiLCByOiBwcm9wcy5yYWRpdXMgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3lcIixcbiAgICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgICAgZHVyOiBcIjIuMnNcIixcbiAgICAgICAgICAgICAgZnJvbTogXCI1XCIsXG4gICAgICAgICAgICAgIHRvOiBcIjVcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBcIjU7NTA7NTA7NVwiLFxuICAgICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3hcIixcbiAgICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgICAgZHVyOiBcIjIuMnNcIixcbiAgICAgICAgICAgICAgZnJvbTogXCIyN1wiLFxuICAgICAgICAgICAgICB0bzogXCIyN1wiLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFwiMjc7NDk7NTsyN1wiLFxuICAgICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImNpcmNsZVwiLFxuICAgICAgICAgICAgeyBjeDogXCI0OVwiLCBjeTogXCI1MFwiLCByOiBwcm9wcy5yYWRpdXMgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3lcIixcbiAgICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgICAgZHVyOiBcIjIuMnNcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBcIjUwOzUwOzU7NTBcIixcbiAgICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN4XCIsXG4gICAgICAgICAgICAgIGZyb206IFwiNDlcIixcbiAgICAgICAgICAgICAgdG86IFwiNDlcIixcbiAgICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgICAgZHVyOiBcIjIuMnNcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBcIjQ5OzU7Mjc7NDlcIixcbiAgICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIEJhbGxUcmlhbmdsZS5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBCYWxsVHJpYW5nbGUuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgcmFkaXVzOiA1LFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLkJhcnMgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5CYXJzID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBCYXJzID0gZXhwb3J0cy5CYXJzID0gZnVuY3Rpb24gQmFycyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMzUgMTQwXCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInJlY3RcIixcbiAgICAgICAgeyB5OiBcIjEwXCIsIHdpZHRoOiBcIjE1XCIsIGhlaWdodDogXCIxMjBcIiwgcng6IFwiNlwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJoZWlnaHRcIixcbiAgICAgICAgICBiZWdpbjogXCIwLjVzXCIsXG4gICAgICAgICAgZHVyOiBcIjFzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEyMDsxMTA7MTAwOzkwOzgwOzcwOzYwOzUwOzQwOzE0MDsxMjBcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC41c1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxMDsxNTsyMDsyNTszMDszNTs0MDs0NTs1MDswOzEwXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicmVjdFwiLFxuICAgICAgICB7IHg6IFwiMzBcIiwgeTogXCIxMFwiLCB3aWR0aDogXCIxNVwiLCBoZWlnaHQ6IFwiMTIwXCIsIHJ4OiBcIjZcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC4yNXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTIwOzExMDsxMDA7OTA7ODA7NzA7NjA7NTA7NDA7MTQwOzEyMFwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInlcIixcbiAgICAgICAgICBiZWdpbjogXCIwLjI1c1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxMDsxNTsyMDsyNTszMDszNTs0MDs0NTs1MDswOzEwXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicmVjdFwiLFxuICAgICAgICB7IHg6IFwiNjBcIiwgd2lkdGg6IFwiMTVcIiwgaGVpZ2h0OiBcIjE0MFwiLCByeDogXCI2XCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjFzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEyMDsxMTA7MTAwOzkwOzgwOzcwOzYwOzUwOzQwOzE0MDsxMjBcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTA7MTU7MjA7MjU7MzA7MzU7NDA7NDU7NTA7MDsxMFwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInJlY3RcIixcbiAgICAgICAgeyB4OiBcIjkwXCIsIHk6IFwiMTBcIiwgd2lkdGg6IFwiMTVcIiwgaGVpZ2h0OiBcIjEyMFwiLCByeDogXCI2XCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgICAgICAgIGJlZ2luOiBcIjAuMjVzXCIsXG4gICAgICAgICAgZHVyOiBcIjFzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEyMDsxMTA7MTAwOzkwOzgwOzcwOzYwOzUwOzQwOzE0MDsxMjBcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC4yNXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTA7MTU7MjA7MjU7MzA7MzU7NDA7NDU7NTA7MDsxMFwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInJlY3RcIixcbiAgICAgICAgeyB4OiBcIjEyMFwiLCB5OiBcIjEwXCIsIHdpZHRoOiBcIjE1XCIsIGhlaWdodDogXCIxMjBcIiwgcng6IFwiNlwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJoZWlnaHRcIixcbiAgICAgICAgICBiZWdpbjogXCIwLjVzXCIsXG4gICAgICAgICAgZHVyOiBcIjFzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEyMDsxMTA7MTAwOzkwOzgwOzcwOzYwOzUwOzQwOzE0MDsxMjBcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC41c1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxMDsxNTsyMDsyNTszMDszNTs0MDs0NTs1MDswOzEwXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBCYXJzLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfTtcblxuICBCYXJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLkNpcmNsZXMgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5DaXJjbGVzID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBDaXJjbGVzID0gZXhwb3J0cy5DaXJjbGVzID0gZnVuY3Rpb24gQ2lyY2xlcyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDEzNSAxMzVcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgZmlsbDogcHJvcHMuY29sb3IsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInBhdGhcIixcbiAgICAgICAgeyBkOiBcIk02Ny40NDcgNThjNS41MjMgMCAxMC00LjQ3NyAxMC0xMHMtNC40NzctMTAtMTAtMTAtMTAgNC40NzctMTAgMTAgNC40NzcgMTAgMTAgMTB6bTkuNDQ4IDkuNDQ3YzAgNS41MjMgNC40NzcgMTAgMTAgMTAgNS41MjIgMCAxMC00LjQ3NyAxMC0xMHMtNC40NzgtMTAtMTAtMTBjLTUuNTIzIDAtMTAgNC40NzctMTAgMTB6bS05LjQ0OCA5LjQ0OGMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMCAwIDUuNTIyIDQuNDc3IDEwIDEwIDEwczEwLTQuNDc4IDEwLTEwYzAtNS41MjMtNC40NzctMTAtMTAtMTB6TTU4IDY3LjQ0N2MwLTUuNTIzLTQuNDc3LTEwLTEwLTEwcy0xMCA0LjQ3Ny0xMCAxMCA0LjQ3NyAxMCAxMCAxMCAxMC00LjQ3NyAxMC0xMHpcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICAgICAgICBmcm9tOiBcIjAgNjcgNjdcIixcbiAgICAgICAgICB0bzogXCItMzYwIDY3IDY3XCIsXG4gICAgICAgICAgZHVyOiBcIjIuNXNcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgIHsgZDogXCJNMjguMTkgNDAuMzFjNi42MjcgMCAxMi01LjM3NCAxMi0xMiAwLTYuNjI4LTUuMzczLTEyLTEyLTEyLTYuNjI4IDAtMTIgNS4zNzItMTIgMTIgMCA2LjYyNiA1LjM3MiAxMiAxMiAxMnptMzAuNzItMTkuODI1YzQuNjg2IDQuNjg3IDEyLjI4NCA0LjY4NyAxNi45NyAwIDQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3LTQuNjg2LTQuNjg3LTEyLjI4NC00LjY4Ny0xNi45NyAwLTQuNjg3IDQuNjg2LTQuNjg3IDEyLjI4NCAwIDE2Ljk3em0zNS43NCA3LjcwNWMwIDYuNjI3IDUuMzcgMTIgMTIgMTIgNi42MjYgMCAxMi01LjM3MyAxMi0xMiAwLTYuNjI4LTUuMzc0LTEyLTEyLTEyLTYuNjMgMC0xMiA1LjM3Mi0xMiAxMnptMTkuODIyIDMwLjcyYy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NyA0LjY4NyA0LjY4NiAxMi4yODUgNC42ODYgMTYuOTcgMCA0LjY4Ny00LjY4NiA0LjY4Ny0xMi4yODQgMC0xNi45Ny00LjY4NS00LjY4Ny0xMi4yODMtNC42ODctMTYuOTcgMHptLTcuNzA0IDM1Ljc0Yy02LjYyNyAwLTEyIDUuMzctMTIgMTIgMCA2LjYyNiA1LjM3MyAxMiAxMiAxMnMxMi01LjM3NCAxMi0xMmMwLTYuNjMtNS4zNzMtMTItMTItMTJ6bS0zMC43MiAxOS44MjJjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAwLTQuNjg2IDQuNjg3LTQuNjg2IDEyLjI4NSAwIDE2Ljk3IDQuNjg2IDQuNjg3IDEyLjI4NCA0LjY4NyAxNi45NyAwIDQuNjg3LTQuNjg1IDQuNjg3LTEyLjI4MyAwLTE2Ljk3em0tMzUuNzQtNy43MDRjMC02LjYyNy01LjM3Mi0xMi0xMi0xMi02LjYyNiAwLTEyIDUuMzczLTEyIDEyczUuMzc0IDEyIDEyIDEyYzYuNjI4IDAgMTItNS4zNzMgMTItMTJ6bS0xOS44MjMtMzAuNzJjNC42ODctNC42ODYgNC42ODctMTIuMjg0IDAtMTYuOTctNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDAtNC42ODcgNC42ODYtNC42ODcgMTIuMjg0IDAgMTYuOTcgNC42ODYgNC42ODcgMTIuMjg0IDQuNjg3IDE2Ljk3IDB6XCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgICAgICAgZnJvbTogXCIwIDY3IDY3XCIsXG4gICAgICAgICAgdG86IFwiMzYwIDY3IDY3XCIsXG4gICAgICAgICAgZHVyOiBcIjhzXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBDaXJjbGVzLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfTtcblxuICBDaXJjbGVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLkNyYWRsZUxvYWRlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLkNyYWRsZUxvYWRlciA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgQ3JhZGxlTG9hZGVyID0gZXhwb3J0cy5DcmFkbGVMb2FkZXIgPSBmdW5jdGlvbiBDcmFkbGVMb2FkZXIocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWwsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsIGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLXN3aW5nXCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc3dpbmctbFwiIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLXN3aW5nLXJcIiB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zaGFkb3dcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zaGFkb3ctbFwiIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLXNoYWRvdy1yXCIgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIENyYWRsZUxvYWRlci5wcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH07XG5cbiAgQ3JhZGxlTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5HcmlkID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuR3JpZCA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgR3JpZCA9IGV4cG9ydHMuR3JpZCA9IGZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMDUgMTA1XCIsXG4gICAgICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCIxMi41XCIsIGN5OiBcIjEyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCIxMi41XCIsIGN5OiBcIjUyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCIxMDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCI1Mi41XCIsIGN5OiBcIjEyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCIzMDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCI1Mi41XCIsIGN5OiBcIjUyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCI2MDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCI5Mi41XCIsIGN5OiBcIjEyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCI4MDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCI5Mi41XCIsIGN5OiBcIjUyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCI0MDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCIxMi41XCIsIGN5OiBcIjkyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCI3MDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCI1Mi41XCIsIGN5OiBcIjkyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCI1MDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCI5Mi41XCIsIGN5OiBcIjkyLjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCIyMDBtc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy4yOzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIEdyaWQucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICByYWRpdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH07XG5cbiAgR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA4MCxcbiAgICB3aWR0aDogODAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICByYWRpdXM6IDEyLjUsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuSGVhcnRzID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuSGVhcnRzID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBIZWFydHMgPSBleHBvcnRzLkhlYXJ0cyA9IGZ1bmN0aW9uIEhlYXJ0cyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDE0MCA2NFwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBmaWxsOiBwcm9wcy5jb2xvcixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicGF0aFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZDogXCJNMzAuMjYyIDU3LjAyTDcuMTk1IDQwLjcyM2MtNS44NC0zLjk3Ni03LjU2LTEyLjA2LTMuODQyLTE4LjA2MyAzLjcxNS02IDExLjQ2Ny03LjY1IDE3LjMwNi0zLjY4bDQuNTIgMy43NiAyLjYtNS4yNzRjMy43MTctNi4wMDIgMTEuNDctNy42NSAxNy4zMDUtMy42OCA1Ljg0IDMuOTcgNy41NiAxMi4wNTQgMy44NDIgMTguMDYyTDM0LjQ5IDU2LjExOGMtLjg5NyAxLjUxMi0yLjc5MyAxLjkxNS00LjIyOC45elwiLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgZnJvbTogXCIwXCIsXG4gICAgICAgICAgdG86IFwiLjVcIlxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICBkdXI6IFwiMS40c1wiLFxuICAgICAgICAgIHZhbHVlczogXCIwLjU7MTswLjVcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkOiBcIk0xMDUuNTEyIDU2LjEybC0xNC40NC0yNC4yNzJjLTMuNzE2LTYuMDA4LTEuOTk2LTE0LjA5MyAzLjg0My0xOC4wNjIgNS44MzUtMy45NyAxMy41ODgtMi4zMjIgMTcuMzA2IDMuNjhsMi42IDUuMjc0IDQuNTItMy43NmM1Ljg0LTMuOTcgMTMuNTkyLTIuMzIgMTcuMzA3IDMuNjggMy43MTggNi4wMDMgMS45OTggMTQuMDg4LTMuODQyIDE4LjA2NEwxMDkuNzQgNTcuMDJjLTEuNDM0IDEuMDE0LTMuMzMuNjEtNC4yMjgtLjl6XCIsXG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBmcm9tOiBcIjBcIixcbiAgICAgICAgICB0bzogXCIuNVwiXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsLW9wYWNpdHlcIixcbiAgICAgICAgICBiZWdpbjogXCIwLjdzXCIsXG4gICAgICAgICAgZHVyOiBcIjEuNHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMC41OzE7MC41XCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNNjcuNDA4IDU3LjgzNGwtMjMuMDEtMjQuOThjLTUuODY0LTYuMTUtNS44NjQtMTYuMTA4IDAtMjIuMjQ4IDUuODYtNi4xNCAxNS4zNy02LjE0IDIxLjIzNCAwTDcwIDE2LjE2OGw0LjM2OC01LjU2MmM1Ljg2My02LjE0IDE1LjM3NS02LjE0IDIxLjIzNSAwIDUuODYzIDYuMTQgNS44NjMgMTYuMDk4IDAgMjIuMjQ3bC0yMy4wMDcgMjQuOThjLTEuNDMgMS41NTYtMy43NTcgMS41NTYtNS4xODggMHpcIiB9KVxuICAgICk7XG4gIH07XG5cbiAgSGVhcnRzLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfTtcblxuICBIZWFydHMuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuTXV0YXRpbmdEb3RzID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuTXV0YXRpbmdEb3RzID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBNdXRhdGluZ0RvdHMgPSBleHBvcnRzLk11dGF0aW5nRG90cyA9IGZ1bmN0aW9uIE11dGF0aW5nRG90cyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7IGlkOiBcImdvby1sb2FkZXJcIiwgd2lkdGg6IHByb3BzLndpZHRoLCBoZWlnaHQ6IHByb3BzLmhlaWdodCwgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJmaWx0ZXJcIixcbiAgICAgICAgeyBpZDogXCJmYW5jeS1nb29cIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlR2F1c3NpYW5CbHVyXCIsIHsgXCJpblwiOiBcIlNvdXJjZUdyYXBoaWNcIiwgc3RkRGV2aWF0aW9uOiBcIjZcIiwgcmVzdWx0OiBcImJsdXJcIiB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmZUNvbG9yTWF0cml4XCIsIHtcbiAgICAgICAgICBcImluXCI6IFwiYmx1clwiLFxuICAgICAgICAgIG1vZGU6IFwibWF0cml4XCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDE5IC05XCIsXG4gICAgICAgICAgcmVzdWx0OiBcImdvb1wiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZlQ29tcG9zaXRlXCIsIHsgXCJpblwiOiBcIlNvdXJjZUdyYXBoaWNcIiwgaW4yOiBcImdvb1wiLCBvcGVyYXRvcjogXCJhdG9wXCIgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHsgZmlsdGVyOiBcInVybCgjZmFuY3ktZ29vKVwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCB7XG4gICAgICAgICAgaWQ6IFwibWFpbkFuaW1cIixcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgIGF0dHJpYnV0ZVR5cGU6IFwiWE1MXCIsXG4gICAgICAgICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICAgICAgICBmcm9tOiBcIjAgNTAgNTBcIixcbiAgICAgICAgICB0bzogXCIzNTkgNTAgNTBcIixcbiAgICAgICAgICBkdXI6IFwiMS4yc1wiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICB7IGN4OiBcIjUwJVwiLCBjeTogXCI0MFwiLCByOiBwcm9wcy5yYWRpdXMsIGZpbGw6IHByb3BzLmNvbG9yIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGlkOiBcImNBbmltMVwiLFxuICAgICAgICAgICAgYXR0cmlidXRlVHlwZTogXCJYTUxcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiY3lcIixcbiAgICAgICAgICAgIGR1cjogXCIwLjZzXCIsXG4gICAgICAgICAgICBiZWdpbjogXCIwO2NBbmltMS5lbmQrMC4yc1wiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwic3BsaW5lXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiNDA7MjA7NDBcIixcbiAgICAgICAgICAgIGtleVRpbWVzOiBcIjA7MC4zOzFcIixcbiAgICAgICAgICAgIGtleVNwbGluZXM6IFwiMC4xNzUsIDAuODg1LCAwLjMyMCwgMS41OyAwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgeyBjeDogXCI1MCVcIiwgY3k6IFwiNjBcIiwgcjogcHJvcHMucmFkaXVzLCBmaWxsOiBwcm9wcy5zZWNvbmRhcnlDb2xvciB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBpZDogXCJjQW5pbTJcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU6IFwiWE1MXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN5XCIsXG4gICAgICAgICAgICBkdXI6IFwiMC42c1wiLFxuICAgICAgICAgICAgYmVnaW46IFwiMC40cztjQW5pbTIuZW5kKzAuMnNcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcInNwbGluZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjYwOzgwOzYwXCIsXG4gICAgICAgICAgICBrZXlUaW1lczogXCIwOzAuMzsxXCIsXG4gICAgICAgICAgICBrZXlTcGxpbmVzOiBcIjAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuNTswLjE3NSwgMC44ODUsIDAuMzIwLCAxLjVcIlxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIE11dGF0aW5nRG90cy5wcm9wVHlwZXMgPSB7XG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAgIHNlY29uZGFyeUNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICByYWRpdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICB9O1xuXG4gIE11dGF0aW5nRG90cy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDgwLFxuICAgIGhlaWdodDogOTAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICByYWRpdXM6IDExLFxuICAgIHNlY29uZGFyeUNvbG9yOiBcImdyZWVuXCIsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuT3ZhbCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLk92YWwgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIE92YWwgPSBleHBvcnRzLk92YWwgPSBmdW5jdGlvbiBPdmFsKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgdmlld0JveDogXCIwIDAgMzggMzhcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7IGZpbGw6IFwibm9uZVwiLCBmaWxsUnVsZTogXCJldmVub2RkXCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEgMSlcIiwgc3Ryb2tlV2lkdGg6IFwiMlwiIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyBzdHJva2VPcGFjaXR5OiBcIi41XCIsIGN4OiBcIjE4XCIsIGN5OiBcIjE4XCIsIHI6IHByb3BzLnJhZGl1cyB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwicGF0aFwiLFxuICAgICAgICAgICAgeyBkOiBcIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFwiIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInJvdGF0ZVwiLFxuICAgICAgICAgICAgICBmcm9tOiBcIjAgMTggMThcIixcbiAgICAgICAgICAgICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBPdmFsLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgcmFkaXVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9O1xuXG4gIE92YWwuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiLFxuICAgIHJhZGl1czogMThcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5QbGFuZSA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLlBsYW5lID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBQbGFuZSA9IGV4cG9ydHMuUGxhbmUgPSBmdW5jdGlvbiBQbGFuZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zdmctY2FsTG9hZGVyXCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIHdpZHRoOiBcIjIzMFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMjMwXCIsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRlc2NcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJQbGFuZSBhbmltYXRpb24uIExvYWRpbmcgXCJcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItY2FsLWxvYWRlcl9fcGF0aFwiLFxuICAgICAgICBzdHlsZTogeyBzdHJva2U6IHByb3BzLnNlY29uZGFyeUNvbG9yIH0sXG4gICAgICAgIGQ6IFwiTTg2LjQyOSA0MGM2My42MTYtMjAuMDQgMTAxLjUxMSAyNS4wOCAxMDcuMjY1IDYxLjkzIDYuNDg3IDQxLjU0LTE4LjU5MyA3Ni45OS01MC42IDg3LjY0My01OS40NiAxOS43OTEtMTAxLjI2Mi0yMy41NzctMTA3LjE0Mi02Mi42MTZDMjkuMzk4IDgzLjQ0MSA1OS45NDUgNDguMzQzIDg2LjQzIDQwelwiLFxuICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgc3Ryb2tlOiBcIiMwMDk5Y2NcIixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IFwiNFwiLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgICAgIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCIsXG4gICAgICAgIHN0cm9rZURhc2hhcnJheTogXCIxMCAxMCAxMCAxMCAxMCAxMCAxMCA0MzJcIixcbiAgICAgICAgc3Ryb2tlRGFzaG9mZnNldDogXCI3N1wiXG4gICAgICB9KSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjYWwtbG9hZGVyX19wbGFuZVwiLFxuICAgICAgICBzdHlsZTogeyBmaWxsOiBwcm9wcy5jb2xvciB9LFxuICAgICAgICBkOiBcIk0xNDEuNDkzIDM3LjkzYy0xLjA4Ny0uOTI3LTIuOTQyLTIuMDAyLTQuMzItMi41MDEtMi4yNTktLjgyNC0zLjI1Mi0uOTU1LTkuMjkzLTEuMTcyLTQuMDE3LS4xNDYtNS4xOTctLjIzLTUuNDctLjM3LS43NjYtLjQwNy0xLjUyNi0xLjQ0OC03LjExNC05Ljc3My00LjgtNy4xNDUtNS4zNDQtNy45MTQtNi4zMjctOC45NzYtMS4yMTQtMS4zMDYtMS4zOTYtMS4zNzgtMy43OS0xLjQ3My0xLjAzNi0uMDQtMi0uMDQzLTIuMTUzLS4wMDItLjM1My4xLS44Ny41ODYtMSAuOTUyLS4xMzkuMzk5LS4wNzYuNzEuNDMxIDIuMjIuMjQxLjcyIDEuMDI5IDMuMzg2IDEuNzQyIDUuOTE4IDEuNjQ0IDUuODQ0IDIuMzc4IDguMzQzIDIuODYzIDkuNzA1LjIwNi42MDEuMzMgMS4xLjI3NSAxLjEyNS0uMjQuMDk3LTEwLjU2IDEuMDY2LTExLjAxNCAxLjAzMmEzLjUzMiAzLjUzMiAwIDAgMS0xLjAwMi0uMjc2bC0uNDg3LS4yNDYtMi4wNDQtMi42MTNjLTIuMjM0LTIuODctMi4yMjgtMi44NjQtMy4zNS0zLjMwOS0uNzE3LS4yODctMi44Mi0uMzg2LTMuMjc2LS4xNjMtLjQ1Ny4yMzctLjcyNy42NDQtLjczNyAxLjE1Mi0uMDE4LjM5LjE2Ny44MDUgMS45MTYgNC4zNzMgMS4wNiAyLjE2NiAxLjk2NCA0LjA4MyAxLjk5OCA0LjI3LjA0LjE3OS4wMDQuNTIxLS4wNzYuNzUtLjA5My4yMjgtMS4xMDkgMi4wNjQtMi4yNjkgNC4wODgtMS45MjEgMy4zNC0yLjExIDMuNzExLTIuMTIzIDQuMTA3LS4wMDguMjUuMDYxLjU1Ny4xNjguNzI1LjMyOC41MTIuNzIuNjQ0IDEuOTY2LjY3NiAxLjMyLjAyOSAyLjM1Mi0uMjM2IDMuMDUtLjc2Mi4yMjItLjE3MSAxLjI3NS0xLjMxMyAyLjQxMi0yLjYxMSAxLjkxOC0yLjE4NSAyLjA0OC0yLjMyIDIuNDUtMi41MDUuMjQxLS4xMTEuNjAxLS4yMzIuODItLjI3MS4yNjctLjA1OCAyLjIxMy4yMDEgNS45MTIuOCAzLjAzNi40OCA1LjUyNS44OTQgNS41MTguOTE0IDAgLjAyNi0uMTIxLjMwNi0uMjcuNjM4LS41NCAxLjE5OC0xLjUxNSAzLjg0Mi0zLjM1IDkuMDIxLTEuMDI5IDIuOTEzLTIuMTA3IDUuODk3LTIuNCA2LjYyLS43MDMgMS43NDgtLjcyNSAxLjgzMy0uNTk0IDIuMjg2LjEzNy40Ni40NS44MzMuODcyIDEuMDEyLjQxLjE3NyAzLjgyMy4yNCA0LjM3LjA4NS44NTItLjI1IDEuNDQtLjY4OCAyLjMxMi0xLjcyNCAxLjE2Ni0xLjM5IDMuMTY5LTMuOTQ4IDYuNzcxLTguNjYxIDUuOC03LjU4MyA2LjU2MS04LjQ5IDcuMzg3LTguNzAyLjIzMy0uMDY1IDIuODI4LS4wNTYgNS43ODQuMDExIDUuODI3LjEzOCA2LjY0LjA5IDguNjItLjUgMi4yNC0uNjcgNC4wMzUtMS42NSA1LjUxNy0zLjAxNiAxLjEzNi0xLjA1NCAxLjEzNS0xLjAxNC4yMDctMS45NjItLjM1Ny0uMzgtLjc2Ny0uNzc3LS45MDItLjg5M3pcIixcbiAgICAgICAgZmlsbDogXCIjMDAwMDMzXCJcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBQbGFuZS5wcm9wVHlwZXMgPSB7XG4gICAgc2Vjb25kYXJ5Q29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfTtcblxuICBQbGFuZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2Vjb25kYXJ5Q29sb3I6IFwiZ3JleVwiLFxuICAgIGNvbG9yOiBcIiNGRkE1MDBcIixcbiAgICBsYWJlbDogXCJhc3luYy1sb2FkaW5nXCJcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5QdWZmID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuUHVmZiA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgUHVmZiA9IGV4cG9ydHMuUHVmZiA9IGZ1bmN0aW9uIFB1ZmYocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCA0NCA0NFwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHsgZmlsbDogXCJub25lXCIsIGZpbGxSdWxlOiBcImV2ZW5vZGRcIiwgc3Ryb2tlV2lkdGg6IFwiMlwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgeyBjeDogXCIyMlwiLCBjeTogXCIyMlwiLCByOiBwcm9wcy5yYWRpdXMgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjEuOHNcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIxOyAyMFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwic3BsaW5lXCIsXG4gICAgICAgICAgICBrZXlUaW1lczogXCIwOyAxXCIsXG4gICAgICAgICAgICBrZXlTcGxpbmVzOiBcIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJzdHJva2VPcGFjaXR5XCIsXG4gICAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjEuOHNcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIxOyAwXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJzcGxpbmVcIixcbiAgICAgICAgICAgIGtleVRpbWVzOiBcIjA7IDFcIixcbiAgICAgICAgICAgIGtleVNwbGluZXM6IFwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICB7IGN4OiBcIjIyXCIsIGN5OiBcIjIyXCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInJcIixcbiAgICAgICAgICAgIGJlZ2luOiBcIi0wLjlzXCIsXG4gICAgICAgICAgICBkdXI6IFwiMS44c1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjE7IDIwXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJzcGxpbmVcIixcbiAgICAgICAgICAgIGtleVRpbWVzOiBcIjA7IDFcIixcbiAgICAgICAgICAgIGtleVNwbGluZXM6IFwiMC4xNjUsIDAuODQsIDAuNDQsIDFcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInN0cm9rZU9wYWNpdHlcIixcbiAgICAgICAgICAgIGJlZ2luOiBcIi0wLjlzXCIsXG4gICAgICAgICAgICBkdXI6IFwiMS44c1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjE7IDBcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcInNwbGluZVwiLFxuICAgICAgICAgICAga2V5VGltZXM6IFwiMDsgMVwiLFxuICAgICAgICAgICAga2V5U3BsaW5lczogXCIwLjMsIDAuNjEsIDAuMzU1LCAxXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBQdWZmLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgcmFkaXVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9O1xuXG4gIFB1ZmYuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiLFxuICAgIHJhZGl1czogMVxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLlJldm9sdmluZ0RvdCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLlJldm9sdmluZ0RvdCA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgUmV2b2x2aW5nRG90ID0gZXhwb3J0cy5SZXZvbHZpbmdEb3QgPSBmdW5jdGlvbiBSZXZvbHZpbmdEb3QocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICB2ZXJzaW9uOiBcIjEuMVwiLFxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICB4OiBcIjBweFwiLFxuICAgICAgICB5OiBcIjBweFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgICAgICBzdHJva2VXaWR0aDogXCI0XCIsXG4gICAgICAgIGN4OiBcIjUwXCIsXG4gICAgICAgIGN5OiBcIjUwXCIsXG4gICAgICAgIHI6IHByb3BzLnJhZGl1cyArIDM4LFxuICAgICAgICBzdHlsZTogeyBvcGFjaXR5OiAwLjUgfVxuICAgICAgfSksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBmaWxsOiBwcm9wcy5jb2xvciwgc3Ryb2tlOiBwcm9wcy5jb2xvciwgc3Ryb2tlV2lkdGg6IFwiM1wiLCBjeDogXCI4XCIsIGN5OiBcIjU0XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgZHVyOiBcIjJzXCIsXG4gICAgICAgICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICAgICAgICBmcm9tOiBcIjAgNTAgNDhcIixcbiAgICAgICAgICB0bzogXCIzNjAgNTAgNTJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFJldm9sdmluZ0RvdC5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBSZXZvbHZpbmdEb3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiLFxuICAgIHJhZGl1czogNlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLlJpbmdzID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuUmluZ3MgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIFJpbmdzID0gZXhwb3J0cy5SaW5ncyA9IGZ1bmN0aW9uIFJpbmdzKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgdmlld0JveDogXCIwIDAgNDUgNDVcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7IGZpbGw6IFwibm9uZVwiLCBmaWxsUnVsZTogXCJldmVub2RkXCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMSAxKVwiLCBzdHJva2VXaWR0aDogXCIyXCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICB7IGN4OiBcIjIyXCIsIGN5OiBcIjIyXCIsIHI6IHByb3BzLnJhZGl1cywgc3Ryb2tlT3BhY2l0eTogXCIwXCIgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgICAgICAgICBiZWdpbjogXCIxLjVzXCIsXG4gICAgICAgICAgICBkdXI6IFwiM3NcIixcbiAgICAgICAgICAgIHZhbHVlczogXCI2OzIyXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInN0cm9rZS1vcGFjaXR5XCIsXG4gICAgICAgICAgICBiZWdpbjogXCIxLjVzXCIsXG4gICAgICAgICAgICBkdXI6IFwiM3NcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIxOzBcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwic3Ryb2tlLXdpZHRoXCIsXG4gICAgICAgICAgICBiZWdpbjogXCIxLjVzXCIsXG4gICAgICAgICAgICBkdXI6IFwiM3NcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIyOzBcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICB7IGN4OiBcIjIyXCIsIGN5OiBcIjIyXCIsIHI6IHByb3BzLnJhZGl1cywgc3Ryb2tlT3BhY2l0eTogXCIwXCIgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgICAgICAgICBiZWdpbjogXCIzc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjNzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiNjsyMlwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJzdHJva2VPcGFjaXR5XCIsXG4gICAgICAgICAgICBiZWdpbjogXCIzc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjNzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMTswXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInN0cm9rZVdpZHRoXCIsXG4gICAgICAgICAgICBiZWdpbjogXCIzc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjNzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMjswXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgeyBjeDogXCIyMlwiLCBjeTogXCIyMlwiLCByOiBwcm9wcy5yYWRpdXMgKyAyIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgIGR1cjogXCIxLjVzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiNjsxOzI7Mzs0OzU7NlwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBSaW5ncy5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBSaW5ncy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA4MCxcbiAgICB3aWR0aDogODAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICByYWRpdXM6IDYsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuVGFpbFNwaW4gPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5UYWlsU3BpbiA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgVGFpbFNwaW4gPSBleHBvcnRzLlRhaWxTcGluID0gZnVuY3Rpb24gVGFpbFNwaW4ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAzOCAzOFwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkZWZzXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwibGluZWFyR3JhZGllbnRcIixcbiAgICAgICAgICB7IHgxOiBcIjguMDQyJVwiLCB5MTogXCIwJVwiLCB4MjogXCI2NS42ODIlXCIsIHkyOiBcIjIzLjg2NSVcIiwgaWQ6IFwiYVwiIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdG9wXCIsIHsgc3RvcENvbG9yOiBwcm9wcy5jb2xvciwgc3RvcE9wYWNpdHk6IFwiMFwiLCBvZmZzZXQ6IFwiMCVcIiB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0b3BcIiwgeyBzdG9wQ29sb3I6IHByb3BzLmNvbG9yLCBzdG9wT3BhY2l0eTogXCIuNjMxXCIsIG9mZnNldDogXCI2My4xNDYlXCIgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdG9wXCIsIHsgc3RvcENvbG9yOiBwcm9wcy5jb2xvciwgb2Zmc2V0OiBcIjEwMCVcIiB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7IGZpbGw6IFwibm9uZVwiLCBmaWxsUnVsZTogXCJldmVub2RkXCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEgMSlcIiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgICAgICB7IGQ6IFwiTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4XCIsIGlkOiBcIk92YWwtMlwiLCBzdHJva2U6IHByb3BzLmNvbG9yLCBzdHJva2VXaWR0aDogXCIyXCIgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgICAgICAgICAgIGZyb206IFwiMCAxOCAxOFwiLFxuICAgICAgICAgICAgICB0bzogXCIzNjAgMTggMThcIixcbiAgICAgICAgICAgICAgZHVyOiBcIjAuOXNcIixcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcImNpcmNsZVwiLFxuICAgICAgICAgICAgeyBmaWxsOiBcIiNmZmZcIiwgY3g6IFwiMzZcIiwgY3k6IFwiMThcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInJvdGF0ZVwiLFxuICAgICAgICAgICAgICBmcm9tOiBcIjAgMTggMThcIixcbiAgICAgICAgICAgICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgICAgICAgICAgIGR1cjogXCIwLjlzXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFRhaWxTcGluLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgcmFkaXVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9O1xuXG4gIFRhaWxTcGluLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIHJhZGl1czogMSxcbiAgICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5UaHJlZURvdHMgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5UaHJlZURvdHMgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIFRocmVlRG90cyA9IGV4cG9ydHMuVGhyZWVEb3RzID0gZnVuY3Rpb24gVGhyZWVEb3RzKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgdmlld0JveDogXCIwIDAgMTIwIDMwXCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCIxNVwiLCBjeTogXCIxNVwiLCByOiBwcm9wcy5yYWRpdXMgKyA2IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgICAgICAgZnJvbTogXCIxNVwiLFxuICAgICAgICAgIHRvOiBcIjE1XCIsXG4gICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICBkdXI6IFwiMC44c1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxNTs5OzE1XCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbE9wYWNpdHlcIixcbiAgICAgICAgICBmcm9tOiBcIjFcIixcbiAgICAgICAgICB0bzogXCIxXCIsXG4gICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICBkdXI6IFwiMC44c1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy41OzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAge1xuICAgICAgICAgIGN4OiBcIjYwXCIsXG4gICAgICAgICAgY3k6IFwiMTVcIixcbiAgICAgICAgICByOiBwcm9wcy5yYWRpdXMsXG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJmaWxsT3BhY2l0eVwiLFxuICAgICAgICAgIGZyb206IFwiMVwiLFxuICAgICAgICAgIHRvOiBcIjAuM1wiXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgICAgICAgZnJvbTogXCI5XCIsXG4gICAgICAgICAgdG86IFwiOVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjAuOHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiOTsxNTs5XCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbE9wYWNpdHlcIixcbiAgICAgICAgICBmcm9tOiBcIjAuNVwiLFxuICAgICAgICAgIHRvOiBcIjAuNVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjAuOHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiLjU7MTsuNVwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImNpcmNsZVwiLFxuICAgICAgICB7IGN4OiBcIjEwNVwiLCBjeTogXCIxNVwiLCByOiBwcm9wcy5yYWRpdXMgKyA2IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgICAgICAgZnJvbTogXCIxNVwiLFxuICAgICAgICAgIHRvOiBcIjE1XCIsXG4gICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICBkdXI6IFwiMC44c1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxNTs5OzE1XCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbE9wYWNpdHlcIixcbiAgICAgICAgICBmcm9tOiBcIjFcIixcbiAgICAgICAgICB0bzogXCIxXCIsXG4gICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICBkdXI6IFwiMC44c1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxOy41OzFcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFRocmVlRG90cy5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBUaHJlZURvdHMuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiLFxuICAgIHJhZGl1czogOVxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLlRyaWFuZ2xlID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuVHJpYW5nbGUgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIFRyaWFuZ2xlID0gZXhwb3J0cy5UcmlhbmdsZSA9IGZ1bmN0aW9uIFRyaWFuZ2xlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLXN2Z1wiIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJzdmdcIixcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcInRyaWFuZ2xlXCIsXG4gICAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICAgIHZpZXdCb3g6IFwiLTMgLTQgMzkgMzlcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwb2x5Z29uXCIsIHsgZmlsbDogXCJ0cmFuc3BhcmVudFwiLCBzdHJva2U6IHByb3BzLmNvbG9yLCBzdHJva2VXaWR0aDogXCIxXCIsIHBvaW50czogXCIxNiwwIDMyLDMyIDAsMzJcIiB9KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgVHJpYW5nbGUucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICB9O1xuXG4gIFRyaWFuZ2xlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLldhdGNoID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuV2F0Y2ggPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIFdhdGNoID0gZXhwb3J0cy5XYXRjaCA9IGZ1bmN0aW9uIFdhdGNoKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgdmVyc2lvbjogXCIxLjFcIixcbiAgICAgICAgaWQ6IFwiTDJcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgeDogXCIwcHhcIixcbiAgICAgICAgeTogXCIwcHhcIixcbiAgICAgICAgdmlld0JveDogXCIwIDAgMTAwIDEwMFwiLFxuICAgICAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgMTAwIDEwMFwiLFxuICAgICAgICB4bWxTcGFjZTogXCJwcmVzZXJ2ZVwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgICAgICBzdHJva2VXaWR0aDogXCI0XCIsXG4gICAgICAgIHN0cm9rZU1pdGVybGltaXQ6IFwiMTBcIixcbiAgICAgICAgY3g6IFwiNTBcIixcbiAgICAgICAgY3k6IFwiNTBcIixcbiAgICAgICAgcjogcHJvcHMucmFkaXVzXG4gICAgICB9KSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImxpbmVcIixcbiAgICAgICAge1xuICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICAgICAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjRcIixcbiAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgICAgICAgeDE6IFwiNTBcIixcbiAgICAgICAgICB5MTogXCI1MFwiLFxuICAgICAgICAgIHgyOiBcIjg1XCIsXG4gICAgICAgICAgeTI6IFwiNTAuNVwiXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICBkdXI6IFwiMnNcIixcbiAgICAgICAgICB0eXBlOiBcInJvdGF0ZVwiLFxuICAgICAgICAgIGZyb206IFwiMCA1MCA1MFwiLFxuICAgICAgICAgIHRvOiBcIjM2MCA1MCA1MFwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImxpbmVcIixcbiAgICAgICAge1xuICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIixcbiAgICAgICAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjRcIixcbiAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgICAgICAgeDE6IFwiNTBcIixcbiAgICAgICAgICB5MTogXCI1MFwiLFxuICAgICAgICAgIHgyOiBcIjQ5LjVcIixcbiAgICAgICAgICB5MjogXCI3NFwiXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICBkdXI6IFwiMTVzXCIsXG4gICAgICAgICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICAgICAgICBmcm9tOiBcIjAgNTAgNTBcIixcbiAgICAgICAgICB0bzogXCIzNjAgNTAgNTBcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFdhdGNoLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgcmFkaXVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9O1xuXG4gIFdhdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIixcbiAgICByYWRpdXM6IDQ4XG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcIi4vQ2lyY2xlc1wiLCBcIi4vV2F0Y2hcIiwgXCIuL0F1ZGlvXCIsIFwiLi9CYWxsVHJpYW5nbGVcIiwgXCIuL0JhcnNcIiwgXCIuL0NyYWRsZUxvYWRlclwiLCBcIi4vR3JpZFwiLCBcIi4vSGVhcnRzXCIsIFwiLi9NdXRhdGluZ0RvdHNcIiwgXCIuL092YWxcIiwgXCIuL1BsYW5lXCIsIFwiLi9QdWZmXCIsIFwiLi9SZXZvbHZpbmdEb3RcIiwgXCIuL1JpbmdzXCIsIFwiLi9UYWlsU3BpblwiLCBcIi4vVGhyZWVEb3RzXCIsIFwiLi9UcmlhbmdsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCIuL0NpcmNsZXNcIiksIHJlcXVpcmUoXCIuL1dhdGNoXCIpLCByZXF1aXJlKFwiLi9BdWRpb1wiKSwgcmVxdWlyZShcIi4vQmFsbFRyaWFuZ2xlXCIpLCByZXF1aXJlKFwiLi9CYXJzXCIpLCByZXF1aXJlKFwiLi9DcmFkbGVMb2FkZXJcIiksIHJlcXVpcmUoXCIuL0dyaWRcIiksIHJlcXVpcmUoXCIuL0hlYXJ0c1wiKSwgcmVxdWlyZShcIi4vTXV0YXRpbmdEb3RzXCIpLCByZXF1aXJlKFwiLi9PdmFsXCIpLCByZXF1aXJlKFwiLi9QbGFuZVwiKSwgcmVxdWlyZShcIi4vUHVmZlwiKSwgcmVxdWlyZShcIi4vUmV2b2x2aW5nRG90XCIpLCByZXF1aXJlKFwiLi9SaW5nc1wiKSwgcmVxdWlyZShcIi4vVGFpbFNwaW5cIiksIHJlcXVpcmUoXCIuL1RocmVlRG90c1wiKSwgcmVxdWlyZShcIi4vVHJpYW5nbGVcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLkNpcmNsZXMsIGdsb2JhbC5XYXRjaCwgZ2xvYmFsLkF1ZGlvLCBnbG9iYWwuQmFsbFRyaWFuZ2xlLCBnbG9iYWwuQmFycywgZ2xvYmFsLkNyYWRsZUxvYWRlciwgZ2xvYmFsLkdyaWQsIGdsb2JhbC5IZWFydHMsIGdsb2JhbC5NdXRhdGluZ0RvdHMsIGdsb2JhbC5PdmFsLCBnbG9iYWwuUGxhbmUsIGdsb2JhbC5QdWZmLCBnbG9iYWwuUmV2b2x2aW5nRG90LCBnbG9iYWwuUmluZ3MsIGdsb2JhbC5UYWlsU3BpbiwgZ2xvYmFsLlRocmVlRG90cywgZ2xvYmFsLlRyaWFuZ2xlKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9DaXJjbGVzLCBfV2F0Y2gsIF9BdWRpbywgX0JhbGxUcmlhbmdsZSwgX0JhcnMsIF9DcmFkbGVMb2FkZXIsIF9HcmlkLCBfSGVhcnRzLCBfTXV0YXRpbmdEb3RzLCBfT3ZhbCwgX1BsYW5lLCBfUHVmZiwgX1Jldm9sdmluZ0RvdCwgX1JpbmdzLCBfVGFpbFNwaW4sIF9UaHJlZURvdHMsIF9UcmlhbmdsZSkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5TcGlubmVyID0gdW5kZWZpbmVkO1xuICB2YXIgU3Bpbm5lciA9IGV4cG9ydHMuU3Bpbm5lciA9IHtcbiAgICBDaXJjbGVzOiBfQ2lyY2xlcy5DaXJjbGVzLFxuICAgIEF1ZGlvOiBfQXVkaW8uQXVkaW8sXG4gICAgQmFsbFRyaWFuZ2xlOiBfQmFsbFRyaWFuZ2xlLkJhbGxUcmlhbmdsZSxcbiAgICBCYXJzOiBfQmFycy5CYXJzLFxuICAgIENyYWRsZUxvYWRlcjogX0NyYWRsZUxvYWRlci5DcmFkbGVMb2FkZXIsXG4gICAgR3JpZDogX0dyaWQuR3JpZCxcbiAgICBIZWFydHM6IF9IZWFydHMuSGVhcnRzLFxuICAgIE11dGF0aW5nRG90czogX011dGF0aW5nRG90cy5NdXRhdGluZ0RvdHMsXG4gICAgT3ZhbDogX092YWwuT3ZhbCxcbiAgICBQbGFuZTogX1BsYW5lLlBsYW5lLFxuICAgIFB1ZmY6IF9QdWZmLlB1ZmYsXG4gICAgUmV2b2x2aW5nRG90OiBfUmV2b2x2aW5nRG90LlJldm9sdmluZ0RvdCxcbiAgICBSaW5nczogX1JpbmdzLlJpbmdzLFxuICAgIFRhaWxTcGluOiBfVGFpbFNwaW4uVGFpbFNwaW4sXG4gICAgVGhyZWVEb3RzOiBfVGhyZWVEb3RzLlRocmVlRG90cyxcbiAgICBUcmlhbmdsZTogX1RyaWFuZ2xlLlRyaWFuZ2xlLFxuICAgIFdhdGNoOiBfV2F0Y2guV2F0Y2hcbiAgfTtcbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4Jyk7Il0sInNvdXJjZVJvb3QiOiIifQ==