"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./components/PodcastCard.tsx":
/*!************************************!*\
  !*** ./components/PodcastCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst PodcastCard = (param)=>{\n    let { imgUrl, title, description, podcastId } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleViews = ()=>{\n        // increase views\n        router.push(\"/podcasts/\".concat(podcastId), {\n            scroll: true\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"group cursor-pointer relative p-[1px] rounded-xl transition-all duration-300 hover:-translate-y-1\",\n        onClick: handleViews,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 rounded-xl bg-gradient-to-b from-[#F5E6D3]/50 to-white/30 blur-sm\"\n            }, void 0, false, {\n                fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                className: \"relative flex flex-col gap-2 p-2 rounded-xl bg-gradient-to-br from-white/80 to-[#F5E6D3]/20 backdrop-blur-md border border-[#F5E6D3]/30\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative overflow-hidden rounded-lg shadow-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: imgUrl,\n                                width: 174,\n                                height: 174,\n                                alt: title,\n                                className: \"aspect-square h-fit w-full object-cover transition-transform duration-500 group-hover:scale-105 2xl:size-[200px]\"\n                            }, void 0, false, {\n                                fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-0 bg-gradient-to-t from-[#2D6B66]/30 via-[#F5E6D3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300\"\n                            }, void 0, false, {\n                                fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-16 truncate font-bold text-[#2D6B66] group-hover:text-[#1a4f4a] transition-colors\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-12 truncate font-normal capitalize text-gray-600\",\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-1.5 h-1.5 rounded-full bg-[#2D6B66] animate-pulse\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-11 text-[#2D6B66]/70\",\n                                        children: \"Click to play\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/neha/mutli-app/components/PodcastCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PodcastCard, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PodcastCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PodcastCard);\nvar _c;\n$RefreshReg$(_c, \"PodcastCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUG9kY2FzdENhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFDbEI7QUFFMUIsTUFBTUcsY0FBYztRQUFDLEVBQ25CQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxTQUFTLEVBQ1E7O0lBQ2pCLE1BQU1DLFNBQVNQLDBEQUFTQTtJQUV4QixNQUFNUSxjQUFjO1FBQ2xCLGlCQUFpQjtRQUNqQkQsT0FBT0UsSUFBSSxDQUFDLGFBQXVCLE9BQVZILFlBQWE7WUFDcENJLFFBQVE7UUFDVjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsU0FBU0w7OzBCQUdULDhEQUFDRztnQkFBSUMsV0FBVTs7Ozs7OzBCQUdmLDhEQUFDRTtnQkFBT0YsV0FBVTs7a0NBQ2hCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNiLGtEQUFLQTtnQ0FDSmdCLEtBQUtaO2dDQUNMYSxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFLZDtnQ0FDTFEsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBR1AsV0FBVTswQ0FDWFI7Ozs7OzswQ0FFSCw4REFBQ2dCO2dDQUFHUixXQUFVOzBDQUNYUDs7Ozs7OzBDQUlILDhEQUFDTTtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNTO3dDQUFLVCxXQUFVOzs7Ozs7a0RBQ2hCLDhEQUFDUzt3Q0FBS1QsV0FBVTtrREFBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtHQXJETVY7O1FBTVdGLHNEQUFTQTs7O0tBTnBCRTtBQXVETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BvZGNhc3RDYXJkLnRzeD85NTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvZGNhc3RDYXJkUHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFBvZGNhc3RDYXJkID0gKHtcbiAgaW1nVXJsLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIHBvZGNhc3RJZCxcbn06IFBvZGNhc3RDYXJkUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlVmlld3MgPSAoKSA9PiB7XG4gICAgLy8gaW5jcmVhc2Ugdmlld3NcbiAgICByb3V0ZXIucHVzaChgL3BvZGNhc3RzLyR7cG9kY2FzdElkfWAsIHtcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIHAtWzFweF0gcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTFcIlxuICAgICAgb25DbGljaz17aGFuZGxlVmlld3N9XG4gICAgPlxuICAgICAgey8qIEdyYWRpZW50IEJvcmRlciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bI0Y1RTZEM10vNTAgdG8td2hpdGUvMzAgYmx1ci1zbVwiIC8+XG5cbiAgICAgIHsvKiBDYXJkIENvbnRlbnQgKi99XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgZ2FwLTIgcC0yIHJvdW5kZWQteGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZS84MCB0by1bI0Y1RTZEM10vMjAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXIgYm9yZGVyLVsjRjVFNkQzXS8zMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtpbWdVcmx9XG4gICAgICAgICAgICB3aWR0aD17MTc0fVxuICAgICAgICAgICAgaGVpZ2h0PXsxNzR9XG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LXNxdWFyZSBoLWZpdCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDUgMnhsOnNpemUtWzIwMHB4XVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjMkQ2QjY2XS8zMCB2aWEtWyNGNUU2RDNdLzEwIHRvLXRyYW5zcGFyZW50IG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTE2IHRydW5jYXRlIGZvbnQtYm9sZCB0ZXh0LVsjMkQ2QjY2XSBncm91cC1ob3Zlcjp0ZXh0LVsjMWE0ZjRhXSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMTIgdHJ1bmNhdGUgZm9udC1ub3JtYWwgY2FwaXRhbGl6ZSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9oMj5cblxuICAgICAgICAgIHsvKiBQbGF5IEluZGljYXRvciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMS41IGgtMS41IHJvdW5kZWQtZnVsbCBiZy1bIzJENkI2Nl0gYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTExIHRleHQtWyMyRDZCNjZdLzcwXCI+Q2xpY2sgdG8gcGxheTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvZGNhc3RDYXJkO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwiUmVhY3QiLCJQb2RjYXN0Q2FyZCIsImltZ1VybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwb2RjYXN0SWQiLCJyb3V0ZXIiLCJoYW5kbGVWaWV3cyIsInB1c2giLCJzY3JvbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZmlndXJlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMSIsImgyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/PodcastCard.tsx\n"));

/***/ })

});