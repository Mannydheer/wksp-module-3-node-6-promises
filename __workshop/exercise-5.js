// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

// // Euclidian distance between two points
// function getDistance(pos1, pos2) {
//     return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
// }

// // Given an address (a string), returns the distance between that address and the ISS
// // You'll need to use getDistance, getIssPosition and getAddressPosition
// function getDistanceFromIss(address) {

// }



// ------------------------------------------------------------
const request = require('request-promise');
const opencage = require('opencage-api-client');


function getAddressPosition(address) {
    const requestObj = {
        key: '61d17eb8768f4ff7a1349eb34d9963fc',
        q: address
    };
    //sending obejct to the API
    return opencage.geocode(requestObj)
        .then(data => { //data is what we got back from server** Wheatever response is given will go to the data., 
            //if it is ok
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    let holder = place.geometry;
                    return holder;
                }
            } else {
                // other possible response codes:
                // https://opencagedata.com/api#codes
                console.log('error', data.status.message);
            }
        })
        .catch(error => console.log('error', error.message));
}

    // ------------------------------------------------------------
    function getIssPosition() {
        //this will 
        return request('http://api.open-notify.org/iss-now.json')
            .then(response => {
                const newObj = JSON.parse(response);
    
    
                return {
                    lat: newObj.iss_position.latitude,
                    lng: newObj.iss_position.longitude
                };
    
            })
            //why remove??? think.
            // .then(data => console.log(data));
    
    }
    
    // ------------------------------------------------------------

// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
    
    const promiseOne = getAddressPosition(address)
    const promiseTwo = getIssPosition();

    //in an array
    return Promise.all([promiseOne,promiseTwo])
    .then(result => {
        // console.log(getDistance)

        return getDistance(result[0],result[1])
        
    })
}

getDistanceFromIss('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
.then(result => {
    console.log(result)
})
