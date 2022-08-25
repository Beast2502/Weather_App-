export const setLocationObject =(locationObj,coordsObj) =>{
    const {lat,lon,name, unit} = coordsObj;
    locationObj.setLat(lat);
    locationObj.setLon(lon);
    locationObj.setName(name);
    if(unit){
        locationObj.setUnit(unit);
    }
}


export const getHomeLocation =() =>{
    return localStorage.getItem("defaulfweatherlocation")
}


export const getCordsFromApi= async(entryText ,units) =>{
    const regex = /^\d+4/g;
    const flag = regex.test(entryText) ? 'zip' :'q';
    const url = ``
}


export const cleanText = (text) =>{
    const regex = / {2,}/g;
    const entryText = text.replaceAll(regex, " ").trim();
    return entryText;
}