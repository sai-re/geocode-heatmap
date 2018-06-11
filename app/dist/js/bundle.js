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
/*!*************************************!*\
  !*** multi ./app/assets/js/main.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./app/assets/js/main.js */1);


/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./app/assets/js/main.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _geocode = __webpack_require__(/*! ./modules/geocode */ 2);\n\nvar _heatmap = __webpack_require__(/*! ./modules/heatmap */ 3);\n\ndocument.addEventListener(\"DOMContentLoaded\", function (event) {\n    _geocode.Geocode.init();\n    _heatmap.Heatmap.init();\n}());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2pzL21haW4uanM/ZDViYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dlb2NvZGV9IGZyb20gJy4vbW9kdWxlcy9nZW9jb2RlJztcclxuaW1wb3J0IHtIZWF0bWFwfSBmcm9tICcuL21vZHVsZXMvaGVhdG1hcCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIEdlb2NvZGUuaW5pdCgpXHJcbiAgICBIZWF0bWFwLmluaXQoKVxyXG59KCkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXNzZXRzL2pzL21haW4uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./app/assets/js/modules/geocode.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar i = void 0;\n\nvar Geocode = {\n    variables: {\n        geocodeBtn: document.getElementById(\"geocodeBtn\"),\n        textField: document.getElementById(\"postcode-field\"),\n        infoMessage: document.getElementById(\"infoMessage\")\n    },\n\n    init: function init() {\n        var _this = this;\n\n        i = this.variables;\n\n        if (i.geocodeBtn) {\n            i.geocodeBtn.addEventListener(\"click\", function () {\n                return _this.geocodePostcodes();\n            });\n        }\n    },\n\n    geocodePostcodes: function geocodePostcodes() {\n        var count = 0;\n        var heatmapBtn = document.getElementById(\"heatmapBtn\");\n\n        ///////\n        var sendRequest = function sendRequest(url, requestType, data) {\n            return new Promise(function (resolve, reject) {\n                var request = new XMLHttpRequest();\n                request.open(requestType, url, true);\n                request.onload = handleResponse;\n                request.onerror = function (error) {\n                    return reject(error);\n                };\n                request.send(data);\n\n                function handleResponse() {\n                    if (request.status >= 200 && request.status < 400) {\n                        console.log(\"request sent\");\n                        resolve(this.responseText);\n                    } else {\n                        reject(this.statusText);\n                    }\n                }\n            });\n        };\n\n        ///////\n        var sendLatLng = function sendLatLng(postcode, lat, lng, length) {\n            var url = \"http://localhost/sai-xampp/heatmap-es6/app/assets/php/data.php\";\n\n            var data = new FormData();\n            data.append('postcode', postcode);\n            data.append('lat', lat);\n            data.append('lng', lng);\n\n            count++;\n            console.log(count);\n\n            if (count === length) {\n                console.log(\"geocode complete\");\n                heatmapBtn.classList.add(\"show-btn\");\n            }\n\n            sendRequest(url, 'POST', data);\n        };\n\n        ///////\n        var geocodeAddress = function geocodeAddress(postcode, length) {\n            var geocoder = new google.maps.Geocoder();\n            var lat = void 0,\n                lng = void 0;\n\n            geocoder.geocode({ 'address': postcode }, function (results, status) {\n                if (status === 'OK') {\n                    var x = void 0;\n                    var resultsLength = results.length;\n\n                    for (x = 0; x < resultsLength; x++) {\n                        lat = results[x].geometry.location.lat().toFixed(8);\n                        lng = results[x].geometry.location.lng().toFixed(8);\n                        sendLatLng(postcode, lat, lng, length);\n                    }\n                } else if (status == 'OVER_QUERY_LIMIT') {\n                    setTimeout(function () {\n                        geocodeAddress(postcode, length);\n                    }, 200);\n                } else {\n                    console.log('Geocode was not successful: ' + status);\n                }\n            });\n        };\n\n        ///////\n        // const getPostcodes = existingPostcodes => {\n        //     const url = \"http://localhost/sai-xampp/datasite/test-version/api.hurford-salvi-carr.co.uk/sodsurvey/\";\n\n        //     const handlePostcode = response => {\n        //         const json = JSON.parse(response);\n        //         const postcodesArray = [];\n        //         let i;\n\n        //         for (i in json) {\n        //             postcodesArray.push(json[i].from_postcode);\n        //         }\n\n        //         const postcodes = postcodesArray.filter(Boolean).filter((item, index, inputArray) => inputArray.indexOf(item) == index);\n\n        //         existingPostcodes.sort();\n        //         postcodes.sort();\n\n        //         const postcodeLength = postcodes.length;\n        //         let n,\n        //             c = 0;\n\n        //         for (n = 0; n < postcodeLength; n++) {\n        //             if (existingPostcodes[n] === postcodes[n]) {\n        //                 c++\n        //                 console.log(\"already geocoded\");\n        //             } else {\n        //                 geocodeAddress(postcodes[n], postcodeLength);\n        //             }\n        //         }\n\n        //         if (c === postcodeLength) {\n        //             heatmapBtn.classList.add(\"show-btn\");\n        //         }\n        //     }\n\n        //     sendRequest(url, \"GET\").then(handlePostcode).catch(err => console.log(err));\n        // }\n\n        // ///////\n        // const checkExistingPoscodes = () => {\n        //     const url = \"http://localhost/sai-xampp/heatmap-es6/app/assets/php/json.php\";\n\n        //     const handleExistingPostcode = response => {\n        //         const existingPostcodes = JSON.parse(response);\n        //         const array = [];\n        //         let i;\n\n        //         for (i in existingPostcodes) {\n        //             array.push(existingPostcodes[i].postcode);\n        //         }\n\n        //         return array;\n        //     }\n\n        //     sendRequest(url, \"GET\").then(handleExistingPostcode)\n        //     .then(getPostcodes)\n        //     .catch(err => console.log(err));\n        // }\n\n        // checkExistingPoscodes();\n\n        var getPostcodesfromInput = function getPostcodesfromInput() {\n\n            // let textField = document.getElementById(\"postcode-field\");\n            var textValue = i.textField.value;\n\n            if (textValue === \"\") {\n                i.infoMessage.textContent = \"please enter a postcode\";\n            } else {\n                var postcodes = textValue.split(\"\\n\").sort();\n                var postcodeLength = postcodes.length;\n                var n = void 0,\n                    c = 0;\n\n                for (n = 0; n < postcodeLength; n++) {\n                    c++;\n                    geocodeAddress(postcodes[n], postcodeLength);\n                }\n\n                if (c === postcodeLength) {\n                    heatmapBtn.classList.add(\"show-btn\");\n                }\n            }\n        };\n\n        getPostcodesfromInput();\n    }\n};\n\nexports.Geocode = Geocode;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2pzL21vZHVsZXMvZ2VvY29kZS5qcz9kY2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBpO1xyXG5cclxuY29uc3QgR2VvY29kZSA9IHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGdlb2NvZGVCdG46IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2VvY29kZUJ0blwiKSxcclxuICAgICAgICB0ZXh0RmllbGQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdGNvZGUtZmllbGRcIiksXHJcbiAgICAgICAgaW5mb01lc3NhZ2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb01lc3NhZ2VcIilcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaSA9IHRoaXMudmFyaWFibGVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpLmdlb2NvZGVCdG4pIHtcclxuICAgICAgICAgICAgaS5nZW9jb2RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmdlb2NvZGVQb3N0Y29kZXMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZW9jb2RlUG9zdGNvZGVzOiAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBsZXQgaGVhdG1hcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhdG1hcEJ0blwiKTtcclxuXHJcbiAgICAgICAgLy8vLy8vL1xyXG4gICAgICAgIGNvbnN0IHNlbmRSZXF1ZXN0ID0gKHVybCwgcmVxdWVzdFR5cGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub3BlbihyZXF1ZXN0VHlwZSwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25sb2FkID0gaGFuZGxlUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0IHNlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8vLy8vL1xyXG4gICAgICAgIGNvbnN0IHNlbmRMYXRMbmcgPSAocG9zdGNvZGUsIGxhdCwgbG5nLCBsZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0L3NhaS14YW1wcC9oZWF0bWFwLWVzNi9hcHAvYXNzZXRzL3BocC9kYXRhLnBocFwiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgncG9zdGNvZGUnLCBwb3N0Y29kZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdsYXQnLCBsYXQpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnbG5nJywgbG5nKTtcclxuXHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VvY29kZSBjb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGhlYXRtYXBCdG4uY2xhc3NMaXN0LmFkZChcInNob3ctYnRuXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZW5kUmVxdWVzdCh1cmwsICdQT1NUJywgZGF0YSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8vLy8vL1xyXG4gICAgICAgIGNvbnN0IGdlb2NvZGVBZGRyZXNzID0gKHBvc3Rjb2RlLCBsZW5ndGgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuICAgICAgICAgICAgbGV0IGxhdCxcclxuICAgICAgICAgICAgICAgIGxuZztcclxuXHJcbiAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeydhZGRyZXNzJzogcG9zdGNvZGV9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnT0snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0c0xlbmd0aCA9IHJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IoeCA9IDA7IHggPCByZXN1bHRzTGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ID0gcmVzdWx0c1t4XS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKS50b0ZpeGVkKDgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsbmcgPSByZXN1bHRzW3hdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpLnRvRml4ZWQoOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRMYXRMbmcocG9zdGNvZGUsIGxhdCwgbG5nLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT0gJ09WRVJfUVVFUllfTElNSVQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvY29kZUFkZHJlc3MocG9zdGNvZGUsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZW9jb2RlIHdhcyBub3Qgc3VjY2Vzc2Z1bDogJyArIHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vLy8vLy9cclxuICAgICAgICAvLyBjb25zdCBnZXRQb3N0Y29kZXMgPSBleGlzdGluZ1Bvc3Rjb2RlcyA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdC9zYWkteGFtcHAvZGF0YXNpdGUvdGVzdC12ZXJzaW9uL2FwaS5odXJmb3JkLXNhbHZpLWNhcnIuY28udWsvc29kc3VydmV5L1wiO1xyXG5cclxuICAgICAgICAvLyAgICAgY29uc3QgaGFuZGxlUG9zdGNvZGUgPSByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBwb3N0Y29kZXNBcnJheSA9IFtdO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgZm9yIChpIGluIGpzb24pIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwb3N0Y29kZXNBcnJheS5wdXNoKGpzb25baV0uZnJvbV9wb3N0Y29kZSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgcG9zdGNvZGVzID0gcG9zdGNvZGVzQXJyYXkuZmlsdGVyKEJvb2xlYW4pLmZpbHRlcigoaXRlbSwgaW5kZXgsIGlucHV0QXJyYXkpID0+IGlucHV0QXJyYXkuaW5kZXhPZihpdGVtKSA9PSBpbmRleCk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgZXhpc3RpbmdQb3N0Y29kZXMuc29ydCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgcG9zdGNvZGVzLnNvcnQoKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBwb3N0Y29kZUxlbmd0aCA9IHBvc3Rjb2Rlcy5sZW5ndGg7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgbixcclxuICAgICAgICAvLyAgICAgICAgICAgICBjID0gMDtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBmb3IgKG4gPSAwOyBuIDwgcG9zdGNvZGVMZW5ndGg7IG4rKykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChleGlzdGluZ1Bvc3Rjb2Rlc1tuXSA9PT0gcG9zdGNvZGVzW25dKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGMrK1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFscmVhZHkgZ2VvY29kZWRcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZ2VvY29kZUFkZHJlc3MocG9zdGNvZGVzW25dLCBwb3N0Y29kZUxlbmd0aCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoYyA9PT0gcG9zdGNvZGVMZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBoZWF0bWFwQnRuLmNsYXNzTGlzdC5hZGQoXCJzaG93LWJ0blwiKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgc2VuZFJlcXVlc3QodXJsLCBcIkdFVFwiKS50aGVuKGhhbmRsZVBvc3Rjb2RlKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvLy8vLy8vXHJcbiAgICAgICAgLy8gY29uc3QgY2hlY2tFeGlzdGluZ1Bvc2NvZGVzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Qvc2FpLXhhbXBwL2hlYXRtYXAtZXM2L2FwcC9hc3NldHMvcGhwL2pzb24ucGhwXCI7XHJcblxyXG4gICAgICAgIC8vICAgICBjb25zdCBoYW5kbGVFeGlzdGluZ1Bvc3Rjb2RlID0gcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgZXhpc3RpbmdQb3N0Y29kZXMgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGFycmF5ID0gW107XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgaTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgZm9yIChpIGluIGV4aXN0aW5nUG9zdGNvZGVzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYXJyYXkucHVzaChleGlzdGluZ1Bvc3Rjb2Rlc1tpXS5wb3N0Y29kZSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBzZW5kUmVxdWVzdCh1cmwsIFwiR0VUXCIpLnRoZW4oaGFuZGxlRXhpc3RpbmdQb3N0Y29kZSlcclxuICAgICAgICAvLyAgICAgLnRoZW4oZ2V0UG9zdGNvZGVzKVxyXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2tFeGlzdGluZ1Bvc2NvZGVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldFBvc3Rjb2Rlc2Zyb21JbnB1dCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCB0ZXh0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3Rjb2RlLWZpZWxkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0VmFsdWUgPSBpLnRleHRGaWVsZC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0VmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGkuaW5mb01lc3NhZ2UudGV4dENvbnRlbnQgPSBcInBsZWFzZSBlbnRlciBhIHBvc3Rjb2RlXCJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3Rjb2RlcyA9IHRleHRWYWx1ZS5zcGxpdChcIlxcblwiKS5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0Y29kZUxlbmd0aCA9IHBvc3Rjb2Rlcy5sZW5ndGg7ICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IG4sXHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IDA7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGZvciAobiA9IDA7IG4gPCBwb3N0Y29kZUxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYysrXHJcbiAgICAgICAgICAgICAgICAgICAgZ2VvY29kZUFkZHJlc3MocG9zdGNvZGVzW25dLCBwb3N0Y29kZUxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjID09PSBwb3N0Y29kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYXRtYXBCdG4uY2xhc3NMaXN0LmFkZChcInNob3ctYnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRQb3N0Y29kZXNmcm9tSW5wdXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtHZW9jb2RlfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9qcy9tb2R1bGVzL2dlb2NvZGUuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5S0E7QUFDQTtBQWdMQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************!*\
  !*** ./app/assets/js/modules/heatmap.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar i = void 0;\n\nvar Heatmap = {\n    variables: {},\n\n    init: function init() {\n        i = this.variables;\n\n        if (window.location.pathname === \"/sai-xampp/heatmap-es6/app/dist/heatmap.html\") {\n            this.renderHeatmap();\n        }\n    },\n\n    renderHeatmap: function renderHeatmap() {\n        var url = \"http://localhost/sai-xampp/heatmap-es6/app/assets/php/json.php\";\n\n        var sendRequest = function sendRequest(url, requestType) {\n            return new Promise(function (resolve, reject) {\n                var request = new XMLHttpRequest();\n                request.open(requestType, url, true);\n                request.onload = handleResponse;\n                request.onerror = function (error) {\n                    return reject(error);\n                };\n                request.send();\n\n                function handleResponse() {\n                    if (request.status >= 200 && request.status < 400) {\n                        console.log(\"request sent\");\n                        resolve(this.responseText);\n                    } else {\n                        reject(this.statusText);\n                    }\n                }\n            });\n        };\n\n        var callMap = function callMap(response) {\n            var cordinates = JSON.parse(response);\n\n            var heatmapData = {\n                data: []\n            };\n\n            var myLatlng = new google.maps.LatLng(54.5257126, -5.3650851);\n\n            var myOptions = {\n                zoom: 6,\n                scrollwheel: false,\n                scaleControl: false,\n                center: myLatlng\n            };\n\n            var map = new google.maps.Map(document.getElementById(\"map-canvas\"), myOptions);\n\n            var heatmap = new HeatmapOverlay(map, {\n                // radius should be small ONLY if scaleRadius is true (or small radius is intended)\n                \"radius\": 0.3,\n                \"maxOpacity\": 0.5,\n                // scales the radius based on map zoom\n                \"scaleRadius\": true,\n                // if set to false the heatmap uses the global maximum for colorization\n                // if activated: uses the data maximum within the current map boundaries \n                //   (there will always be a red spot with useLocalExtremas true)\n                \"useLocalExtrema\": true,\n                // which field name in your data represents the latitude - default \"lat\"\n                latField: 'lat',\n                // which field name in your data represents the longitude - default \"lng\"\n                lngField: 'lng',\n                // which field name in your data represents the data value - default \"value\"\n                valueField: 'count'\n            });\n\n            var i = void 0;\n            for (i in cordinates) {\n                heatmapData.data.push({\n                    lat: cordinates[i].lat,\n                    lng: cordinates[i].lng\n                });\n            }\n\n            heatmap.setData(heatmapData);\n        };\n\n        sendRequest(url, \"GET\").then(callMap).catch(function (err) {\n            return console.log(err);\n        });\n    }\n};\n\nexports.Heatmap = Heatmap;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXNzZXRzL2pzL21vZHVsZXMvaGVhdG1hcC5qcz84YjgwIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpO1xyXG5cclxuY29uc3QgSGVhdG1hcCA9IHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpID0gdGhpcy52YXJpYWJsZXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvc2FpLXhhbXBwL2hlYXRtYXAtZXM2L2FwcC9kaXN0L2hlYXRtYXAuaHRtbFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVySGVhdG1hcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIHJlbmRlckhlYXRtYXA6ICgpID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Qvc2FpLXhhbXBwL2hlYXRtYXAtZXM2L2FwcC9hc3NldHMvcGhwL2pzb24ucGhwXCI7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBzZW5kUmVxdWVzdCA9ICh1cmwsIHJlcXVlc3RUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4ocmVxdWVzdFR5cGUsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGhhbmRsZVJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0IHNlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FsbE1hcCA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29yZGluYXRlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGVhdG1hcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbXlMYXRsbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU0LjUyNTcxMjYsIC01LjM2NTA4NTEpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbXlPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgem9vbTogNixcclxuICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IG15TGF0bG5nXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwLWNhbnZhc1wiKSwgbXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhlYXRtYXAgPSBuZXcgSGVhdG1hcE92ZXJsYXkobWFwLCB7XHJcbiAgICAgICAgICAgICAgICAvLyByYWRpdXMgc2hvdWxkIGJlIHNtYWxsIE9OTFkgaWYgc2NhbGVSYWRpdXMgaXMgdHJ1ZSAob3Igc21hbGwgcmFkaXVzIGlzIGludGVuZGVkKVxyXG4gICAgICAgICAgICAgICAgXCJyYWRpdXNcIjogMC4zLFxyXG4gICAgICAgICAgICAgICAgXCJtYXhPcGFjaXR5XCI6IDAuNSxcclxuICAgICAgICAgICAgICAgIC8vIHNjYWxlcyB0aGUgcmFkaXVzIGJhc2VkIG9uIG1hcCB6b29tXHJcbiAgICAgICAgICAgICAgICBcInNjYWxlUmFkaXVzXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyBpZiBzZXQgdG8gZmFsc2UgdGhlIGhlYXRtYXAgdXNlcyB0aGUgZ2xvYmFsIG1heGltdW0gZm9yIGNvbG9yaXphdGlvblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgYWN0aXZhdGVkOiB1c2VzIHRoZSBkYXRhIG1heGltdW0gd2l0aGluIHRoZSBjdXJyZW50IG1hcCBib3VuZGFyaWVzIFxyXG4gICAgICAgICAgICAgICAgLy8gICAodGhlcmUgd2lsbCBhbHdheXMgYmUgYSByZWQgc3BvdCB3aXRoIHVzZUxvY2FsRXh0cmVtYXMgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIFwidXNlTG9jYWxFeHRyZW1hXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBmaWVsZCBuYW1lIGluIHlvdXIgZGF0YSByZXByZXNlbnRzIHRoZSBsYXRpdHVkZSAtIGRlZmF1bHQgXCJsYXRcIlxyXG4gICAgICAgICAgICAgICAgbGF0RmllbGQ6ICdsYXQnLFxyXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggZmllbGQgbmFtZSBpbiB5b3VyIGRhdGEgcmVwcmVzZW50cyB0aGUgbG9uZ2l0dWRlIC0gZGVmYXVsdCBcImxuZ1wiXHJcbiAgICAgICAgICAgICAgICBsbmdGaWVsZDogJ2xuZycsXHJcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBmaWVsZCBuYW1lIGluIHlvdXIgZGF0YSByZXByZXNlbnRzIHRoZSBkYXRhIHZhbHVlIC0gZGVmYXVsdCBcInZhbHVlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlRmllbGQ6ICdjb3VudCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaTtcclxuICAgICAgICAgICAgZm9yIChpIGluIGNvcmRpbmF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGhlYXRtYXBEYXRhLmRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBjb3JkaW5hdGVzW2ldLmxhdCxcclxuICAgICAgICAgICAgICAgICAgICBsbmc6IGNvcmRpbmF0ZXNbaV0ubG5nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGVhdG1hcC5zZXREYXRhKGhlYXRtYXBEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2VuZFJlcXVlc3QodXJsLCBcIkdFVFwiKS50aGVuKGNhbGxNYXApLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtIZWF0bWFwfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2Fzc2V0cy9qcy9tb2R1bGVzL2hlYXRtYXAuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbkZBO0FBQ0E7QUFxRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);