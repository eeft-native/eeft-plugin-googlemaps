var event = require('eeft-plugin-googlemaps.event'),
  BaseClass = require('eeft-plugin-googlemaps.BaseClass'),
  BaseArrayClass = require('eeft-plugin-googlemaps.BaseArrayClass'),
  execCmd = require('eeft-plugin-googlemaps.commandQueueExecutor'),
  cordovaGoogleMaps = new(require('eeft-plugin-googlemaps.js_CordovaGoogleMaps'))(execCmd);

module.exports = {
  event: event,
  Animation: {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
  },
  BaseClass: BaseClass,
  BaseArrayClass: BaseArrayClass,
  Map: {
    getMap: cordovaGoogleMaps.getMap.bind(cordovaGoogleMaps)
  },
  StreetView: {
    getPanorama: cordovaGoogleMaps.getPanorama.bind(cordovaGoogleMaps),
    Source: {
      DEFAULT: 'DEFAULT',
      OUTDOOR: 'OUTDOOR'
    }
  },
  HtmlInfoWindow: require('eeft-plugin-googlemaps.HtmlInfoWindow'),
  LatLng: require('eeft-plugin-googlemaps.LatLng'),
  LatLngBounds: require('eeft-plugin-googlemaps.LatLngBounds'),
  MapTypeId: require('eeft-plugin-googlemaps.MapTypeId'),
  environment: require('eeft-plugin-googlemaps.Environment'),
  Geocoder: require('eeft-plugin-googlemaps.Geocoder')(execCmd),
  LocationService: require('eeft-plugin-googlemaps.LocationService')(execCmd),
  geometry: {
    encoding: require('eeft-plugin-googlemaps.encoding'),
    spherical: require('eeft-plugin-googlemaps.spherical'),
    poly: require('eeft-plugin-googlemaps.poly')
  }
};

cordova.addConstructor(function () {
  if (!window.Cordova) {
    window.Cordova = cordova;
  }
  window.plugin = window.plugin || {};
  window.plugin.google = window.plugin.google || {};
  window.plugin.google.maps = window.plugin.google.maps || module.exports;
});
