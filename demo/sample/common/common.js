/**
 * @namespace common
 * @requires personnel
 */
angular.module('common', ['personnel']).config(function($stateProvider) {

	$stateProvider.state('common', {
		url: '/',
		template: '<div></div>',
		controller: 'MainController as main'
	});

});