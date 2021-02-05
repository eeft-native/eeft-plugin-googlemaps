var common = require('./Common'),
  utils = require('cordova/utils');

//import isFunction from "lodash/isFunction";

var Places = function(exec) {
  function _errorHandler(err) {
    console.error(err);
  }
  return {
  	testFunc: function(params, callback, errorCallback) {
      var self = this;

			console.log('testFunc: start');

      var resolver = function(resolve, reject)
      {
        exec.call({
          _isReady: true
        },
        function(args) {
          resolve.call(self, args);
        },
        reject.bind(self), 'PluginPlaces', 'testFunc', [params], {sync: true});
      };

			console.log('testFunc: resolver');

      var errorHandler = function(result) {
        if (typeof errorCallback === 'function') {
          errorCallback.call(self, result);
        } else {
          (self.errorHandler || _errorHandler).call(self, result);
        }
      };
      if (typeof callback === 'function') {
				console.log('testFunc: callback function');
        resolver(callback, errorHandler);
        return self;
      } else {
				console.log('testFunc: promised resolver');
        return new Promise(resolver);
      }
    }  //END: testFunc() {
	};	//END: return {
};	//END: Places() {


// ## Filters for the `autocompleteQuery` method.
const AutocompleteFilterTypes = {
  // - `AutocompleteFilterTypes.NoFilter` is an empty filter; all results are returned.
  NoFilter: "no_filter",
  // - `AutocompleteFilterTypes.Geocode` returns only autocomplete results with a precise address. Use this type when you know the user is looking for a fully specified address.
  Geocode: "geocode",
  // - `AutocompleteFilterTypes.Address` returns only places that are businesses.
  Address: "address",
  // - `AutocompleteFilterTypes.Establishment` returns only places that are businesses.
  Establishment: "establishment",
  // - `AutocompleteFilterTypes.Region` returns only places that match one of the following types: `locality`, `sublocality`, `postal_code`, `country`, `administrative_area_level_1`, `administrative_area_level_2`
  Region: "region",
  // - `AutocompleteFilterTypes.City` returns only results matching `locality` or `administrative_area_level_3`.
  City: "city",
};

module.exports.AutocompleteFilterTypes = AutocompleteFilterTypes;
module.exports = Places;
