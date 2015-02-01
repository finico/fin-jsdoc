angular.module('common').factory('Parent', function($log, $modal) {
    /**
     * @class common.Parent
     * @requires $log
     * @requires $modal
     */
    function Parent() {
        /**
         * @type {String}
         * @private
         * @name common.Parent#name
         */
        this.name = '';
    };

    /**
     * @method common.Parent.init
     * @return {Parent} instance of Parent
     */
    Parent.init = function() {
        return new Parent();
    };

    /**
     * установка имени
     * @method common.Parent#setName
     * @protected
     * @param {String} name
     * @example
     * ```js
     * var parent = new Parent();
     * parent.setName('John');
     * ```
     * ```html
     * <div ng-bind="::name"></div>
     * ```
     */
    Parent.prototype.setName = function(name) {
        this.name = name;
    };

    /**
     * получение имени
     * @method common.Parent#getName
     * @return {String} имя
     */
    Parent.prototype.getName = function() {
        return this.name;
    };

    return Parent;
});

