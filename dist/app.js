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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app/app.js":
/*!***********************!*\
  !*** ./js/app/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n\n   $('.toggle-nav').click(function () {\n       $(this).toggleClass('toggled');\n       $('.main_menu').slideToggle();\n   });\n\n    $(window).on('resize', function () {\n        if ($(this).width() > 767) {\n            $('.main_menu').removeAttr('style');\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/app.js?");

/***/ }),

/***/ "./js/app/gallery.js":
/*!***************************!*\
  !*** ./js/app/gallery.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    $('.step_images_wrap').magnificPopup({\n\t\tdelegate: 'a',\n\t\ttype: 'image',\n\t\tcloseOnContentClick: false,\n\t\tcloseBtnInside: false,\n\t\tmainClass: 'mfp-with-zoom mfp-img-mobile',\n\t\timage: {\n\t\t\tverticalFit: true\n\t\t},\n\t\tgallery: {\n\t\t\tenabled: true\n\t\t},\n\t\tzoom: {\n\t\t\tenabled: true,\n\t\t\tduration: 300, // don't foget to change the duration also in CSS\n\t\t\topener: function(element) {\n\t\t\t\treturn element.find('img');\n\t\t\t}\n\t\t}\n\n\t});\n});\n\n\n//# sourceURL=webpack:///./js/app/gallery.js?");

/***/ }),

/***/ "./js/app/postcards.js":
/*!*****************************!*\
  !*** ./js/app/postcards.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n    'use strict';\n\n    var complimentsText;\n    var complimentsImg;\n    var complimentsClass;\n    var postcardsImg = {};\n\n    $('.create_button').click(function () {\n        $(this).text('Змяніць');\n        $('.paragraph').fadeOut();\n        $('.step_compliments').slideUp(0);\n        $('.step_images').slideUp();\n        var option = $('.select option:selected');\n        var name = option.text();\n        var gender = option.val();\n        var compliments = $('.compliment');\n        $('.step_compliments').children().remove();\n\n        for (var i = 0; i < compliments.length; i++) {\n            var genderText = compliments.eq(i).find('.' + gender).text();\n            var text = compliments.eq(i).find('.text').text();\n            var step_compliments_block = '<a href=\"#\" class=\"step_compliments_button\"><div><span class=\"name\">' + genderText + ' ' + name + '!</span> ' + text + '</div></a>';\n            $('.step_compliments').append(step_compliments_block);\n        }\n\n        $('.step_compliments').slideDown();\n        $('.paragraph').eq(1).delay(500).fadeIn();\n    });\n\n    $('.step_compliments').on('click', '.step_compliments_button', function (event) {\n        event.preventDefault();\n\n        complimentsText = $(this).html();\n        $('.paragraph').fadeOut();\n        $('.step_compliments').slideUp();\n        $('.step_images').slideDown();\n        $('.paragraph').eq(2).delay(500).fadeIn();\n    });\n\n    $('.choose_image').click(function () {\n        complimentsImg = $(this).prev().attr('href');\n        complimentsClass = $(this).prev().data('class');\n        $('.locker').fadeIn(300, function () {\n            $('.steps').css('display', 'none');\n            $('.postcard_wrap').addClass(complimentsClass);\n            $('.postcard_img').attr('src', complimentsImg);\n            $('.postcard_wrap_text').html(complimentsText);\n            $('.postcard').css('display', 'block');\n            html2canvas(document.querySelector('#postcards')).then(function (canvas) {\n                postcardsImg.data = canvas.toDataURL();\n                postcardsImg.name = (function () {\n                    var date = new Date();\n                    var rand = Math.floor(Math.random() * 1000);\n                    return date.getDate() + '' + date.getMonth() + '' + date.getFullYear() + '' + date.getMilliseconds() + '' + rand;\n                })();\n\n                $('.download_button').attr('href', 'tmp/postcard' + postcardsImg.name + '.png');\n\n                $.ajax({\n                    url: 'php/saveImg.php',\n                    method: 'POST',\n                    data: postcardsImg,\n                    success: function (data) {\n                        console.log(data);\n                        $('.locker').fadeOut(300);\n                    }\n                });\n            });\n        });\n    });\n\n    $('.back_button').click(function (event) {\n        event.preventDefault();\n\n        $('.postcard').fadeOut(300, function () {\n            $('.postcard_wrap').removeClass(complimentsClass);\n        });\n        $('.steps').delay(300).fadeIn(300);\n    });\n\n    $('.again_button').click(function (event) {\n        event.preventDefault();\n\n        $('.create_button').text('СТВАРЫЦЕ ПАЖАДАННЕ');\n        $('.step_images').delay(300).slideUp(0);\n        $('.paragraph').fadeOut(0);\n        $('.paragraph').eq(0).fadeIn(0);\n        $('.postcard').fadeOut(300, function () {\n            $('.postcard_wrap').removeClass(complimentsClass);\n        });\n        $('.steps').delay(300).fadeIn(300);\n    });\n});\n\n\n//# sourceURL=webpack:///./js/app/postcards.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi ./js/app/app.js ./js/app/gallery.js ./js/app/postcards.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app/app.js */\"./js/app/app.js\");\n__webpack_require__(/*! ./js/app/gallery.js */\"./js/app/gallery.js\");\nmodule.exports = __webpack_require__(/*! ./js/app/postcards.js */\"./js/app/postcards.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app/app.js_./js/app/gallery.js_./js/app/postcards.js?");

/***/ })

/******/ });
