"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-autoplay";
exports.ids = ["vendor-chunks/embla-carousel-autoplay"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Autoplay)\n/* harmony export */ });\nconst defaultOptions = {\n  active: true,\n  breakpoints: {},\n  delay: 4000,\n  jump: false,\n  playOnInit: true,\n  stopOnFocusIn: true,\n  stopOnInteraction: true,\n  stopOnMouseEnter: false,\n  stopOnLastSnap: false,\n  rootNode: null\n};\n\nfunction Autoplay(userOptions = {}) {\n  let options;\n  let emblaApi;\n  let destroyed;\n  let playing = false;\n  let resume = true;\n  let jump = false;\n  let timer = 0;\n  function init(emblaApiInstance, optionsHandler) {\n    emblaApi = emblaApiInstance;\n    const {\n      mergeOptions,\n      optionsAtMedia\n    } = optionsHandler;\n    const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);\n    const allOptions = mergeOptions(optionsBase, userOptions);\n    options = optionsAtMedia(allOptions);\n    if (emblaApi.scrollSnapList().length <= 1) return;\n    jump = options.jump;\n    destroyed = false;\n    const {\n      eventStore,\n      ownerDocument\n    } = emblaApi.internalEngine();\n    const emblaRoot = emblaApi.rootNode();\n    const root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;\n    const container = emblaApi.containerNode();\n    emblaApi.on('pointerDown', stopTimer);\n    if (!options.stopOnInteraction) {\n      emblaApi.on('pointerUp', startTimer);\n    }\n    if (options.stopOnMouseEnter) {\n      eventStore.add(root, 'mouseenter', () => {\n        resume = false;\n        stopTimer();\n      });\n      if (!options.stopOnInteraction) {\n        eventStore.add(root, 'mouseleave', () => {\n          resume = true;\n          startTimer();\n        });\n      }\n    }\n    if (options.stopOnFocusIn) {\n      eventStore.add(container, 'focusin', stopTimer);\n      if (!options.stopOnInteraction) {\n        eventStore.add(container, 'focusout', startTimer);\n      }\n    }\n    eventStore.add(ownerDocument, 'visibilitychange', visibilityChange);\n    if (options.playOnInit && !documentIsHidden()) startTimer();\n  }\n  function destroy() {\n    emblaApi.off('pointerDown', stopTimer).off('pointerUp', startTimer);\n    stopTimer();\n    destroyed = true;\n    playing = false;\n  }\n  function startTimer() {\n    if (destroyed) return;\n    if (!resume) return;\n    if (!playing) emblaApi.emit('autoplay:play');\n    const {\n      ownerWindow\n    } = emblaApi.internalEngine();\n    ownerWindow.clearInterval(timer);\n    timer = ownerWindow.setInterval(next, options.delay);\n    playing = true;\n  }\n  function stopTimer() {\n    if (destroyed) return;\n    if (playing) emblaApi.emit('autoplay:stop');\n    const {\n      ownerWindow\n    } = emblaApi.internalEngine();\n    ownerWindow.clearInterval(timer);\n    timer = 0;\n    playing = false;\n  }\n  function visibilityChange() {\n    if (documentIsHidden()) {\n      resume = playing;\n      return stopTimer();\n    }\n    if (resume) startTimer();\n  }\n  function documentIsHidden() {\n    const {\n      ownerDocument\n    } = emblaApi.internalEngine();\n    return ownerDocument.visibilityState === 'hidden';\n  }\n  function play(jumpOverride) {\n    if (typeof jumpOverride !== 'undefined') jump = jumpOverride;\n    resume = true;\n    startTimer();\n  }\n  function stop() {\n    if (playing) stopTimer();\n  }\n  function reset() {\n    if (playing) play();\n  }\n  function isPlaying() {\n    return playing;\n  }\n  function next() {\n    const {\n      index\n    } = emblaApi.internalEngine();\n    const nextIndex = index.clone().add(1).get();\n    const lastIndex = emblaApi.scrollSnapList().length - 1;\n    const kill = options.stopOnLastSnap && nextIndex === lastIndex;\n    if (kill) stopTimer();\n    if (emblaApi.canScrollNext()) {\n      emblaApi.scrollNext(jump);\n    } else {\n      emblaApi.scrollTo(0, jump);\n    }\n  }\n  const self = {\n    name: 'autoplay',\n    options: userOptions,\n    init,\n    destroy,\n    play,\n    stop,\n    reset,\n    isPlaying\n  };\n  return self;\n}\nAutoplay.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-autoplay.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0I7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2RjYXN0ci8uL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbC1hdXRvcGxheS9lc20vZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkuZXNtLmpzPzc2NzciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGFjdGl2ZTogdHJ1ZSxcbiAgYnJlYWtwb2ludHM6IHt9LFxuICBkZWxheTogNDAwMCxcbiAganVtcDogZmFsc2UsXG4gIHBsYXlPbkluaXQ6IHRydWUsXG4gIHN0b3BPbkZvY3VzSW46IHRydWUsXG4gIHN0b3BPbkludGVyYWN0aW9uOiB0cnVlLFxuICBzdG9wT25Nb3VzZUVudGVyOiBmYWxzZSxcbiAgc3RvcE9uTGFzdFNuYXA6IGZhbHNlLFxuICByb290Tm9kZTogbnVsbFxufTtcblxuZnVuY3Rpb24gQXV0b3BsYXkodXNlck9wdGlvbnMgPSB7fSkge1xuICBsZXQgb3B0aW9ucztcbiAgbGV0IGVtYmxhQXBpO1xuICBsZXQgZGVzdHJveWVkO1xuICBsZXQgcGxheWluZyA9IGZhbHNlO1xuICBsZXQgcmVzdW1lID0gdHJ1ZTtcbiAgbGV0IGp1bXAgPSBmYWxzZTtcbiAgbGV0IHRpbWVyID0gMDtcbiAgZnVuY3Rpb24gaW5pdChlbWJsYUFwaUluc3RhbmNlLCBvcHRpb25zSGFuZGxlcikge1xuICAgIGVtYmxhQXBpID0gZW1ibGFBcGlJbnN0YW5jZTtcbiAgICBjb25zdCB7XG4gICAgICBtZXJnZU9wdGlvbnMsXG4gICAgICBvcHRpb25zQXRNZWRpYVxuICAgIH0gPSBvcHRpb25zSGFuZGxlcjtcbiAgICBjb25zdCBvcHRpb25zQmFzZSA9IG1lcmdlT3B0aW9ucyhkZWZhdWx0T3B0aW9ucywgQXV0b3BsYXkuZ2xvYmFsT3B0aW9ucyk7XG4gICAgY29uc3QgYWxsT3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhvcHRpb25zQmFzZSwgdXNlck9wdGlvbnMpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zQXRNZWRpYShhbGxPcHRpb25zKTtcbiAgICBpZiAoZW1ibGFBcGkuc2Nyb2xsU25hcExpc3QoKS5sZW5ndGggPD0gMSkgcmV0dXJuO1xuICAgIGp1bXAgPSBvcHRpb25zLmp1bXA7XG4gICAgZGVzdHJveWVkID0gZmFsc2U7XG4gICAgY29uc3Qge1xuICAgICAgZXZlbnRTdG9yZSxcbiAgICAgIG93bmVyRG9jdW1lbnRcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICBjb25zdCBlbWJsYVJvb3QgPSBlbWJsYUFwaS5yb290Tm9kZSgpO1xuICAgIGNvbnN0IHJvb3QgPSBvcHRpb25zLnJvb3ROb2RlICYmIG9wdGlvbnMucm9vdE5vZGUoZW1ibGFSb290KSB8fCBlbWJsYVJvb3Q7XG4gICAgY29uc3QgY29udGFpbmVyID0gZW1ibGFBcGkuY29udGFpbmVyTm9kZSgpO1xuICAgIGVtYmxhQXBpLm9uKCdwb2ludGVyRG93bicsIHN0b3BUaW1lcik7XG4gICAgaWYgKCFvcHRpb25zLnN0b3BPbkludGVyYWN0aW9uKSB7XG4gICAgICBlbWJsYUFwaS5vbigncG9pbnRlclVwJywgc3RhcnRUaW1lcik7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0b3BPbk1vdXNlRW50ZXIpIHtcbiAgICAgIGV2ZW50U3RvcmUuYWRkKHJvb3QsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICByZXN1bWUgPSBmYWxzZTtcbiAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICB9KTtcbiAgICAgIGlmICghb3B0aW9ucy5zdG9wT25JbnRlcmFjdGlvbikge1xuICAgICAgICBldmVudFN0b3JlLmFkZChyb290LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICByZXN1bWUgPSB0cnVlO1xuICAgICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0b3BPbkZvY3VzSW4pIHtcbiAgICAgIGV2ZW50U3RvcmUuYWRkKGNvbnRhaW5lciwgJ2ZvY3VzaW4nLCBzdG9wVGltZXIpO1xuICAgICAgaWYgKCFvcHRpb25zLnN0b3BPbkludGVyYWN0aW9uKSB7XG4gICAgICAgIGV2ZW50U3RvcmUuYWRkKGNvbnRhaW5lciwgJ2ZvY3Vzb3V0Jywgc3RhcnRUaW1lcik7XG4gICAgICB9XG4gICAgfVxuICAgIGV2ZW50U3RvcmUuYWRkKG93bmVyRG9jdW1lbnQsICd2aXNpYmlsaXR5Y2hhbmdlJywgdmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgaWYgKG9wdGlvbnMucGxheU9uSW5pdCAmJiAhZG9jdW1lbnRJc0hpZGRlbigpKSBzdGFydFRpbWVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBlbWJsYUFwaS5vZmYoJ3BvaW50ZXJEb3duJywgc3RvcFRpbWVyKS5vZmYoJ3BvaW50ZXJVcCcsIHN0YXJ0VGltZXIpO1xuICAgIHN0b3BUaW1lcigpO1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gICAgcGxheWluZyA9IGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgaWYgKGRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGlmICghcmVzdW1lKSByZXR1cm47XG4gICAgaWYgKCFwbGF5aW5nKSBlbWJsYUFwaS5lbWl0KCdhdXRvcGxheTpwbGF5Jyk7XG4gICAgY29uc3Qge1xuICAgICAgb3duZXJXaW5kb3dcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICBvd25lcldpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IG93bmVyV2luZG93LnNldEludGVydmFsKG5leHQsIG9wdGlvbnMuZGVsYXkpO1xuICAgIHBsYXlpbmcgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKHBsYXlpbmcpIGVtYmxhQXBpLmVtaXQoJ2F1dG9wbGF5OnN0b3AnKTtcbiAgICBjb25zdCB7XG4gICAgICBvd25lcldpbmRvd1xuICAgIH0gPSBlbWJsYUFwaS5pbnRlcm5hbEVuZ2luZSgpO1xuICAgIG93bmVyV2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIHRpbWVyID0gMDtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gdmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgICBpZiAoZG9jdW1lbnRJc0hpZGRlbigpKSB7XG4gICAgICByZXN1bWUgPSBwbGF5aW5nO1xuICAgICAgcmV0dXJuIHN0b3BUaW1lcigpO1xuICAgIH1cbiAgICBpZiAocmVzdW1lKSBzdGFydFRpbWVyKCk7XG4gIH1cbiAgZnVuY3Rpb24gZG9jdW1lbnRJc0hpZGRlbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvd25lckRvY3VtZW50XG4gICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJztcbiAgfVxuICBmdW5jdGlvbiBwbGF5KGp1bXBPdmVycmlkZSkge1xuICAgIGlmICh0eXBlb2YganVtcE92ZXJyaWRlICE9PSAndW5kZWZpbmVkJykganVtcCA9IGp1bXBPdmVycmlkZTtcbiAgICByZXN1bWUgPSB0cnVlO1xuICAgIHN0YXJ0VGltZXIoKTtcbiAgfVxuICBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGlmIChwbGF5aW5nKSBzdG9wVGltZXIoKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpZiAocGxheWluZykgcGxheSgpO1xuICB9XG4gIGZ1bmN0aW9uIGlzUGxheWluZygpIHtcbiAgICByZXR1cm4gcGxheWluZztcbiAgfVxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluZGV4XG4gICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXguY2xvbmUoKS5hZGQoMSkuZ2V0KCk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gZW1ibGFBcGkuc2Nyb2xsU25hcExpc3QoKS5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGtpbGwgPSBvcHRpb25zLnN0b3BPbkxhc3RTbmFwICYmIG5leHRJbmRleCA9PT0gbGFzdEluZGV4O1xuICAgIGlmIChraWxsKSBzdG9wVGltZXIoKTtcbiAgICBpZiAoZW1ibGFBcGkuY2FuU2Nyb2xsTmV4dCgpKSB7XG4gICAgICBlbWJsYUFwaS5zY3JvbGxOZXh0KGp1bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWJsYUFwaS5zY3JvbGxUbygwLCBqdW1wKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2VsZiA9IHtcbiAgICBuYW1lOiAnYXV0b3BsYXknLFxuICAgIG9wdGlvbnM6IHVzZXJPcHRpb25zLFxuICAgIGluaXQsXG4gICAgZGVzdHJveSxcbiAgICBwbGF5LFxuICAgIHN0b3AsXG4gICAgcmVzZXQsXG4gICAgaXNQbGF5aW5nXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuQXV0b3BsYXkuZ2xvYmFsT3B0aW9ucyA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IHsgQXV0b3BsYXkgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkuZXNtLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js\n");

/***/ })

};
;