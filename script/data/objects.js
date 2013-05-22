/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 5:31
 * To change this template use File | Settings | File Templates.
 */
"use strict";

var Database = Database || {};

Database.objects = (function(){
	var request = new XMLHttpRequest();
	request.open('GET', 'objects.json', false);
	request.send(null);
	if(request.status == 200) {
		console.log(xmlhttp.responseText);
	}
})();