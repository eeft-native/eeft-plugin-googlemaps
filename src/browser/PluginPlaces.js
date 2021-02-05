var BaseArrayClass = require('eeft-plugin-googlemaps.BaseArrayClass');
var TAG = 'PluginPlaces.js: ';
var places = null;
places = new google.maps.Places();
console.log(TAG + ' created places');

if (!places) {
	console.log(TAG + ' no places');
  return;
}
console.log(TAG + ' has valid places');

places.testFunc('Test', function(results, status) {
	console.log(TAG + ' testFunc call');
	return results;
});

module.exports = {
  'testFunc': function(onSuccess, onError, args) {
  var request = args[0];
	console.log(TAG + ' exports got request ' + request);

	places.testFunc(request, function(results, status) {
		console.log(TAG + ' exports testFunc');
		onSuccess(TAG + request);
  }
};

require('cordova/exec/proxy').add('PluginPlaces', module.exports);
