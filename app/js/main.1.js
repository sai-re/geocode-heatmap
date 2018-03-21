document.addEventListener("DOMContentLoaded", function (event) {
    const geocodePostcodes = () => {
        let count = 0;
        
        ///////
        const sendRequest = (url, requestType, data) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open(requestType, url, true);
                request.onload = handleResponse;
                request.onerror = error => reject(error);
                request.send(data);

                function handleResponse() {
                    if (request.status >= 200 && request.status < 400) {
                        console.log("request sent");
                        resolve(this.responseText);
                    } else {
                        reject(this.statusText);
                    }
                }
            });
        };

        ///////
        const sendLatLng = (postcode, lat, lng) => {
            const url = "http://localhost/sai-xampp/heatmap-es6/app/dist/data.php";

            const data = new FormData();
            data.append('postcode', postcode);
            data.append('lat', lat);
            data.append('lng', lng);

            count++;
            console.log(count);
            sendRequest(url, 'POST', data);
        };

        ///////
        const geocodeAddress = postcode => {
            const geocoder = new google.maps.Geocoder();
            let lat,
                lng;

            geocoder.geocode({'address': postcode}, (results, status) => {
                if (status === 'OK') {
                    let x;
                    const resultsLength = results.length;

                    for(x = 0; x < resultsLength; x++) {
                        lat = results[x].geometry.location.lat().toFixed(8);
                        lng = results[x].geometry.location.lng().toFixed(8);
                        sendLatLng(postcode, lat, lng);
                    }
                } 
                else if (status == 'OVER_QUERY_LIMIT') {
                    setTimeout(function() {
                        geocodeAddress(postcode);
                    }, 200);
                }
                else {
                    console.log('Geocode was not successful: ' + status);
                }
            });
        };

        ///////
        const getPostcodes = existingPostcodes => {
            const url = "http://localhost/sai-xampp/datasite/test-version/api.hurford-salvi-carr.co.uk/sodsurvey/";

            const handlePostcode = response => {
                const json = JSON.parse(response);
                const postcodesArray = [];
                let i;

                for (i in json) {
                    postcodesArray.push(json[i].from_postcode);
                }

                const postcodes = postcodesArray.filter(Boolean).filter((item, index, inputArray) => inputArray.indexOf(item) == index);

                existingPostcodes.sort();
                postcodes.sort();

                const postcodeLength = postcodes.length;
                let n;

                for (n = 0; n < postcodeLength; n++) {
                    if (existingPostcodes[n] === postcodes[n]) {
                        console.log("already geocoded");
                    } else {
                        geocodeAddress(postcodes[n]);
                    }
                }
            }
            
            sendRequest(url, "GET").then(handlePostcode).catch(err => console.log(err));
        }

        ///////
        const checkExistingPoscodes = () => {
            const url = "http://localhost/sai-xampp/heatmap-es6/app/dist/json.php";

            const handleExistingPostcode = response => {
                const existingPostcodes = JSON.parse(response);
                const array = [];
                let i;
                    
                for (i in existingPostcodes) {
                    array.push(existingPostcodes[i].postcode);
                }

                return array;
            }

            sendRequest(url, "GET").then(handleExistingPostcode)
            .then(getPostcodes)
            .catch(err => console.log(err));
        }

        checkExistingPoscodes();
    }

    const geocodeBtn = document.getElementById("geocodeBtn");

    if (geocodeBtn) {
        geocodeBtn.addEventListener("click", () => geocodePostcodes());
    }
    
    if (window.location.pathname === "/sai-xampp/heatmap-es6/app/dist/heatmap.html") {
        const renderHeatmap = () => {
            const url = "http://localhost/sai-xampp/heatmap-es6/app/dist/json.php";
    
            const sendRequest = (url, requestType) => {
                return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                    request.open(requestType, url, true);
                    request.onload = handleResponse;
                    request.onerror = error => reject(error);
                    request.send();
    
                    function handleResponse() {
                        if (request.status >= 200 && request.status < 400) {
                            console.log("request sent");
                            resolve(this.responseText);
                        } else {
                            reject(this.statusText);
                        }
                    }
                });
            };
    
            const callMap = response => {
                const cordinates = JSON.parse(response);

                const heatmapData = {
                    data: []
                };

                const myLatlng = new google.maps.LatLng(54.5257126, -5.3650851);

                const myOptions = {
                    zoom: 6,
                    scrollwheel: false,
                    scaleControl: false,
                    center: myLatlng
                };

                const map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    
                const heatmap = new HeatmapOverlay(map, {
                    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
                    "radius": 0.3,
                    "maxOpacity": 0.5,
                    // scales the radius based on map zoom
                    "scaleRadius": true,
                    // if set to false the heatmap uses the global maximum for colorization
                    // if activated: uses the data maximum within the current map boundaries 
                    //   (there will always be a red spot with useLocalExtremas true)
                    "useLocalExtrema": true,
                    // which field name in your data represents the latitude - default "lat"
                    latField: 'lat',
                    // which field name in your data represents the longitude - default "lng"
                    lngField: 'lng',
                    // which field name in your data represents the data value - default "value"
                    valueField: 'count'
                });

                let i;
                for (i in cordinates) {
                    heatmapData.data.push({
                        lat: cordinates[i].lat,
                        lng: cordinates[i].lng
                    });
                }
    
                heatmap.setData(heatmapData);
            }
            
            sendRequest(url, "GET").then(callMap).catch(err => console.log(err));
        }
    
        renderHeatmap();
    };
}());