
function geoSuccess(success) {

    console.log(success);

}

navigator.geolocation.getCurrentPosition(geoSuccess);