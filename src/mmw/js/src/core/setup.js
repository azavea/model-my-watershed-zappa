
// Setup shims and require third party dependencies in the correct order.
// For example, jQuery needs to exist before requiring boostrap.

// Global jQuery needed for Bootstrap plugins.
var $ = require('jquery');
window.jQuery = window.$ = $;

require('bootstrap');
require('bootstrap-select');

var L = require('leaflet');
require('leaflet-draw');
require('../../shim/leaflet.utfgrid');

// See: https://github.com/Leaflet/Leaflet/issues/766
L.Icon.Default.imagePath = '/static/images/';

var csrf = require('./csrf');
$.ajaxSetup(csrf.jqueryAjaxSetupOptions);

var ZeroClipboard = require('zeroclipboard');
ZeroClipboard.config({
    hoverClass: 'focus',
    activeClass: 'active'
});