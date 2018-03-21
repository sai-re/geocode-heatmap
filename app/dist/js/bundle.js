/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** multi ./app/js/main.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./app/js/main.js */1);


/***/ }),
/* 1 */
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _geocode = __webpack_require__(/*! ./modules/geocode */ 2);\n\nvar _heatmap = __webpack_require__(/*! ./modules/heatmap */ 3);\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n    _geocode.Geocode.init();\n    _heatmap.Heatmap.init();\n}());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvanMvbWFpbi5qcz9kYzM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2VvY29kZX0gZnJvbSAnLi9tb2R1bGVzL2dlb2NvZGUnO1xyXG5pbXBvcnQge0hlYXRtYXB9IGZyb20gJy4vbW9kdWxlcy9oZWF0bWFwJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgR2VvY29kZS5pbml0KClcclxuICAgIEhlYXRtYXAuaW5pdCgpXHJcbn0oKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9qcy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** ./app/js/modules/geocode.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar i = void 0;\n\nvar Geocode = {\n    variables: {\n        geocodeBtn: document.getElementById(\"geocodeBtn\")\n    },\n    init: function init() {\n        var _this = this;\n\n        i = this.variables;\n\n        if (i.geocodeBtn) {\n            i.geocodeBtn.addEventListener(\"click\", function () {\n                return _this.geocodePostcodes();\n            });\n        }\n    },\n    geocodePostcodes: function geocodePostcodes() {\n        var count = 0;\n        var heatmapBtn = document.getElementById(\"heatmapBtn\");\n\n        ///////\n        var sendRequest = function sendRequest(url, requestType, data) {\n            return new Promise(function (resolve, reject) {\n                var request = new XMLHttpRequest();\n                request.open(requestType, url, true);\n                request.onload = handleResponse;\n                request.onerror = function (error) {\n                    return reject(error);\n                };\n                request.send(data);\n\n                function handleResponse() {\n                    if (request.status >= 200 && request.status < 400) {\n                        console.log(\"request sent\");\n                        resolve(this.responseText);\n                    } else {\n                        reject(this.statusText);\n                    }\n                }\n            });\n        };\n\n        ///////\n        var sendLatLng = function sendLatLng(postcode, lat, lng, length) {\n            var url = \"http://localhost/sai-xampp/heatmap-es6/app/dist/data.php\";\n\n            var data = new FormData();\n            data.append('postcode', postcode);\n            data.append('lat', lat);\n            data.append('lng', lng);\n\n            count++;\n            console.log(count);\n\n            if (count === length) {\n                console.log(\"geocode complete\");\n                heatmapBtn.classList.add(\"show-btn\");\n            }\n\n            sendRequest(url, 'POST', data);\n        };\n\n        ///////\n        var geocodeAddress = function geocodeAddress(postcode, length) {\n            var geocoder = new google.maps.Geocoder();\n            var lat = void 0,\n                lng = void 0;\n\n            geocoder.geocode({ 'address': postcode }, function (results, status) {\n                if (status === 'OK') {\n                    var x = void 0;\n                    var resultsLength = results.length;\n\n                    for (x = 0; x < resultsLength; x++) {\n                        lat = results[x].geometry.location.lat().toFixed(8);\n                        lng = results[x].geometry.location.lng().toFixed(8);\n                        sendLatLng(postcode, lat, lng, length);\n                    }\n                } else if (status == 'OVER_QUERY_LIMIT') {\n                    setTimeout(function () {\n                        geocodeAddress(postcode, length);\n                    }, 200);\n                } else {\n                    console.log('Geocode was not successful: ' + status);\n                }\n            });\n        };\n\n        ///////\n        var getPostcodes = function getPostcodes(existingPostcodes) {\n            var url = \"http://localhost/sai-xampp/datasite/test-version/api.hurford-salvi-carr.co.uk/sodsurvey/\";\n\n            var handlePostcode = function handlePostcode(response) {\n                var json = JSON.parse(response);\n                var postcodesArray = [];\n                var i = void 0;\n\n                for (i in json) {\n                    postcodesArray.push(json[i].from_postcode);\n                }\n\n                var postcodes = postcodesArray.filter(Boolean).filter(function (item, index, inputArray) {\n                    return inputArray.indexOf(item) == index;\n                });\n\n                existingPostcodes.sort();\n                postcodes.sort();\n\n                var postcodeLength = postcodes.length;\n                var n = void 0,\n                    c = 0;\n\n                for (n = 0; n < postcodeLength; n++) {\n                    if (existingPostcodes[n] === postcodes[n]) {\n                        c++;\n                        console.log(\"already geocoded\");\n                    } else {\n                        geocodeAddress(postcodes[n], postcodeLength);\n                    }\n                }\n\n                if (c === postcodeLength) {\n                    heatmapBtn.classList.add(\"show-btn\");\n                }\n            };\n\n            sendRequest(url, \"GET\").then(handlePostcode).catch(function (err) {\n                return console.log(err);\n            });\n        };\n\n        ///////\n        var checkExistingPoscodes = function checkExistingPoscodes() {\n            var url = \"http://localhost/sai-xampp/heatmap-es6/app/dist/json.php\";\n\n            var handleExistingPostcode = function handleExistingPostcode(response) {\n                var existingPostcodes = JSON.parse(response);\n                var array = [];\n                var i = void 0;\n\n                for (i in existingPostcodes) {\n                    array.push(existingPostcodes[i].postcode);\n                }\n\n                return array;\n            };\n\n            sendRequest(url, \"GET\").then(handleExistingPostcode).then(getPostcodes).catch(function (err) {\n                return console.log(err);\n            });\n        };\n\n        checkExistingPoscodes();\n    }\n};\n\nexports.Geocode = Geocode;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvanMvbW9kdWxlcy9nZW9jb2RlLmpzPzdlMjMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGk7XHJcblxyXG5jb25zdCBHZW9jb2RlID0ge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgZ2VvY29kZUJ0bjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW9jb2RlQnRuXCIpXHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaSA9IHRoaXMudmFyaWFibGVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpLmdlb2NvZGVCdG4pIHtcclxuICAgICAgICAgICAgaS5nZW9jb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmdlb2NvZGVQb3N0Y29kZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdlb2NvZGVQb3N0Y29kZXM6ICgpID0+IHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGxldCBoZWF0bWFwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWF0bWFwQnRuXCIpO1xyXG5cclxuICAgICAgICAvLy8vLy8vXHJcbiAgICAgICAgY29uc3Qgc2VuZFJlcXVlc3QgPSAodXJsLCByZXF1ZXN0VHlwZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vcGVuKHJlcXVlc3RUeXBlLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSBoYW5kbGVSZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNlbmQoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3Qgc2VudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLy8vLy8vXHJcbiAgICAgICAgY29uc3Qgc2VuZExhdExuZyA9IChwb3N0Y29kZSwgbGF0LCBsbmcsIGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Qvc2FpLXhhbXBwL2hlYXRtYXAtZXM2L2FwcC9kaXN0L2RhdGEucGhwXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdwb3N0Y29kZScsIHBvc3Rjb2RlKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2xhdCcsIGxhdCk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdsbmcnLCBsbmcpO1xyXG5cclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG5cclxuICAgICAgICAgICAgaWYoY291bnQgPT09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZW9jb2RlIGNvbXBsZXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgaGVhdG1hcEJ0bi5jbGFzc0xpc3QuYWRkKFwic2hvdy1idG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbmRSZXF1ZXN0KHVybCwgJ1BPU1QnLCBkYXRhKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLy8vLy8vXHJcbiAgICAgICAgY29uc3QgZ2VvY29kZUFkZHJlc3MgPSAocG9zdGNvZGUsIGxlbmd0aCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gICAgICAgICAgICBsZXQgbGF0LFxyXG4gICAgICAgICAgICAgICAgbG5nO1xyXG5cclxuICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7J2FkZHJlc3MnOiBwb3N0Y29kZX0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzTGVuZ3RoID0gcmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcih4ID0gMDsgeCA8IHJlc3VsdHNMZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQgPSByZXN1bHRzW3hdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpLnRvRml4ZWQoOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZyA9IHJlc3VsdHNbeF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCkudG9GaXhlZCg4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZExhdExuZyhwb3N0Y29kZSwgbGF0LCBsbmcsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXR1cyA9PSAnT1ZFUl9RVUVSWV9MSU1JVCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9jb2RlQWRkcmVzcyhwb3N0Y29kZSwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dlb2NvZGUgd2FzIG5vdCBzdWNjZXNzZnVsOiAnICsgc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8vLy8vL1xyXG4gICAgICAgIGNvbnN0IGdldFBvc3Rjb2RlcyA9IGV4aXN0aW5nUG9zdGNvZGVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0L3NhaS14YW1wcC9kYXRhc2l0ZS90ZXN0LXZlcnNpb24vYXBpLmh1cmZvcmQtc2FsdmktY2Fyci5jby51ay9zb2RzdXJ2ZXkvXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVQb3N0Y29kZSA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3Rjb2Rlc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgaW4ganNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rjb2Rlc0FycmF5LnB1c2goanNvbltpXS5mcm9tX3Bvc3Rjb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0Y29kZXMgPSBwb3N0Y29kZXNBcnJheS5maWx0ZXIoQm9vbGVhbikuZmlsdGVyKChpdGVtLCBpbmRleCwgaW5wdXRBcnJheSkgPT4gaW5wdXRBcnJheS5pbmRleE9mKGl0ZW0pID09IGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ1Bvc3Rjb2Rlcy5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Y29kZXMuc29ydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3Rjb2RlTGVuZ3RoID0gcG9zdGNvZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGxldCBuLFxyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCBwb3N0Y29kZUxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nUG9zdGNvZGVzW25dID09PSBwb3N0Y29kZXNbbl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYysrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxyZWFkeSBnZW9jb2RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9jb2RlQWRkcmVzcyhwb3N0Y29kZXNbbl0sIHBvc3Rjb2RlTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjID09PSBwb3N0Y29kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYXRtYXBCdG4uY2xhc3NMaXN0LmFkZChcInNob3ctYnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpLnRoZW4oaGFuZGxlUG9zdGNvZGUpLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLy8vLy9cclxuICAgICAgICBjb25zdCBjaGVja0V4aXN0aW5nUG9zY29kZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdC9zYWkteGFtcHAvaGVhdG1hcC1lczYvYXBwL2Rpc3QvanNvbi5waHBcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUV4aXN0aW5nUG9zdGNvZGUgPSByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Bvc3Rjb2RlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yIChpIGluIGV4aXN0aW5nUG9zdGNvZGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChleGlzdGluZ1Bvc3Rjb2Rlc1tpXS5wb3N0Y29kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpLnRoZW4oaGFuZGxlRXhpc3RpbmdQb3N0Y29kZSlcclxuICAgICAgICAgICAgLnRoZW4oZ2V0UG9zdGNvZGVzKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tFeGlzdGluZ1Bvc2NvZGVzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7R2VvY29kZX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9qcy9tb2R1bGVzL2dlb2NvZGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhKQTtBQUNBO0FBa0pBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** ./app/js/modules/heatmap.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar i = void 0;\n\nvar Heatmap = {\n    variables: {},\n\n    init: function init() {\n        i = this.variables;\n\n        if (window.location.pathname === \"/sai-xampp/heatmap-es6/app/dist/heatmap.html\") {\n            this.renderHeatmap();\n        }\n    },\n\n    renderHeatmap: function renderHeatmap() {\n        var url = \"http://localhost/sai-xampp/heatmap-es6/app/dist/json.php\";\n\n        var sendRequest = function sendRequest(url, requestType) {\n            return new Promise(function (resolve, reject) {\n                var request = new XMLHttpRequest();\n                request.open(requestType, url, true);\n                request.onload = handleResponse;\n                request.onerror = function (error) {\n                    return reject(error);\n                };\n                request.send();\n\n                function handleResponse() {\n                    if (request.status >= 200 && request.status < 400) {\n                        console.log(\"request sent\");\n                        resolve(this.responseText);\n                    } else {\n                        reject(this.statusText);\n                    }\n                }\n            });\n        };\n\n        var callMap = function callMap(response) {\n            var cordinates = JSON.parse(response);\n\n            var heatmapData = {\n                data: []\n            };\n\n            var myLatlng = new google.maps.LatLng(54.5257126, -5.3650851);\n\n            var myOptions = {\n                zoom: 6,\n                scrollwheel: false,\n                scaleControl: false,\n                center: myLatlng\n            };\n\n            var map = new google.maps.Map(document.getElementById(\"map-canvas\"), myOptions);\n\n            var heatmap = new HeatmapOverlay(map, {\n                // radius should be small ONLY if scaleRadius is true (or small radius is intended)\n                \"radius\": 0.3,\n                \"maxOpacity\": 0.5,\n                // scales the radius based on map zoom\n                \"scaleRadius\": true,\n                // if set to false the heatmap uses the global maximum for colorization\n                // if activated: uses the data maximum within the current map boundaries \n                //   (there will always be a red spot with useLocalExtremas true)\n                \"useLocalExtrema\": true,\n                // which field name in your data represents the latitude - default \"lat\"\n                latField: 'lat',\n                // which field name in your data represents the longitude - default \"lng\"\n                lngField: 'lng',\n                // which field name in your data represents the data value - default \"value\"\n                valueField: 'count'\n            });\n\n            var i = void 0;\n            for (i in cordinates) {\n                heatmapData.data.push({\n                    lat: cordinates[i].lat,\n                    lng: cordinates[i].lng\n                });\n            }\n\n            heatmap.setData(heatmapData);\n        };\n\n        sendRequest(url, \"GET\").then(callMap).catch(function (err) {\n            return console.log(err);\n        });\n    }\n};\n\nexports.Heatmap = Heatmap;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvanMvbW9kdWxlcy9oZWF0bWFwLmpzPzkxZDIiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGk7XHJcblxyXG5jb25zdCBIZWF0bWFwID0ge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGkgPSB0aGlzLnZhcmlhYmxlcztcclxuICAgICAgICBcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9zYWkteGFtcHAvaGVhdG1hcC1lczYvYXBwL2Rpc3QvaGVhdG1hcC5odG1sXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJIZWF0bWFwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgcmVuZGVySGVhdG1hcDogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdC9zYWkteGFtcHAvaGVhdG1hcC1lczYvYXBwL2Rpc3QvanNvbi5waHBcIjtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHNlbmRSZXF1ZXN0ID0gKHVybCwgcmVxdWVzdFR5cGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub3BlbihyZXF1ZXN0VHlwZSwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gaGFuZGxlUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3Qgc2VudFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjYWxsTWFwID0gcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb3JkaW5hdGVzID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoZWF0bWFwRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBteUxhdGxuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTQuNTI1NzEyNiwgLTUuMzY1MDg1MSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBteU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB6b29tOiA2LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogbXlMYXRsbmdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXAtY2FudmFzXCIpLCBteU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGVhdG1hcCA9IG5ldyBIZWF0bWFwT3ZlcmxheShtYXAsIHtcclxuICAgICAgICAgICAgICAgIC8vIHJhZGl1cyBzaG91bGQgYmUgc21hbGwgT05MWSBpZiBzY2FsZVJhZGl1cyBpcyB0cnVlIChvciBzbWFsbCByYWRpdXMgaXMgaW50ZW5kZWQpXHJcbiAgICAgICAgICAgICAgICBcInJhZGl1c1wiOiAwLjMsXHJcbiAgICAgICAgICAgICAgICBcIm1heE9wYWNpdHlcIjogMC41LFxyXG4gICAgICAgICAgICAgICAgLy8gc2NhbGVzIHRoZSByYWRpdXMgYmFzZWQgb24gbWFwIHpvb21cclxuICAgICAgICAgICAgICAgIFwic2NhbGVSYWRpdXNcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIGlmIHNldCB0byBmYWxzZSB0aGUgaGVhdG1hcCB1c2VzIHRoZSBnbG9iYWwgbWF4aW11bSBmb3IgY29sb3JpemF0aW9uXHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhY3RpdmF0ZWQ6IHVzZXMgdGhlIGRhdGEgbWF4aW11bSB3aXRoaW4gdGhlIGN1cnJlbnQgbWFwIGJvdW5kYXJpZXMgXHJcbiAgICAgICAgICAgICAgICAvLyAgICh0aGVyZSB3aWxsIGFsd2F5cyBiZSBhIHJlZCBzcG90IHdpdGggdXNlTG9jYWxFeHRyZW1hcyB0cnVlKVxyXG4gICAgICAgICAgICAgICAgXCJ1c2VMb2NhbEV4dHJlbWFcIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGZpZWxkIG5hbWUgaW4geW91ciBkYXRhIHJlcHJlc2VudHMgdGhlIGxhdGl0dWRlIC0gZGVmYXVsdCBcImxhdFwiXHJcbiAgICAgICAgICAgICAgICBsYXRGaWVsZDogJ2xhdCcsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBmaWVsZCBuYW1lIGluIHlvdXIgZGF0YSByZXByZXNlbnRzIHRoZSBsb25naXR1ZGUgLSBkZWZhdWx0IFwibG5nXCJcclxuICAgICAgICAgICAgICAgIGxuZ0ZpZWxkOiAnbG5nJyxcclxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGZpZWxkIG5hbWUgaW4geW91ciBkYXRhIHJlcHJlc2VudHMgdGhlIGRhdGEgdmFsdWUgLSBkZWZhdWx0IFwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWVGaWVsZDogJ2NvdW50J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgaW4gY29yZGluYXRlcykge1xyXG4gICAgICAgICAgICAgICAgaGVhdG1hcERhdGEuZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IGNvcmRpbmF0ZXNbaV0ubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogY29yZGluYXRlc1tpXS5sbmdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoZWF0bWFwLnNldERhdGEoaGVhdG1hcERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpLnRoZW4oY2FsbE1hcCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0hlYXRtYXB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvanMvbW9kdWxlcy9oZWF0bWFwLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQW5GQTtBQUNBO0FBcUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);