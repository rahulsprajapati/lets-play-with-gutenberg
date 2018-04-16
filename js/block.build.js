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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_block__ = __webpack_require__(2);
/**
 * Registers Sample Block.
 */



/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */
var registerBlockType = wp.blocks.registerBlockType;

/**
 * Retrieves the translation of text.
 *
 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
 */

var __ = wp.i18n.__;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */

registerBlockType('lpwg/sample-block', {

	/**
  * This is the display title for your block, which can be translated with `i18n` functions.
  *
  * The block inserter will show this name.
  */
	title: __('Sample Block'),

	/**
  * An icon property should be specified to make it easier to identify a block.
  * These can be any of WordPress’ Dashicons, or a custom svg element.
  */
	icon: 'media-document',

	/**
  * Blocks are grouped into categories to help users browse and discover them.
  * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
  */
	category: 'common',

	/**
  * Removes support for an HTML mode.
  */
	supportHTML: true,

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
  *
  * @param {Object} [props] Properties passed from the editor.
  *
  * @return {Element}       Element to render.
  */
	edit: __WEBPACK_IMPORTED_MODULE_0__sample_block__["a" /* default */],

	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into `post_content`.
  *
  * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
  *
  * @return {Element}       Element to render.
  */
	save: function save(_ref) {
		var attributes = _ref.attributes;


		return '<div>Sample Block Front End</div>';
	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains Sample block component.
 */

var Component = wp.element.Component;

var SampleBlock = function (_Component) {
	_inherits(SampleBlock, _Component);

	function SampleBlock() {
		_classCallCheck(this, SampleBlock);

		return _possibleConstructorReturn(this, (SampleBlock.__proto__ || Object.getPrototypeOf(SampleBlock)).apply(this, arguments));
	}

	_createClass(SampleBlock, [{
		key: 'render',
		value: function render() {

			return '<div>Sample Block </div>';
		}
	}]);

	return SampleBlock;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (SampleBlock);

/***/ })
/******/ ]);