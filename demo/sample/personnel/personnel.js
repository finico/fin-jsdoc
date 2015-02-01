/**
 * @namespace personnel
 */
angular.module('personnel', []).config(function($stateProvider) {

	/**
	 * @external personnel
	 */
	$stateProvider.state('personnel', {
		url: '/personnel',
		template: '<div></div>',
		controller: 'PersonnelController as personnel'
	});

	/**
	 * @external personnel.person
	 */
	$stateProvider.state('personnel.person', {
		url: '/:id',
		template: '<div></div>',
		controller: 'PersonController as person'
	});

});