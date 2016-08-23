(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mobxReact = mobxReact;
var observer = _mobxReact.observer;

var Hello = observer(_class = function (_React$Component) {
	_inherits(Hello, _React$Component);

	function Hello(props) {
		_classCallCheck(this, Hello);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Hello).call(this, props));

		_this.props = props;
		_this.store = props.route.store;
		return _this;
	}

	_createClass(Hello, [{
		key: "changeName",
		value: function changeName() {
			this.store.name = Math.random();
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ onClick: this.changeName.bind(this) },
				"Hello, ",
				this.store.name,
				"! : ",
				this.store.nombres
			);
		}
	}]);

	return Hello;
}(React.Component)) || _class;

module.exports = Hello;

},{}],2:[function(require,module,exports){
'use strict';

var _ReactRouter = ReactRouter;
var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var IndexLink = _ReactRouter.IndexLink;
var Link = _ReactRouter.Link;
var browserHistory = _ReactRouter.browserHistory;
var withRouter = _ReactRouter.withRouter;


var Hello = require('../front/Hello.jsx');
var store = require('../store/store.jsx');

var app = function app() {
	ReactDOM.render(React.createElement(
		Router,
		{ history: browserHistory, onUpdate: function onUpdate() {
				return window.scrollTo(0, 0);
			} },
		React.createElement(Route, { path: '/', store: store, component: Hello })
	), document.getElementById('app'));
};
app();

},{"../front/Hello.jsx":1,"../store/store.jsx":3}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var _mobx = mobx;
var extendObservable = _mobx.extendObservable;
var observable = _mobx.observable;
var transaction = _mobx.transaction;
var computed = _mobx.computed;
var Store = (_class = function () {
	function Store() {
		_classCallCheck(this, Store);

		_initDefineProp(this, "name", _descriptor, this);

		this.name = 'Ivan';
	}

	_createClass(Store, [{
		key: "nombres",
		get: function get() {
			return this.name + " " + this.name;
		}
	}]);

	return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [observable], {
	enumerable: true,
	initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "nombres", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "nombres"), _class.prototype)), _class);

var store = new Store();
module.exports = store;

},{}]},{},[2]);
