/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 5:31
 * To change this template use File | Settings | File Templates.
 */
"use strict";
var Objects = {
    baseObject : {

    },

    baseItem : {
        base : "baseObject",
        carry : 1
    },

    material : {
        base : "baseItem"

    },

    testObject : {
        base: "baseItem",
        test : 1,
        test2 : 2,
        randomWeight: [5, 40],
        rndomWeight: [5, 40]
    },

    testObject2 : {
        base: 'testObject',
        append : 111,
        innerObject : 'material'
    }

};