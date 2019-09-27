import 'bootstrap/dist/css/bootstrap.css'

let url = 'https://camillastaunstrup.dk/Backend/api/person/';
document.addEventListener("DOMContentLoaded", function () {
    fetchUsers(url);
    // setInterval(function () { resetTable(url); fetchUsers(url); }, 10000);
});

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function fetchUsers(url) {
    fetch(url)
        .then(handleHttpErrors)
        .then(jsondata => {
            document.getElementById('allusers').innerHTML = JSON.stringify(jsondata);
            console.warn(JSON.stringify(jsondata));
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
}



