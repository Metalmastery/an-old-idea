/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 7:56
 * To change this template use File | Settings | File Templates.
 */
function SES(){
	"use strict";
	var signals = { };

	this.connect = function(signal, func){
		console.log('+ connected');
		if (! typeof signal === 'string' && typeof func === 'function' && signal.length) return false;
		if (typeof signals[signal] !== 'object') signals[signal] = [];
		console.log(signals[signal].indexOf(func));
		if (signals[signal].indexOf(func) < 0) signals[signal].push(func);
		return true;
	};

	this.disconnect = function(signal, func){
		console.log('- disconnected');
		if (! typeof signal === 'string' && typeof func === 'function' && signal.length && typeof signals[signal] === 'object') return false;
		var found = signals[signal].indexOf(func);
		if (found >= 0) signals[signal][found] = null;
		return true;
	};

	this.send = function(signal){
		console.log('! send signal "' + signal + '"');
		console.log(arguments);
		if (! typeof signal === 'string' && signal.length && typeof signals[signal] === 'object') return false;
		for (var callback in signals[signal]){
			typeof signals[signal][callback] === 'function' ? signals[signal][callback](arguments.length > 0 ? arguments[1] : '') : '';
		}
		return true;
	}
};
