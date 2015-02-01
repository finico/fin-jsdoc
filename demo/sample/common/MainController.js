angular.module('common').controller('MainController', 
/**
 * Main Controller
 * @class common.MainController
 * @param {$scope} $scope
 * @param {$log} $log
 * @param {ui.router.$state} $state
 */
function MainController($scope, $log, $state) {

    /**
     * Title
     * @member {String} common.MainController#title
     */
    this.title = 'title';

    /**
     * List
     * @member {personnel.Person[]} common.MainController#list
     */
    this.list = [];

    /**
     * activity status
     * @member {boolean} common.MainController#active
     */
    this.active = false;

});
