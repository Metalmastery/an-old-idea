/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 5:54
 * To change this template use File | Settings | File Templates.
 */
"use strict";
var Factory = function(holder, item){

    var fillObjectByPattern = function(){
        var holder  = arguments[0];
        var item  = arguments[1];
        if (holder.length && item.length) {
            console.log(holder + ' -> ' + item);
            if (window[holder] && window[holder][item]) {
                for (var field in window[holder][item]) {
                    if (Constructors && typeof Constructors[field] === "function") {
                        console.log('function found');
                        Constructors[field].apply(this, [window[holder][item][field]]);
                    } else {
                        if (field === 'base' && window[holder][item]['base']) {
                            fillObjectByPattern.apply(this, ['Objects', window[holder][item]['base']]);
                        } else {
                            newObject[field] = window[holder][item][field];
                        }
                    }
                }
            }
        }
    };

    var newObject = {};
    fillObjectByPattern.apply(newObject, [holder, item]);

    SES.send('created', newObject);

    console.log(newObject);
    return newObject;
};