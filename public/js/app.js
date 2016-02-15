'use strict';

var App = angular.module('app', [
	'appControllers',
	'appDirectives',
	'appServices',
	'appFilters',
	'ngResource',
	'ui.bootstrap',
	'ui.router'
]);

var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);
var appServices = angular.module('appServices', []);
var appFilters = angular.module('appFilters', []);

App.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider
	.otherwise('/')
	.when('/', '/login');

	$stateProvider
	.state('nav', {
		abstract: true,
		url: '/',
		views: {
			'nav': {
				templateUrl: '/partials/nav.html',
				controller: 'navCtrl'
			}
		}
	})
	.state('nav.login', {
		url: 'login',
		templateUrl: '/partials/login.html',
		controller: 'loginCtrl'
	})
	.state('nav.home', {
		url: 'home/:id',
		templateUrl: '/partials/home.html',
		controller: 'homeCtrl'
	})
});
