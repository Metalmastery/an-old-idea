/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 7:56
 * To change this template use File | Settings | File Templates.
 */
"use strict";
var SES = {
    signals : {

    },
    connect : function(signal, func){
        console.log('+ connected');
        if (! typeof signal === 'string' && typeof func === 'function' && signal.length) return false;
        if (typeof this.signals[signal] !== 'object') this.signals[signal] = [];
        console.log(this.signals[signal].indexOf(func));
        if (this.signals[signal].indexOf(func) < 0) this.signals[signal].push(func);
    },

    disconnect : function(signal, func){
        console.log('- disconnected');
        if (! typeof signal === 'string' && typeof func === 'function' && signal.length && typeof this.signals[signal] === 'object') return false;
        var found = this.signals[signal].indexOf(func);
        if (found >= 0) this.signals[signal][found] = null;
    },
    send : function(signal){
        console.log('! send signal "' + signal + '"');
        console.log(arguments);
        if (! typeof signal === 'string' && signal.length && typeof this.signals[signal] === 'object') return false;
        for (var callback in this.signals[signal]){
            typeof this.signals[signal][callback] === 'function' ? this.signals[signal][callback](arguments.length > 0 ? arguments[1] : '') : '';
        }
    }
};
