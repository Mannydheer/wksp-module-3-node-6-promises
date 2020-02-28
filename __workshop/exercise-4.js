// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
// 
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
// 
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.



// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function



function getAddressPosition(address) {
    const requestObj = {
        key: '61d17eb8768f4ff7a1349eb34d9963fc',
        q: address
    };
    //sending obejct to the API
    return opencage.geocode(requestObj)
        .then(data => { //data is what we got back from server**
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



// ------------------------------------

const request = require('request-promise');

//this is what we will send to the server and wait for a response. 

const opencage = require('opencage-api-client');

function getCurrentTemperatureAtPosition(position) {

    return request(`https://api.darksky.net/forecast/4aad8f60d04a28d0e1ac6b81454a7c98/${position.lat},${position.long}`)
        .then(res => {
            const newLocation = JSON.parse(res);

            return {
                currentTemp: newLocation.currently.temperature
                //returning to the other upper return.
            }

        })

        .then(res => console.log(res))
}

// getCurrentTemperatureAtPosition({
//     long: 45.5017,
//     lat: 73.5673
// })
// ---------------------------------------


    




function getCurrentTemperature(address) {


getAddressPosition(address)
  .then(holder => { //holder is holding the coordinates. 
      getCurrentTemperatureAtPosition({
          long: holder.lat,
          lat: holder.lng
      })
  })

  
}

getCurrentTemperature('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');