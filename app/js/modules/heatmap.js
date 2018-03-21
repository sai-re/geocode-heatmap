let i;

const Heatmap = {
    variables: {
        
    },

    init: function() {
        i = this.variables;
        
        if (window.location.pathname === "/sai-xampp/heatmap-es6/app/dist/heatmap.html") {
            this.renderHeatmap();
        }
    },
    
    renderHeatmap: () => {
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
}

export {Heatmap};