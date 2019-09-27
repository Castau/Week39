import 'bootstrap/dist/css/bootstrap.css'

let url = 'http://restcountries.eu/rest/v1/alpha?codes=';
document.getElementById("svg2").addEventListener("click", function (event) {
    document.getElementById("svgcountrytext").innerHTML = event.target.id;
    fetchCountry(url);
    colorCountry();
    console.warn('COUNTRY', chosenCountry);
});

let chosenCountry = '';

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function fetchCountry(url) {
    let id = document.getElementById("svgcountrytext").innerText;
    if(id === 'svg2'){
        document.getElementById('countrydata').innerHTML = 'CLICK ON A COUNTRY NOT THE OCEAN!'
        return;
    }
    let urlcomplete = url + id;
    fetch(urlcomplete)
        .then(handleHttpErrors)
        .then(jsondata => {
            document.getElementById('countrydata').innerHTML = JSON.stringify(jsondata);
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
}

function colorCountry(){
    let id = document.getElementById("svgcountrytext").innerText;
    if(chosenCountry){
        document.getElementById(chosenCountry).style.fill = "#c0c0c0";
    }
    chosenCountry = id;
    document.getElementById(id).style.fill = "red";
}
