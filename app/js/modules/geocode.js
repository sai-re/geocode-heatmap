let i;

const Geocode = {
    variables: {
        geocodeBtn: document.getElementById("geocodeBtn")
    },
    init: function() {
        i = this.variables;
        
        if (i.geocodeBtn) {
            i.geocodeBtn.addEventListener("click", () => this.geocodePostcodes());
        }
    },
    geocodePostcodes: () => {
        let count = 0;
        let heatmapBtn = document.getElementById("heatmapBtn");

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
        const sendLatLng = (postcode, lat, lng, length) => {
            const url = "http://localhost/sai-xampp/heatmap-es6/app/dist/data.php";

            const data = new FormData();
            data.append('postcode', postcode);
            data.append('lat', lat);
            data.append('lng', lng);

            count++;
            console.log(count);

            if(count === length) {
                console.log("geocode complete");
                heatmapBtn.classList.add("show-btn");
            }

            sendRequest(url, 'POST', data);
        };

        ///////
        const geocodeAddress = (postcode, length) => {
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
                        sendLatLng(postcode, lat, lng, length);
                    }
                } 
                else if (status == 'OVER_QUERY_LIMIT') {
                    setTimeout(function() {
                        geocodeAddress(postcode, length);
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
                let n,
                    c = 0;

                for (n = 0; n < postcodeLength; n++) {
                    if (existingPostcodes[n] === postcodes[n]) {
                        c++
                        console.log("already geocoded");
                    } else {
                        geocodeAddress(postcodes[n], postcodeLength);
                    }
                }
                
                if (c === postcodeLength) {
                    heatmapBtn.classList.add("show-btn");
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
}

export {Geocode};