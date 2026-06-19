/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./common/index.js":
/*!*************************!*\
  !*** ./common/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// const { obj, var1 } = require('./obj');\n// console.log(var1);\n// console.log(JSON.stringify(obj));\n// 1 { a: 1, b: 2 }\n\nconst m = __webpack_require__(/*! ./obj */ \"./common/obj.js\");\nconsole.log(m.var1);\nconsole.log(JSON.stringify(m.obj));\n\n//# sourceURL=webpack://webpack5/./common/index.js?");

/***/ }),

/***/ "./common/obj.js":
/*!***********************!*\
  !*** ./common/obj.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {

eval("const obj = {\n  a: 1\n};\nlet var1 = 1;\nlet var2 = 11;\nvar3 = 111;\n// module.exports = {\n//   obj,\n//   var1,\n//   var2\n// }\nexports.obj = obj;\nexports.var1 = var1;\nconsole.log(this);\nobj.b = 2;\nvar1 = 2;\n\n//# sourceURL=webpack://webpack5/./common/obj.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./common/index.js");
/******/ 	
/******/ })()
;