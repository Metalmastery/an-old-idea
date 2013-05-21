/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 6:36
 * To change this template use File | Settings | File Templates.
 */
var Constructors = {
    test : function(){
        this.test = arguments[0] + ' test';
    },

    randomWeight : function(){
        var def = [0, 100];
        var param = (typeof arguments[0] === "object" && arguments[0].length === 2) ? arguments[0] : def;
        this.weight = Math.random() * (param[1] - param[0]) + param[0];
    },

    innerObject : function(){
        if (! typeof arguments[0] === 'function' && arguments[0].length) return false;
        this.innerObject = Factory('Objects', arguments[0]);
    }
};