angular.module('personnel').factory('Person', function($log) {
	/**
	 * @class personnel.Person
	 * @requires ng.$log
	 * @param {String} name имя для человека
	 */
	function Person(name) {
		/**
		 * @member {String} personnel.Person#name
		 */
		this.name = name;

		/**
		 * @member {number} personnel.Person#age
		 * @default null
		 */
		this.age = null;

		this.setName('hello');
		$log.debug(this.getName());
	}

	/**
	 * @method personnel.Person#setName
	 * @param {String} name новое имя
	 */
	Person.prototype.setName = function(name) {
		this.name = name;
	};

	/**
	 * @method personnel.Person#getName
	 * @return {String} имя
	 */
	Person.prototype.getName = function() {
		return this.name;
	};

	/**
	 * @method personnel.Person#doSomething
	 * @param {Event} $event что-то
	 * @return {String} что-то плюс 'hello'
	 * @emits click focus
	 */
	Person.prototype.doSomething = function($event) {
		console.log(so + 'hello');
	};

	return Person;	
});