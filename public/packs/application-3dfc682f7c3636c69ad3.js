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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/*! exports used: Application, Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stimulus_core__ = __webpack_require__(/*! @stimulus/core */ 12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__stimulus_core__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__stimulus_core__["b"]; });



/***/ }),
/* 1 */
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/context.js ***!
  \*********************************************************/
/*! exports provided: Context */
/*! exports used: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binding_observer__ = __webpack_require__(/*! ./binding_observer */ 18);

var Context = /** @class */ (function () {
    function Context(module, scope) {
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new __WEBPACK_IMPORTED_MODULE_0__binding_observer__["a" /* BindingObserver */](this, this.dispatcher);
        try {
            this.controller.initialize();
        }
        catch (error) {
            this.handleError(error, "initializing controller");
        }
    }
    Context.prototype.connect = function () {
        this.bindingObserver.start();
        try {
            this.controller.connect();
        }
        catch (error) {
            this.handleError(error, "connecting controller");
        }
    };
    Context.prototype.disconnect = function () {
        try {
            this.controller.disconnect();
        }
        catch (error) {
            this.handleError(error, "disconnecting controller");
        }
        this.bindingObserver.stop();
    };
    Object.defineProperty(Context.prototype, "application", {
        get: function () {
            return this.module.application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "identifier", {
        get: function () {
            return this.module.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "dispatcher", {
        get: function () {
            return this.application.dispatcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "parentElement", {
        get: function () {
            return this.element.parentElement;
        },
        enumerable: true,
        configurable: true
    });
    // Error handling
    Context.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;
        detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);
        this.application.handleError(error, "Error " + message, detail);
    };
    return Context;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQVFwRDtJQU1FLGlCQUFZLE1BQWMsRUFBRSxLQUFZO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRWpFLElBQUk7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQzdCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO1NBQ25EO0lBQ0gsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTVCLElBQUk7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQzFCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFBO1NBQ2pEO0lBQ0gsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUM3QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtTQUNwRDtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUE7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFBO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUE7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxpQkFBaUI7SUFFakIsNkJBQVcsR0FBWCxVQUFZLEtBQVksRUFBRSxPQUFlLEVBQUUsTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUN0RCxJQUFBLFNBQTBDLEVBQXhDLDBCQUFVLEVBQUUsMEJBQVUsRUFBRSxvQkFBTyxDQUFTO1FBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBUyxPQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDIn0=

/***/ }),
/* 2 */
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, TokenListObserver, ValueListObserver */
/*! exports used: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_attribute_observer__ = __webpack_require__(/*! ./src/attribute_observer */ 3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_element_observer__ = __webpack_require__(/*! ./src/element_observer */ 4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_token_list_observer__ = __webpack_require__(/*! ./src/token_list_observer */ 5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_value_list_observer__ = __webpack_require__(/*! ./src/value_list_observer */ 23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__src_value_list_observer__["a"]; });




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLDBCQUEwQixDQUFBO0FBQ3hDLGNBQWMsd0JBQXdCLENBQUE7QUFDdEMsY0FBYywyQkFBMkIsQ0FBQTtBQUN6QyxjQUFjLDJCQUEyQixDQUFBIn0=

/***/ }),
/* 3 */
/*!**********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js ***!
  \**********************************************************************************/
/*! exports provided: AttributeObserver */
/*! exports used: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttributeObserver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_observer__ = __webpack_require__(/*! ./element_observer */ 4);

var AttributeObserver = /** @class */ (function () {
    function AttributeObserver(element, attributeName, delegate) {
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new __WEBPACK_IMPORTED_MODULE_0__element_observer__["a" /* ElementObserver */](element, this);
    }
    Object.defineProperty(AttributeObserver.prototype, "element", {
        get: function () {
            return this.elementObserver.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttributeObserver.prototype, "selector", {
        get: function () {
            return "[" + this.attributeName + "]";
        },
        enumerable: true,
        configurable: true
    });
    AttributeObserver.prototype.start = function () {
        this.elementObserver.start();
    };
    AttributeObserver.prototype.stop = function () {
        this.elementObserver.stop();
    };
    AttributeObserver.prototype.refresh = function () {
        this.elementObserver.refresh();
    };
    Object.defineProperty(AttributeObserver.prototype, "started", {
        get: function () {
            return this.elementObserver.started;
        },
        enumerable: true,
        configurable: true
    });
    // Element observer delegate
    AttributeObserver.prototype.matchElement = function (element) {
        return element.hasAttribute(this.attributeName);
    };
    AttributeObserver.prototype.matchElementsInTree = function (tree) {
        var match = this.matchElement(tree) ? [tree] : [];
        var matches = Array.from(tree.querySelectorAll(this.selector));
        return match.concat(matches);
    };
    AttributeObserver.prototype.elementMatched = function (element) {
        if (this.delegate.elementMatchedAttribute) {
            this.delegate.elementMatchedAttribute(element, this.attributeName);
        }
    };
    AttributeObserver.prototype.elementUnmatched = function (element) {
        if (this.delegate.elementUnmatchedAttribute) {
            this.delegate.elementUnmatchedAttribute(element, this.attributeName);
        }
    };
    AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
            this.delegate.elementAttributeValueChanged(element, attributeName);
        }
    };
    return AttributeObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlX29ic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F0dHJpYnV0ZV9vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUEyQixNQUFNLG9CQUFvQixDQUFBO0FBUTdFO0lBTUUsMkJBQVksT0FBZ0IsRUFBRSxhQUFxQixFQUFFLFFBQW1DO1FBQ3RGLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBRXhCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFRO2FBQVo7WUFDRSxPQUFPLE1BQUksSUFBSSxDQUFDLGFBQWEsTUFBRyxDQUFBO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCw0QkFBNEI7SUFFNUIsd0NBQVksR0FBWixVQUFhLE9BQWdCO1FBQzNCLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUNuRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNoRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELDBDQUFjLEdBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ25FO0lBQ0gsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixPQUFnQjtRQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ3JFO0lBQ0gsQ0FBQztJQUVELG1EQUF1QixHQUF2QixVQUF3QixPQUFnQixFQUFFLGFBQXFCO1FBQzdELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsRUFBRTtZQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUNuRTtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMifQ==

/***/ }),
/* 4 */
/*!********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js ***!
  \********************************************************************************/
/*! exports provided: ElementObserver */
/*! exports used: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementObserver; });
var ElementObserver = /** @class */ (function () {
    function ElementObserver(element, delegate) {
        var _this = this;
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set;
        this.mutationObserver = new MutationObserver(function (mutations) { return _this.processMutations(mutations); });
    }
    ElementObserver.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, { attributes: true, childList: true, subtree: true });
            this.refresh();
        }
    };
    ElementObserver.prototype.stop = function () {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    };
    ElementObserver.prototype.refresh = function () {
        if (this.started) {
            var matches = new Set(this.matchElementsInTree());
            for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
                var element = _a[_i];
                if (!matches.has(element)) {
                    this.removeElement(element);
                }
            }
            for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
                var element = _c[_b];
                this.addElement(element);
            }
        }
    };
    // Mutation record processing
    ElementObserver.prototype.processMutations = function (mutations) {
        if (this.started) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                this.processMutation(mutation);
            }
        }
    };
    ElementObserver.prototype.processMutation = function (mutation) {
        if (mutation.type == "attributes") {
            this.processAttributeChange(mutation.target, mutation.attributeName);
        }
        else if (mutation.type == "childList") {
            this.processRemovedNodes(mutation.removedNodes);
            this.processAddedNodes(mutation.addedNodes);
        }
    };
    ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
        var element = node;
        if (this.elements.has(element)) {
            if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
                this.delegate.elementAttributeChanged(element, attributeName);
            }
            else {
                this.removeElement(element);
            }
        }
        else if (this.matchElement(element)) {
            this.addElement(element);
        }
    };
    ElementObserver.prototype.processRemovedNodes = function (nodes) {
        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
            var node = _a[_i];
            var element = this.elementFromNode(node);
            if (element) {
                this.processTree(element, this.removeElement);
            }
        }
    };
    ElementObserver.prototype.processAddedNodes = function (nodes) {
        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
            var node = _a[_i];
            var element = this.elementFromNode(node);
            if (element && this.elementIsActive(element)) {
                this.processTree(element, this.addElement);
            }
        }
    };
    // Element matching
    ElementObserver.prototype.matchElement = function (element) {
        return this.delegate.matchElement(element);
    };
    ElementObserver.prototype.matchElementsInTree = function (tree) {
        if (tree === void 0) { tree = this.element; }
        return this.delegate.matchElementsInTree(tree);
    };
    ElementObserver.prototype.processTree = function (tree, processor) {
        for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
            var element = _a[_i];
            processor.call(this, element);
        }
    };
    ElementObserver.prototype.elementFromNode = function (node) {
        if (node.nodeType == Node.ELEMENT_NODE) {
            return node;
        }
    };
    ElementObserver.prototype.elementIsActive = function (element) {
        if (element.isConnected != this.element.isConnected) {
            return false;
        }
        else {
            return this.element.contains(element);
        }
    };
    // Element tracking
    ElementObserver.prototype.addElement = function (element) {
        if (!this.elements.has(element)) {
            if (this.elementIsActive(element)) {
                this.elements.add(element);
                if (this.delegate.elementMatched) {
                    this.delegate.elementMatched(element);
                }
            }
        }
    };
    ElementObserver.prototype.removeElement = function (element) {
        if (this.elements.has(element)) {
            this.elements.delete(element);
            if (this.delegate.elementUnmatched) {
                this.delegate.elementUnmatched(element);
            }
        }
    };
    return ElementObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0lBUUUseUJBQVksT0FBZ0IsRUFBRSxRQUFpQztRQUEvRCxpQkFPQztRQU5DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBRXhCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUE7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUNqRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDZjtJQUNILENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7U0FDckI7SUFDSCxDQUFDO0lB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

/***/ }),
/* 5 */
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: TokenListObserver */
/*! exports used: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenListObserver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attribute_observer__ = __webpack_require__(/*! ./attribute_observer */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stimulus_multimap__ = __webpack_require__(/*! @stimulus/multimap */ 6);


var TokenListObserver = /** @class */ (function () {
    function TokenListObserver(element, attributeName, delegate) {
        this.attributeObserver = new __WEBPACK_IMPORTED_MODULE_0__attribute_observer__["a" /* AttributeObserver */](element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new __WEBPACK_IMPORTED_MODULE_1__stimulus_multimap__["a" /* Multimap */];
    }
    Object.defineProperty(TokenListObserver.prototype, "started", {
        get: function () {
            return this.attributeObserver.started;
        },
        enumerable: true,
        configurable: true
    });
    TokenListObserver.prototype.start = function () {
        this.attributeObserver.start();
    };
    TokenListObserver.prototype.stop = function () {
        this.attributeObserver.stop();
    };
    TokenListObserver.prototype.refresh = function () {
        this.attributeObserver.refresh();
    };
    Object.defineProperty(TokenListObserver.prototype, "element", {
        get: function () {
            return this.attributeObserver.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenListObserver.prototype, "attributeName", {
        get: function () {
            return this.attributeObserver.attributeName;
        },
        enumerable: true,
        configurable: true
    });
    // Attribute observer delegate
    TokenListObserver.prototype.elementMatchedAttribute = function (element) {
        this.tokensMatched(this.readTokensForElement(element));
    };
    TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
        var _a = this.refreshTokensForElement(element), unmatchedTokens = _a[0], matchedTokens = _a[1];
        this.tokensUnmatched(unmatchedTokens);
        this.tokensMatched(matchedTokens);
    };
    TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    };
    TokenListObserver.prototype.tokensMatched = function (tokens) {
        var _this = this;
        tokens.forEach(function (token) { return _this.tokenMatched(token); });
    };
    TokenListObserver.prototype.tokensUnmatched = function (tokens) {
        var _this = this;
        tokens.forEach(function (token) { return _this.tokenUnmatched(token); });
    };
    TokenListObserver.prototype.tokenMatched = function (token) {
        this.delegate.tokenMatched(token);
        this.tokensByElement.add(token.element, token);
    };
    TokenListObserver.prototype.tokenUnmatched = function (token) {
        this.delegate.tokenUnmatched(token);
        this.tokensByElement.delete(token.element, token);
    };
    TokenListObserver.prototype.refreshTokensForElement = function (element) {
        var previousTokens = this.tokensByElement.getValuesForKey(element);
        var currentTokens = this.readTokensForElement(element);
        var firstDifferingIndex = zip(previousTokens, currentTokens)
            .findIndex(function (_a) {
            var previousToken = _a[0], currentToken = _a[1];
            return !tokensAreEqual(previousToken, currentToken);
        });
        if (firstDifferingIndex == -1) {
            return [[], []];
        }
        else {
            return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
        }
    };
    TokenListObserver.prototype.readTokensForElement = function (element) {
        var attributeName = this.attributeName;
        var tokenString = element.getAttribute(attributeName) || "";
        return parseTokenString(tokenString, element, attributeName);
    };
    return TokenListObserver;
}());

function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter(function (content) { return content.length; })
        .map(function (content, index) { return ({ element: element, attributeName: attributeName, content: content, index: index }); });
}
function zip(left, right) {
    var length = Math.max(left.length, right.length);
    return Array.from({ length: length }, function (_, index) { return [left[index], right[index]]; });
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fbGlzdF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbl9saXN0X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQTtBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFjN0M7SUFLRSwyQkFBWSxPQUFnQixFQUFFLGFBQXFCLEVBQUUsUUFBbUM7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksUUFBUSxDQUFBO0lBQ3JDLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFBO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsOEJBQThCO0lB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

/***/ }),
/* 6 */
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: Multimap, IndexedMultimap */
/*! exports used: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_multimap__ = __webpack_require__(/*! ./src/multimap */ 7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_multimap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_indexed_multimap__ = __webpack_require__(/*! ./src/indexed_multimap */ 22);
/* unused harmony namespace reexport */


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGdCQUFnQixDQUFBO0FBQzlCLGNBQWMsd0JBQXdCLENBQUEifQ==

/***/ }),
/* 7 */
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/multimap.js ***!
  \**************************************************************/
/*! exports provided: Multimap */
/*! exports used: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Multimap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__set_operations__ = __webpack_require__(/*! ./set_operations */ 8);

var Multimap = /** @class */ (function () {
    function Multimap() {
        this.valuesByKey = new Map();
    }
    Object.defineProperty(Multimap.prototype, "values", {
        get: function () {
            var sets = Array.from(this.valuesByKey.values());
            return sets.reduce(function (values, set) { return values.concat(Array.from(set)); }, []);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Multimap.prototype, "size", {
        get: function () {
            var sets = Array.from(this.valuesByKey.values());
            return sets.reduce(function (size, set) { return size + set.size; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Multimap.prototype.add = function (key, value) {
        Object(__WEBPACK_IMPORTED_MODULE_0__set_operations__["a" /* add */])(this.valuesByKey, key, value);
    };
    Multimap.prototype.delete = function (key, value) {
        Object(__WEBPACK_IMPORTED_MODULE_0__set_operations__["b" /* del */])(this.valuesByKey, key, value);
    };
    Multimap.prototype.has = function (key, value) {
        var values = this.valuesByKey.get(key);
        return values != null && values.has(value);
    };
    Multimap.prototype.hasKey = function (key) {
        return this.valuesByKey.has(key);
    };
    Multimap.prototype.hasValue = function (value) {
        var sets = Array.from(this.valuesByKey.values());
        return sets.some(function (set) { return set.has(value); });
    };
    Multimap.prototype.getValuesForKey = function (key) {
        var values = this.valuesByKey.get(key);
        return values ? Array.from(values) : [];
    };
    Multimap.prototype.getKeysForValue = function (value) {
        return Array.from(this.valuesByKey)
            .filter(function (_a) {
            var key = _a[0], values = _a[1];
            return values.has(value);
        })
            .map(function (_a) {
            var key = _a[0], values = _a[1];
            return key;
        });
    };
    return Multimap;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGltYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbXVsdGltYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUUzQztJQUdFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFBO0lBQ3pDLENBQUM7SUFFRCxzQkFBSSw0QkFBTTthQUFWO1lBQ0UsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7WUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE5QixDQUE4QixFQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQy9FLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMEJBQUk7YUFBUjtZQUNFLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBQ2xELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHLElBQUssT0FBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBZixDQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sR0FBTSxFQUFFLEtBQVE7UUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEMsT0FBTyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxHQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQVE7UUFDZixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxrQ0FBZSxHQUFmLFVBQWdCLEdBQU07UUFDcEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixLQUFRO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxVQUFDLEVBQWE7Z0JBQVosV0FBRyxFQUFFLGNBQU07WUFBTSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQWpCLENBQWlCLENBQUM7YUFDNUMsR0FBRyxDQUFDLFVBQUMsRUFBYTtnQkFBWixXQUFHLEVBQUUsY0FBTTtZQUFNLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQyJ9

/***/ }),
/* 8 */
/*!********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/set_operations.js ***!
  \********************************************************************/
/*! exports provided: add, del, fetch, prune */
/*! exports used: add, del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* harmony export (immutable) */ __webpack_exports__["b"] = del;
/* unused harmony export fetch */
/* unused harmony export prune */
function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    var values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    var values = map.get(key);
    if (values != null && values.size == 0) {
        map.delete(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0X29wZXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2V0X29wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxjQUFvQixHQUFtQixFQUFFLEdBQU0sRUFBRSxLQUFRO0lBQzdELEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFFRCxNQUFNLGNBQW9CLEdBQW1CLEVBQUUsR0FBTSxFQUFFLEtBQVE7SUFDN0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNqQixDQUFDO0FBRUQsTUFBTSxnQkFBc0IsR0FBbUIsRUFBRSxHQUFNO0lBQ3JELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0tBQ3JCO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDO0FBRUQsTUFBTSxnQkFBc0IsR0FBbUIsRUFBRSxHQUFNO0lBQ3JELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDM0IsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDaEI7QUFDSCxDQUFDIn0=

/***/ }),
/* 9 */
/*!***********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/selectors.js ***!
  \***********************************************************/
/*! exports provided: attributeValueContainsToken */
/*! exports used: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = attributeValueContainsToken;
/** @private */
function attributeValueContainsToken(attributeName, token) {
    return "[" + attributeName + "~=\"" + token + "\"]";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2YsTUFBTSxzQ0FBc0MsYUFBcUIsRUFBRSxLQUFhO0lBQzlFLE9BQU8sTUFBSSxhQUFhLFlBQU0sS0FBSyxRQUFJLENBQUE7QUFDekMsQ0FBQyJ9

/***/ }),
/* 10 */
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/schema.js ***!
  \********************************************************/
/*! exports provided: defaultSchema */
/*! exports used: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultSchema; });
var defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target"
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQVc7SUFDbkMsbUJBQW1CLEVBQUUsaUJBQWlCO0lBQ3RDLGVBQWUsRUFBRSxhQUFhO0lBQzlCLGVBQWUsRUFBRSxhQUFhO0NBQy9CLENBQUEifQ==

/***/ }),
/* 11 */
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stimulus__ = __webpack_require__(/*! stimulus */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stimulus_webpack_helpers__ = __webpack_require__(/*! stimulus/webpack-helpers */ 31);
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker');




var application = __WEBPACK_IMPORTED_MODULE_0_stimulus__["a" /* Application */].start();
var context = __webpack_require__(/*! controllers */ 33);
application.load(Object(__WEBPACK_IMPORTED_MODULE_1_stimulus_webpack_helpers__["a" /* definitionsFromContext */])(context));

/***/ }),
/* 12 */
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/*! exports used: Application, Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_application__ = __webpack_require__(/*! ./src/application */ 13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_application__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_context__ = __webpack_require__(/*! ./src/context */ 1);
/* unused harmony reexport Context */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_controller__ = __webpack_require__(/*! ./src/controller */ 29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_controller__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_schema__ = __webpack_require__(/*! ./src/schema */ 10);
/* unused harmony reexport defaultSchema */




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLGtCQUFrQixDQUFBO0FBRXBFLE9BQU8sRUFBVSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUEifQ==

/***/ }),
/* 13 */
/*!*************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/application.js ***!
  \*************************************************************/
/*! exports provided: Application */
/*! exports used: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Application; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dispatcher__ = __webpack_require__(/*! ./dispatcher */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(/*! ./router */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(/*! ./schema */ 10);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Application = /** @class */ (function () {
    function Application(element, schema) {
        if (element === void 0) { element = document.documentElement; }
        if (schema === void 0) { schema = __WEBPACK_IMPORTED_MODULE_2__schema__["a" /* defaultSchema */]; }
        this.element = element;
        this.schema = schema;
        this.dispatcher = new __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* Dispatcher */](this);
        this.router = new __WEBPACK_IMPORTED_MODULE_1__router__["a" /* Router */](this);
    }
    Application.start = function (element, schema) {
        var application = new Application(element, schema);
        application.start();
        return application;
    };
    Application.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, domReady()];
                    case 1:
                        _a.sent();
                        this.router.start();
                        this.dispatcher.start();
                        return [2 /*return*/];
                }
            });
        });
    };
    Application.prototype.stop = function () {
        this.router.stop();
        this.dispatcher.stop();
    };
    Application.prototype.register = function (identifier, controllerConstructor) {
        this.load({ identifier: identifier, controllerConstructor: controllerConstructor });
    };
    Application.prototype.load = function (head) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var definitions = Array.isArray(head) ? head : [head].concat(rest);
        definitions.forEach(function (definition) { return _this.router.loadDefinition(definition); });
    };
    Application.prototype.unload = function (head) {
        var _this = this;
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var identifiers = Array.isArray(head) ? head : [head].concat(rest);
        identifiers.forEach(function (identifier) { return _this.router.unloadIdentifier(identifier); });
    };
    Object.defineProperty(Application.prototype, "controllers", {
        // Controllers
        get: function () {
            return this.router.contexts.map(function (context) { return context.controller; });
        },
        enumerable: true,
        configurable: true
    });
    Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
        var context = this.router.getContextForElementAndIdentifier(element, identifier);
        return context ? context.controller : null;
    };
    // Error handling
    Application.prototype.handleError = function (error, message, detail) {
        console.error("%s\n\n%o\n\n%o", message, error, detail);
    };
    return Application;
}());

function domReady() {
    return new Promise(function (resolve) {
        if (document.readyState == "loading") {
            document.addEventListener("DOMContentLoaded", resolve);
        }
        else {
            resolve();
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBRXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFVLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUVoRDtJQVlFLHFCQUFZLE9BQTJDLEVBQUUsTUFBOEI7UUFBM0Usd0JBQUEsRUFBQSxVQUFtQixRQUFRLENBQUMsZUFBZTtRQUFFLHVCQUFBLEVBQUEsc0JBQThCO1FBQ3JGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBWE0saUJBQUssR0FBWixVQUFhLE9BQWlCLEVBQUUsTUFBZTtRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25CLE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFTSywyQkFBSyxHQUFYOzs7OzRCQUNFLHFCQUFNLFFBQVEsRUFBRSxFQUFBOzt3QkFBaEIsU0FBZ0IsQ0FBQTt3QkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTt3QkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTs7Ozs7S0FDeEI7SUFFRCwwQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsVUFBa0IsRUFBRSxxQkFBNEM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsWUFBQSxFQUFFLHFCQUFxQix1QkFBQSxFQUFFLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBSUQsMEJBQUksR0FBSixVQUFLLElBQStCO1FBQXBDLGlCQUdDO1FBSHFDLGNBQXFCO2FBQXJCLFVBQXFCLEVBQXJCLHFCQUFxQixFQUFyQixJQUFxQjtZQUFyQiw2QkFBcUI7O1FBQ3pELElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxTQUFLLElBQUksQ0FBQyxDQUFBO1FBQ2hFLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBdEMsQ0FBc0MsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFJRCw0QkFBTSxHQUFOLFVBQU8sSUFBdUI7UUFBOUIsaUJBR0M7UUFIK0IsY0FBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLDZCQUFpQjs7UUFDL0MsSUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLFNBQUssSUFBSSxDQUFDLENBQUE7UUFDaEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQTtJQUM3RSxDQUFDO0lBSUQsc0JBQUksb0NBQVc7UUFGZixjQUFjO2FBRWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxVQUFVLEVBQWxCLENBQWtCLENBQUMsQ0FBQTtRQUNoRSxDQUFDOzs7T0FBQTtJQUVELDBEQUFvQyxHQUFwQyxVQUFxQyxPQUFnQixFQUFFLFVBQWtCO1FBQ3ZFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ2xGLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDNUMsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixpQ0FBVyxHQUFYLFVBQVksS0FBWSxFQUFFLE9BQWUsRUFBRSxNQUFjO1FBQ3ZELE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBaEVELElBZ0VDOztBQUVEO0lBQ0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87UUFDeEIsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTtZQUNwQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUE7U0FDdkQ7YUFBTTtZQUNMLE9BQU8sRUFBRSxDQUFBO1NBQ1Y7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMifQ==

/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/dispatcher.js ***!
  \************************************************************/
/*! exports provided: Dispatcher */
/*! exports used: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dispatcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_listener__ = __webpack_require__(/*! ./event_listener */ 15);

var Dispatcher = /** @class */ (function () {
    function Dispatcher(application) {
        this.application = application;
        this.eventListenerMaps = new Map;
        this.started = false;
    }
    Dispatcher.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach(function (eventListener) { return eventListener.connect(); });
        }
    };
    Dispatcher.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach(function (eventListener) { return eventListener.disconnect(); });
        }
    };
    Object.defineProperty(Dispatcher.prototype, "eventListeners", {
        get: function () {
            return Array.from(this.eventListenerMaps.values())
                .reduce(function (listeners, map) { return listeners.concat(Array.from(map.values())); }, []);
        },
        enumerable: true,
        configurable: true
    });
    // Binding observer delegate
    Dispatcher.prototype.bindingConnected = function (binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    };
    Dispatcher.prototype.bindingDisconnected = function (binding) {
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    };
    // Error handling
    Dispatcher.prototype.handleError = function (error, message, detail) {
        if (detail === void 0) { detail = {}; }
        this.application.handleError(error, "Error " + message, detail);
    };
    Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
        var eventTarget = binding.eventTarget, eventName = binding.eventName;
        return this.fetchEventListener(eventTarget, eventName);
    };
    Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName) {
        var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        var eventListener = eventListenerMap.get(eventName);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName);
            eventListenerMap.set(eventName, eventListener);
        }
        return eventListener;
    };
    Dispatcher.prototype.createEventListener = function (eventTarget, eventName) {
        var eventListener = new __WEBPACK_IMPORTED_MODULE_0__event_listener__["a" /* EventListener */](eventTarget, eventName);
        if (this.started) {
            eventListener.connect();
        }
        return eventListener;
    };
    Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
        var eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map;
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    };
    return Dispatcher;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUVoRDtJQUtFLG9CQUFZLFdBQXdCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUE7U0FDdEU7SUFDSCxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO1NBQ3pFO0lBQ0gsQ0FBQztJQUVELHNCQUFJLHNDQUFjO2FBQWxCO1lBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDL0MsTUFBTSxDQUFDLFVBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSyxPQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFFLEVBQXFCLENBQUMsQ0FBQTtRQUNsRyxDQUFDOzs7T0FBQTtJQUVELDRCQUE0QjtJQUU1QixxQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBZ0I7UUFDL0IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsZ0NBQVcsR0FBWCxVQUFZLEtBQVksRUFBRSxPQUFlLEVBQUUsTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBUyxPQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUVPLGlEQUE0QixHQUFwQyxVQUFxQyxPQUFnQjtRQUMzQyxJQUFBLGlDQUFXLEVBQUUsNkJBQVMsQ0FBWTtRQUMxQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVPLHVDQUFrQixHQUExQixVQUEyQixXQUF3QixFQUFFLFNBQWlCO1FBQ3BFLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlFLElBQUksYUFBYSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQ2hFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUE7U0FDL0M7UUFDRCxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU8sd0NBQW1CLEdBQTNCLFVBQTRCLFdBQXdCLEVBQUUsU0FBaUI7UUFDckUsSUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixhQUFhLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDeEI7UUFDRCxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU8sd0RBQW1DLEdBQTNDLFVBQTRDLFdBQXdCO1FBQ2xFLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUE7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtTQUMxRDtRQUNELE9BQU8sZ0JBQWdCLENBQUE7SUFDekIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQyJ9

/***/ }),
/* 15 */
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/event_listener.js ***!
  \****************************************************************/
/*! exports provided: EventListener */
/*! exports used: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListener; });
var EventListener = /** @class */ (function () {
    function EventListener(eventTarget, eventName) {
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.unorderedBindings = new Set;
    }
    EventListener.prototype.connect = function () {
        this.eventTarget.addEventListener(this.eventName, this, false);
    };
    EventListener.prototype.disconnect = function () {
        this.eventTarget.removeEventListener(this.eventName, this, false);
    };
    // Binding observer delegate
    EventListener.prototype.bindingConnected = function (binding) {
        this.unorderedBindings.add(binding);
    };
    EventListener.prototype.bindingDisconnected = function (binding) {
        this.unorderedBindings.delete(binding);
    };
    EventListener.prototype.handleEvent = function (event) {
        var extendedEvent = extendEvent(event);
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var binding = _a[_i];
            if (extendedEvent.immediatePropagationStopped) {
                break;
            }
            else {
                binding.handleEvent(extendedEvent);
            }
        }
    };
    Object.defineProperty(EventListener.prototype, "bindings", {
        get: function () {
            return Array.from(this.unorderedBindings).sort(function (left, right) {
                var leftIndex = left.index, rightIndex = right.index;
                return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
            });
        },
        enumerable: true,
        configurable: true
    });
    return EventListener;
}());

function extendEvent(event) {
    if ("immediatePropagationStopped" in event) {
        return event;
    }
    else {
        var stopImmediatePropagation_1 = event.stopImmediatePropagation;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation: function () {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation_1.call(this);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRfbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFLRSx1QkFBWSxXQUF3QixFQUFFLFNBQWlCO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCw0QkFBNEI7SUFFNUIsd0NBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELDJDQUFtQixHQUFuQixVQUFvQixPQUFnQjtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEMsS0FBc0IsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFFO1lBQWhDLElBQU0sT0FBTyxTQUFBO1lBQ2hCLElBQUksYUFBYSxDQUFDLDJCQUEyQixFQUFFO2dCQUM3QyxNQUFLO2FBQ047aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUNuQztTQUNGO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG1DQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBQ3pELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7Z0JBQ3RELE9BQU8sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JFLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7O0FBRUQscUJBQXFCLEtBQVk7SUFDL0IsSUFBSSw2QkFBNkIsSUFBSSxLQUFLLEVBQUU7UUFDMUMsT0FBTyxLQUFLLENBQUE7S0FDYjtTQUFNO1FBQ0csSUFBQSwyREFBd0IsQ0FBVTtRQUMxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzFCLDJCQUEyQixFQUFFLEtBQUs7WUFDbEMsd0JBQXdCO2dCQUN0QixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFBO2dCQUN2QywwQkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckMsQ0FBQztTQUNGLENBQUMsQ0FBQTtLQUNIO0FBQ0gsQ0FBQyJ9

/***/ }),
/* 16 */
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/router.js ***!
  \********************************************************/
/*! exports provided: Router */
/*! exports used: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module__ = __webpack_require__(/*! ./module */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stimulus_multimap__ = __webpack_require__(/*! @stimulus/multimap */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scope_observer__ = __webpack_require__(/*! ./scope_observer */ 25);



var Router = /** @class */ (function () {
    function Router(application) {
        this.application = application;
        this.scopeObserver = new __WEBPACK_IMPORTED_MODULE_2__scope_observer__["a" /* ScopeObserver */](this.element, this.schema, this);
        this.scopesByIdentifier = new __WEBPACK_IMPORTED_MODULE_1__stimulus_multimap__["a" /* Multimap */];
        this.modulesByIdentifier = new Map;
    }
    Object.defineProperty(Router.prototype, "element", {
        get: function () {
            return this.application.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "schema", {
        get: function () {
            return this.application.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "modules", {
        get: function () {
            return Array.from(this.modulesByIdentifier.values());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "contexts", {
        get: function () {
            return this.modules.reduce(function (contexts, module) { return contexts.concat(module.contexts); }, []);
        },
        enumerable: true,
        configurable: true
    });
    Router.prototype.start = function () {
        this.scopeObserver.start();
    };
    Router.prototype.stop = function () {
        this.scopeObserver.stop();
    };
    Router.prototype.loadDefinition = function (definition) {
        this.unloadIdentifier(definition.identifier);
        var module = new __WEBPACK_IMPORTED_MODULE_0__module__["a" /* Module */](this.application, definition);
        this.connectModule(module);
    };
    Router.prototype.unloadIdentifier = function (identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            this.disconnectModule(module);
        }
    };
    Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
        var module = this.modulesByIdentifier.get(identifier);
        if (module) {
            return module.contexts.find(function (context) { return context.element == element; });
        }
    };
    // Error handler delegate
    /** @private */
    Router.prototype.handleError = function (error, message, detail) {
        this.application.handleError(error, message, detail);
    };
    // Scope observer delegate
    /** @private */
    Router.prototype.scopeConnected = function (scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.connectContextForScope(scope);
        }
    };
    /** @private */
    Router.prototype.scopeDisconnected = function (scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        var module = this.modulesByIdentifier.get(scope.identifier);
        if (module) {
            module.disconnectContextForScope(scope);
        }
    };
    // Modules
    Router.prototype.connectModule = function (module) {
        this.modulesByIdentifier.set(module.identifier, module);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.connectContextForScope(scope); });
    };
    Router.prototype.disconnectModule = function (module) {
        this.modulesByIdentifier.delete(module.identifier);
        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach(function (scope) { return module.disconnectContextForScope(scope); });
    };
    return Router;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUc3QyxPQUFPLEVBQUUsYUFBYSxFQUF5QixNQUFNLGtCQUFrQixDQUFBO0FBRXZFO0lBTUUsZ0JBQVksV0FBd0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksUUFBUSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNwQyxDQUFDO0lBRUQsc0JBQUksMkJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFtQjthQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQTtRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFPO2FBQVg7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FB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

/***/ }),
/* 17 */
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/module.js ***!
  \********************************************************/
/*! exports provided: Module */
/*! exports used: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__context__ = __webpack_require__(/*! ./context */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__definition__ = __webpack_require__(/*! ./definition */ 24);


var Module = /** @class */ (function () {
    function Module(application, definition) {
        this.application = application;
        this.definition = Object(__WEBPACK_IMPORTED_MODULE_1__definition__["a" /* blessDefinition */])(definition);
        this.contextsByScope = new WeakMap;
        this.connectedContexts = new Set;
    }
    Object.defineProperty(Module.prototype, "identifier", {
        get: function () {
            return this.definition.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "controllerConstructor", {
        get: function () {
            return this.definition.controllerConstructor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Module.prototype, "contexts", {
        get: function () {
            return Array.from(this.connectedContexts);
        },
        enumerable: true,
        configurable: true
    });
    Module.prototype.connectContextForScope = function (scope) {
        var context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    };
    Module.prototype.disconnectContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    };
    Module.prototype.fetchContextForScope = function (scope) {
        var context = this.contextsByScope.get(scope);
        if (!context) {
            context = new __WEBPACK_IMPORTED_MODULE_0__context__["a" /* Context */](this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    };
    return Module;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRW5DLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFHMUQ7SUFNRSxnQkFBWSxXQUF3QixFQUFFLFVBQXNCO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQTtRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFxQjthQUF6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQTtRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBc0IsR0FBdEIsVUFBdUIsS0FBWTtRQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELDBDQUF5QixHQUF6QixVQUEwQixLQUFZO1FBQ3BDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9DLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN0QyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUE7U0FDckI7SUFDSCxDQUFDO0lBRU8scUNBQW9CLEdBQTVCLFVBQTZCLEtBQVk7UUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1NBQ3pDO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDIn0=

/***/ }),
/* 18 */
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding_observer.js ***!
  \******************************************************************/
/*! exports provided: BindingObserver */
/*! exports used: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingObserver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action__ = __webpack_require__(/*! ./action */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__binding__ = __webpack_require__(/*! ./binding */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stimulus_mutation_observers__ = __webpack_require__(/*! @stimulus/mutation-observers */ 2);



var BindingObserver = /** @class */ (function () {
    function BindingObserver(context, delegate) {
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map;
    }
    BindingObserver.prototype.start = function () {
        if (!this.valueListObserver) {
            this.valueListObserver = new __WEBPACK_IMPORTED_MODULE_2__stimulus_mutation_observers__["a" /* ValueListObserver */](this.element, this.actionAttribute, this);
            this.valueListObserver.start();
        }
    };
    BindingObserver.prototype.stop = function () {
        if (this.valueListObserver) {
            this.valueListObserver.stop();
            delete this.valueListObserver;
            this.disconnectAllActions();
        }
    };
    Object.defineProperty(BindingObserver.prototype, "element", {
        get: function () {
            return this.context.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
        get: function () {
            return this.schema.actionAttribute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "schema", {
        get: function () {
            return this.context.schema;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BindingObserver.prototype, "bindings", {
        get: function () {
            return Array.from(this.bindingsByAction.values());
        },
        enumerable: true,
        configurable: true
    });
    BindingObserver.prototype.connectAction = function (action) {
        var binding = new __WEBPACK_IMPORTED_MODULE_1__binding__["a" /* Binding */](this.context, action);
        this.bindingsByAction.set(action, binding);
        this.delegate.bindingConnected(binding);
    };
    BindingObserver.prototype.disconnectAction = function (action) {
        var binding = this.bindingsByAction.get(action);
        if (binding) {
            this.bindingsByAction.delete(action);
            this.delegate.bindingDisconnected(binding);
        }
    };
    BindingObserver.prototype.disconnectAllActions = function () {
        var _this = this;
        this.bindings.forEach(function (binding) { return _this.delegate.bindingDisconnected(binding); });
        this.bindingsByAction.clear();
    };
    // Value observer delegate
    BindingObserver.prototype.parseValueForToken = function (token) {
        var action = __WEBPACK_IMPORTED_MODULE_0__action__["a" /* Action */].forToken(token);
        if (action.identifier == this.identifier) {
            return action;
        }
    };
    BindingObserver.prototype.elementMatchedValue = function (element, action) {
        this.connectAction(action);
    };
    BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
        this.disconnectAction(action);
    };
    return BindingObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ19vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW5kaW5nX29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUluQyxPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sOEJBQThCLENBQUE7QUFPbEc7SUFNRSx5QkFBWSxPQUFnQixFQUFFLFFBQWlDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUMvQjtJQUNILENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG9DQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBZTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUE7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDbkQsQ0FBQzs7O09BQUE7SUFFTyx1Q0FBYSxHQUFyQixVQUFzQixNQUFjO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLE1BQWM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMzQztJQUNILENBQUM7SUFFTyw4Q0FBb0IsR0FBNUI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsMEJBQTBCO0lBRTFCLDRDQUFrQixHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsT0FBTyxNQUFNLENBQUE7U0FDZDtJQUNILENBQUM7SUFFRCw2Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0IsRUFBRSxNQUFjO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELCtDQUFxQixHQUFyQixVQUFzQixPQUFnQixFQUFFLE1BQWM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkMifQ==

/***/ }),
/* 19 */
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action.js ***!
  \********************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/*! exports used: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/* unused harmony export getDefaultEventNameForElement */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_descriptor__ = __webpack_require__(/*! ./action_descriptor */ 20);

var Action = /** @class */ (function () {
    function Action(element, index, descriptor) {
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
    Action.forToken = function (token) {
        return new this(token.element, token.index, Object(__WEBPACK_IMPORTED_MODULE_0__action_descriptor__["a" /* parseDescriptorString */])(token.content));
    };
    Action.prototype.toString = function () {
        var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
        return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
    };
    Object.defineProperty(Action.prototype, "eventTargetName", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_0__action_descriptor__["b" /* stringifyEventTarget */])(this.eventTarget);
        },
        enumerable: true,
        configurable: true
    });
    return Action;
}());

var defaultEventNames = {
    "a": function (e) { return "click"; },
    "button": function (e) { return "click"; },
    "form": function (e) { return "submit"; },
    "input": function (e) { return e.getAttribute("type") == "submit" ? "click" : "change"; },
    "select": function (e) { return "change"; },
    "textarea": function (e) { return "change"; }
};
function getDefaultEventNameForElement(element) {
    var tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) {
        return defaultEventNames[tagName](element);
    }
}
function error(message) {
    throw new Error(message);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFHbkc7SUFZRSxnQkFBWSxPQUFnQixFQUFFLEtBQWEsRUFBRSxVQUFxQztRQUNoRixJQUFJLENBQUMsT0FBTyxHQUFPLE9BQU8sQ0FBQTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFTLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFBO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUssVUFBVSxDQUFDLFNBQVMsSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNoSCxJQUFJLENBQUMsVUFBVSxHQUFJLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBSSxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFYTSxlQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUMxQixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBV0QseUJBQVEsR0FBUjtRQUNFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQUksSUFBSSxDQUFDLGVBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM5RSxPQUFPLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLFVBQUssSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsVUFBWSxDQUFBO0lBQ3JGLENBQUM7SUFFRCxzQkFBWSxtQ0FBZTthQUEzQjtZQUNFLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7O0FBRUQsSUFBTSxpQkFBaUIsR0FBd0Q7SUFDN0UsR0FBRyxFQUFTLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU87SUFDeEIsUUFBUSxFQUFJLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU87SUFDeEIsTUFBTSxFQUFNLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVE7SUFDekIsT0FBTyxFQUFLLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUF2RCxDQUF1RDtJQUN4RSxRQUFRLEVBQUksVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUTtJQUN6QixVQUFVLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUTtDQUMxQixDQUFBO0FBRUQsTUFBTSx3Q0FBd0MsT0FBZ0I7SUFDNUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM3QyxJQUFJLE9BQU8sSUFBSSxpQkFBaUIsRUFBRTtRQUNoQyxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzNDO0FBQ0gsQ0FBQztBQUVELGVBQWUsT0FBZTtJQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQzFCLENBQUMifQ==

/***/ }),
/* 20 */
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action_descriptor.js ***!
  \*******************************************************************/
/*! exports provided: parseDescriptorString, stringifyEventTarget */
/*! exports used: parseDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseDescriptorString;
/* harmony export (immutable) */ __webpack_exports__["b"] = stringifyEventTarget;
// capture nos.:            12   23 4               43   1 5   56 7  76
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
function parseDescriptorString(descriptorString) {
    var source = descriptorString.trim();
    var matches = source.match(descriptorPattern) || [];
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName: matches[2],
        identifier: matches[5],
        methodName: matches[7]
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") {
        return window;
    }
    else if (eventTargetName == "document") {
        return document;
    }
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) {
        return "window";
    }
    else if (eventTarget == document) {
        return "document";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uX2Rlc2NyaXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9uX2Rlc2NyaXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsdUVBQXVFO0FBQ3ZFLElBQU0saUJBQWlCLEdBQUcsZ0RBQWdELENBQUE7QUFFMUUsTUFBTSxnQ0FBZ0MsZ0JBQXdCO0lBQzVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDckQsT0FBTztRQUNMLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsU0FBUyxFQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDeEIsQ0FBQTtBQUNILENBQUM7QUFFRCwwQkFBMEIsZUFBdUI7SUFDL0MsSUFBSSxlQUFlLElBQUksUUFBUSxFQUFFO1FBQy9CLE9BQU8sTUFBTSxDQUFBO0tBQ2Q7U0FBTSxJQUFJLGVBQWUsSUFBSSxVQUFVLEVBQUU7UUFDeEMsT0FBTyxRQUFRLENBQUE7S0FDaEI7QUFDSCxDQUFDO0FBRUQsTUFBTSwrQkFBK0IsV0FBd0I7SUFDM0QsSUFBSSxXQUFXLElBQUksTUFBTSxFQUFFO1FBQ3pCLE9BQU8sUUFBUSxDQUFBO0tBQ2hCO1NBQU0sSUFBSSxXQUFXLElBQUksUUFBUSxFQUFFO1FBQ2xDLE9BQU8sVUFBVSxDQUFBO0tBQ2xCO0FBQ0gsQ0FBQyJ9

/***/ }),
/* 21 */
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding.js ***!
  \*********************************************************/
/*! exports provided: Binding */
/*! exports used: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Binding; });
var Binding = /** @class */ (function () {
    function Binding(context, action) {
        this.context = context;
        this.action = action;
    }
    Object.defineProperty(Binding.prototype, "index", {
        get: function () {
            return this.action.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "eventTarget", {
        get: function () {
            return this.action.eventTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "identifier", {
        get: function () {
            return this.context.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Binding.prototype.handleEvent = function (event) {
        if (this.willBeInvokedByEvent(event)) {
            this.invokeWithEvent(event);
        }
    };
    Object.defineProperty(Binding.prototype, "eventName", {
        get: function () {
            return this.action.eventName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "method", {
        get: function () {
            var method = this.controller[this.methodName];
            if (typeof method == "function") {
                return method;
            }
            throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
        },
        enumerable: true,
        configurable: true
    });
    Binding.prototype.invokeWithEvent = function (event) {
        try {
            this.method.call(this.controller, event);
        }
        catch (error) {
            var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element, index = _a.index;
            var detail = { identifier: identifier, controller: controller, element: element, index: index, event: event };
            this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
        }
    };
    Binding.prototype.willBeInvokedByEvent = function (event) {
        var eventTarget = event.target;
        if (this.element === eventTarget) {
            return true;
        }
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
            return this.scope.containsElement(eventTarget);
        }
        else {
            return true;
        }
    };
    Object.defineProperty(Binding.prototype, "controller", {
        get: function () {
            return this.context.controller;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "methodName", {
        get: function () {
            return this.action.methodName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Binding.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: true,
        configurable: true
    });
    return Binding;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0lBSUUsaUJBQVksT0FBZ0IsRUFBRSxNQUFjO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxzQkFBSSwwQkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCw2QkFBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQU07YUFBVjtZQUNFLElBQU0sTUFBTSxHQUFJLElBQUksQ0FBQyxVQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN4RCxJQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtnQkFDL0IsT0FBTyxNQUFNLENBQUE7YUFDZDtZQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBVyxJQUFJLENBQUMsTUFBTSx5Q0FBa0MsSUFBSSxDQUFDLFVBQVUsT0FBRyxDQUFDLENBQUE7UUFDN0YsQ0FBQzs7O09BQUE7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixLQUFZO1FBQ2xDLElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3pDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDUixJQUFBLFNBQWlELEVBQS9DLDBCQUFVLEVBQUUsMEJBQVUsRUFBRSxvQkFBTyxFQUFFLGdCQUFLLENBQVM7WUFDdkQsSUFBTSxNQUFNLEdBQUcsRUFBRSxVQUFVLFlBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFBO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx1QkFBb0IsSUFBSSxDQUFDLE1BQU0sT0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQzVFO0lBQ0gsQ0FBQztJQUVPLHNDQUFvQixHQUE1QixVQUE2QixLQUFZO1FBQ3ZDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQTtTQUNaO2FBQU0sSUFBSSxXQUFXLFlBQVksT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9FLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDL0M7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDO0lBRUQsc0JBQVksK0JBQVU7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0JBQVU7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFBO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQVksNEJBQU87YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVksMEJBQUs7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBQ0gsY0FBQztBQUFELENBQUMsQUEzRUQsSUEyRUMifQ==

/***/ }),
/* 22 */
/*!**********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js ***!
  \**********************************************************************/
/*! exports provided: IndexedMultimap */
/*! no exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IndexedMultimap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__multimap__ = __webpack_require__(/*! ./multimap */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set_operations__ = __webpack_require__(/*! ./set_operations */ 8);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var IndexedMultimap = /** @class */ (function (_super) {
    __extends(IndexedMultimap, _super);
    function IndexedMultimap() {
        var _this = _super.call(this) || this;
        _this.keysByValue = new Map;
        return _this;
    }
    Object.defineProperty(IndexedMultimap.prototype, "values", {
        get: function () {
            return Array.from(this.keysByValue.keys());
        },
        enumerable: true,
        configurable: true
    });
    IndexedMultimap.prototype.add = function (key, value) {
        _super.prototype.add.call(this, key, value);
        Object(__WEBPACK_IMPORTED_MODULE_1__set_operations__["a" /* add */])(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.delete = function (key, value) {
        _super.prototype.delete.call(this, key, value);
        Object(__WEBPACK_IMPORTED_MODULE_1__set_operations__["b" /* del */])(this.keysByValue, value, key);
    };
    IndexedMultimap.prototype.hasValue = function (value) {
        return this.keysByValue.has(value);
    };
    IndexedMultimap.prototype.getKeysForValue = function (value) {
        var set = this.keysByValue.get(value);
        return set ? Array.from(set) : [];
    };
    return IndexedMultimap;
}(__WEBPACK_IMPORTED_MODULE_0__multimap__["a" /* Multimap */]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZF9tdWx0aW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleGVkX211bHRpbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFM0M7SUFBMkMsbUNBQWM7SUFHdkQ7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxDQUFBOztJQUM1QixDQUFDO0lBRUQsc0JBQUksbUNBQU07YUFBVjtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCw2QkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsaUJBQU0sR0FBRyxZQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxHQUFNLEVBQUUsS0FBUTtRQUNyQixpQkFBTSxNQUFNLFlBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEtBQVE7UUFDdEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBOUJELENBQTJDLFFBQVEsR0E4QmxEIn0=

/***/ }),
/* 23 */
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: ValueListObserver */
/*! exports used: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueListObserver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__token_list_observer__ = __webpack_require__(/*! ./token_list_observer */ 5);

var ValueListObserver = /** @class */ (function () {
    function ValueListObserver(element, attributeName, delegate) {
        this.tokenListObserver = new __WEBPACK_IMPORTED_MODULE_0__token_list_observer__["a" /* TokenListObserver */](element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap;
        this.valuesByTokenByElement = new WeakMap;
    }
    Object.defineProperty(ValueListObserver.prototype, "started", {
        get: function () {
            return this.tokenListObserver.started;
        },
        enumerable: true,
        configurable: true
    });
    ValueListObserver.prototype.start = function () {
        this.tokenListObserver.start();
    };
    ValueListObserver.prototype.stop = function () {
        this.tokenListObserver.stop();
    };
    ValueListObserver.prototype.refresh = function () {
        this.tokenListObserver.refresh();
    };
    Object.defineProperty(ValueListObserver.prototype, "element", {
        get: function () {
            return this.tokenListObserver.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueListObserver.prototype, "attributeName", {
        get: function () {
            return this.tokenListObserver.attributeName;
        },
        enumerable: true,
        configurable: true
    });
    ValueListObserver.prototype.tokenMatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.tokenUnmatched = function (token) {
        var element = token.element;
        var value = this.fetchParseResultForToken(token).value;
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    };
    ValueListObserver.prototype.fetchParseResultForToken = function (token) {
        var parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    };
    ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
        var valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map;
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    };
    ValueListObserver.prototype.parseToken = function (token) {
        try {
            var value = this.delegate.parseValueForToken(token);
            return { value: value };
        }
        catch (error) {
            return { error: error };
        }
    };
    return ValueListObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfbGlzdF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9saXN0X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxpQkFBaUIsRUFBNkIsTUFBTSx1QkFBdUIsQ0FBQTtBQWEzRjtJQU1FLDJCQUFZLE9BQWdCLEVBQUUsYUFBcUIsRUFBRSxRQUFzQztRQUN6RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLE9BQU8sQ0FBQTtRQUN0QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxPQUFPLENBQUE7SUFDM0MsQ0FBQztJQUVELHNCQUFJLHNDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUE7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUE7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBWTtRQUNmLElBQUEsdUJBQU8sQ0FBVTtRQUNqQixJQUFBLGtEQUFLLENBQXlDO1FBQ3RELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLEtBQVk7UUFDakIsSUFBQSx1QkFBTyxDQUFVO1FBQ2pCLElBQUEsa0RBQUssQ0FBeUM7UUFDdEQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3BEO0lBQ0gsQ0FBQztJQUVPLG9EQUF3QixHQUFoQyxVQUFpQyxLQUFZO1FBQzNDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUNqRDtRQUNELE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFFTyx3REFBNEIsR0FBcEMsVUFBcUMsT0FBZ0I7UUFDbkQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQTtZQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUN4RDtRQUNELE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTyxzQ0FBVSxHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JELE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFBO1NBQ2pCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQTtTQUNqQjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkMifQ==

/***/ }),
/* 24 */
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/definition.js ***!
  \************************************************************/
/*! exports provided: blessDefinition */
/*! exports used: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = blessDefinition;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
    };
}
function blessControllerConstructor(controllerConstructor) {
    var constructor = extend(controllerConstructor);
    constructor.bless();
    return constructor;
}
var extend = (function () {
    function extendWithReflect(constructor) {
        function Controller() {
            var _newTarget = this && this instanceof Controller ? this.constructor : void 0;
            return Reflect.construct(constructor, arguments, _newTarget);
        }
        Controller.prototype = Object.create(constructor.prototype, {
            constructor: { value: Controller }
        });
        Reflect.setPrototypeOf(Controller, constructor);
        return Controller;
    }
    function testReflectExtension() {
        var a = function () { this.a.call(this); };
        var b = extendWithReflect(a);
        b.prototype.a = function () { };
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    }
    catch (error) {
        return function (constructor) { return /** @class */ (function (_super) {
            __extends(Controller, _super);
            function Controller() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Controller;
        }(constructor)); };
    }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxNQUFNLDBCQUEwQixVQUFzQjtJQUNwRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1FBQ2pDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNwRixDQUFBO0FBQ0gsQ0FBQztBQUVELG9DQUFvQyxxQkFBNEM7SUFDOUUsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDakQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ25CLE9BQU8sV0FBVyxDQUFBO0FBQ3BCLENBQUM7QUFFRCxJQUFNLE1BQU0sR0FBRyxDQUFDO0lBR2QsMkJBQXNELFdBQWM7UUFDbEU7O1lBQ0UsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLGFBQWEsQ0FBQTtRQUM5RCxDQUFDO1FBRUQsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUQsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtTQUNuQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUMvQyxPQUFPLFVBQWlCLENBQUE7SUFDMUIsQ0FBQztJQUVEO1FBQ0UsSUFBTSxDQUFDLEdBQUcsY0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFRLENBQUE7UUFDMUQsSUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsY0FBWSxDQUFDLENBQUE7UUFDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0Ysb0JBQW9CLEVBQUUsQ0FBQTtRQUN0QixPQUFPLGlCQUFpQixDQUFBO0tBQ3pCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLFVBQTRCLFdBQWMsSUFBSztZQUF5Qiw4QkFBVztZQUFwQzs7WUFBc0MsQ0FBQztZQUFELGlCQUFDO1FBQUQsQ0FBQyxBQUF2QyxDQUF5QixXQUFXLElBQXBDLENBQXVDLENBQUE7S0FDOUY7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFBIn0=

/***/ }),
/* 25 */
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope_observer.js ***!
  \****************************************************************/
/*! exports provided: ScopeObserver */
/*! exports used: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScopeObserver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scope__ = __webpack_require__(/*! ./scope */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stimulus_mutation_observers__ = __webpack_require__(/*! @stimulus/mutation-observers */ 2);


var ScopeObserver = /** @class */ (function () {
    function ScopeObserver(element, schema, delegate) {
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new __WEBPACK_IMPORTED_MODULE_1__stimulus_mutation_observers__["a" /* ValueListObserver */](this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap;
        this.scopeReferenceCounts = new WeakMap;
    }
    ScopeObserver.prototype.start = function () {
        this.valueListObserver.start();
    };
    ScopeObserver.prototype.stop = function () {
        this.valueListObserver.stop();
    };
    Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
        get: function () {
            return this.schema.controllerAttribute;
        },
        enumerable: true,
        configurable: true
    });
    // Value observer delegate
    ScopeObserver.prototype.parseValueForToken = function (token) {
        var element = token.element, identifier = token.content;
        var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        var scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = new __WEBPACK_IMPORTED_MODULE_0__scope__["a" /* Scope */](this.schema, identifier, element);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    };
    ScopeObserver.prototype.elementMatchedValue = function (element, value) {
        var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) {
            this.delegate.scopeConnected(value);
        }
    };
    ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
        var referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) {
                this.delegate.scopeDisconnected(value);
            }
        }
    };
    ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
        var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map;
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    };
    return ScopeObserver;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGVfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NvcGVfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUMvQixPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sOEJBQThCLENBQUE7QUFPbEc7SUFRRSx1QkFBWSxPQUFnQixFQUFFLE1BQWMsRUFBRSxRQUErQjtRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxPQUFPLENBQUE7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksT0FBTyxDQUFBO0lBQ3pDLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxzQkFBSSw4Q0FBbUI7YUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUE7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCwwQkFBMEI7SUFFMUIsMENBQWtCLEdBQWxCLFVBQW1CLEtBQVk7UUFDckIsSUFBQSx1QkFBTyxFQUFFLDBCQUFtQixDQUFVO1FBQzlDLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTFFLElBQUksS0FBSyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ25ELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDMUM7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0IsRUFBRSxLQUFZO1FBQ2hELElBQU0sY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFDcEQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELDZDQUFxQixHQUFyQixVQUFzQixPQUFnQixFQUFFLEtBQVk7UUFDbEQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzRCxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDeEQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8seURBQWlDLEdBQXpDLFVBQTBDLE9BQWdCO1FBQ3hELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIsa0JBQWtCLEdBQUcsSUFBSSxHQUFHLENBQUE7WUFDNUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtTQUNsRTtRQUNELE9BQU8sa0JBQWtCLENBQUE7SUFDM0IsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQyJ9

/***/ }),
/* 26 */
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope.js ***!
  \*******************************************************/
/*! exports provided: Scope */
/*! exports used: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scope; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_map__ = __webpack_require__(/*! ./data_map */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__target_set__ = __webpack_require__(/*! ./target_set */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectors__ = __webpack_require__(/*! ./selectors */ 9);



var Scope = /** @class */ (function () {
    function Scope(schema, identifier, element) {
        this.schema = schema;
        this.identifier = identifier;
        this.element = element;
        this.targets = new __WEBPACK_IMPORTED_MODULE_1__target_set__["a" /* TargetSet */](this);
        this.data = new __WEBPACK_IMPORTED_MODULE_0__data_map__["a" /* DataMap */](this);
    }
    Scope.prototype.findElement = function (selector) {
        return this.findAllElements(selector)[0];
    };
    Scope.prototype.findAllElements = function (selector) {
        var head = this.element.matches(selector) ? [this.element] : [];
        var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
        return head.concat(tail);
    };
    Scope.prototype.filterElements = function (elements) {
        var _this = this;
        return elements.filter(function (element) { return _this.containsElement(element); });
    };
    Scope.prototype.containsElement = function (element) {
        return element.closest(this.controllerSelector) === this.element;
    };
    Object.defineProperty(Scope.prototype, "controllerSelector", {
        get: function () {
            return Object(__WEBPACK_IMPORTED_MODULE_2__selectors__["a" /* attributeValueContainsToken */])(this.schema.controllerAttribute, this.identifier);
        },
        enumerable: true,
        configurable: true
    });
    return Scope;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NvcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQTtBQUVwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBQ3hDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV6RDtJQU9FLGVBQVksTUFBYyxFQUFFLFVBQWtCLEVBQUUsT0FBZ0I7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCwyQkFBVyxHQUFYLFVBQVksUUFBZ0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLFFBQWdCO1FBQzlCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ2pFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVELDhCQUFjLEdBQWQsVUFBZSxRQUFtQjtRQUFsQyxpQkFFQztRQURDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBRUQsK0JBQWUsR0FBZixVQUFnQixPQUFnQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNsRSxDQUFDO0lBRUQsc0JBQVkscUNBQWtCO2FBQTlCO1lBQ0UsT0FBTywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0RixDQUFDOzs7T0FBQTtJQUNILFlBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDIn0=

/***/ }),
/* 27 */
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/data_map.js ***!
  \**********************************************************/
/*! exports provided: DataMap */
/*! exports used: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataMap; });
var DataMap = /** @class */ (function () {
    function DataMap(scope) {
        this.scope = scope;
    }
    Object.defineProperty(DataMap.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMap.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    DataMap.prototype.get = function (key) {
        key = this.getFormattedKey(key);
        return this.element.getAttribute(key);
    };
    DataMap.prototype.set = function (key, value) {
        key = this.getFormattedKey(key);
        this.element.setAttribute(key, value);
        return this.get(key);
    };
    DataMap.prototype.has = function (key) {
        key = this.getFormattedKey(key);
        return this.element.hasAttribute(key);
    };
    DataMap.prototype.delete = function (key) {
        if (this.has(key)) {
            key = this.getFormattedKey(key);
            this.element.removeAttribute(key);
            return true;
        }
        else {
            return false;
        }
    };
    DataMap.prototype.getFormattedKey = function (key) {
        return "data-" + this.identifier + "-" + dasherize(key);
    };
    return DataMap;
}());

function dasherize(value) {
    return value.replace(/([A-Z])/g, function (_, char) { return "-" + char.toLowerCase(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV9tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YV9tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFHRSxpQkFBWSxLQUFZO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxzQkFBSSw0QkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEtBQWE7UUFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakMsT0FBTyxJQUFJLENBQUE7U0FDWjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixHQUFXO1FBQ2pDLE9BQU8sVUFBUSxJQUFJLENBQUMsVUFBVSxTQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUcsQ0FBQTtJQUNwRCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7O0FBRUQsbUJBQW1CLEtBQWE7SUFDOUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxNQUFJLElBQUksQ0FBQyxXQUFXLEVBQUksRUFBeEIsQ0FBd0IsQ0FBQyxDQUFBO0FBQ3pFLENBQUMifQ==

/***/ }),
/* 28 */
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_set.js ***!
  \************************************************************/
/*! exports provided: TargetSet */
/*! exports used: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TargetSet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(/*! ./selectors */ 9);

var TargetSet = /** @class */ (function () {
    function TargetSet(scope) {
        this.scope = scope;
    }
    Object.defineProperty(TargetSet.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TargetSet.prototype, "schema", {
        get: function () {
            return this.scope.schema;
        },
        enumerable: true,
        configurable: true
    });
    TargetSet.prototype.has = function (targetName) {
        return this.find(targetName) != null;
    };
    TargetSet.prototype.find = function () {
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        var selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findElement(selector);
    };
    TargetSet.prototype.findAll = function () {
        var targetNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            targetNames[_i] = arguments[_i];
        }
        var selector = this.getSelectorForTargetNames(targetNames);
        return this.scope.findAllElements(selector);
    };
    TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {
        var _this = this;
        return targetNames.map(function (targetName) { return _this.getSelectorForTargetName(targetName); }).join(", ");
    };
    TargetSet.prototype.getSelectorForTargetName = function (targetName) {
        var targetDescriptor = this.identifier + "." + targetName;
        return Object(__WEBPACK_IMPORTED_MODULE_0__selectors__["a" /* attributeValueContainsToken */])(this.schema.targetAttribute, targetDescriptor);
    };
    return TargetSet;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXRfc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV6RDtJQUdFLG1CQUFZLEtBQVk7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHVCQUFHLEdBQUgsVUFBSSxVQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFBO0lBQ3RDLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQUsscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQzNCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQVEscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQzlCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFTyw2Q0FBeUIsR0FBakMsVUFBa0MsV0FBcUI7UUFBdkQsaUJBRUM7UUFEQyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUYsQ0FBQztJQUVPLDRDQUF3QixHQUFoQyxVQUFpQyxVQUFrQjtRQUNqRCxJQUFNLGdCQUFnQixHQUFNLElBQUksQ0FBQyxVQUFVLFNBQUksVUFBWSxDQUFBO1FBQzNELE9BQU8sMkJBQTJCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDIn0=

/***/ }),
/* 29 */
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/controller.js ***!
  \************************************************************/
/*! exports provided: Controller */
/*! exports used: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Controller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__target_properties__ = __webpack_require__(/*! ./target_properties */ 30);

var Controller = /** @class */ (function () {
    function Controller(context) {
        this.context = context;
    }
    Controller.bless = function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__target_properties__["a" /* defineTargetProperties */])(this);
    };
    Object.defineProperty(Controller.prototype, "application", {
        get: function () {
            return this.context.application;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "scope", {
        get: function () {
            return this.context.scope;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "element", {
        get: function () {
            return this.scope.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "identifier", {
        get: function () {
            return this.scope.identifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "targets", {
        get: function () {
            return this.scope.targets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "data", {
        get: function () {
            return this.scope.data;
        },
        enumerable: true,
        configurable: true
    });
    Controller.prototype.initialize = function () {
        // Override in your subclass to set up initial controller state
    };
    Controller.prototype.connect = function () {
        // Override in your subclass to respond when the controller is connected to the DOM
    };
    Controller.prototype.disconnect = function () {
        // Override in your subclass to respond when the controller is disconnected from the DOM
    };
    Controller.targets = [];
    return Controller;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBTzVEO0lBU0Usb0JBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQU5NLGdCQUFLLEdBQVo7UUFDRSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBTUQsc0JBQUksbUNBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsK0JBQVUsR0FBVjtRQUNFLCtEQUErRDtJQUNqRSxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNFLG1GQUFtRjtJQUNyRixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNFLHdGQUF3RjtJQUMxRixDQUFDO0lBOUNNLGtCQUFPLEdBQWEsRUFBRSxDQUFBO0lBK0MvQixpQkFBQztDQUFBLEFBaERELElBZ0RDO1NBaERZLFVBQVUifQ==

/***/ }),
/* 30 */
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_properties.js ***!
  \*******************************************************************/
/*! exports provided: defineTargetProperties */
/*! exports used: defineTargetProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defineTargetProperties;
function defineTargetProperties(constructor) {
    var prototype = constructor.prototype;
    var targetNames = getTargetNamesForConstructor(constructor);
    targetNames.forEach(function (name) {
        var _a;
        return defineLinkedProperties(prototype, (_a = {},
            _a[name + "Target"] = {
                get: function () {
                    var target = this.targets.find(name);
                    if (target) {
                        return target;
                    }
                    else {
                        throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
                    }
                }
            },
            _a[name + "Targets"] = {
                get: function () {
                    return this.targets.findAll(name);
                }
            },
            _a["has" + capitalize(name) + "Target"] = {
                get: function () {
                    return this.targets.has(name);
                }
            },
            _a));
    });
}
function getTargetNamesForConstructor(constructor) {
    var ancestors = getAncestorsForConstructor(constructor);
    return Array.from(ancestors.reduce(function (targetNames, constructor) {
        getOwnTargetNamesForConstructor(constructor).forEach(function (name) { return targetNames.add(name); });
        return targetNames;
    }, new Set));
}
function getAncestorsForConstructor(constructor) {
    var ancestors = [];
    while (constructor) {
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors;
}
function getOwnTargetNamesForConstructor(constructor) {
    var definition = constructor["targets"];
    return Array.isArray(definition) ? definition : [];
}
function defineLinkedProperties(object, properties) {
    Object.keys(properties).forEach(function (name) {
        if (!(name in object)) {
            var descriptor = properties[name];
            Object.defineProperty(object, name, descriptor);
        }
    });
}
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3Byb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0X3Byb3BlcnRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxpQ0FBaUMsV0FBcUI7SUFDMUQsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQTtJQUN2QyxJQUFNLFdBQVcsR0FBRyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM3RCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7UUFBSSxPQUFBLHNCQUFzQixDQUFDLFNBQVM7WUFDMUQsR0FBSSxJQUFJLFdBQVEsSUFBRztnQkFDakIsR0FBRztvQkFDRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDdEMsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsT0FBTyxNQUFNLENBQUE7cUJBQ2Q7eUJBQU07d0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBMkIsSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLE9BQUcsQ0FBQyxDQUFBO3FCQUN2RTtnQkFDSCxDQUFDO2FBQ0Y7WUFDRCxHQUFJLElBQUksWUFBUyxJQUFHO2dCQUNsQixHQUFHO29CQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ25DLENBQUM7YUFDRjtZQUNELEdBQUMsUUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVEsSUFBRztnQkFDaEMsR0FBRztvQkFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQixDQUFDO2FBQ0Y7Z0JBQ0Q7SUFyQjBCLENBcUIxQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsc0NBQXNDLFdBQXFCO0lBQ3pELElBQU0sU0FBUyxHQUFHLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsV0FBVyxFQUFFLFdBQVc7UUFDMUQsK0JBQStCLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO1FBQ25GLE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUMsRUFBRSxJQUFJLEdBQWtCLENBQUMsQ0FBQyxDQUFBO0FBQzdCLENBQUM7QUFFRCxvQ0FBb0MsV0FBcUI7SUFDdkQsSUFBTSxTQUFTLEdBQWUsRUFBRSxDQUFBO0lBQ2hDLE9BQU8sV0FBVyxFQUFFO1FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDM0IsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7S0FDakQ7SUFDRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQseUNBQXlDLFdBQXFCO0lBQzVELElBQU0sVUFBVSxHQUFJLFdBQW1CLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtBQUNwRCxDQUFDO0FBRUQsZ0NBQWdDLE1BQVcsRUFBRSxVQUFpQztJQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7U0FDaEQ7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxvQkFBb0IsSUFBWTtJQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNyRCxDQUFDIn0=

/***/ }),
/* 31 */
/*!**************************************************!*\
  !*** ./node_modules/stimulus/webpack-helpers.js ***!
  \**************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/*! exports used: definitionsFromContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stimulus_webpack_helpers__ = __webpack_require__(/*! @stimulus/webpack-helpers */ 32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__stimulus_webpack_helpers__["a"]; });



/***/ }),
/* 32 */
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/webpack-helpers/dist/index.js ***!
  \**************************************************************/
/*! exports provided: definitionsFromContext, identifierForContextKey */
/*! exports used: definitionsFromContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = definitionsFromContext;
/* unused harmony export identifierForContextKey */
function definitionsFromContext(context) {
    return context.keys()
        .map(function (key) { return definitionForModuleWithContextAndKey(context, key); })
        .filter(function (value) { return value; });
}
function definitionForModuleWithContextAndKey(context, key) {
    var identifier = identifierForContextKey(key);
    if (identifier) {
        return definitionForModuleAndIdentifier(context(key), identifier);
    }
}
function definitionForModuleAndIdentifier(module, identifier) {
    var controllerConstructor = module.default;
    if (typeof controllerConstructor == "function") {
        return { identifier: identifier, controllerConstructor: controllerConstructor };
    }
}
function identifierForContextKey(key) {
    var logicalName = (key.match(/^(?:\.\/)?(.+)(?:[_-]controller\..+?)$/) || [])[1];
    if (logicalName) {
        return logicalName.replace(/_/g, "-").replace(/\//g, "--");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLGlDQUFpQyxPQUEwQztJQUMvRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUU7U0FDbEIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsb0NBQW9DLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO1NBQzlELE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQWlCLENBQUE7QUFDM0MsQ0FBQztBQUVELDhDQUE4QyxPQUEwQyxFQUFFLEdBQVc7SUFDbkcsSUFBTSxVQUFVLEdBQUcsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0MsSUFBSSxVQUFVLEVBQUU7UUFDZCxPQUFPLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtLQUNsRTtBQUNILENBQUM7QUFFRCwwQ0FBMEMsTUFBd0IsRUFBRSxVQUFrQjtJQUNwRixJQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDNUMsSUFBSSxPQUFPLHFCQUFxQixJQUFJLFVBQVUsRUFBRTtRQUM5QyxPQUFPLEVBQUUsVUFBVSxZQUFBLEVBQUUscUJBQXFCLHVCQUFBLEVBQUUsQ0FBQTtLQUM3QztBQUNILENBQUM7QUFFRCxNQUFNLGtDQUFrQyxHQUFXO0lBQ2pELElBQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xGLElBQUksV0FBVyxFQUFFO1FBQ2YsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQzNEO0FBQ0gsQ0FBQyJ9

/***/ }),
/* 33 */
/*!*****************************************!*\
  !*** ./app/javascript/controllers .js$ ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dropdown.js": 34,
	"./hello_controller.js": 36,
	"./language_filter_controller.js": 37,
	"./tabs_controller.js": 38,
	"./time_localizer_controller.js": 39
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;

/***/ }),
/* 34 */
/*!************************************************!*\
  !*** ./app/javascript/controllers/dropdown.js ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tailwindcss_stimulus_components__ = __webpack_require__(/*! tailwindcss-stimulus-components */ 35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tailwindcss_stimulus_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tailwindcss_stimulus_components__);

application.register('dropdown', __WEBPACK_IMPORTED_MODULE_0_tailwindcss_stimulus_components__["Dropdown"]);

/***/ }),
/* 35 */
/*!**************************************************************************************************!*\
  !*** ./node_modules/tailwindcss-stimulus-components/dist/tailwindcss-stimulus-components.min.js ***!
  \**************************************************************************************************/
/*! dynamic exports provided */
/*! exports used: Dropdown */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.StimulusPlaceholdable=t():e.StimulusPlaceholdable=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./index.js")}({"./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Dropdown, Modal, Tabs, Toggle */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/dropdown */ "./src/dropdown.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _src_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]; });\n\n/* harmony import */ var _src_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modal */ "./src/modal.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _src_modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });\n\n/* harmony import */ var _src_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/tabs */ "./src/tabs.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _src_tabs__WEBPACK_IMPORTED_MODULE_2__["default"]; });\n\n/* harmony import */ var _src_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/toggle */ "./src/toggle.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return _src_toggle__WEBPACK_IMPORTED_MODULE_3__["default"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./index.js?')},"./node_modules/@stimulus/core/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/index.js ***!
  \***************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/application */ "./node_modules/@stimulus/core/dist/src/application.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _src_application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });\n\n/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/context */ "./node_modules/@stimulus/core/dist/src/context.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _src_context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });\n\n/* harmony import */ var _src_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/controller */ "./node_modules/@stimulus/core/dist/src/controller.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _src_controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });\n\n/* harmony import */ var _src_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/schema */ "./node_modules/@stimulus/core/dist/src/schema.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _src_schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });\n\n\n\n\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUF5QixNQUFNLGtCQUFrQixDQUFBO0FBRXBFLE9BQU8sRUFBVSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUEifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/index.js?')},"./node_modules/@stimulus/core/dist/src/action.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action.js ***!
  \********************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });\n/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "./node_modules/@stimulus/core/dist/src/action_descriptor.js");\n\nvar Action = /** @class */ (function () {\n    function Action(element, index, descriptor) {\n        this.element = element;\n        this.index = index;\n        this.eventTarget = descriptor.eventTarget || element;\n        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");\n        this.identifier = descriptor.identifier || error("missing identifier");\n        this.methodName = descriptor.methodName || error("missing method name");\n    }\n    Action.forToken = function (token) {\n        return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseDescriptorString"])(token.content));\n    };\n    Action.prototype.toString = function () {\n        var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";\n        return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;\n    };\n    Object.defineProperty(Action.prototype, "eventTargetName", {\n        get: function () {\n            return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Action;\n}());\n\nvar defaultEventNames = {\n    "a": function (e) { return "click"; },\n    "button": function (e) { return "click"; },\n    "form": function (e) { return "submit"; },\n    "input": function (e) { return e.getAttribute("type") == "submit" ? "click" : "change"; },\n    "select": function (e) { return "change"; },\n    "textarea": function (e) { return "change"; }\n};\nfunction getDefaultEventNameForElement(element) {\n    var tagName = element.tagName.toLowerCase();\n    if (tagName in defaultEventNames) {\n        return defaultEventNames[tagName](element);\n    }\n}\nfunction error(message) {\n    throw new Error(message);\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFHbkc7SUFZRSxnQkFBWSxPQUFnQixFQUFFLEtBQWEsRUFBRSxVQUFxQztRQUNoRixJQUFJLENBQUMsT0FBTyxHQUFPLE9BQU8sQ0FBQTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFTLEtBQUssQ0FBQTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFBO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUssVUFBVSxDQUFDLFNBQVMsSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNoSCxJQUFJLENBQUMsVUFBVSxHQUFJLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBSSxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFYTSxlQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUMxQixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBV0QseUJBQVEsR0FBUjtRQUNFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQUksSUFBSSxDQUFDLGVBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM5RSxPQUFPLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLFVBQUssSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLENBQUMsVUFBWSxDQUFBO0lBQ3JGLENBQUM7SUFFRCxzQkFBWSxtQ0FBZTthQUEzQjtZQUNFLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLENBQUM7OztPQUFBO0lBQ0gsYUFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7O0FBRUQsSUFBTSxpQkFBaUIsR0FBd0Q7SUFDN0UsR0FBRyxFQUFTLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU87SUFDeEIsUUFBUSxFQUFJLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxFQUFQLENBQU87SUFDeEIsTUFBTSxFQUFNLFVBQUEsQ0FBQyxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVE7SUFDekIsT0FBTyxFQUFLLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUF2RCxDQUF1RDtJQUN4RSxRQUFRLEVBQUksVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUTtJQUN6QixVQUFVLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUTtDQUMxQixDQUFBO0FBRUQsTUFBTSx3Q0FBd0MsT0FBZ0I7SUFDNUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUM3QyxJQUFJLE9BQU8sSUFBSSxpQkFBaUIsRUFBRTtRQUNoQyxPQUFPLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzNDO0FBQ0gsQ0FBQztBQUVELGVBQWUsT0FBZTtJQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQzFCLENBQUMifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/action.js?')},"./node_modules/@stimulus/core/dist/src/action_descriptor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/action_descriptor.js ***!
  \*******************************************************************/
/*! exports provided: parseDescriptorString, stringifyEventTarget */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDescriptorString", function() { return parseDescriptorString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });\n// capture nos.:            12   23 4               43   1 5   56 7  76\nvar descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;\nfunction parseDescriptorString(descriptorString) {\n    var source = descriptorString.trim();\n    var matches = source.match(descriptorPattern) || [];\n    return {\n        eventTarget: parseEventTarget(matches[4]),\n        eventName: matches[2],\n        identifier: matches[5],\n        methodName: matches[7]\n    };\n}\nfunction parseEventTarget(eventTargetName) {\n    if (eventTargetName == "window") {\n        return window;\n    }\n    else if (eventTargetName == "document") {\n        return document;\n    }\n}\nfunction stringifyEventTarget(eventTarget) {\n    if (eventTarget == window) {\n        return "window";\n    }\n    else if (eventTarget == document) {\n        return "document";\n    }\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uX2Rlc2NyaXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9uX2Rlc2NyaXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsdUVBQXVFO0FBQ3ZFLElBQU0saUJBQWlCLEdBQUcsZ0RBQWdELENBQUE7QUFFMUUsTUFBTSxnQ0FBZ0MsZ0JBQXdCO0lBQzVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3RDLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDckQsT0FBTztRQUNMLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsU0FBUyxFQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkIsVUFBVSxFQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDeEIsQ0FBQTtBQUNILENBQUM7QUFFRCwwQkFBMEIsZUFBdUI7SUFDL0MsSUFBSSxlQUFlLElBQUksUUFBUSxFQUFFO1FBQy9CLE9BQU8sTUFBTSxDQUFBO0tBQ2Q7U0FBTSxJQUFJLGVBQWUsSUFBSSxVQUFVLEVBQUU7UUFDeEMsT0FBTyxRQUFRLENBQUE7S0FDaEI7QUFDSCxDQUFDO0FBRUQsTUFBTSwrQkFBK0IsV0FBd0I7SUFDM0QsSUFBSSxXQUFXLElBQUksTUFBTSxFQUFFO1FBQ3pCLE9BQU8sUUFBUSxDQUFBO0tBQ2hCO1NBQU0sSUFBSSxXQUFXLElBQUksUUFBUSxFQUFFO1FBQ2xDLE9BQU8sVUFBVSxDQUFBO0tBQ2xCO0FBQ0gsQ0FBQyJ9\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/action_descriptor.js?')},"./node_modules/@stimulus/core/dist/src/application.js":
/*!*************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/application.js ***!
  \*************************************************************/
/*! exports provided: Application */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });\n/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "./node_modules/@stimulus/core/dist/src/dispatcher.js");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./node_modules/@stimulus/core/dist/src/router.js");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/@stimulus/core/dist/src/schema.js");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (_) try {\n            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [0, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\nvar Application = /** @class */ (function () {\n    function Application(element, schema) {\n        if (element === void 0) { element = document.documentElement; }\n        if (schema === void 0) { schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"]; }\n        this.element = element;\n        this.schema = schema;\n        this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);\n        this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);\n    }\n    Application.start = function (element, schema) {\n        var application = new Application(element, schema);\n        application.start();\n        return application;\n    };\n    Application.prototype.start = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, domReady()];\n                    case 1:\n                        _a.sent();\n                        this.router.start();\n                        this.dispatcher.start();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    Application.prototype.stop = function () {\n        this.router.stop();\n        this.dispatcher.stop();\n    };\n    Application.prototype.register = function (identifier, controllerConstructor) {\n        this.load({ identifier: identifier, controllerConstructor: controllerConstructor });\n    };\n    Application.prototype.load = function (head) {\n        var _this = this;\n        var rest = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            rest[_i - 1] = arguments[_i];\n        }\n        var definitions = Array.isArray(head) ? head : [head].concat(rest);\n        definitions.forEach(function (definition) { return _this.router.loadDefinition(definition); });\n    };\n    Application.prototype.unload = function (head) {\n        var _this = this;\n        var rest = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            rest[_i - 1] = arguments[_i];\n        }\n        var identifiers = Array.isArray(head) ? head : [head].concat(rest);\n        identifiers.forEach(function (identifier) { return _this.router.unloadIdentifier(identifier); });\n    };\n    Object.defineProperty(Application.prototype, "controllers", {\n        // Controllers\n        get: function () {\n            return this.router.contexts.map(function (context) { return context.controller; });\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {\n        var context = this.router.getContextForElementAndIdentifier(element, identifier);\n        return context ? context.controller : null;\n    };\n    // Error handling\n    Application.prototype.handleError = function (error, message, detail) {\n        console.error("%s\\n\\n%o\\n\\n%o", message, error, detail);\n    };\n    return Application;\n}());\n\nfunction domReady() {\n    return new Promise(function (resolve) {\n        if (document.readyState == "loading") {\n            document.addEventListener("DOMContentLoaded", resolve);\n        }\n        else {\n            resolve();\n        }\n    });\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBRXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFVLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUVoRDtJQVlFLHFCQUFZLE9BQTJDLEVBQUUsTUFBOEI7UUFBM0Usd0JBQUEsRUFBQSxVQUFtQixRQUFRLENBQUMsZUFBZTtRQUFFLHVCQUFBLEVBQUEsc0JBQThCO1FBQ3JGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBWE0saUJBQUssR0FBWixVQUFhLE9BQWlCLEVBQUUsTUFBZTtRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDcEQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25CLE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFTSywyQkFBSyxHQUFYOzs7OzRCQUNFLHFCQUFNLFFBQVEsRUFBRSxFQUFBOzt3QkFBaEIsU0FBZ0IsQ0FBQTt3QkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTt3QkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTs7Ozs7S0FDeEI7SUFFRCwwQkFBSSxHQUFKO1FB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\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/application.js?')},"./node_modules/@stimulus/core/dist/src/binding.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding.js ***!
  \*********************************************************/
/*! exports provided: Binding */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });\nvar Binding = /** @class */ (function () {\n    function Binding(context, action) {\n        this.context = context;\n        this.action = action;\n    }\n    Object.defineProperty(Binding.prototype, "index", {\n        get: function () {\n            return this.action.index;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Binding.prototype, "eventTarget", {\n        get: function () {\n            return this.action.eventTarget;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Binding.prototype, "identifier", {\n        get: function () {\n            return this.context.identifier;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Binding.prototype.handleEvent = function (event) {\n        if (this.willBeInvokedByEvent(event)) {\n            this.invokeWithEvent(event);\n        }\n    };\n    Object.defineProperty(Binding.prototype, "eventName", {\n        get: function () {\n            return this.action.eventName;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Binding.prototype, "method", {\n        get: function () {\n            var method = this.controller[this.methodName];\n            if (typeof method == "function") {\n                return method;\n            }\n            throw new Error("Action \\"" + this.action + "\\" references undefined method \\"" + this.methodName + "\\"");\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Binding.prototype.invokeWithEvent = function (event) {\n        try {\n            this.method.call(this.controller, event);\n        }\n        catch (error) {\n            var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element, index = _a.index;\n            var detail = { identifier: identifier, controller: controller, element: element, index: index, event: event };\n            this.context.handleError(error, "invoking action \\"" + this.action + "\\"", detail);\n        }\n    };\n    Binding.prototype.willBeInvokedByEvent = function (event) {\n        var eventTarget = event.target;\n        if (this.element === eventTarget) {\n            return true;\n        }\n        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {\n            return this.scope.containsElement(eventTarget);\n        }\n        else {\n            return true;\n        }\n    };\n    Object.defineProperty(Binding.prototype, "controller", {\n        get: function () {\n            return this.context.controller;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Binding.prototype, "methodName", {\n        get: function () {\n            return this.action.methodName;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Binding.prototype, "element", {\n        get: function () {\n            return this.scope.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Binding.prototype, "scope", {\n        get: function () {\n            return this.context.scope;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Binding;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0lBSUUsaUJBQVksT0FBZ0IsRUFBRSxNQUFjO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxzQkFBSSwwQkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCw2QkFBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQU07YUFBVjtZQUNFLElBQU0sTUFBTSxHQUFJLElBQUksQ0FBQyxVQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN4RCxJQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTtnQkFDL0IsT0FBTyxNQUFNLENBQUE7YUFDZDtZQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBVyxJQUFJLENBQUMsTUFBTSx5Q0FBa0MsSUFBSSxDQUFDLFVBQVUsT0FBRyxDQUFDLENBQUE7UUFDN0YsQ0FBQzs7O09BQUE7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixLQUFZO1FBQ2xDLElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3pDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDUixJQUFBLFNBQWlELEVBQS9DLDBCQUFVLEVBQUUsMEJBQVUsRUFBRSxvQkFBTyxFQUFFLGdCQUFLLENBQVM7WUFDdkQsSUFBTSxNQUFNLEdBQUcsRUFBRSxVQUFVLFlBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFBO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx1QkFBb0IsSUFBSSxDQUFDLE1BQU0sT0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1NBQzVFO0lBQ0gsQ0FBQztJQUVPLHNDQUFvQixHQUE1QixVQUE2QixLQUFZO1FBQ3ZDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQTtTQUNaO2FBQU0sSUFBSSxXQUFXLFlBQVksT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9FLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDL0M7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDO0lBRUQsc0JBQVksK0JBQVU7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0JBQVU7YUFBdEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFBO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQVksNEJBQU87YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQVksMEJBQUs7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBQ0gsY0FBQztBQUFELENBQUMsQUEzRUQsSUEyRUMifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/binding.js?')},"./node_modules/@stimulus/core/dist/src/binding_observer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/binding_observer.js ***!
  \******************************************************************/
/*! exports provided: BindingObserver */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./node_modules/@stimulus/core/dist/src/action.js");\n/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "./node_modules/@stimulus/core/dist/src/binding.js");\n/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");\n\n\n\nvar BindingObserver = /** @class */ (function () {\n    function BindingObserver(context, delegate) {\n        this.context = context;\n        this.delegate = delegate;\n        this.bindingsByAction = new Map;\n    }\n    BindingObserver.prototype.start = function () {\n        if (!this.valueListObserver) {\n            this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);\n            this.valueListObserver.start();\n        }\n    };\n    BindingObserver.prototype.stop = function () {\n        if (this.valueListObserver) {\n            this.valueListObserver.stop();\n            delete this.valueListObserver;\n            this.disconnectAllActions();\n        }\n    };\n    Object.defineProperty(BindingObserver.prototype, "element", {\n        get: function () {\n            return this.context.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(BindingObserver.prototype, "identifier", {\n        get: function () {\n            return this.context.identifier;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(BindingObserver.prototype, "actionAttribute", {\n        get: function () {\n            return this.schema.actionAttribute;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(BindingObserver.prototype, "schema", {\n        get: function () {\n            return this.context.schema;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(BindingObserver.prototype, "bindings", {\n        get: function () {\n            return Array.from(this.bindingsByAction.values());\n        },\n        enumerable: true,\n        configurable: true\n    });\n    BindingObserver.prototype.connectAction = function (action) {\n        var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);\n        this.bindingsByAction.set(action, binding);\n        this.delegate.bindingConnected(binding);\n    };\n    BindingObserver.prototype.disconnectAction = function (action) {\n        var binding = this.bindingsByAction.get(action);\n        if (binding) {\n            this.bindingsByAction.delete(action);\n            this.delegate.bindingDisconnected(binding);\n        }\n    };\n    BindingObserver.prototype.disconnectAllActions = function () {\n        var _this = this;\n        this.bindings.forEach(function (binding) { return _this.delegate.bindingDisconnected(binding); });\n        this.bindingsByAction.clear();\n    };\n    // Value observer delegate\n    BindingObserver.prototype.parseValueForToken = function (token) {\n        var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);\n        if (action.identifier == this.identifier) {\n            return action;\n        }\n    };\n    BindingObserver.prototype.elementMatchedValue = function (element, action) {\n        this.connectAction(action);\n    };\n    BindingObserver.prototype.elementUnmatchedValue = function (element, action) {\n        this.disconnectAction(action);\n    };\n    return BindingObserver;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ19vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW5kaW5nX29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFDakMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUluQyxPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sOEJBQThCLENBQUE7QUFPbEc7SUFNRSx5QkFBWSxPQUFnQixFQUFFLFFBQWlDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUMvQjtJQUNILENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFBO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG9DQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUE7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBZTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUE7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDbkQsQ0FBQzs7O09BQUE7SUFFTyx1Q0FBYSxHQUFyQixVQUFzQixNQUFjO1FBQ2xDLElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLE1BQWM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMzQztJQUNILENBQUM7SUFFTyw4Q0FBb0IsR0FBNUI7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsMEJBQTBCO0lBRTFCLDRDQUFrQixHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckMsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsT0FBTyxNQUFNLENBQUE7U0FDZDtJQUNILENBQUM7SUFFRCw2Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0IsRUFBRSxNQUFjO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELCtDQUFxQixHQUFyQixVQUFzQixPQUFnQixFQUFFLE1BQWM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkMifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/binding_observer.js?')},"./node_modules/@stimulus/core/dist/src/context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/context.js ***!
  \*********************************************************/
/*! exports provided: Context */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });\n/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "./node_modules/@stimulus/core/dist/src/binding_observer.js");\n\nvar Context = /** @class */ (function () {\n    function Context(module, scope) {\n        this.module = module;\n        this.scope = scope;\n        this.controller = new module.controllerConstructor(this);\n        this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);\n        try {\n            this.controller.initialize();\n        }\n        catch (error) {\n            this.handleError(error, "initializing controller");\n        }\n    }\n    Context.prototype.connect = function () {\n        this.bindingObserver.start();\n        try {\n            this.controller.connect();\n        }\n        catch (error) {\n            this.handleError(error, "connecting controller");\n        }\n    };\n    Context.prototype.disconnect = function () {\n        try {\n            this.controller.disconnect();\n        }\n        catch (error) {\n            this.handleError(error, "disconnecting controller");\n        }\n        this.bindingObserver.stop();\n    };\n    Object.defineProperty(Context.prototype, "application", {\n        get: function () {\n            return this.module.application;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Context.prototype, "identifier", {\n        get: function () {\n            return this.module.identifier;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Context.prototype, "schema", {\n        get: function () {\n            return this.application.schema;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Context.prototype, "dispatcher", {\n        get: function () {\n            return this.application.dispatcher;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Context.prototype, "element", {\n        get: function () {\n            return this.scope.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Context.prototype, "parentElement", {\n        get: function () {\n            return this.element.parentElement;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    // Error handling\n    Context.prototype.handleError = function (error, message, detail) {\n        if (detail === void 0) { detail = {}; }\n        var _a = this, identifier = _a.identifier, controller = _a.controller, element = _a.element;\n        detail = Object.assign({ identifier: identifier, controller: controller, element: element }, detail);\n        this.application.handleError(error, "Error " + message, detail);\n    };\n    return Context;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQVFwRDtJQU1FLGlCQUFZLE1BQWMsRUFBRSxLQUFZO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRWpFLElBQUk7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFBO1NBQzdCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO1NBQ25EO0lBQ0gsQ0FBQztJQUVELHlCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTVCLElBQUk7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQzFCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFBO1NBQ2pEO0lBQ0gsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFDRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUM3QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtTQUNwRDtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDN0IsQ0FBQztJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUE7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyQkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFBO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUE7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxpQkFBaUI7SUFFakIsNkJBQVcsR0FBWCxVQUFZLEtBQVksRUFBRSxPQUFlLEVBQUUsTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUN0RCxJQUFBLFNBQTBDLEVBQXhDLDBCQUFVLEVBQUUsMEJBQVUsRUFBRSxvQkFBTyxDQUFTO1FBQ2hELE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBUyxPQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/context.js?')},"./node_modules/@stimulus/core/dist/src/controller.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/controller.js ***!
  \************************************************************/
/*! exports provided: Controller */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });\n/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target_properties */ "./node_modules/@stimulus/core/dist/src/target_properties.js");\n\nvar Controller = /** @class */ (function () {\n    function Controller(context) {\n        this.context = context;\n    }\n    Controller.bless = function () {\n        Object(_target_properties__WEBPACK_IMPORTED_MODULE_0__["defineTargetProperties"])(this);\n    };\n    Object.defineProperty(Controller.prototype, "application", {\n        get: function () {\n            return this.context.application;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Controller.prototype, "scope", {\n        get: function () {\n            return this.context.scope;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Controller.prototype, "element", {\n        get: function () {\n            return this.scope.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Controller.prototype, "identifier", {\n        get: function () {\n            return this.scope.identifier;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Controller.prototype, "targets", {\n        get: function () {\n            return this.scope.targets;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Controller.prototype, "data", {\n        get: function () {\n            return this.scope.data;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Controller.prototype.initialize = function () {\n        // Override in your subclass to set up initial controller state\n    };\n    Controller.prototype.connect = function () {\n        // Override in your subclass to respond when the controller is connected to the DOM\n    };\n    Controller.prototype.disconnect = function () {\n        // Override in your subclass to respond when the controller is disconnected from the DOM\n    };\n    Controller.targets = [];\n    return Controller;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBTzVEO0lBU0Usb0JBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQU5NLGdCQUFLLEdBQVo7UUFDRSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBTUQsc0JBQUksbUNBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUE7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsK0JBQVUsR0FBVjtRQUNFLCtEQUErRDtJQUNqRSxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNFLG1GQUFtRjtJQUNyRixDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNFLHdGQUF3RjtJQUMxRixDQUFDO0lBOUNNLGtCQUFPLEdBQWEsRUFBRSxDQUFBO0lBK0MvQixpQkFBQztDQUFBLEFBaERELElBZ0RDO1NBaERZLFVBQVUifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/controller.js?')},"./node_modules/@stimulus/core/dist/src/data_map.js":
/*!**********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/data_map.js ***!
  \**********************************************************/
/*! exports provided: DataMap */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });\nvar DataMap = /** @class */ (function () {\n    function DataMap(scope) {\n        this.scope = scope;\n    }\n    Object.defineProperty(DataMap.prototype, "element", {\n        get: function () {\n            return this.scope.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(DataMap.prototype, "identifier", {\n        get: function () {\n            return this.scope.identifier;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    DataMap.prototype.get = function (key) {\n        key = this.getFormattedKey(key);\n        return this.element.getAttribute(key);\n    };\n    DataMap.prototype.set = function (key, value) {\n        key = this.getFormattedKey(key);\n        this.element.setAttribute(key, value);\n        return this.get(key);\n    };\n    DataMap.prototype.has = function (key) {\n        key = this.getFormattedKey(key);\n        return this.element.hasAttribute(key);\n    };\n    DataMap.prototype.delete = function (key) {\n        if (this.has(key)) {\n            key = this.getFormattedKey(key);\n            this.element.removeAttribute(key);\n            return true;\n        }\n        else {\n            return false;\n        }\n    };\n    DataMap.prototype.getFormattedKey = function (key) {\n        return "data-" + this.identifier + "-" + dasherize(key);\n    };\n    return DataMap;\n}());\n\nfunction dasherize(value) {\n    return value.replace(/([A-Z])/g, function (_, char) { return "-" + char.toLowerCase(); });\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV9tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YV9tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFHRSxpQkFBWSxLQUFZO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxzQkFBSSw0QkFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEtBQWE7UUFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRUQscUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sR0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDakMsT0FBTyxJQUFJLENBQUE7U0FDWjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUE7U0FDYjtJQUNILENBQUM7SUFFTyxpQ0FBZSxHQUF2QixVQUF3QixHQUFXO1FBQ2pDLE9BQU8sVUFBUSxJQUFJLENBQUMsVUFBVSxTQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUcsQ0FBQTtJQUNwRCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7O0FBRUQsbUJBQW1CLEtBQWE7SUFDOUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFJLElBQUssT0FBQSxNQUFJLElBQUksQ0FBQyxXQUFXLEVBQUksRUFBeEIsQ0FBd0IsQ0FBQyxDQUFBO0FBQ3pFLENBQUMifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/data_map.js?')},"./node_modules/@stimulus/core/dist/src/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/definition.js ***!
  \************************************************************/
/*! exports provided: blessDefinition */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nfunction blessDefinition(definition) {\n    return {\n        identifier: definition.identifier,\n        controllerConstructor: blessControllerConstructor(definition.controllerConstructor)\n    };\n}\nfunction blessControllerConstructor(controllerConstructor) {\n    var constructor = extend(controllerConstructor);\n    constructor.bless();\n    return constructor;\n}\nvar extend = (function () {\n    function extendWithReflect(constructor) {\n        function Controller() {\n            var _newTarget = this && this instanceof Controller ? this.constructor : void 0;\n            return Reflect.construct(constructor, arguments, _newTarget);\n        }\n        Controller.prototype = Object.create(constructor.prototype, {\n            constructor: { value: Controller }\n        });\n        Reflect.setPrototypeOf(Controller, constructor);\n        return Controller;\n    }\n    function testReflectExtension() {\n        var a = function () { this.a.call(this); };\n        var b = extendWithReflect(a);\n        b.prototype.a = function () { };\n        return new b;\n    }\n    try {\n        testReflectExtension();\n        return extendWithReflect;\n    }\n    catch (error) {\n        return function (constructor) { return /** @class */ (function (_super) {\n            __extends(Controller, _super);\n            function Controller() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            return Controller;\n        }(constructor)); };\n    }\n})();\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFPQSxNQUFNLDBCQUEwQixVQUFzQjtJQUNwRCxPQUFPO1FBQ0wsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1FBQ2pDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztLQUNwRixDQUFBO0FBQ0gsQ0FBQztBQUVELG9DQUFvQyxxQkFBNEM7SUFDOUUsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDakQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ25CLE9BQU8sV0FBVyxDQUFBO0FBQ3BCLENBQUM7QUFFRCxJQUFNLE1BQU0sR0FBRyxDQUFDO0lBR2QsMkJBQXNELFdBQWM7UUFDbEU7O1lBQ0UsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLGFBQWEsQ0FBQTtRQUM5RCxDQUFDO1FBRUQsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUQsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtTQUNuQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUMvQyxPQUFPLFVBQWlCLENBQUE7SUFDMUIsQ0FBQztJQUVEO1FBQ0UsSUFBTSxDQUFDLEdBQUcsY0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFRLENBQUE7UUFDMUQsSUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsY0FBWSxDQUFDLENBQUE7UUFDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFRCxJQUFJO1FBQ0Ysb0JBQW9CLEVBQUUsQ0FBQTtRQUN0QixPQUFPLGlCQUFpQixDQUFBO0tBQ3pCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLFVBQTRCLFdBQWMsSUFBSztZQUF5Qiw4QkFBVztZQUFwQzs7WUFBc0MsQ0FBQztZQUFELGlCQUFDO1FBQUQsQ0FBQyxBQUF2QyxDQUF5QixXQUFXLElBQXBDLENBQXVDLENBQUE7S0FDOUY7QUFDSCxDQUFDLENBQUMsRUFBRSxDQUFBIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/definition.js?')},"./node_modules/@stimulus/core/dist/src/dispatcher.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/dispatcher.js ***!
  \************************************************************/
/*! exports provided: Dispatcher */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });\n/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "./node_modules/@stimulus/core/dist/src/event_listener.js");\n\nvar Dispatcher = /** @class */ (function () {\n    function Dispatcher(application) {\n        this.application = application;\n        this.eventListenerMaps = new Map;\n        this.started = false;\n    }\n    Dispatcher.prototype.start = function () {\n        if (!this.started) {\n            this.started = true;\n            this.eventListeners.forEach(function (eventListener) { return eventListener.connect(); });\n        }\n    };\n    Dispatcher.prototype.stop = function () {\n        if (this.started) {\n            this.started = false;\n            this.eventListeners.forEach(function (eventListener) { return eventListener.disconnect(); });\n        }\n    };\n    Object.defineProperty(Dispatcher.prototype, "eventListeners", {\n        get: function () {\n            return Array.from(this.eventListenerMaps.values())\n                .reduce(function (listeners, map) { return listeners.concat(Array.from(map.values())); }, []);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    // Binding observer delegate\n    Dispatcher.prototype.bindingConnected = function (binding) {\n        this.fetchEventListenerForBinding(binding).bindingConnected(binding);\n    };\n    Dispatcher.prototype.bindingDisconnected = function (binding) {\n        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);\n    };\n    // Error handling\n    Dispatcher.prototype.handleError = function (error, message, detail) {\n        if (detail === void 0) { detail = {}; }\n        this.application.handleError(error, "Error " + message, detail);\n    };\n    Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {\n        var eventTarget = binding.eventTarget, eventName = binding.eventName;\n        return this.fetchEventListener(eventTarget, eventName);\n    };\n    Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName) {\n        var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);\n        var eventListener = eventListenerMap.get(eventName);\n        if (!eventListener) {\n            eventListener = this.createEventListener(eventTarget, eventName);\n            eventListenerMap.set(eventName, eventListener);\n        }\n        return eventListener;\n    };\n    Dispatcher.prototype.createEventListener = function (eventTarget, eventName) {\n        var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName);\n        if (this.started) {\n            eventListener.connect();\n        }\n        return eventListener;\n    };\n    Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {\n        var eventListenerMap = this.eventListenerMaps.get(eventTarget);\n        if (!eventListenerMap) {\n            eventListenerMap = new Map;\n            this.eventListenerMaps.set(eventTarget, eventListenerMap);\n        }\n        return eventListenerMap;\n    };\n    return Dispatcher;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUVoRDtJQUtFLG9CQUFZLFdBQXdCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUE7U0FDdEU7SUFDSCxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFBO1NBQ3pFO0lBQ0gsQ0FBQztJQUVELHNCQUFJLHNDQUFjO2FBQWxCO1lBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDL0MsTUFBTSxDQUFDLFVBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSyxPQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFFLEVBQXFCLENBQUMsQ0FBQTtRQUNsRyxDQUFDOzs7T0FBQTtJQUVELDRCQUE0QjtJQUU1QixxQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBZ0I7UUFDL0IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFFRCx3Q0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0I7UUFDbEMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3pFLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsZ0NBQVcsR0FBWCxVQUFZLEtBQVksRUFBRSxPQUFlLEVBQUUsTUFBbUI7UUFBbkIsdUJBQUEsRUFBQSxXQUFtQjtRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBUyxPQUFTLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUVPLGlEQUE0QixHQUFwQyxVQUFxQyxPQUFnQjtRQUMzQyxJQUFBLGlDQUFXLEVBQUUsNkJBQVMsQ0FBWTtRQUMxQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVPLHVDQUFrQixHQUExQixVQUEyQixXQUF3QixFQUFFLFNBQWlCO1FBQ3BFLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlFLElBQUksYUFBYSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQ2hFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUE7U0FDL0M7UUFDRCxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU8sd0NBQW1CLEdBQTNCLFVBQTRCLFdBQXdCLEVBQUUsU0FBaUI7UUFDckUsSUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixhQUFhLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDeEI7UUFDRCxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU8sd0RBQW1DLEdBQTNDLFVBQTRDLFdBQXdCO1FBQ2xFLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUE7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtTQUMxRDtRQUNELE9BQU8sZ0JBQWdCLENBQUE7SUFDekIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTdFRCxJQTZFQyJ9\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/dispatcher.js?')},"./node_modules/@stimulus/core/dist/src/event_listener.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/event_listener.js ***!
  \****************************************************************/
/*! exports provided: EventListener */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });\nvar EventListener = /** @class */ (function () {\n    function EventListener(eventTarget, eventName) {\n        this.eventTarget = eventTarget;\n        this.eventName = eventName;\n        this.unorderedBindings = new Set;\n    }\n    EventListener.prototype.connect = function () {\n        this.eventTarget.addEventListener(this.eventName, this, false);\n    };\n    EventListener.prototype.disconnect = function () {\n        this.eventTarget.removeEventListener(this.eventName, this, false);\n    };\n    // Binding observer delegate\n    EventListener.prototype.bindingConnected = function (binding) {\n        this.unorderedBindings.add(binding);\n    };\n    EventListener.prototype.bindingDisconnected = function (binding) {\n        this.unorderedBindings.delete(binding);\n    };\n    EventListener.prototype.handleEvent = function (event) {\n        var extendedEvent = extendEvent(event);\n        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {\n            var binding = _a[_i];\n            if (extendedEvent.immediatePropagationStopped) {\n                break;\n            }\n            else {\n                binding.handleEvent(extendedEvent);\n            }\n        }\n    };\n    Object.defineProperty(EventListener.prototype, "bindings", {\n        get: function () {\n            return Array.from(this.unorderedBindings).sort(function (left, right) {\n                var leftIndex = left.index, rightIndex = right.index;\n                return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;\n            });\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return EventListener;\n}());\n\nfunction extendEvent(event) {\n    if ("immediatePropagationStopped" in event) {\n        return event;\n    }\n    else {\n        var stopImmediatePropagation_1 = event.stopImmediatePropagation;\n        return Object.assign(event, {\n            immediatePropagationStopped: false,\n            stopImmediatePropagation: function () {\n                this.immediatePropagationStopped = true;\n                stopImmediatePropagation_1.call(this);\n            }\n        });\n    }\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRfbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXZlbnRfbGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFLRSx1QkFBWSxXQUF3QixFQUFFLFNBQWlCO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRCw0QkFBNEI7SUFFNUIsd0NBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELDJDQUFtQixHQUFuQixVQUFvQixPQUFnQjtRQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEMsS0FBc0IsVUFBYSxFQUFiLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFFO1lBQWhDLElBQU0sT0FBTyxTQUFBO1lBQ2hCLElBQUksYUFBYSxDQUFDLDJCQUEyQixFQUFFO2dCQUM3QyxNQUFLO2FBQ047aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUNuQztTQUNGO0lBQ0gsQ0FBQztJQUVELHNCQUFJLG1DQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7Z0JBQ3pELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7Z0JBQ3RELE9BQU8sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JFLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQzs7O09BQUE7SUFDSCxvQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7O0FBRUQscUJBQXFCLEtBQVk7SUFDL0IsSUFBSSw2QkFBNkIsSUFBSSxLQUFLLEVBQUU7UUFDMUMsT0FBTyxLQUFLLENBQUE7S0FDYjtTQUFNO1FBQ0csSUFBQSwyREFBd0IsQ0FBVTtRQUMxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzFCLDJCQUEyQixFQUFFLEtBQUs7WUFDbEMsd0JBQXdCO2dCQUN0QixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFBO2dCQUN2QywwQkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDckMsQ0FBQztTQUNGLENBQUMsQ0FBQTtLQUNIO0FBQ0gsQ0FBQyJ9\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/event_listener.js?')},"./node_modules/@stimulus/core/dist/src/module.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/module.js ***!
  \********************************************************/
/*! exports provided: Module */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@stimulus/core/dist/src/context.js");\n/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "./node_modules/@stimulus/core/dist/src/definition.js");\n\n\nvar Module = /** @class */ (function () {\n    function Module(application, definition) {\n        this.application = application;\n        this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);\n        this.contextsByScope = new WeakMap;\n        this.connectedContexts = new Set;\n    }\n    Object.defineProperty(Module.prototype, "identifier", {\n        get: function () {\n            return this.definition.identifier;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Module.prototype, "controllerConstructor", {\n        get: function () {\n            return this.definition.controllerConstructor;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Module.prototype, "contexts", {\n        get: function () {\n            return Array.from(this.connectedContexts);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Module.prototype.connectContextForScope = function (scope) {\n        var context = this.fetchContextForScope(scope);\n        this.connectedContexts.add(context);\n        context.connect();\n    };\n    Module.prototype.disconnectContextForScope = function (scope) {\n        var context = this.contextsByScope.get(scope);\n        if (context) {\n            this.connectedContexts.delete(context);\n            context.disconnect();\n        }\n    };\n    Module.prototype.fetchContextForScope = function (scope) {\n        var context = this.contextsByScope.get(scope);\n        if (!context) {\n            context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);\n            this.contextsByScope.set(scope, context);\n        }\n        return context;\n    };\n    return Module;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFBO0FBRW5DLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFHMUQ7SUFNRSxnQkFBWSxXQUF3QixFQUFFLFVBQXNCO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUE7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQTtRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFxQjthQUF6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQTtRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFRO2FBQVo7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBc0IsR0FBdEIsVUFBdUIsS0FBWTtRQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELDBDQUF5QixHQUF6QixVQUEwQixLQUFZO1FBQ3BDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9DLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN0QyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUE7U0FDckI7SUFDSCxDQUFDO0lBRU8scUNBQW9CLEdBQTVCLFVBQTZCLEtBQVk7UUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1NBQ3pDO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/module.js?')},"./node_modules/@stimulus/core/dist/src/router.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/router.js ***!
  \********************************************************/
/*! exports provided: Router */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/@stimulus/core/dist/src/module.js");\n/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");\n/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope_observer */ "./node_modules/@stimulus/core/dist/src/scope_observer.js");\n\n\n\nvar Router = /** @class */ (function () {\n    function Router(application) {\n        this.application = application;\n        this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_2__["ScopeObserver"](this.element, this.schema, this);\n        this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"];\n        this.modulesByIdentifier = new Map;\n    }\n    Object.defineProperty(Router.prototype, "element", {\n        get: function () {\n            return this.application.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Router.prototype, "schema", {\n        get: function () {\n            return this.application.schema;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Router.prototype, "controllerAttribute", {\n        get: function () {\n            return this.schema.controllerAttribute;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Router.prototype, "modules", {\n        get: function () {\n            return Array.from(this.modulesByIdentifier.values());\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Router.prototype, "contexts", {\n        get: function () {\n            return this.modules.reduce(function (contexts, module) { return contexts.concat(module.contexts); }, []);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Router.prototype.start = function () {\n        this.scopeObserver.start();\n    };\n    Router.prototype.stop = function () {\n        this.scopeObserver.stop();\n    };\n    Router.prototype.loadDefinition = function (definition) {\n        this.unloadIdentifier(definition.identifier);\n        var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);\n        this.connectModule(module);\n    };\n    Router.prototype.unloadIdentifier = function (identifier) {\n        var module = this.modulesByIdentifier.get(identifier);\n        if (module) {\n            this.disconnectModule(module);\n        }\n    };\n    Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {\n        var module = this.modulesByIdentifier.get(identifier);\n        if (module) {\n            return module.contexts.find(function (context) { return context.element == element; });\n        }\n    };\n    // Error handler delegate\n    /** @private */\n    Router.prototype.handleError = function (error, message, detail) {\n        this.application.handleError(error, message, detail);\n    };\n    // Scope observer delegate\n    /** @private */\n    Router.prototype.scopeConnected = function (scope) {\n        this.scopesByIdentifier.add(scope.identifier, scope);\n        var module = this.modulesByIdentifier.get(scope.identifier);\n        if (module) {\n            module.connectContextForScope(scope);\n        }\n    };\n    /** @private */\n    Router.prototype.scopeDisconnected = function (scope) {\n        this.scopesByIdentifier.delete(scope.identifier, scope);\n        var module = this.modulesByIdentifier.get(scope.identifier);\n        if (module) {\n            module.disconnectContextForScope(scope);\n        }\n    };\n    // Modules\n    Router.prototype.connectModule = function (module) {\n        this.modulesByIdentifier.set(module.identifier, module);\n        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);\n        scopes.forEach(function (scope) { return module.connectContextForScope(scope); });\n    };\n    Router.prototype.disconnectModule = function (module) {\n        this.modulesByIdentifier.delete(module.identifier);\n        var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);\n        scopes.forEach(function (scope) { return module.disconnectContextForScope(scope); });\n    };\n    return Router;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ2pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUc3QyxPQUFPLEVBQUUsYUFBYSxFQUF5QixNQUFNLGtCQUFrQixDQUFBO0FBRXZFO0lBTUUsZ0JBQVksV0FBd0I7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksUUFBUSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsQ0FBQTtJQUNwQyxDQUFDO0lBRUQsc0JBQUksMkJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUE7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTtRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFtQjthQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQTtRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFPO2FBQVg7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FB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\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/router.js?')},"./node_modules/@stimulus/core/dist/src/schema.js":
/*!********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/schema.js ***!
  \********************************************************/
/*! exports provided: defaultSchema */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });\nvar defaultSchema = {\n    controllerAttribute: "data-controller",\n    actionAttribute: "data-action",\n    targetAttribute: "data-target"\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQVc7SUFDbkMsbUJBQW1CLEVBQUUsaUJBQWlCO0lBQ3RDLGVBQWUsRUFBRSxhQUFhO0lBQzlCLGVBQWUsRUFBRSxhQUFhO0NBQy9CLENBQUEifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/schema.js?')},"./node_modules/@stimulus/core/dist/src/scope.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope.js ***!
  \*******************************************************/
/*! exports provided: Scope */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });\n/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_map */ "./node_modules/@stimulus/core/dist/src/data_map.js");\n/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_set */ "./node_modules/@stimulus/core/dist/src/target_set.js");\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");\n\n\n\nvar Scope = /** @class */ (function () {\n    function Scope(schema, identifier, element) {\n        this.schema = schema;\n        this.identifier = identifier;\n        this.element = element;\n        this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_1__["TargetSet"](this);\n        this.data = new _data_map__WEBPACK_IMPORTED_MODULE_0__["DataMap"](this);\n    }\n    Scope.prototype.findElement = function (selector) {\n        return this.findAllElements(selector)[0];\n    };\n    Scope.prototype.findAllElements = function (selector) {\n        var head = this.element.matches(selector) ? [this.element] : [];\n        var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));\n        return head.concat(tail);\n    };\n    Scope.prototype.filterElements = function (elements) {\n        var _this = this;\n        return elements.filter(function (element) { return _this.containsElement(element); });\n    };\n    Scope.prototype.containsElement = function (element) {\n        return element.closest(this.controllerSelector) === this.element;\n    };\n    Object.defineProperty(Scope.prototype, "controllerSelector", {\n        get: function () {\n            return Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Scope;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NvcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQTtBQUVwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBQ3hDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV6RDtJQU9FLGVBQVksTUFBYyxFQUFFLFVBQWtCLEVBQUUsT0FBZ0I7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCwyQkFBVyxHQUFYLFVBQVksUUFBZ0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLFFBQWdCO1FBQzlCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ2pFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVELDhCQUFjLEdBQWQsVUFBZSxRQUFtQjtRQUFsQyxpQkFFQztRQURDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBRUQsK0JBQWUsR0FBZixVQUFnQixPQUFnQjtRQUM5QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNsRSxDQUFDO0lBRUQsc0JBQVkscUNBQWtCO2FBQTlCO1lBQ0UsT0FBTywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0RixDQUFDOzs7T0FBQTtJQUNILFlBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/scope.js?')},"./node_modules/@stimulus/core/dist/src/scope_observer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/scope_observer.js ***!
  \****************************************************************/
/*! exports provided: ScopeObserver */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@stimulus/core/dist/src/scope.js");\n/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/mutation-observers */ "./node_modules/@stimulus/mutation-observers/dist/index.js");\n\n\nvar ScopeObserver = /** @class */ (function () {\n    function ScopeObserver(element, schema, delegate) {\n        this.element = element;\n        this.schema = schema;\n        this.delegate = delegate;\n        this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__["ValueListObserver"](this.element, this.controllerAttribute, this);\n        this.scopesByIdentifierByElement = new WeakMap;\n        this.scopeReferenceCounts = new WeakMap;\n    }\n    ScopeObserver.prototype.start = function () {\n        this.valueListObserver.start();\n    };\n    ScopeObserver.prototype.stop = function () {\n        this.valueListObserver.stop();\n    };\n    Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {\n        get: function () {\n            return this.schema.controllerAttribute;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    // Value observer delegate\n    ScopeObserver.prototype.parseValueForToken = function (token) {\n        var element = token.element, identifier = token.content;\n        var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);\n        var scope = scopesByIdentifier.get(identifier);\n        if (!scope) {\n            scope = new _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.schema, identifier, element);\n            scopesByIdentifier.set(identifier, scope);\n        }\n        return scope;\n    };\n    ScopeObserver.prototype.elementMatchedValue = function (element, value) {\n        var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;\n        this.scopeReferenceCounts.set(value, referenceCount);\n        if (referenceCount == 1) {\n            this.delegate.scopeConnected(value);\n        }\n    };\n    ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {\n        var referenceCount = this.scopeReferenceCounts.get(value);\n        if (referenceCount) {\n            this.scopeReferenceCounts.set(value, referenceCount - 1);\n            if (referenceCount == 1) {\n                this.delegate.scopeDisconnected(value);\n            }\n        }\n    };\n    ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {\n        var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);\n        if (!scopesByIdentifier) {\n            scopesByIdentifier = new Map;\n            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);\n        }\n        return scopesByIdentifier;\n    };\n    return ScopeObserver;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcGVfb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NvcGVfb2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUMvQixPQUFPLEVBQVMsaUJBQWlCLEVBQTZCLE1BQU0sOEJBQThCLENBQUE7QUFPbEc7SUFRRSx1QkFBWSxPQUFnQixFQUFFLE1BQWMsRUFBRSxRQUErQjtRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxPQUFPLENBQUE7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksT0FBTyxDQUFBO0lBQ3pDLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxzQkFBSSw4Q0FBbUI7YUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUE7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCwwQkFBMEI7SUFFMUIsMENBQWtCLEdBQWxCLFVBQW1CLEtBQVk7UUFDckIsSUFBQSx1QkFBTyxFQUFFLDBCQUFtQixDQUFVO1FBQzlDLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTFFLElBQUksS0FBSyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ25ELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDMUM7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkIsVUFBb0IsT0FBZ0IsRUFBRSxLQUFZO1FBQ2hELElBQU0sY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFDcEQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELDZDQUFxQixHQUFyQixVQUFzQixPQUFnQixFQUFFLEtBQVk7UUFDbEQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzRCxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUE7WUFDeEQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3ZDO1NBQ0Y7SUFDSCxDQUFDO0lBRU8seURBQWlDLEdBQXpDLFVBQTBDLE9BQWdCO1FBQ3hELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIsa0JBQWtCLEdBQUcsSUFBSSxHQUFHLENBQUE7WUFDNUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtTQUNsRTtRQUNELE9BQU8sa0JBQWtCLENBQUE7SUFDM0IsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXRFRCxJQXNFQyJ9\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/scope_observer.js?')},"./node_modules/@stimulus/core/dist/src/selectors.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/selectors.js ***!
  \***********************************************************/
/*! exports provided: attributeValueContainsToken */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });\n/** @private */\nfunction attributeValueContainsToken(attributeName, token) {\n    return "[" + attributeName + "~=\\"" + token + "\\"]";\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2YsTUFBTSxzQ0FBc0MsYUFBcUIsRUFBRSxLQUFhO0lBQzlFLE9BQU8sTUFBSSxhQUFhLFlBQU0sS0FBSyxRQUFJLENBQUE7QUFDekMsQ0FBQyJ9\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/selectors.js?')},"./node_modules/@stimulus/core/dist/src/target_properties.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_properties.js ***!
  \*******************************************************************/
/*! exports provided: defineTargetProperties */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineTargetProperties", function() { return defineTargetProperties; });\nfunction defineTargetProperties(constructor) {\n    var prototype = constructor.prototype;\n    var targetNames = getTargetNamesForConstructor(constructor);\n    targetNames.forEach(function (name) {\n        var _a;\n        return defineLinkedProperties(prototype, (_a = {},\n            _a[name + "Target"] = {\n                get: function () {\n                    var target = this.targets.find(name);\n                    if (target) {\n                        return target;\n                    }\n                    else {\n                        throw new Error("Missing target element \\"" + this.identifier + "." + name + "\\"");\n                    }\n                }\n            },\n            _a[name + "Targets"] = {\n                get: function () {\n                    return this.targets.findAll(name);\n                }\n            },\n            _a["has" + capitalize(name) + "Target"] = {\n                get: function () {\n                    return this.targets.has(name);\n                }\n            },\n            _a));\n    });\n}\nfunction getTargetNamesForConstructor(constructor) {\n    var ancestors = getAncestorsForConstructor(constructor);\n    return Array.from(ancestors.reduce(function (targetNames, constructor) {\n        getOwnTargetNamesForConstructor(constructor).forEach(function (name) { return targetNames.add(name); });\n        return targetNames;\n    }, new Set));\n}\nfunction getAncestorsForConstructor(constructor) {\n    var ancestors = [];\n    while (constructor) {\n        ancestors.push(constructor);\n        constructor = Object.getPrototypeOf(constructor);\n    }\n    return ancestors;\n}\nfunction getOwnTargetNamesForConstructor(constructor) {\n    var definition = constructor["targets"];\n    return Array.isArray(definition) ? definition : [];\n}\nfunction defineLinkedProperties(object, properties) {\n    Object.keys(properties).forEach(function (name) {\n        if (!(name in object)) {\n            var descriptor = properties[name];\n            Object.defineProperty(object, name, descriptor);\n        }\n    });\n}\nfunction capitalize(name) {\n    return name.charAt(0).toUpperCase() + name.slice(1);\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3Byb3BlcnRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdGFyZ2V0X3Byb3BlcnRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxpQ0FBaUMsV0FBcUI7SUFDMUQsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQTtJQUN2QyxJQUFNLFdBQVcsR0FBRyw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM3RCxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7UUFBSSxPQUFBLHNCQUFzQixDQUFDLFNBQVM7WUFDMUQsR0FBSSxJQUFJLFdBQVEsSUFBRztnQkFDakIsR0FBRztvQkFDRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDdEMsSUFBSSxNQUFNLEVBQUU7d0JBQ1YsT0FBTyxNQUFNLENBQUE7cUJBQ2Q7eUJBQU07d0JBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBMkIsSUFBSSxDQUFDLFVBQVUsU0FBSSxJQUFJLE9BQUcsQ0FBQyxDQUFBO3FCQUN2RTtnQkFDSCxDQUFDO2FBQ0Y7WUFDRCxHQUFJLElBQUksWUFBUyxJQUFHO2dCQUNsQixHQUFHO29CQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ25DLENBQUM7YUFDRjtZQUNELEdBQUMsUUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVEsSUFBRztnQkFDaEMsR0FBRztvQkFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUMvQixDQUFDO2FBQ0Y7Z0JBQ0Q7SUFyQjBCLENBcUIxQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsc0NBQXNDLFdBQXFCO0lBQ3pELElBQU0sU0FBUyxHQUFHLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsV0FBVyxFQUFFLFdBQVc7UUFDMUQsK0JBQStCLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO1FBQ25GLE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUMsRUFBRSxJQUFJLEdBQWtCLENBQUMsQ0FBQyxDQUFBO0FBQzdCLENBQUM7QUFFRCxvQ0FBb0MsV0FBcUI7SUFDdkQsSUFBTSxTQUFTLEdBQWUsRUFBRSxDQUFBO0lBQ2hDLE9BQU8sV0FBVyxFQUFFO1FBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDM0IsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7S0FDakQ7SUFDRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQseUNBQXlDLFdBQXFCO0lBQzVELElBQU0sVUFBVSxHQUFJLFdBQW1CLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEQsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtBQUNwRCxDQUFDO0FBRUQsZ0NBQWdDLE1BQVcsRUFBRSxVQUFpQztJQUM1RSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7UUFDbkMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNuQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUE7U0FDaEQ7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxvQkFBb0IsSUFBWTtJQUM5QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNyRCxDQUFDIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/target_properties.js?')},"./node_modules/@stimulus/core/dist/src/target_set.js":
/*!************************************************************!*\
  !*** ./node_modules/@stimulus/core/dist/src/target_set.js ***!
  \************************************************************/
/*! exports provided: TargetSet */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./node_modules/@stimulus/core/dist/src/selectors.js");\n\nvar TargetSet = /** @class */ (function () {\n    function TargetSet(scope) {\n        this.scope = scope;\n    }\n    Object.defineProperty(TargetSet.prototype, "element", {\n        get: function () {\n            return this.scope.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(TargetSet.prototype, "identifier", {\n        get: function () {\n            return this.scope.identifier;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(TargetSet.prototype, "schema", {\n        get: function () {\n            return this.scope.schema;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    TargetSet.prototype.has = function (targetName) {\n        return this.find(targetName) != null;\n    };\n    TargetSet.prototype.find = function () {\n        var targetNames = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            targetNames[_i] = arguments[_i];\n        }\n        var selector = this.getSelectorForTargetNames(targetNames);\n        return this.scope.findElement(selector);\n    };\n    TargetSet.prototype.findAll = function () {\n        var targetNames = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            targetNames[_i] = arguments[_i];\n        }\n        var selector = this.getSelectorForTargetNames(targetNames);\n        return this.scope.findAllElements(selector);\n    };\n    TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {\n        var _this = this;\n        return targetNames.map(function (targetName) { return _this.getSelectorForTargetName(targetName); }).join(", ");\n    };\n    TargetSet.prototype.getSelectorForTargetName = function (targetName) {\n        var targetDescriptor = this.identifier + "." + targetName;\n        return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);\n    };\n    return TargetSet;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0X3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXJnZXRfc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGFBQWEsQ0FBQTtBQUV6RDtJQUdFLG1CQUFZLEtBQVk7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUE7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHVCQUFHLEdBQUgsVUFBSSxVQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFBO0lBQ3RDLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQUsscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQzNCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQVEscUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4QixnQ0FBd0I7O1FBQzlCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1RCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFTyw2Q0FBeUIsR0FBakMsVUFBa0MsV0FBcUI7UUFBdkQsaUJBRUM7UUFEQyxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUYsQ0FBQztJQUVPLDRDQUF3QixHQUFoQyxVQUFpQyxVQUFrQjtRQUNqRCxJQUFNLGdCQUFnQixHQUFNLElBQUksQ0FBQyxVQUFVLFNBQUksVUFBWSxDQUFBO1FBQzNELE9BQU8sMkJBQTJCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/core/dist/src/target_set.js?')},"./node_modules/@stimulus/multimap/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/index.js ***!
  \*******************************************************/
/*! exports provided: Multimap, IndexedMultimap */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _src_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]; });\n\n/* harmony import */ var _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/indexed_multimap */ "./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__["IndexedMultimap"]; });\n\n\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLGdCQUFnQixDQUFBO0FBQzlCLGNBQWMsd0JBQXdCLENBQUEifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/multimap/dist/index.js?')},"./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js ***!
  \**********************************************************************/
/*! exports provided: IndexedMultimap */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });\n/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "./node_modules/@stimulus/multimap/dist/src/multimap.js");\n/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar IndexedMultimap = /** @class */ (function (_super) {\n    __extends(IndexedMultimap, _super);\n    function IndexedMultimap() {\n        var _this = _super.call(this) || this;\n        _this.keysByValue = new Map;\n        return _this;\n    }\n    Object.defineProperty(IndexedMultimap.prototype, "values", {\n        get: function () {\n            return Array.from(this.keysByValue.keys());\n        },\n        enumerable: true,\n        configurable: true\n    });\n    IndexedMultimap.prototype.add = function (key, value) {\n        _super.prototype.add.call(this, key, value);\n        Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);\n    };\n    IndexedMultimap.prototype.delete = function (key, value) {\n        _super.prototype.delete.call(this, key, value);\n        Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);\n    };\n    IndexedMultimap.prototype.hasValue = function (value) {\n        return this.keysByValue.has(value);\n    };\n    IndexedMultimap.prototype.getKeysForValue = function (value) {\n        var set = this.keysByValue.get(value);\n        return set ? Array.from(set) : [];\n    };\n    return IndexedMultimap;\n}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]));\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhlZF9tdWx0aW1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleGVkX211bHRpbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQ3JDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFFM0M7SUFBMkMsbUNBQWM7SUFHdkQ7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxDQUFBOztJQUM1QixDQUFDO0lBRUQsc0JBQUksbUNBQU07YUFBVjtZQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCw2QkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsaUJBQU0sR0FBRyxZQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxHQUFNLEVBQUUsS0FBUTtRQUNyQixpQkFBTSxNQUFNLFlBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLEtBQVE7UUFDdEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBOUJELENBQTJDLFFBQVEsR0E4QmxEIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/multimap/dist/src/indexed_multimap.js?')},"./node_modules/@stimulus/multimap/dist/src/multimap.js":
/*!**************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/multimap.js ***!
  \**************************************************************/
/*! exports provided: Multimap */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });\n/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "./node_modules/@stimulus/multimap/dist/src/set_operations.js");\n\nvar Multimap = /** @class */ (function () {\n    function Multimap() {\n        this.valuesByKey = new Map();\n    }\n    Object.defineProperty(Multimap.prototype, "values", {\n        get: function () {\n            var sets = Array.from(this.valuesByKey.values());\n            return sets.reduce(function (values, set) { return values.concat(Array.from(set)); }, []);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Multimap.prototype, "size", {\n        get: function () {\n            var sets = Array.from(this.valuesByKey.values());\n            return sets.reduce(function (size, set) { return size + set.size; }, 0);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Multimap.prototype.add = function (key, value) {\n        Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);\n    };\n    Multimap.prototype.delete = function (key, value) {\n        Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);\n    };\n    Multimap.prototype.has = function (key, value) {\n        var values = this.valuesByKey.get(key);\n        return values != null && values.has(value);\n    };\n    Multimap.prototype.hasKey = function (key) {\n        return this.valuesByKey.has(key);\n    };\n    Multimap.prototype.hasValue = function (value) {\n        var sets = Array.from(this.valuesByKey.values());\n        return sets.some(function (set) { return set.has(value); });\n    };\n    Multimap.prototype.getValuesForKey = function (key) {\n        var values = this.valuesByKey.get(key);\n        return values ? Array.from(values) : [];\n    };\n    Multimap.prototype.getKeysForValue = function (value) {\n        return Array.from(this.valuesByKey)\n            .filter(function (_a) {\n            var key = _a[0], values = _a[1];\n            return values.has(value);\n        })\n            .map(function (_a) {\n            var key = _a[0], values = _a[1];\n            return key;\n        });\n    };\n    return Multimap;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGltYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbXVsdGltYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUUzQztJQUdFO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFBO0lBQ3pDLENBQUM7SUFFRCxzQkFBSSw0QkFBTTthQUFWO1lBQ0UsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7WUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE5QixDQUE4QixFQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQy9FLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMEJBQUk7YUFBUjtZQUNFLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBQ2xELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHLElBQUssT0FBQSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBZixDQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sR0FBTSxFQUFFLEtBQVE7UUFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksR0FBTSxFQUFFLEtBQVE7UUFDbEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEMsT0FBTyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxHQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQVE7UUFDZixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUNsRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxrQ0FBZSxHQUFmLFVBQWdCLEdBQU07UUFDcEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsa0NBQWUsR0FBZixVQUFnQixLQUFRO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyxVQUFDLEVBQWE7Z0JBQVosV0FBRyxFQUFFLGNBQU07WUFBTSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQWpCLENBQWlCLENBQUM7YUFDNUMsR0FBRyxDQUFDLFVBQUMsRUFBYTtnQkFBWixXQUFHLEVBQUUsY0FBTTtZQUFNLE9BQUEsR0FBRztRQUFILENBQUcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQyJ9\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/multimap/dist/src/multimap.js?')},"./node_modules/@stimulus/multimap/dist/src/set_operations.js":
/*!********************************************************************!*\
  !*** ./node_modules/@stimulus/multimap/dist/src/set_operations.js ***!
  \********************************************************************/
/*! exports provided: add, del, fetch, prune */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });\nfunction add(map, key, value) {\n    fetch(map, key).add(value);\n}\nfunction del(map, key, value) {\n    fetch(map, key).delete(value);\n    prune(map, key);\n}\nfunction fetch(map, key) {\n    var values = map.get(key);\n    if (!values) {\n        values = new Set();\n        map.set(key, values);\n    }\n    return values;\n}\nfunction prune(map, key) {\n    var values = map.get(key);\n    if (values != null && values.size == 0) {\n        map.delete(key);\n    }\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0X29wZXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2V0X29wZXJhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxjQUFvQixHQUFtQixFQUFFLEdBQU0sRUFBRSxLQUFRO0lBQzdELEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFFRCxNQUFNLGNBQW9CLEdBQW1CLEVBQUUsR0FBTSxFQUFFLEtBQVE7SUFDN0QsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0IsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNqQixDQUFDO0FBRUQsTUFBTSxnQkFBc0IsR0FBbUIsRUFBRSxHQUFNO0lBQ3JELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0tBQ3JCO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDO0FBRUQsTUFBTSxnQkFBc0IsR0FBbUIsRUFBRSxHQUFNO0lBQ3JELElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDM0IsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDaEI7QUFDSCxDQUFDIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/multimap/dist/src/set_operations.js?')},"./node_modules/@stimulus/mutation-observers/dist/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \*****************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, TokenListObserver, ValueListObserver */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });\n\n/* harmony import */ var _src_element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _src_element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });\n\n/* harmony import */ var _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__["TokenListObserver"]; });\n\n/* harmony import */ var _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/value_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__["ValueListObserver"]; });\n\n\n\n\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLDBCQUEwQixDQUFBO0FBQ3hDLGNBQWMsd0JBQXdCLENBQUE7QUFDdEMsY0FBYywyQkFBMkIsQ0FBQTtBQUN6QyxjQUFjLDJCQUEyQixDQUFBIn0=\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/mutation-observers/dist/index.js?')},"./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js ***!
  \**********************************************************************************/
/*! exports provided: AttributeObserver */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });\n/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");\n\nvar AttributeObserver = /** @class */ (function () {\n    function AttributeObserver(element, attributeName, delegate) {\n        this.attributeName = attributeName;\n        this.delegate = delegate;\n        this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);\n    }\n    Object.defineProperty(AttributeObserver.prototype, "element", {\n        get: function () {\n            return this.elementObserver.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AttributeObserver.prototype, "selector", {\n        get: function () {\n            return "[" + this.attributeName + "]";\n        },\n        enumerable: true,\n        configurable: true\n    });\n    AttributeObserver.prototype.start = function () {\n        this.elementObserver.start();\n    };\n    AttributeObserver.prototype.stop = function () {\n        this.elementObserver.stop();\n    };\n    AttributeObserver.prototype.refresh = function () {\n        this.elementObserver.refresh();\n    };\n    Object.defineProperty(AttributeObserver.prototype, "started", {\n        get: function () {\n            return this.elementObserver.started;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    // Element observer delegate\n    AttributeObserver.prototype.matchElement = function (element) {\n        return element.hasAttribute(this.attributeName);\n    };\n    AttributeObserver.prototype.matchElementsInTree = function (tree) {\n        var match = this.matchElement(tree) ? [tree] : [];\n        var matches = Array.from(tree.querySelectorAll(this.selector));\n        return match.concat(matches);\n    };\n    AttributeObserver.prototype.elementMatched = function (element) {\n        if (this.delegate.elementMatchedAttribute) {\n            this.delegate.elementMatchedAttribute(element, this.attributeName);\n        }\n    };\n    AttributeObserver.prototype.elementUnmatched = function (element) {\n        if (this.delegate.elementUnmatchedAttribute) {\n            this.delegate.elementUnmatchedAttribute(element, this.attributeName);\n        }\n    };\n    AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {\n        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {\n            this.delegate.elementAttributeValueChanged(element, attributeName);\n        }\n    };\n    return AttributeObserver;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlX29ic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F0dHJpYnV0ZV9vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUEyQixNQUFNLG9CQUFvQixDQUFBO0FBUTdFO0lBTUUsMkJBQVksT0FBZ0IsRUFBRSxhQUFxQixFQUFFLFFBQW1DO1FBQ3RGLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBRXhCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFRO2FBQVo7WUFDRSxPQUFPLE1BQUksSUFBSSxDQUFDLGFBQWEsTUFBRyxDQUFBO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUVELGdDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCw0QkFBNEI7SUFFNUIsd0NBQVksR0FBWixVQUFhLE9BQWdCO1FBQzNCLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixJQUFhO1FBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUNuRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNoRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELDBDQUFjLEdBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ25FO0lBQ0gsQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixPQUFnQjtRQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQ3JFO0lBQ0gsQ0FBQztJQUVELG1EQUF1QixHQUF2QixVQUF3QixPQUFnQixFQUFFLGFBQXFCO1FBQzdELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsRUFBRTtZQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUNuRTtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js?')},"./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js ***!
  \********************************************************************************/
/*! exports provided: ElementObserver */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });\nvar ElementObserver = /** @class */ (function () {\n    function ElementObserver(element, delegate) {\n        var _this = this;\n        this.element = element;\n        this.started = false;\n        this.delegate = delegate;\n        this.elements = new Set;\n        this.mutationObserver = new MutationObserver(function (mutations) { return _this.processMutations(mutations); });\n    }\n    ElementObserver.prototype.start = function () {\n        if (!this.started) {\n            this.started = true;\n            this.mutationObserver.observe(this.element, { attributes: true, childList: true, subtree: true });\n            this.refresh();\n        }\n    };\n    ElementObserver.prototype.stop = function () {\n        if (this.started) {\n            this.mutationObserver.takeRecords();\n            this.mutationObserver.disconnect();\n            this.started = false;\n        }\n    };\n    ElementObserver.prototype.refresh = function () {\n        if (this.started) {\n            var matches = new Set(this.matchElementsInTree());\n            for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {\n                var element = _a[_i];\n                if (!matches.has(element)) {\n                    this.removeElement(element);\n                }\n            }\n            for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {\n                var element = _c[_b];\n                this.addElement(element);\n            }\n        }\n    };\n    // Mutation record processing\n    ElementObserver.prototype.processMutations = function (mutations) {\n        if (this.started) {\n            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {\n                var mutation = mutations_1[_i];\n                this.processMutation(mutation);\n            }\n        }\n    };\n    ElementObserver.prototype.processMutation = function (mutation) {\n        if (mutation.type == "attributes") {\n            this.processAttributeChange(mutation.target, mutation.attributeName);\n        }\n        else if (mutation.type == "childList") {\n            this.processRemovedNodes(mutation.removedNodes);\n            this.processAddedNodes(mutation.addedNodes);\n        }\n    };\n    ElementObserver.prototype.processAttributeChange = function (node, attributeName) {\n        var element = node;\n        if (this.elements.has(element)) {\n            if (this.delegate.elementAttributeChanged && this.matchElement(element)) {\n                this.delegate.elementAttributeChanged(element, attributeName);\n            }\n            else {\n                this.removeElement(element);\n            }\n        }\n        else if (this.matchElement(element)) {\n            this.addElement(element);\n        }\n    };\n    ElementObserver.prototype.processRemovedNodes = function (nodes) {\n        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {\n            var node = _a[_i];\n            var element = this.elementFromNode(node);\n            if (element) {\n                this.processTree(element, this.removeElement);\n            }\n        }\n    };\n    ElementObserver.prototype.processAddedNodes = function (nodes) {\n        for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {\n            var node = _a[_i];\n            var element = this.elementFromNode(node);\n            if (element && this.elementIsActive(element)) {\n                this.processTree(element, this.addElement);\n            }\n        }\n    };\n    // Element matching\n    ElementObserver.prototype.matchElement = function (element) {\n        return this.delegate.matchElement(element);\n    };\n    ElementObserver.prototype.matchElementsInTree = function (tree) {\n        if (tree === void 0) { tree = this.element; }\n        return this.delegate.matchElementsInTree(tree);\n    };\n    ElementObserver.prototype.processTree = function (tree, processor) {\n        for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {\n            var element = _a[_i];\n            processor.call(this, element);\n        }\n    };\n    ElementObserver.prototype.elementFromNode = function (node) {\n        if (node.nodeType == Node.ELEMENT_NODE) {\n            return node;\n        }\n    };\n    ElementObserver.prototype.elementIsActive = function (element) {\n        if (element.isConnected != this.element.isConnected) {\n            return false;\n        }\n        else {\n            return this.element.contains(element);\n        }\n    };\n    // Element tracking\n    ElementObserver.prototype.addElement = function (element) {\n        if (!this.elements.has(element)) {\n            if (this.elementIsActive(element)) {\n                this.elements.add(element);\n                if (this.delegate.elementMatched) {\n                    this.delegate.elementMatched(element);\n                }\n            }\n        }\n    };\n    ElementObserver.prototype.removeElement = function (element) {\n        if (this.elements.has(element)) {\n            this.elements.delete(element);\n            if (this.delegate.elementUnmatched) {\n                this.delegate.elementUnmatched(element);\n            }\n        }\n    };\n    return ElementObserver;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0lBUUUseUJBQVksT0FBZ0IsRUFBRSxRQUFpQztRQUEvRCxpQkFPQztRQU5DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBRXhCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUE7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUNqRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDZjtJQUNILENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7U0FDckI7SUFDSCxDQUFDO0lB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\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/mutation-observers/dist/src/element_observer.js?')},"./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: TokenListObserver */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });\n/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");\n/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "./node_modules/@stimulus/multimap/dist/index.js");\n\n\nvar TokenListObserver = /** @class */ (function () {\n    function TokenListObserver(element, attributeName, delegate) {\n        this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);\n        this.delegate = delegate;\n        this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"];\n    }\n    Object.defineProperty(TokenListObserver.prototype, "started", {\n        get: function () {\n            return this.attributeObserver.started;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    TokenListObserver.prototype.start = function () {\n        this.attributeObserver.start();\n    };\n    TokenListObserver.prototype.stop = function () {\n        this.attributeObserver.stop();\n    };\n    TokenListObserver.prototype.refresh = function () {\n        this.attributeObserver.refresh();\n    };\n    Object.defineProperty(TokenListObserver.prototype, "element", {\n        get: function () {\n            return this.attributeObserver.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(TokenListObserver.prototype, "attributeName", {\n        get: function () {\n            return this.attributeObserver.attributeName;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    // Attribute observer delegate\n    TokenListObserver.prototype.elementMatchedAttribute = function (element) {\n        this.tokensMatched(this.readTokensForElement(element));\n    };\n    TokenListObserver.prototype.elementAttributeValueChanged = function (element) {\n        var _a = this.refreshTokensForElement(element), unmatchedTokens = _a[0], matchedTokens = _a[1];\n        this.tokensUnmatched(unmatchedTokens);\n        this.tokensMatched(matchedTokens);\n    };\n    TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {\n        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));\n    };\n    TokenListObserver.prototype.tokensMatched = function (tokens) {\n        var _this = this;\n        tokens.forEach(function (token) { return _this.tokenMatched(token); });\n    };\n    TokenListObserver.prototype.tokensUnmatched = function (tokens) {\n        var _this = this;\n        tokens.forEach(function (token) { return _this.tokenUnmatched(token); });\n    };\n    TokenListObserver.prototype.tokenMatched = function (token) {\n        this.delegate.tokenMatched(token);\n        this.tokensByElement.add(token.element, token);\n    };\n    TokenListObserver.prototype.tokenUnmatched = function (token) {\n        this.delegate.tokenUnmatched(token);\n        this.tokensByElement.delete(token.element, token);\n    };\n    TokenListObserver.prototype.refreshTokensForElement = function (element) {\n        var previousTokens = this.tokensByElement.getValuesForKey(element);\n        var currentTokens = this.readTokensForElement(element);\n        var firstDifferingIndex = zip(previousTokens, currentTokens)\n            .findIndex(function (_a) {\n            var previousToken = _a[0], currentToken = _a[1];\n            return !tokensAreEqual(previousToken, currentToken);\n        });\n        if (firstDifferingIndex == -1) {\n            return [[], []];\n        }\n        else {\n            return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];\n        }\n    };\n    TokenListObserver.prototype.readTokensForElement = function (element) {\n        var attributeName = this.attributeName;\n        var tokenString = element.getAttribute(attributeName) || "";\n        return parseTokenString(tokenString, element, attributeName);\n    };\n    return TokenListObserver;\n}());\n\nfunction parseTokenString(tokenString, element, attributeName) {\n    return tokenString.trim().split(/\\s+/).filter(function (content) { return content.length; })\n        .map(function (content, index) { return ({ element: element, attributeName: attributeName, content: content, index: index }); });\n}\nfunction zip(left, right) {\n    var length = Math.max(left.length, right.length);\n    return Array.from({ length: length }, function (_, index) { return [left[index], right[index]]; });\n}\nfunction tokensAreEqual(left, right) {\n    return left && right && left.index == right.index && left.content == right.content;\n}\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fbGlzdF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b2tlbl9saXN0X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBNkIsTUFBTSxzQkFBc0IsQ0FBQTtBQUNuRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFjN0M7SUFLRSwyQkFBWSxPQUFnQixFQUFFLGFBQXFCLEVBQUUsUUFBbUM7UUFDdEYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksUUFBUSxDQUFBO0lBQ3JDLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsaUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsc0JBQUksc0NBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFBO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsOEJBQThCO0lB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\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js?')},"./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js ***!
  \***********************************************************************************/
/*! exports provided: ValueListObserver */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });\n/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "./node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");\n\nvar ValueListObserver = /** @class */ (function () {\n    function ValueListObserver(element, attributeName, delegate) {\n        this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);\n        this.delegate = delegate;\n        this.parseResultsByToken = new WeakMap;\n        this.valuesByTokenByElement = new WeakMap;\n    }\n    Object.defineProperty(ValueListObserver.prototype, "started", {\n        get: function () {\n            return this.tokenListObserver.started;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    ValueListObserver.prototype.start = function () {\n        this.tokenListObserver.start();\n    };\n    ValueListObserver.prototype.stop = function () {\n        this.tokenListObserver.stop();\n    };\n    ValueListObserver.prototype.refresh = function () {\n        this.tokenListObserver.refresh();\n    };\n    Object.defineProperty(ValueListObserver.prototype, "element", {\n        get: function () {\n            return this.tokenListObserver.element;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(ValueListObserver.prototype, "attributeName", {\n        get: function () {\n            return this.tokenListObserver.attributeName;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    ValueListObserver.prototype.tokenMatched = function (token) {\n        var element = token.element;\n        var value = this.fetchParseResultForToken(token).value;\n        if (value) {\n            this.fetchValuesByTokenForElement(element).set(token, value);\n            this.delegate.elementMatchedValue(element, value);\n        }\n    };\n    ValueListObserver.prototype.tokenUnmatched = function (token) {\n        var element = token.element;\n        var value = this.fetchParseResultForToken(token).value;\n        if (value) {\n            this.fetchValuesByTokenForElement(element).delete(token);\n            this.delegate.elementUnmatchedValue(element, value);\n        }\n    };\n    ValueListObserver.prototype.fetchParseResultForToken = function (token) {\n        var parseResult = this.parseResultsByToken.get(token);\n        if (!parseResult) {\n            parseResult = this.parseToken(token);\n            this.parseResultsByToken.set(token, parseResult);\n        }\n        return parseResult;\n    };\n    ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {\n        var valuesByToken = this.valuesByTokenByElement.get(element);\n        if (!valuesByToken) {\n            valuesByToken = new Map;\n            this.valuesByTokenByElement.set(element, valuesByToken);\n        }\n        return valuesByToken;\n    };\n    ValueListObserver.prototype.parseToken = function (token) {\n        try {\n            var value = this.delegate.parseValueForToken(token);\n            return { value: value };\n        }\n        catch (error) {\n            return { error: error };\n        }\n    };\n    return ValueListObserver;\n}());\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWVfbGlzdF9vYnNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZV9saXN0X29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxpQkFBaUIsRUFBNkIsTUFBTSx1QkFBdUIsQ0FBQTtBQWEzRjtJQU1FLDJCQUFZLE9BQWdCLEVBQUUsYUFBcUIsRUFBRSxRQUFzQztRQUN6RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLE9BQU8sQ0FBQTtRQUN0QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxPQUFPLENBQUE7SUFDM0MsQ0FBQztJQUVELHNCQUFJLHNDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUE7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxpQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xDLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUE7UUFDN0MsQ0FBQzs7O09BQUE7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsS0FBWTtRQUNmLElBQUEsdUJBQU8sQ0FBVTtRQUNqQixJQUFBLGtEQUFLLENBQXlDO1FBQ3RELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbEQ7SUFDSCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLEtBQVk7UUFDakIsSUFBQSx1QkFBTyxDQUFVO1FBQ2pCLElBQUEsa0RBQUssQ0FBeUM7UUFDdEQsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3BEO0lBQ0gsQ0FBQztJQUVPLG9EQUF3QixHQUFoQyxVQUFpQyxLQUFZO1FBQzNDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUNqRDtRQUNELE9BQU8sV0FBVyxDQUFBO0lBQ3BCLENBQUM7SUFFTyx3REFBNEIsR0FBcEMsVUFBcUMsT0FBZ0I7UUFDbkQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQTtZQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtTQUN4RDtRQUNELE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTyxzQ0FBVSxHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQUk7WUFDRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JELE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFBO1NBQ2pCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQTtTQUNqQjtJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkMifQ==\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js?')},"./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js"), __esModule: true };\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/core-js/array/from.js?')},"./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js"), __esModule: true };\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/core-js/object/create.js?')},"./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/core-js/object/define-property.js?')},"./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/core-js/object/get-prototype-of.js?')},"./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/core-js/object/set-prototype-of.js?')},"./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/core-js/symbol.js?')},"./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/core-js/symbol/iterator.js?')},"./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError("Cannot call a class as a function");\n  }\n};\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/helpers/classCallCheck.js?')},"./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if ("value" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/helpers/createClass.js?')},"./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== "function" && superClass !== null) {\n    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/helpers/inherits.js?')},"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");\n  }\n\n  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;\n};\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?')},"./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nexports.__esModule = true;\n\nvar _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");\n\nvar _from2 = _interopRequireDefault(_from);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  } else {\n    return (0, _from2.default)(arr);\n  }\n};\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/helpers/toConsumableArray.js?')},"./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {\n  return typeof obj === "undefined" ? "undefined" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);\n};\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/babel-runtime/helpers/typeof.js?')},"./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");\n__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/fn/array/from.js?')},"./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/fn/object/create.js?')},"./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/fn/object/define-property.js?')},"./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/fn/object/get-prototype-of.js?')},"./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/fn/object/set-prototype-of.js?')},"./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/fn/symbol/index.js?')},"./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f(\'iterator\');\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/fn/symbol/iterator.js?')},"./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_a-function.js?")},"./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_add-to-unscopables.js?")},"./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_an-object.js?")},"./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_array-includes.js?')},"./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_classof.js?")},"./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */function(module,exports){eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_cof.js?")},"./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */function(module,exports){eval("var core = module.exports = { version: '2.6.0' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_core.js?")},"./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\nvar $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\n\nmodule.exports = function (object, index, value) {\n  if (index in object) $defineProperty.f(object, index, createDesc(0, value));\n  else object[index] = value;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_create-property.js?')},"./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_ctx.js?')},"./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */function(module,exports){eval('// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError("Can\'t call method on  " + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_defined.js?')},"./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_descriptors.js?")},"./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;\n// typeof document.createElement is \'object\' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_dom-create.js?')},"./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */function(module,exports){eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_enum-bug-keys.js?")},"./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");\nvar pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_enum-keys.js?')},"./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar PROTOTYPE = \'prototype\';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != \'function\' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == \'function\' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_export.js?')},"./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_fails.js?")},"./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */function(module,exports){eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_global.js?")},"./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */function(module,exports){eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_has.js?")},"./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_hide.js?')},"./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_html.js?')},"./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")(\'div\'), \'a\', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_ie8-dom-define.js?')},"./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_iobject.js?")},"./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'iterator\');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_is-array-iter.js?')},"./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_is-array.js?")},"./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_is-object.js?")},"./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_iter-call.js?")},"./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\nvar create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'iterator\'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + \' Iterator\');\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_iter-create.js?')},"./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_iter-define.js?")},"./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_iter-detect.js?")},"./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_iter-step.js?")},"./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = {};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_iterators.js?")},"./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = true;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_library.js?")},"./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_meta.js?")},"./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-create.js?")},"./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-dp.js?")},"./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-dps.js?')},"./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-gopd.js?')},"./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-gopn-ext.js?")},"./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-gopn.js?")},"./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports){eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-gops.js?")},"./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")(\'IE_PROTO\');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == \'function\' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-gpo.js?')},"./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")(\'IE_PROTO\');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don\'t enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-keys-internal.js?')},"./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-keys.js?')},"./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports){eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-pie.js?")},"./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), \'Object\', exp);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_object-sap.js?')},"./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */function(module,exports){eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_property-desc.js?")},"./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_redefine.js?')},"./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// Works with __proto__ only. Old v8 can\'t work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can\'t set as prototype!");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || (\'__proto__\' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, \'__proto__\').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_set-proto.js?')},"./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'toStringTag\');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_set-to-string-tag.js?')},"./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")(\'keys\');\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_shared-key.js?')},"./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_shared.js?")},"./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? \'\' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_string-at.js?')},"./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_to-absolute-index.js?')},"./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports){eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_to-integer.js?")},"./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_to-iobject.js?')},"./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_to-length.js?')},"./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_to-object.js?')},"./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_to-primitive.js?")},"./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */function(module,exports){eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_uid.js?")},"./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");\nvar LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != \'_\' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_wks-define.js?')},"./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_wks-ext.js?')},"./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/_wks.js?")},"./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")(\'iterator\');\nvar Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");\nmodule.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it[\'@@iterator\']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/core.get-iterator-method.js?')},"./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\nvar ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");\nvar toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");\nvar createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");\n\n$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), \'Array\', {\n  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)\n  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n    var O = toObject(arrayLike);\n    var C = typeof this == \'function\' ? this : Array;\n    var aLen = arguments.length;\n    var mapfn = aLen > 1 ? arguments[1] : undefined;\n    var mapping = mapfn !== undefined;\n    var index = 0;\n    var iterFn = getIterFn(O);\n    var length, result, step, iterator;\n    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);\n    // if object isn\'t iterable or it\'s array with default iterator - use simple case\n    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {\n      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {\n        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);\n      }\n    } else {\n      length = toLength(O.length);\n      for (result = new C(length); length > index; index++) {\n        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n      }\n    }\n    result.length = index;\n    return result;\n  }\n});\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.array.from.js?')},"./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.array.iterator.js?")},"./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, \'Object\', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.object.create.js?')},"./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), \'Object\', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.object.define-property.js?')},"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");\n\n__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")(\'getPrototypeOf\', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?')},"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\n$export($export.S, \'Object\', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?')},"./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */function(module,exports){eval("\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.object.to-string.js?")},"./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\nvar $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, \'String\', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.string.iterator.js?')},"./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");\nvar has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");\nvar $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");\nvar redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");\nvar META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");\nvar shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");\nvar uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");\nvar wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");\nvar isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");\nvar anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");\nvar isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");\nvar _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");\nvar $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");\nvar $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = \'prototype\';\nvar HIDDEN = wks(\'_hidden\');\nvar TO_PRIMITIVE = wks(\'toPrimitive\');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared(\'symbol-registry\');\nvar AllSymbols = shared(\'symbols\');\nvar OPSymbols = shared(\'op-symbols\');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == \'function\';\nvar QObject = global.QObject;\n// Don\'t use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, \'a\', {\n    get: function () { return dP(this, \'a\', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == \'symbol\' ? function (it) {\n  return typeof it == \'symbol\';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError(\'Symbol is not a constructor!\');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], \'toString\', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {\n    redefine(ObjectProto, \'propertyIsEnumerable\', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  \'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables\'\n).split(\',\'), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, \'Symbol\', {\n  // 19.4.2.1 Symbol.for(key)\n  \'for\': function (key) {\n    return has(SymbolRegistry, key += \'\')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + \' is not a symbol!\');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, \'Object\', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != \'[null]\' || _stringify({ a: S }) != \'{}\' || _stringify(Object(S)) != \'{}\';\n})), \'JSON\', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == \'function\') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, \'Symbol\');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, \'Math\', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, \'JSON\', true);\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es6.symbol.js?')},"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?")},"./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/es7.symbol.observable.js?")},"./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/core-js/library/modules/web.dom.iterable.js?")},"./node_modules/stimulus/index.js":
/*!****************************************!*\
  !*** ./node_modules/stimulus/index.js ***!
  \****************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "./node_modules/@stimulus/core/dist/index.js");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });\n\n\n\n\n//# sourceURL=webpack://StimulusPlaceholdable/./node_modules/stimulus/index.js?')},"./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");\n\n\n\n\n\n// Visit The Stimulus Handbook for more details\n// https://stimulusjs.org/handbook/introduction\n//\n// This example controller works with specially annotated HTML like:\n//\n//<div class="relative" data-controller="dropdown">\n//  <div data-action="click->dropdown#toggle click@window->dropdown#hide" role="button" class="inline-block select-none">\n//    Open Dropdown\n//  </div>\n//  <div data-target="dropdown.menu" class="absolute pin-r mt-2 hidden">\n//    <div class="bg-white shadow rounded border overflow-hidden">\n//      Content\n//    </div>\n//  </div>\n//</div>\n\n\n\nvar _class = function (_Controller) {\n  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(_class, _Controller);\n\n  function _class() {\n    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _class);\n\n    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_class.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(_class)).apply(this, arguments));\n  }\n\n  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_class, [{\n    key: \'connect\',\n    value: function connect() {\n      this.toggleClass = this.data.get(\'class\') || \'hidden\';\n    }\n  }, {\n    key: \'toggle\',\n    value: function toggle() {\n      this.menuTarget.classList.toggle(this.toggleClass);\n    }\n  }, {\n    key: \'hide\',\n    value: function hide() {\n      if (this.element.contains(event.target) === false) {\n        this.menuTarget.classList.add(this.toggleClass);\n      }\n    }\n  }]);\n\n  return _class;\n}(stimulus__WEBPACK_IMPORTED_MODULE_5__["Controller"]);\n\n_class.targets = [\'menu\'];\n/* harmony default export */ __webpack_exports__["default"] = (_class);\n\n//# sourceURL=webpack://StimulusPlaceholdable/./src/dropdown.js?')},"./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");\n\n\n\n\n\n// Visit The Stimulus Handbook for more details\n// https://stimulusjs.org/handbook/introduction\n//\n// This example controller works with specially annotated HTML like:\n//\n//<div data-controller="modal">\n//<button data-action="click->modal#open">Open Modal</button>\n\n//<div data-target="modal.container" class="hidden">\n//<div class="fixed z-50 pin-t pin-l w-full h-full table" style="background-color: rgba(0, 0, 0, .5);">\n//<div data-target="modal.background" data-action="click->modal#closeBackground" class="table-cell align-middle">\n\n//<div class="bg-white w-64 mx-auto rounded shadow p-8">\n//<h2>Content</h2>\n//<button>Does nothing</button>\n//<button data-action="click->modal#close">Close</button>\n//</div>\n\n//</div>\n//</div>\n//</div>\n//</div>\n\n\n\nvar _class = function (_Controller) {\n  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(_class, _Controller);\n\n  function _class() {\n    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _class);\n\n    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_class.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(_class)).apply(this, arguments));\n  }\n\n  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_class, [{\n    key: \'connect\',\n    value: function connect() {\n      this.toggleClass = this.data.get(\'class\') || \'hidden\';\n    }\n  }, {\n    key: \'open\',\n    value: function open(e) {\n      e.preventDefault();\n\n      // Add right padding to the body so the page doesn\'t shift\n      // when we disable scrolling\n      var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;\n      document.body.style.paddingRight = scrollbarWidth + \'px\';\n\n      // Set overflow hidden to prevent scrolling of background\n      // This must happen after the scrollbar calculation\n      document.body.style.overflow = \'hidden\';\n\n      // Unhide the modal\n      this.containerTarget.classList.remove(this.toggleClass);\n    }\n  }, {\n    key: \'close\',\n    value: function close(e) {\n      e.preventDefault();\n\n      // Remove tweaks for scrollbar\n      document.body.style.paddingRight = null;\n      document.body.style.overflow = null;\n\n      // Hide the modal\n      this.containerTarget.classList.add(this.toggleClass);\n    }\n  }, {\n    key: \'closeBackground\',\n    value: function closeBackground(e) {\n      if (e.target === this.backgroundTarget) {\n        this.close(e);\n      }\n    }\n  }]);\n\n  return _class;\n}(stimulus__WEBPACK_IMPORTED_MODULE_5__["Controller"]);\n\n_class.targets = [\'background\', \'container\'];\n/* harmony default export */ __webpack_exports__["default"] = (_class);\n\n//# sourceURL=webpack://StimulusPlaceholdable/./src/modal.js?')},"./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ \"./node_modules/babel-runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stimulus */ \"./node_modules/stimulus/index.js\");\n\n\n\n\n\n\n\n\nvar _class = function (_Controller) {\n  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_class, _Controller);\n\n  function _class() {\n    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _class);\n\n    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_class.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_1___default()(_class)).apply(this, arguments));\n  }\n\n  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_class, [{\n    key: 'initialize',\n    value: function initialize() {\n      this.activeTabClasses = (this.data.get('activeTab') || 'active').split(' ');\n      this.showTab();\n    }\n  }, {\n    key: 'change',\n    value: function change(event) {\n      event.preventDefault();\n      this.index = this.tabTargets.indexOf(event.currentTarget);\n    }\n  }, {\n    key: 'showTab',\n    value: function showTab() {\n      var _this2 = this;\n\n      this.tabTargets.forEach(function (tab, index) {\n        var panel = _this2.panelTargets[index];\n        panel.classList.toggle('hidden', index != _this2.index);\n\n        if (index === _this2.index) {\n          var _tab$classList;\n\n          (_tab$classList = tab.classList).add.apply(_tab$classList, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this2.activeTabClasses));\n        } else {\n          var _tab$classList2;\n\n          (_tab$classList2 = tab.classList).remove.apply(_tab$classList2, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this2.activeTabClasses));\n        }\n      });\n    }\n  }, {\n    key: 'index',\n    get: function get() {\n      return parseInt(this.data.get('index') || 0);\n    },\n    set: function set(value) {\n      this.data.set('index', value);\n      this.showTab();\n    }\n  }]);\n\n  return _class;\n}(stimulus__WEBPACK_IMPORTED_MODULE_6__[\"Controller\"]);\n\n_class.targets = ['tab', 'panel'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (_class);\n\n//# sourceURL=webpack://StimulusPlaceholdable/./src/tabs.js?")},"./src/toggle.js":
/*!***********************!*\
  !*** ./src/toggle.js ***!
  \***********************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");\n/* harmony import */ var babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");\n/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");\n/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");\n/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");\n/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");\n\n\n\n\n\n\n\nvar _class = function (_Controller) {\n  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(_class, _Controller);\n\n  function _class() {\n    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _class);\n\n    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_class.__proto__ || babel_runtime_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(_class)).apply(this, arguments));\n  }\n\n  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_class, [{\n    key: \'connect\',\n    value: function connect() {\n      this.toggleClass = this.data.get(\'class\') || \'hidden\';\n    }\n  }, {\n    key: \'toggle\',\n    value: function toggle(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n\n      this.toggleableTargets.forEach(function (target) {\n        target.classList.toggle(_this2.toggleClass);\n      });\n    }\n  }]);\n\n  return _class;\n}(stimulus__WEBPACK_IMPORTED_MODULE_5__["Controller"]);\n\n_class.targets = [\'toggleable\'];\n/* harmony default export */ __webpack_exports__["default"] = (_class);\n\n//# sourceURL=webpack://StimulusPlaceholdable/./src/toggle.js?')}})});

/***/ }),
/* 36 */
/*!********************************************************!*\
  !*** ./app/javascript/controllers/hello_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stimulus__ = __webpack_require__(/*! stimulus */ 0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>



var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "connect",
    value: function connect() {
      this.outputTarget.textContent = 'Hello, Stimulus!';
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_0_stimulus__["b" /* Controller */]);

Object.defineProperty(_class, "targets", {
  enumerable: true,
  writable: true,
  value: ["output"]
});
/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),
/* 37 */
/*!******************************************************************!*\
  !*** ./app/javascript/controllers/language_filter_controller.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stimulus__ = __webpack_require__(/*! stimulus */ 0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "toggleList",
    value: function toggleList() {
      this.listTarget.classList.toggle("hide");
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_0_stimulus__["b" /* Controller */]);

Object.defineProperty(_class, "targets", {
  enumerable: true,
  writable: true,
  value: ["list"]
});
/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),
/* 38 */
/*!*******************************************************!*\
  !*** ./app/javascript/controllers/tabs_controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stimulus__ = __webpack_require__(/*! stimulus */ 0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "initialize",
    value: function initialize() {
      this.activate();
    }
  }, {
    key: "activate",
    value: function activate() {
      var target = event.currentTarget;
      if (target == document) {
        target = this.tabTarget;
      }

      this.tabTargets.forEach(function (tab) {
        tab.removeAttribute("data-tabs-activated");
        if (tab == target) {
          tab.setAttribute("data-tabs-activated", true);
        }
      });
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_0_stimulus__["b" /* Controller */]);

Object.defineProperty(_class, "targets", {
  enumerable: true,
  writable: true,
  value: ["tab"]
});
/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),
/* 39 */
/*!*****************************************************************!*\
  !*** ./app/javascript/controllers/time_localizer_controller.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_stimulus__ = __webpack_require__(/*! stimulus */ 0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _class = function (_Controller) {
  _inherits(_class, _Controller);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "initialize",
    value: function initialize() {
      this.utc_to_local();
      this.sort_options_by_time();
    }
  }, {
    key: "utc_to_local",
    value: function utc_to_local() {
      Array.from(this.element.options).forEach(function (option) {
        var time = new Date(option.value);
        option.text = LocalTime.strftime(time, "%H:%M %Z");
      });
    }
  }, {
    key: "sort_options_by_time",
    value: function sort_options_by_time() {
      var sorted_options = Array.from(this.element.options).sort(function (a, b) {
        return a.text == b.text ? 0 : a.text < b.text ? -1 : 1;
      });

      this.element.innerHTML = sorted_options.map(function (x) {
        return x.outerHTML;
      });
    }
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_0_stimulus__["b" /* Controller */]);

Object.defineProperty(_class, "targets", {
  enumerable: true,
  writable: true,
  value: []
});
/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ })
/******/ ]);
//# sourceMappingURL=application-3dfc682f7c3636c69ad3.js.map