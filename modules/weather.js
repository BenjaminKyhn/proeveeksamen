global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getWeatherDataNaestved(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://vejr.eu/api.php?location=N%C3%A6stved&degree=C", false); //async must be false
    xmlhttp.send();
    let data = JSON.parse(xmlhttp.responseText)
    return data;
}

module.exports = { getWeatherDataNaestved }