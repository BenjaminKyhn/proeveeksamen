function getWeatherDataNaestved(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if ((this.readyState === 4 && this.status === 200) || this.status === 304) {
            let myObj = JSON.parse(this.responseText);
            return myObj;
        }
    };
    xmlhttp.open("GET", "https://vejr.eu/api.php?location=N%C3%A6stved&degree=C", true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
}

module.exports = { getWeatherDataNaestved }