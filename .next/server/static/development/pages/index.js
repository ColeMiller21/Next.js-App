module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JobLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobLists */ "./components/JobLists.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let listItem = "";

class Form extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "descriptionChange", event => {
      this.setState({
        description: event.target.value
      });
    });

    _defineProperty(this, "cityZipChange", event => {
      this.setState({
        cityZip: event.target.value
      });
    });

    this.state = {
      description: "python",
      cityZip: "new york",
      jobs: [],
      loading: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true
    }); //need to replace for cityzip in url

    let splitCity = this.state.cityZip.split(" ").join("+");
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.description}&location=${this.state.cityZip}`).then(response => {
      //console.log(response.data)
      if (response.data.length === 0) {
        listItem = __jsx("p", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 32
          }
        }, "There were no job results for this search");
      } else {
        this.state.jobs.push(response.data);
        this.setState({
          jobs: this.state.jobs[0]
        });
        console.log(this.state.jobs);
      }
    }).catch(error => console.log(error));
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      style: styles.formContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "input-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
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
        lineNumber: 56,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "input-group mb-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-xs-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
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
        lineNumber: 60,
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
        lineNumber: 62,
        columnNumber: 25
      }
    }, "Search"))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, this.state.loading ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 43
      }
    }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
        lineNumber: 66,
        columnNumber: 48
      }
    })) : __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }, __jsx("ul", {
      className: "list-group list-group-flush",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }, this.state.jobs.map(job => {
      return __jsx(_JobLists__WEBPACK_IMPORTED_MODULE_1__["default"], {
        company: job.company,
        title: job.title,
        image: job.company_logo,
        location: job.location,
        how_to_apply: job.how_to_apply,
        description: job.description,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 44
        }
      });
    })))));
  }

}

;
const styles = {
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

/***/ }),

/***/ "./components/JobLists.js":
/*!********************************!*\
  !*** ./components/JobLists.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\JobLists.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function stripHtml(string) {
  var strippedString = string.replace(/(<([^>]+)>)/ig, "");
  return strippedString;
}

const JobLists = (company = "No company provided", title = "No title provided", image = "No image provided", location = "no location provided", how_to_apply = "Check description on how to apply", description = "no description provided") => {
  return __jsx("li", {
    className: "list-group-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: styles.imageStyle,
    src: image,
    alt: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "col-xs-5",
    style: styles.listDiv,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, company), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 24
    }
  }, "Location:"), " ", location), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 24
    }
  }, "Title:"), " ", title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 24
    }
  }, "How to apply: "), stripHtml(how_to_apply)), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("span", {
    style: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 24
    }
  }, "Description:"), " ", stripHtml(description)))));
};

const styles = {
  imageStyle: {
    margin: "10px",
    height: 100,
    width: 100,
    verticalAlign: "baseline"
  },
  listDiv: {
    display: "inline-block"
  },
  title: {
    fontWeight: 600,
    fontSize: "1rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (JobLists);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
var _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Next App"), __jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Navbar = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar navbar-light bg-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("span", {
    style: {
      color: "white",
      fontSize: "1.5rem"
    },
    className: "navbar-brand mb-0 h1 text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, "Software Jobs")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var _components_JobLists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/JobLists */ "./components/JobLists.js");
var _jsxFileName = "C:\\Users\\colet\\Desktop\\Projects\\Next.js-App\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\colet\Desktop\Projects\Next.js-App\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSm9iTGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiXSwibmFtZXMiOlsibGlzdEl0ZW0iLCJGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJjaXR5WmlwIiwic3RhdGUiLCJqb2JzIiwibG9hZGluZyIsIm9uU3VibWl0IiwiYmluZCIsInByZXZlbnREZWZhdWx0Iiwic3BsaXRDaXR5Iiwic3BsaXQiLCJqb2luIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibGVuZ3RoIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwicmVuZGVyIiwic3R5bGVzIiwiZm9ybUNvbnRhaW5lciIsImRlc2NyaXB0aW9uQ2hhbmdlIiwiY2l0eVppcENoYW5nZSIsImNpdHlJbnB1dCIsImJ1dHRvblN0eWxlIiwibG9hZGVyU3R5bGUiLCJtYXAiLCJqb2IiLCJjb21wYW55IiwidGl0bGUiLCJjb21wYW55X2xvZ28iLCJsb2NhdGlvbiIsImhvd190b19hcHBseSIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwic3RyaXBIdG1sIiwic3RyaW5nIiwic3RyaXBwZWRTdHJpbmciLCJyZXBsYWNlIiwiSm9iTGlzdHMiLCJpbWFnZSIsImltYWdlU3R5bGUiLCJsaXN0RGl2IiwibWFyZ2luIiwiaGVpZ2h0Iiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwiZGlzcGxheSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIkxheW91dCIsImNoaWxkcmVuIiwiTmF2YmFyIiwiY29sb3IiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLFFBQVEsR0FBRyxFQUFmOztBQUNBLE1BQU1DLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQy9CQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixDQURKLENBREo7QUFRSCxDQVREOztBQVllRyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsS0FBSyxHQUFHLE1BQU07QUFDaEIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKO0FBT0gsQ0FSRDs7QUFVZUEsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgSm9iTGlzdHMgZnJvbSAnLi9Kb2JMaXN0cyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxubGV0IGxpc3RJdGVtID0gXCJcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInB5dGhvblwiLFxyXG4gICAgICAgICAgICBjaXR5WmlwOiBcIm5ldyB5b3JrXCIsXHJcbiAgICAgICAgICAgIGpvYnM6IFtdLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2NyaXB0aW9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2l0eVppcENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaXR5WmlwOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICAvL25lZWQgdG8gcmVwbGFjZSBmb3IgY2l0eXppcCBpbiB1cmxcclxuICAgICAgICBsZXQgc3BsaXRDaXR5ID0gdGhpcy5zdGF0ZS5jaXR5WmlwLnNwbGl0KFwiIFwiKS5qb2luKFwiK1wiKVxyXG5cclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uP2Rlc2NyaXB0aW9uPSR7dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn0mbG9jYXRpb249JHt0aGlzLnN0YXRlLmNpdHlaaXB9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW0gPSA8cD5UaGVyZSB3ZXJlIG5vIGpvYiByZXN1bHRzIGZvciB0aGlzIHNlYXJjaDwvcD47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmpvYnMucHVzaChyZXNwb25zZS5kYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBqb2JzOiB0aGlzLnN0YXRlLmpvYnNbMF0gfSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpvYnMpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuZGVzY3JpcHRpb25DaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uIGV4OiBKYXZhLCBSdWJ5LCBKYXZhc2NyaXB0XCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmNpdHlaaXBDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNpdHlaaXB9IHN0eWxlPXtzdHlsZXMuY2l0eUlucHV0fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkNpdHkgTmFtZSBvciBaaXBjb2RlXCIgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fSBzdHlsZT17c3R5bGVzLmJ1dHRvblN0eWxlfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPGRpdj48TG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5sb2FkZXJTdHlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIk92YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiMwMEJGRkZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17MzAwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmpvYnMubWFwKGpvYiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Sm9iTGlzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhbnk9e2pvYi5jb21wYW55fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2pvYi50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtqb2IuY29tcGFueV9sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2pvYi5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvd190b19hcHBseT17am9iLmhvd190b19hcHBseX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtqb2IuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBmb3JtQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaydcclxuICAgIH0sXHJcbiAgICBidXR0b25TdHlsZToge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIGxvYWRlclN0eWxlOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJcclxuZnVuY3Rpb24gc3RyaXBIdG1sKHN0cmluZykge1xyXG4gICAgdmFyIHN0cmlwcGVkU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLCBcIlwiKVxyXG4gICAgcmV0dXJuIHN0cmlwcGVkU3RyaW5nXHJcblxyXG59XHJcbmNvbnN0IEpvYkxpc3RzID0gKGNvbXBhbnkgPSBcIk5vIGNvbXBhbnkgcHJvdmlkZWRcIiwgdGl0bGUgPSBcIk5vIHRpdGxlIHByb3ZpZGVkXCIsXHJcbiAgICBpbWFnZSA9IFwiTm8gaW1hZ2UgcHJvdmlkZWRcIiwgbG9jYXRpb24gPSBcIm5vIGxvY2F0aW9uIHByb3ZpZGVkXCIsXHJcbiAgICBob3dfdG9fYXBwbHkgPSBcIkNoZWNrIGRlc2NyaXB0aW9uIG9uIGhvdyB0byBhcHBseVwiLCBkZXNjcmlwdGlvbiA9IFwibm8gZGVzY3JpcHRpb24gcHJvdmlkZWRcIikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17c3R5bGVzLmltYWdlU3R5bGV9IHNyYz17aW1hZ2V9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNVwiIHN0eWxlPXtzdHlsZXMubGlzdERpdn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntjb21wYW55fTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3N0eWxlcy50aXRsZX0+TG9jYXRpb246PC9zcGFuPiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PlRpdGxlOjwvc3Bhbj4ge3RpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBzdHlsZT17c3R5bGVzLnRpdGxlfT5Ib3cgdG8gYXBwbHk6IDwvc3Bhbj57c3RyaXBIdG1sKGhvd190b19hcHBseSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHN0eWxlPXtzdHlsZXMudGl0bGV9PkRlc2NyaXB0aW9uOjwvc3Bhbj4ge3N0cmlwSHRtbChkZXNjcmlwdGlvbil9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGltYWdlU3R5bGU6IHtcclxuICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiXHJcbiAgICB9LFxyXG4gICAgbGlzdERpdjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKb2JMaXN0czsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcclxuXHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3Rzd2F0Y2gvNC41LjAvY2VydWxlYW4vYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJcclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiMS41cmVtXCIgfX0gY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIG1iLTAgaDEgdGV4dC1jZW50ZXJcIj5Tb2Z0d2FyZSBKb2JzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nO1xyXG5pbXBvcnQgSm9iTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0pvYkxpc3RzJztcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==