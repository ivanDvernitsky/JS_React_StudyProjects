(this["webpackJsonpreminder"] = this["webpackJsonpreminder"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\n=============== \nVariables\n===============\n*/\n\n:root {\n  /* dark shades of primary color*/\n  --clr-primary-1: hsl(205, 86%, 17%);\n  --clr-primary-2: hsl(205, 77%, 27%);\n  --clr-primary-3: hsl(205, 72%, 37%);\n  --clr-primary-4: hsl(205, 63%, 48%);\n  /* primary/main color */\n  --clr-primary-5: hsl(205, 78%, 60%);\n  /* lighter shades of primary color */\n  --clr-primary-6: hsl(205, 89%, 70%);\n  --clr-primary-7: hsl(205, 90%, 76%);\n  --clr-primary-8: hsl(205, 86%, 81%);\n  --clr-primary-9: hsl(205, 90%, 88%);\n  --clr-primary-10: hsl(205, 100%, 96%);\n  /* darkest grey - used for headings */\n  --clr-grey-1: hsl(209, 61%, 16%);\n  --clr-grey-2: hsl(211, 39%, 23%);\n  --clr-grey-3: hsl(209, 34%, 30%);\n  --clr-grey-4: hsl(209, 28%, 39%);\n  /* grey used for paragraphs */\n  --clr-grey-5: hsl(210, 22%, 49%);\n  --clr-grey-6: hsl(209, 23%, 60%);\n  --clr-grey-7: hsl(211, 27%, 70%);\n  --clr-grey-8: hsl(210, 31%, 80%);\n  --clr-grey-9: hsl(212, 33%, 89%);\n  --clr-grey-10: hsl(210, 36%, 96%);\n  --clr-white: #fff;\n  --clr-red-dark: hsl(360, 67%, 44%);\n  --clr-red-light: hsl(360, 71%, 66%);\n  --clr-green-dark: hsl(125, 67%, 44%);\n  --clr-green-light: hsl(125, 71%, 66%);\n  --clr-black: #222;\n  --transition: all 0.3s linear;\n  --spacing: 0.1rem;\n  --radius: 0.25rem;\n  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n  --max-width: 1170px;\n  --fixed-width: 620px;\n}\n/*\n=============== \nGlobal Styles\n===============\n*/\n\n*,\n::after,\n::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  background: var(--clr-grey-10);\n  color: var(--clr-grey-1);\n  line-height: 1.5;\n  font-size: 0.875rem;\n}\nul {\n  list-style-type: none;\n}\na {\n  text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4 {\n  letter-spacing: var(--spacing);\n  text-transform: capitalize;\n  line-height: 1.25;\n  margin-bottom: 0.75rem;\n}\nh1 {\n  font-size: 3rem;\n}\nh2 {\n  font-size: 2rem;\n}\nh3 {\n  font-size: 1.25rem;\n}\nh4 {\n  font-size: 0.875rem;\n}\np {\n  margin-bottom: 1.25rem;\n  color: var(--clr-grey-5);\n}\n@media screen and (min-width: 800px) {\n  h1 {\n    font-size: 4rem;\n  }\n  h2 {\n    font-size: 2.5rem;\n  }\n  h3 {\n    font-size: 1.75rem;\n  }\n  h4 {\n    font-size: 1rem;\n  }\n  body {\n    font-size: 1rem;\n  }\n  h1,\n  h2,\n  h3,\n  h4 {\n    line-height: 1;\n  }\n}\n/*  global classes */\n\n/* section */\n.section {\n  width: 90vw;\n  margin: 0 auto;\n  max-width: var(--max-width);\n}\n\n@media screen and (min-width: 992px) {\n  .section {\n    width: 95vw;\n  }\n}\n.btn {\n  background: var(--clr-primary-5);\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  border-radius: var(--radius);\n  text-transform: capitalize;\n  color: var(--clr-white);\n  letter-spacing: var(--spacing);\n  border-color: transparent;\n  cursor: pointer;\n  margin-top: 2rem;\n  font-size: 1.2rem;\n}\n/*\n=============== \nTours\n===============\n*/\n\n.tours-wrapper {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n\n.our-tours-header{\n  margin: 100px;\n  border-bottom: 5px solid #2560EB;\n}\n\n.single-tour{\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  width: 80%;\n  max-width: 700px;\n  background-color: #fff;\n  margin-bottom: 60px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n\n.single-tour img{\n  width: 100%;\n  height: 300px;\n  object-fit: cover;\n  align-self: center;\n}\n\n.single-tour-text {\n  padding: 30px 50px;\n  padding-bottom: 5px;\n}\n\n.name-and-price{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.name-and-price h4{\n  background-color: #C9EFFF;\n  padding: 5px 10px;\n  color: #2560EB;\n  border-radius: 5px;\n}\n\n.dismiss-btn {\n  width: 50%;\n  height: 35px;\n  margin: auto;\n  margin-bottom: 20px;\n  font-size: 1rem;\n  font-weight: 600;\n  background-color: inherit;\n  border: 2px solid #C74E4B ;\n  color: #C74E4B;\n  border-radius: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./src/Loading.js");
/* harmony import */ var _Tours__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tours */ "./src/Tours.js");
var _jsxFileName = "/Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/src/App.js";



const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [tours, setTours] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchTours();
  }, []);

  function removeToor(id) {
    const newTours = tours.filter(tour => tour.id != id);
    setTours(newTours);
  }

  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 12
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tours__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tours: tours,
    removeToor: removeToor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Loading.js":
/*!************************!*\
  !*** ./src/Loading.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/src/Loading.js";


const Loading = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "loading..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/Tour.js":
/*!*********************!*\
  !*** ./src/Tour.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/src/Tour.js";


const Tour = ({
  tour,
  removeToor
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-tour",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: tour.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "single-tour-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name-and-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, tour.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, tour.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, tour.info)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "dismiss-btn",
    onClick: () => removeToor(tour.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, " Not interested"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tour);

/***/ }),

/***/ "./src/Tours.js":
/*!**********************!*\
  !*** ./src/Tours.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tour */ "./src/Tour.js");
var _jsxFileName = "/Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/src/Tours.js";



const Tours = props => {
  const displayTours = props.tours.map(tour => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tour__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: tour.id,
      tour: tour,
      removeToor: props.removeToor,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 12
      }
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tours-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "our-tours-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Our tours"), displayTours);
};

/* harmony default export */ __webpack_exports__["default"] = (Tours);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})), document.getElementById('root'));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ivandvernitsky/Dev/react/studyProjects/02-tours/setup/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map