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
            let table = document.querySelector("table");
            let data = [];
            data = Object.keys(jsondata[0]);
            tableHead(table, data);
            tableData(table, jsondata);
            console.warn(JSON.stringify(jsondata));
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
}

function tableHead(table, data) {
    let head = table.createTHead();
    head.classList.add('thead-dark');
    let row = head.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.id = key;
        th.appendChild(text);
        row.appendChild(th);
    }

}
function tableData(table, data) {
    console.warn('data in tabledata', data);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    for (let element of data) {
        let row = table.insertRow();
        tbody.appendChild(row);
        for (let key in element) {
            let cell = row.insertCell();
            let cellValue = element[key];
            let text = document.createTextNode(cellValue);
            cell.appendChild(text);
        }
        // createCell(row, element, 'id');
        // createCell(row, element, 'fName');
        // createCell(row, element, 'lName');
        // createCell(row, element, 'phone');
    }
}

function createCell(row, element, key) {
    let cell = row.insertCell();
    let cellValue = element[key];
    let text = document.createTextNode(cellValue);
    cell.appendChild(text);
}
