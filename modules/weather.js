function getWeatherDataNaestved(){
    console.log("0")
    let xmlhttp = new XMLHttpRequest();
    console.log("1")
    xmlhttp.onreadystatechange = function () {
        console.log("2")
        if ((this.readyState === 4 && this.status === 200) || this.status === 304) {
            console.log("3")
            let myObj = JSON.parse(this.responseText);
            console.log("test")
        }
    };
    xmlhttp.open("GET", "https://vejr.eu/api.php?location=N%C3%A6stved&degree=C", true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send();
}

module.exports = { getWeatherDataNaestved }