/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 8:49
 * To change this template use File | Settings | File Templates.
 */
var cl = function(){
    console.log('callback');
    SES.send('another');
};

var cl2 = function(){
    console.log('another callback');
};

document.getElementById('clickable').onclick = function(){
    SES.send('spawn');
}

SES.connect('spawn', function(){
    Factory('Objects', 'baseItem')
});

SES.connect('created', function(){
    console.log(arguments);
    document.getElementById('clickable').innerHTML = JSON.stringify(arguments[0], '', 4);
});