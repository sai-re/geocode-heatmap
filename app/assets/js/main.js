import {Geocode} from './modules/geocode';
import {Heatmap} from './modules/heatmap';

document.addEventListener("DOMContentLoaded", function (event) {
    Geocode.init()
    Heatmap.init()
}());