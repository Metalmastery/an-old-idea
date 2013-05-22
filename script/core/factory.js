/**
* Created with JetBrains PhpStorm.
* User: Медведь
* Date: 19.05.13
* Time: 5:54
* To change this template use File | Settings | File Templates.
*/
"use strict";

var Factory = function(db, constructors, ses){

	console.log('=======');

	this.error = false;

	try {
		if (!db) throw "Factory: can't get access to DB";
		if (!constructors) throw "Factory: Core.constructors not found";
	} catch (e){
		console.error(e);
		this.error = true;
	}

	var db = db || {};
	var constructors = constructors || {};

	this.spawn = function(item){

		if (typeof item !== 'string') return null;

		var holder = item.split('.')[0] || null;
		var item = item.split('.')[1] || null;
		if (!holder && item) return null;

		var fillObjectByPattern = function(){
			var holder  = arguments[0];
			var item  = arguments[1];
			if (holder.length && item.length) {
				console.log(holder + ' -> ' + item);
				if (db[holder] && db[holder][item]) {
					for (var field in db[holder][item]) {
						if (typeof constructors[field] === "function") {
							console.log('using constructor for: ' + field);
							constructors[field].apply(this, [db[holder][item][field]]);
						} else {
							if (field === 'base' && db[holder][item]['base']) {
								fillObjectByPattern.apply(this, [holder, db[holder][item]['base']]);
							} else {
								newObject[field] = db[holder][item][field];
							}
						}
					}
				}
			}
		};

		var newObject = {};
		fillObjectByPattern.apply(newObject, [holder, item]);

		if (ses) ses.send('created', newObject);

		return newObject;
	}
};





