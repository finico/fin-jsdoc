angular.module('common').factory('Child', function($log, $modal, Parent) {
    /**
     * @class common.Child
     * @extends common.Parent
     * @requires ng.$log
     * @requires ui.bootstrap.$modal
     * @requires common.Parent
     */
    function Child() {
        
    };

    /**
     * метод ребенка
     * @method common.Child#isChild
     * @return {boolean}
     */
    Child.prototype.isChild = function() {
        return true;
    };

    return Child;
});

