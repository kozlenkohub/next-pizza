"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use";
exports.ids = ["vendor-chunks/react-use"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-use/esm/misc/util.js":
/*!*************************************************!*\
  !*** ./node_modules/react-use/esm/misc/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isBrowser: () => (/* binding */ isBrowser),\n/* harmony export */   isNavigator: () => (/* binding */ isNavigator),\n/* harmony export */   noop: () => (/* binding */ noop),\n/* harmony export */   off: () => (/* binding */ off),\n/* harmony export */   on: () => (/* binding */ on)\n/* harmony export */ });\nvar noop = function() {};\nfunction on(obj) {\n    var args = [];\n    for(var _i = 1; _i < arguments.length; _i++){\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.addEventListener) {\n        obj.addEventListener.apply(obj, args);\n    }\n}\nfunction off(obj) {\n    var args = [];\n    for(var _i = 1; _i < arguments.length; _i++){\n        args[_i - 1] = arguments[_i];\n    }\n    if (obj && obj.removeEventListener) {\n        obj.removeEventListener.apply(obj, args);\n    }\n}\nvar isBrowser = \"undefined\" !== \"undefined\";\nvar isNavigator = typeof navigator !== \"undefined\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS9taXNjL3V0aWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxJQUFJQSxPQUFPLFlBQWMsRUFBRTtBQUMzQixTQUFTQyxHQUFHQyxHQUFHO0lBQ2xCLElBQUlDLE9BQU8sRUFBRTtJQUNiLElBQUssSUFBSUMsS0FBSyxHQUFHQSxLQUFLQyxVQUFVQyxNQUFNLEVBQUVGLEtBQU07UUFDMUNELElBQUksQ0FBQ0MsS0FBSyxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0QsR0FBRztJQUNoQztJQUNBLElBQUlGLE9BQU9BLElBQUlLLGdCQUFnQixFQUFFO1FBQzdCTCxJQUFJSyxnQkFBZ0IsQ0FBQ0MsS0FBSyxDQUFDTixLQUFLQztJQUNwQztBQUNKO0FBQ08sU0FBU00sSUFBSVAsR0FBRztJQUNuQixJQUFJQyxPQUFPLEVBQUU7SUFDYixJQUFLLElBQUlDLEtBQUssR0FBR0EsS0FBS0MsVUFBVUMsTUFBTSxFQUFFRixLQUFNO1FBQzFDRCxJQUFJLENBQUNDLEtBQUssRUFBRSxHQUFHQyxTQUFTLENBQUNELEdBQUc7SUFDaEM7SUFDQSxJQUFJRixPQUFPQSxJQUFJUSxtQkFBbUIsRUFBRTtRQUNoQ1IsSUFBSVEsbUJBQW1CLENBQUNGLEtBQUssQ0FBQ04sS0FBS0M7SUFDdkM7QUFDSjtBQUNPLElBQUlRLFlBQVksZ0JBQWtCLFlBQVk7QUFDOUMsSUFBSUMsY0FBYyxPQUFPQyxjQUFjLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBpenphLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vbWlzYy91dGlsLmpzPzZiMmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBub29wID0gZnVuY3Rpb24gKCkgeyB9O1xuZXhwb3J0IGZ1bmN0aW9uIG9uKG9iaikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKG9iaiAmJiBvYmouYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lci5hcHBseShvYmosIGFyZ3MpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBvZmYob2JqKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAob2JqICYmIG9iai5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIG9iai5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydCB2YXIgaXNOYXZpZ2F0b3IgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcbiJdLCJuYW1lcyI6WyJub29wIiwib24iLCJvYmoiLCJhcmdzIiwiX2kiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwbHkiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNCcm93c2VyIiwiaXNOYXZpZ2F0b3IiLCJuYXZpZ2F0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/misc/util.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useClickAway.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useClickAway.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _misc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/util */ \"(ssr)/./node_modules/react-use/esm/misc/util.js\");\n\n\nvar defaultEvents = [\n    \"mousedown\",\n    \"touchstart\"\n];\nvar useClickAway = function(ref, onClickAway, events) {\n    if (events === void 0) {\n        events = defaultEvents;\n    }\n    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onClickAway);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        savedCallback.current = onClickAway;\n    }, [\n        onClickAway\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var handler = function(event) {\n            var el = ref.current;\n            el && !el.contains(event.target) && savedCallback.current(event);\n        };\n        for(var _i = 0, events_1 = events; _i < events_1.length; _i++){\n            var eventName = events_1[_i];\n            (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.on)(document, eventName, handler);\n        }\n        return function() {\n            for(var _i = 0, events_2 = events; _i < events_2.length; _i++){\n                var eventName = events_2[_i];\n                (0,_misc_util__WEBPACK_IMPORTED_MODULE_1__.off)(document, eventName, handler);\n            }\n        };\n    }, [\n        events,\n        ref\n    ]);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClickAway);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VDbGlja0F3YXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNKO0FBQ3RDLElBQUlJLGdCQUFnQjtJQUFDO0lBQWE7Q0FBYTtBQUMvQyxJQUFJQyxlQUFlLFNBQVVDLEdBQUcsRUFBRUMsV0FBVyxFQUFFQyxNQUFNO0lBQ2pELElBQUlBLFdBQVcsS0FBSyxHQUFHO1FBQUVBLFNBQVNKO0lBQWU7SUFDakQsSUFBSUssZ0JBQWdCUiw2Q0FBTUEsQ0FBQ007SUFDM0JQLGdEQUFTQSxDQUFDO1FBQ05TLGNBQWNDLE9BQU8sR0FBR0g7SUFDNUIsR0FBRztRQUFDQTtLQUFZO0lBQ2hCUCxnREFBU0EsQ0FBQztRQUNOLElBQUlXLFVBQVUsU0FBVUMsS0FBSztZQUN6QixJQUFJQyxLQUFLUCxJQUFJSSxPQUFPO1lBQ3BCRyxNQUFNLENBQUNBLEdBQUdDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxLQUFLTixjQUFjQyxPQUFPLENBQUNFO1FBQzlEO1FBQ0EsSUFBSyxJQUFJSSxLQUFLLEdBQUdDLFdBQVdULFFBQVFRLEtBQUtDLFNBQVNDLE1BQU0sRUFBRUYsS0FBTTtZQUM1RCxJQUFJRyxZQUFZRixRQUFRLENBQUNELEdBQUc7WUFDNUJiLDhDQUFFQSxDQUFDaUIsVUFBVUQsV0FBV1I7UUFDNUI7UUFDQSxPQUFPO1lBQ0gsSUFBSyxJQUFJSyxLQUFLLEdBQUdLLFdBQVdiLFFBQVFRLEtBQUtLLFNBQVNILE1BQU0sRUFBRUYsS0FBTTtnQkFDNUQsSUFBSUcsWUFBWUUsUUFBUSxDQUFDTCxHQUFHO2dCQUM1QmQsK0NBQUdBLENBQUNrQixVQUFVRCxXQUFXUjtZQUM3QjtRQUNKO0lBQ0osR0FBRztRQUFDSDtRQUFRRjtLQUFJO0FBQ3BCO0FBQ0EsaUVBQWVELFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBpenphLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlQ2xpY2tBd2F5LmpzPzgzZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvZmYsIG9uIH0gZnJvbSAnLi9taXNjL3V0aWwnO1xudmFyIGRlZmF1bHRFdmVudHMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J107XG52YXIgdXNlQ2xpY2tBd2F5ID0gZnVuY3Rpb24gKHJlZiwgb25DbGlja0F3YXksIGV2ZW50cykge1xuICAgIGlmIChldmVudHMgPT09IHZvaWQgMCkgeyBldmVudHMgPSBkZWZhdWx0RXZlbnRzOyB9XG4gICAgdmFyIHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWYob25DbGlja0F3YXkpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNhdmVkQ2FsbGJhY2suY3VycmVudCA9IG9uQ2xpY2tBd2F5O1xuICAgIH0sIFtvbkNsaWNrQXdheV0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZWwgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgIGVsICYmICFlbC5jb250YWlucyhldmVudC50YXJnZXQpICYmIHNhdmVkQ2FsbGJhY2suY3VycmVudChldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZXZlbnRzXzEgPSBldmVudHM7IF9pIDwgZXZlbnRzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnRzXzFbX2ldO1xuICAgICAgICAgICAgb24oZG9jdW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgZXZlbnRzXzIgPSBldmVudHM7IF9pIDwgZXZlbnRzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50c18yW19pXTtcbiAgICAgICAgICAgICAgICBvZmYoZG9jdW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2V2ZW50cywgcmVmXSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlQ2xpY2tBd2F5O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIm9mZiIsIm9uIiwiZGVmYXVsdEV2ZW50cyIsInVzZUNsaWNrQXdheSIsInJlZiIsIm9uQ2xpY2tBd2F5IiwiZXZlbnRzIiwic2F2ZWRDYWxsYmFjayIsImN1cnJlbnQiLCJoYW5kbGVyIiwiZXZlbnQiLCJlbCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiX2kiLCJldmVudHNfMSIsImxlbmd0aCIsImV2ZW50TmFtZSIsImRvY3VtZW50IiwiZXZlbnRzXzIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useClickAway.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useDebounce.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useDebounce.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useDebounce)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTimeoutFn */ \"(ssr)/./node_modules/react-use/esm/useTimeoutFn.js\");\n\n\nfunction useDebounce(fn, ms, deps) {\n    if (ms === void 0) {\n        ms = 0;\n    }\n    if (deps === void 0) {\n        deps = [];\n    }\n    var _a = (0,_useTimeoutFn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(reset, deps);\n    return [\n        isReady,\n        cancel\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VEZWJvdW5jZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBQ1E7QUFDM0IsU0FBU0UsWUFBWUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLElBQUk7SUFDNUMsSUFBSUQsT0FBTyxLQUFLLEdBQUc7UUFBRUEsS0FBSztJQUFHO0lBQzdCLElBQUlDLFNBQVMsS0FBSyxHQUFHO1FBQUVBLE9BQU8sRUFBRTtJQUFFO0lBQ2xDLElBQUlDLEtBQUtMLHlEQUFZQSxDQUFDRSxJQUFJQyxLQUFLRyxVQUFVRCxFQUFFLENBQUMsRUFBRSxFQUFFRSxTQUFTRixFQUFFLENBQUMsRUFBRSxFQUFFRyxRQUFRSCxFQUFFLENBQUMsRUFBRTtJQUM3RU4sZ0RBQVNBLENBQUNTLE9BQU9KO0lBQ2pCLE9BQU87UUFBQ0U7UUFBU0M7S0FBTztBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcGl6emEvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VEZWJvdW5jZS5qcz9mNzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VUaW1lb3V0Rm4gZnJvbSAnLi91c2VUaW1lb3V0Rm4nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRGVib3VuY2UoZm4sIG1zLCBkZXBzKSB7XG4gICAgaWYgKG1zID09PSB2b2lkIDApIHsgbXMgPSAwOyB9XG4gICAgaWYgKGRlcHMgPT09IHZvaWQgMCkgeyBkZXBzID0gW107IH1cbiAgICB2YXIgX2EgPSB1c2VUaW1lb3V0Rm4oZm4sIG1zKSwgaXNSZWFkeSA9IF9hWzBdLCBjYW5jZWwgPSBfYVsxXSwgcmVzZXQgPSBfYVsyXTtcbiAgICB1c2VFZmZlY3QocmVzZXQsIGRlcHMpO1xuICAgIHJldHVybiBbaXNSZWFkeSwgY2FuY2VsXTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VUaW1lb3V0Rm4iLCJ1c2VEZWJvdW5jZSIsImZuIiwibXMiLCJkZXBzIiwiX2EiLCJpc1JlYWR5IiwiY2FuY2VsIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useDebounce.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useIntersection.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-use/esm/useIntersection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useIntersection = function(ref, options) {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        if (ref.current && typeof IntersectionObserver === \"function\") {\n            var handler = function(entries) {\n                setIntersectionObserverEntry(entries[0]);\n            };\n            var observer_1 = new IntersectionObserver(handler, options);\n            observer_1.observe(ref.current);\n            return function() {\n                setIntersectionObserverEntry(null);\n                observer_1.disconnect();\n            };\n        }\n        return function() {};\n    }, [\n        ref.current,\n        options.threshold,\n        options.root,\n        options.rootMargin\n    ]);\n    return intersectionObserverEntry;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIntersection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VJbnRlcnNlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQzVDLElBQUlFLGtCQUFrQixTQUFVQyxHQUFHLEVBQUVDLE9BQU87SUFDeEMsSUFBSUMsS0FBS0osK0NBQVFBLENBQUMsT0FBT0ssNEJBQTRCRCxFQUFFLENBQUMsRUFBRSxFQUFFRSwrQkFBK0JGLEVBQUUsQ0FBQyxFQUFFO0lBQ2hHTCxnREFBU0EsQ0FBQztRQUNOLElBQUlHLElBQUlLLE9BQU8sSUFBSSxPQUFPQyx5QkFBeUIsWUFBWTtZQUMzRCxJQUFJQyxVQUFVLFNBQVVDLE9BQU87Z0JBQzNCSiw2QkFBNkJJLE9BQU8sQ0FBQyxFQUFFO1lBQzNDO1lBQ0EsSUFBSUMsYUFBYSxJQUFJSCxxQkFBcUJDLFNBQVNOO1lBQ25EUSxXQUFXQyxPQUFPLENBQUNWLElBQUlLLE9BQU87WUFDOUIsT0FBTztnQkFDSEQsNkJBQTZCO2dCQUM3QkssV0FBV0UsVUFBVTtZQUN6QjtRQUNKO1FBQ0EsT0FBTyxZQUFjO0lBQ3pCLEdBQUc7UUFBQ1gsSUFBSUssT0FBTztRQUFFSixRQUFRVyxTQUFTO1FBQUVYLFFBQVFZLElBQUk7UUFBRVosUUFBUWEsVUFBVTtLQUFDO0lBQ3JFLE9BQU9YO0FBQ1g7QUFDQSxpRUFBZUosZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcGl6emEvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VJbnRlcnNlY3Rpb24uanM/M2IzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChyZWYsIG9wdGlvbnMpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShudWxsKSwgaW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IF9hWzBdLCBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5ID0gX2FbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ICYmIHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICAgICAgICAgIHNldEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cmllc1swXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9ic2VydmVyXzEgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgICAgICBvYnNlcnZlcl8xLm9ic2VydmUocmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KG51bGwpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyXzEuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH0sIFtyZWYuY3VycmVudCwgb3B0aW9ucy50aHJlc2hvbGQsIG9wdGlvbnMucm9vdCwgb3B0aW9ucy5yb290TWFyZ2luXSk7XG4gICAgcmV0dXJuIGludGVyc2VjdGlvbk9ic2VydmVyRW50cnk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlSW50ZXJzZWN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlSW50ZXJzZWN0aW9uIiwicmVmIiwib3B0aW9ucyIsIl9hIiwiaW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSIsInNldEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkiLCJjdXJyZW50IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJoYW5kbGVyIiwiZW50cmllcyIsIm9ic2VydmVyXzEiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsInRocmVzaG9sZCIsInJvb3QiLCJyb290TWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useIntersection.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useSet.js":
/*!**********************************************!*\
  !*** ./node_modules/react-use/esm/useSet.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar useSet = function(initialSet) {\n    if (initialSet === void 0) {\n        initialSet = new Set();\n    }\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSet), set = _a[0], setSet = _a[1];\n    var stableActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {\n        var add = function(item) {\n            return setSet(function(prevSet) {\n                return new Set((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArrays)(Array.from(prevSet), [\n                    item\n                ]));\n            });\n        };\n        var remove = function(item) {\n            return setSet(function(prevSet) {\n                return new Set(Array.from(prevSet).filter(function(i) {\n                    return i !== item;\n                }));\n            });\n        };\n        var toggle = function(item) {\n            return setSet(function(prevSet) {\n                return prevSet.has(item) ? new Set(Array.from(prevSet).filter(function(i) {\n                    return i !== item;\n                })) : new Set((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArrays)(Array.from(prevSet), [\n                    item\n                ]));\n            });\n        };\n        return {\n            add: add,\n            remove: remove,\n            toggle: toggle,\n            reset: function() {\n                return setSet(initialSet);\n            },\n            clear: function() {\n                return setSet(new Set());\n            }\n        };\n    }, [\n        setSet\n    ]);\n    var utils = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({\n        has: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(item) {\n            return set.has(item);\n        }, [\n            set\n        ])\n    }, stableActions);\n    return [\n        set,\n        utils\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VTZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNNO0FBQ3ZELElBQUlLLFNBQVMsU0FBVUMsVUFBVTtJQUM3QixJQUFJQSxlQUFlLEtBQUssR0FBRztRQUFFQSxhQUFhLElBQUlDO0lBQU87SUFDckQsSUFBSUMsS0FBS0osK0NBQVFBLENBQUNFLGFBQWFHLE1BQU1ELEVBQUUsQ0FBQyxFQUFFLEVBQUVFLFNBQVNGLEVBQUUsQ0FBQyxFQUFFO0lBQzFELElBQUlHLGdCQUFnQlIsOENBQU9BLENBQUM7UUFDeEIsSUFBSVMsTUFBTSxTQUFVQyxJQUFJO1lBQUksT0FBT0gsT0FBTyxTQUFVSSxPQUFPO2dCQUFJLE9BQU8sSUFBSVAsSUFBSU4scURBQWNBLENBQUNjLE1BQU1DLElBQUksQ0FBQ0YsVUFBVTtvQkFBQ0Q7aUJBQUs7WUFBSTtRQUFJO1FBQ2hJLElBQUlJLFNBQVMsU0FBVUosSUFBSTtZQUN2QixPQUFPSCxPQUFPLFNBQVVJLE9BQU87Z0JBQUksT0FBTyxJQUFJUCxJQUFJUSxNQUFNQyxJQUFJLENBQUNGLFNBQVNJLE1BQU0sQ0FBQyxTQUFVQyxDQUFDO29CQUFJLE9BQU9BLE1BQU1OO2dCQUFNO1lBQUs7UUFDeEg7UUFDQSxJQUFJTyxTQUFTLFNBQVVQLElBQUk7WUFDdkIsT0FBT0gsT0FBTyxTQUFVSSxPQUFPO2dCQUMzQixPQUFPQSxRQUFRTyxHQUFHLENBQUNSLFFBQ2IsSUFBSU4sSUFBSVEsTUFBTUMsSUFBSSxDQUFDRixTQUFTSSxNQUFNLENBQUMsU0FBVUMsQ0FBQztvQkFBSSxPQUFPQSxNQUFNTjtnQkFBTSxNQUNyRSxJQUFJTixJQUFJTixxREFBY0EsQ0FBQ2MsTUFBTUMsSUFBSSxDQUFDRixVQUFVO29CQUFDRDtpQkFBSztZQUM1RDtRQUNKO1FBQ0EsT0FBTztZQUFFRCxLQUFLQTtZQUFLSyxRQUFRQTtZQUFRRyxRQUFRQTtZQUFRRSxPQUFPO2dCQUFjLE9BQU9aLE9BQU9KO1lBQWE7WUFBR2lCLE9BQU87Z0JBQWMsT0FBT2IsT0FBTyxJQUFJSDtZQUFRO1FBQUU7SUFDM0osR0FBRztRQUFDRztLQUFPO0lBQ1gsSUFBSWMsUUFBUXhCLCtDQUFRQSxDQUFDO1FBQUVxQixLQUFLbkIsa0RBQVdBLENBQUMsU0FBVVcsSUFBSTtZQUFJLE9BQU9KLElBQUlZLEdBQUcsQ0FBQ1I7UUFBTyxHQUFHO1lBQUNKO1NBQUk7SUFBRSxHQUFHRTtJQUM3RixPQUFPO1FBQUNGO1FBQUtlO0tBQU07QUFDdkI7QUFDQSxpRUFBZW5CLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBpenphLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlU2V0LmpzP2NiMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19hc3NpZ24sIF9fc3ByZWFkQXJyYXlzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlU2V0ID0gZnVuY3Rpb24gKGluaXRpYWxTZXQpIHtcbiAgICBpZiAoaW5pdGlhbFNldCA9PT0gdm9pZCAwKSB7IGluaXRpYWxTZXQgPSBuZXcgU2V0KCk7IH1cbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShpbml0aWFsU2V0KSwgc2V0ID0gX2FbMF0sIHNldFNldCA9IF9hWzFdO1xuICAgIHZhciBzdGFibGVBY3Rpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gc2V0U2V0KGZ1bmN0aW9uIChwcmV2U2V0KSB7IHJldHVybiBuZXcgU2V0KF9fc3ByZWFkQXJyYXlzKEFycmF5LmZyb20ocHJldlNldCksIFtpdGVtXSkpOyB9KTsgfTtcbiAgICAgICAgdmFyIHJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0U2V0KGZ1bmN0aW9uIChwcmV2U2V0KSB7IHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20ocHJldlNldCkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpICE9PSBpdGVtOyB9KSk7IH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRTZXQoZnVuY3Rpb24gKHByZXZTZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlNldC5oYXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgPyBuZXcgU2V0KEFycmF5LmZyb20ocHJldlNldCkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpICE9PSBpdGVtOyB9KSlcbiAgICAgICAgICAgICAgICAgICAgOiBuZXcgU2V0KF9fc3ByZWFkQXJyYXlzKEFycmF5LmZyb20ocHJldlNldCksIFtpdGVtXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IGFkZDogYWRkLCByZW1vdmU6IHJlbW92ZSwgdG9nZ2xlOiB0b2dnbGUsIHJlc2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRTZXQoaW5pdGlhbFNldCk7IH0sIGNsZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRTZXQobmV3IFNldCgpKTsgfSB9O1xuICAgIH0sIFtzZXRTZXRdKTtcbiAgICB2YXIgdXRpbHMgPSBfX2Fzc2lnbih7IGhhczogdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHNldC5oYXMoaXRlbSk7IH0sIFtzZXRdKSB9LCBzdGFibGVBY3Rpb25zKTtcbiAgICByZXR1cm4gW3NldCwgdXRpbHNdO1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZVNldDtcbiJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIl9fc3ByZWFkQXJyYXlzIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VTZXQiLCJpbml0aWFsU2V0IiwiU2V0IiwiX2EiLCJzZXQiLCJzZXRTZXQiLCJzdGFibGVBY3Rpb25zIiwiYWRkIiwiaXRlbSIsInByZXZTZXQiLCJBcnJheSIsImZyb20iLCJyZW1vdmUiLCJmaWx0ZXIiLCJpIiwidG9nZ2xlIiwiaGFzIiwicmVzZXQiLCJjbGVhciIsInV0aWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useSet.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-use/esm/useTimeoutFn.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/esm/useTimeoutFn.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useTimeoutFn)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useTimeoutFn(fn, ms) {\n    if (ms === void 0) {\n        ms = 0;\n    }\n    var ready = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    var callback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);\n    var isReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        return ready.current;\n    }, []);\n    var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        ready.current = false;\n        timeout.current && clearTimeout(timeout.current);\n        timeout.current = setTimeout(function() {\n            ready.current = true;\n            callback.current();\n        }, ms);\n    }, [\n        ms\n    ]);\n    var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {\n        ready.current = null;\n        timeout.current && clearTimeout(timeout.current);\n    }, []);\n    // update ref when function changes\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        callback.current = fn;\n    }, [\n        fn\n    ]);\n    // set on mount, clear on unmount\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        set();\n        return clear;\n    }, [\n        ms\n    ]);\n    return [\n        isReady,\n        clear,\n        set\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VUaW1lb3V0Rm4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBQ3hDLFNBQVNHLGFBQWFDLEVBQUUsRUFBRUMsRUFBRTtJQUN2QyxJQUFJQSxPQUFPLEtBQUssR0FBRztRQUFFQSxLQUFLO0lBQUc7SUFDN0IsSUFBSUMsUUFBUUosNkNBQU1BLENBQUM7SUFDbkIsSUFBSUssVUFBVUwsNkNBQU1BO0lBQ3BCLElBQUlNLFdBQVdOLDZDQUFNQSxDQUFDRTtJQUN0QixJQUFJSyxVQUFVVCxrREFBV0EsQ0FBQztRQUFjLE9BQU9NLE1BQU1JLE9BQU87SUFBRSxHQUFHLEVBQUU7SUFDbkUsSUFBSUMsTUFBTVgsa0RBQVdBLENBQUM7UUFDbEJNLE1BQU1JLE9BQU8sR0FBRztRQUNoQkgsUUFBUUcsT0FBTyxJQUFJRSxhQUFhTCxRQUFRRyxPQUFPO1FBQy9DSCxRQUFRRyxPQUFPLEdBQUdHLFdBQVc7WUFDekJQLE1BQU1JLE9BQU8sR0FBRztZQUNoQkYsU0FBU0UsT0FBTztRQUNwQixHQUFHTDtJQUNQLEdBQUc7UUFBQ0E7S0FBRztJQUNQLElBQUlTLFFBQVFkLGtEQUFXQSxDQUFDO1FBQ3BCTSxNQUFNSSxPQUFPLEdBQUc7UUFDaEJILFFBQVFHLE9BQU8sSUFBSUUsYUFBYUwsUUFBUUcsT0FBTztJQUNuRCxHQUFHLEVBQUU7SUFDTCxtQ0FBbUM7SUFDbkNULGdEQUFTQSxDQUFDO1FBQ05PLFNBQVNFLE9BQU8sR0FBR047SUFDdkIsR0FBRztRQUFDQTtLQUFHO0lBQ1AsaUNBQWlDO0lBQ2pDSCxnREFBU0EsQ0FBQztRQUNOVTtRQUNBLE9BQU9HO0lBQ1gsR0FBRztRQUFDVDtLQUFHO0lBQ1AsT0FBTztRQUFDSTtRQUFTSztRQUFPSDtLQUFJO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1waXp6YS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVRpbWVvdXRGbi5qcz9mMzIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRpbWVvdXRGbihmbiwgbXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cbiAgICB2YXIgcmVhZHkgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciB0aW1lb3V0ID0gdXNlUmVmKCk7XG4gICAgdmFyIGNhbGxiYWNrID0gdXNlUmVmKGZuKTtcbiAgICB2YXIgaXNSZWFkeSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWR5LmN1cnJlbnQ7IH0sIFtdKTtcbiAgICB2YXIgc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICByZWFkeS5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRpbWVvdXQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgdGltZW91dC5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWFkeS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmN1cnJlbnQoKTtcbiAgICAgICAgfSwgbXMpO1xuICAgIH0sIFttc10pO1xuICAgIHZhciBjbGVhciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVhZHkuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHRpbWVvdXQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgLy8gdXBkYXRlIHJlZiB3aGVuIGZ1bmN0aW9uIGNoYW5nZXNcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5jdXJyZW50ID0gZm47XG4gICAgfSwgW2ZuXSk7XG4gICAgLy8gc2V0IG9uIG1vdW50LCBjbGVhciBvbiB1bm1vdW50XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0KCk7XG4gICAgICAgIHJldHVybiBjbGVhcjtcbiAgICB9LCBbbXNdKTtcbiAgICByZXR1cm4gW2lzUmVhZHksIGNsZWFyLCBzZXRdO1xufVxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlVGltZW91dEZuIiwiZm4iLCJtcyIsInJlYWR5IiwidGltZW91dCIsImNhbGxiYWNrIiwiaXNSZWFkeSIsImN1cnJlbnQiLCJzZXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-use/esm/useTimeoutFn.js\n");

/***/ })

};
;