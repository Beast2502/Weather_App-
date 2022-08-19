import { addSpinner ,displayError } from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";

const currentLoc = new CurrentLocation();


const initApp = () =>{
    // add listeners

    const geoButton = document.getElementById('getLocation');
    geoButton.addEventListener("click",getGeoWeather);

    //  set up

//     load weather
}

document.addEventListener("DOMContentLoaded",initApp);

const getGeoWeather = (event)=>{
    if(event){
        if(event.type === 'click'){
            // add spinner
            const mapIcon = document.querySelector(".fa-map-marker-alt");
            addSpinner(mapIcon);

        }
    }
    if(!navigator.geolocation) geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};


const geoError = (errObj) =>{
    const errMsg = errObj.message ? errObj.message : "Geo location not supported";
    displayError(errMsg,errMsg);
}

const geoSuccess = (position) =>{
    const myCoordsObj = {
        lat: position.coords.latitude,
        lon:position.coords.longitude,
        name: `Lat: ${position.coords.latitude} Long: ${position.coords.longitude}`
    };

    // set location object

    // update data and display
    

}