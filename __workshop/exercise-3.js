// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position

//require it.
console.log("ex 3")
const request = require('request-promise');

//this is what we will send to the server and wait for a response. 


function getCurrentTemperatureAtPosition(position) {

    return request(`https://api.darksky.net/forecast/4aad8f60d04a28d0e1ac6b81454a7c98/${position.lat},${position.long}`)
        .then(res => {
            const newLocation = JSON.parse(res);

            return {
                currentTemp: newLocation.currently.temperature
            }

        })

        // .then(res => console.log(res))
}

//So in callback fucntions

//this returns the temperature as a promise. 
getCurrentTemperatureAtPosition({
    long: 45.5017,
    lat: 73.5673

})
// .then(temp => {
//     console.log(temp)
// })


