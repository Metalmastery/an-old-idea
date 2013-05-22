/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 21.05.13
 * Time: 3:34
 * To change this template use File | Settings | File Templates.
 */
var Utils = {
	rad : function(arg){
		return arg * Math.PI / 180;
	},

	screenToIsometric : function(x ,y){
		return {
			x : (x / Math.cos(Utils.rad(30)) + y / Math.sin(Utils.rad(30))) / 2,
			y : (y / Math.sin(Utils.rad(30)) - x / Math.cos(Utils.rad(30))) / 2
		}
	},

	isometricToScreen : function(point){
		return {
			x : point.x * Math.cos(Utils.rad(30)) - point.y * Math.cos(Utils.rad(30)),
			y : point.x * Math.sin(Utils.rad(30)) + point.y * Math.sin(Utils.rad(30))
		}
	}

};
