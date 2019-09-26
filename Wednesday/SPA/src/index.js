import 'bootstrap/dist/css/bootstrap.css'

let url = 'http://localhost:3333/api/users/';
document.addEventListener("DOMContentLoaded", function () {
    fetchUsers(url);
    setInterval(function () { resetTable(url); fetchUsers(url); }, 10000);
});

document.getElementById("submituserid").addEventListener('click', function (event) {
    event.preventDefault();
    singleuser();
});

document.getElementById("submitedituser").addEventListener('click', function (event) {
    event.preventDefault();
    edituser();
});

document.getElementById("submitadduser").addEventListener('click', function (event) {
    event.preventDefault();
    adduser();
});

document.getElementById("submitdeleteid").addEventListener('click', function (event) {
    event.preventDefault();
    deleteUser();
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
        createCell(row, element, 'id');
        createCell(row, element, 'age');
        createCell(row, element, 'name');
        createCell(row, element, 'gender');
        createCell(row, element, 'email');
    }
}

function createCell(row, element, key) {
    let cell = row.insertCell();
    let cellValue = element[key];
    let text = document.createTextNode(cellValue);
    cell.appendChild(text);
}

function resetTable() {
    let oldtable = document.getElementById("usertable");
    oldtable.innerHTML = "";
}

function singleuser() {
    let id = document.getElementById('useridinput').value;
    if(!id){
        document.getElementById('singleuser').innerHTML = 'Type in an ID'
    }
    else{
        let urlID = 'http://localhost:3333/api/users/' + id;

    fetch(urlID)
        .then(handleHttpErrors)
        .then(jsondata => {
            getUserToEdit(jsondata);
            document.getElementById('singleuser').innerHTML = JSON.stringify(jsondata);
        })
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
    }
}

function adduser() {
    let urlAdd = 'http://localhost:3333/api/users/';

    let postHeaders = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: document.getElementById('addage').value,
            name: document.getElementById('addname').value,
            gender: document.getElementById('addgender').value,
            email: document.getElementById('addemail').value
        })
    };
    fetch(urlAdd, postHeaders)
        .then(handleHttpErrors)
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
    emptyInputs();
}

function getUserToEdit(jsondata) {
    document.getElementById('editage').value = jsondata['age'];
    document.getElementById('editname').value = jsondata['name'];
    document.getElementById('editgender').value = jsondata['gender'];
    document.getElementById('editemail').value = jsondata['email'];
    document.getElementById('editid').value = jsondata['id'];
}

function edituser() {
    let id = document.getElementById('editid').value;
    let urlAdd = 'http://localhost:3333/api/users/' + id;

    let putHeaders = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: document.getElementById('editage').value,
            name: document.getElementById('editname').value,
            gender: document.getElementById('editgender').value,
            email: document.getElementById('editemail').value,
            id: document.getElementById('editid').value
        })
    };
    fetch(urlAdd, putHeaders)
        .then(handleHttpErrors)
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
    emptyInputs();
}

function deleteUser() {
    let id = document.getElementById('editid').value;
    let urlAdd = 'http://localhost:3333/api/users/' + id;

    let deleteHeaders = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    fetch(urlAdd, deleteHeaders)
        .then(handleHttpErrors)
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        });
    emptyInputs();
}

function emptyInputs() {
    document.getElementById('editage').value = '';
    document.getElementById('editname').value = '';
    document.getElementById('editgender').value = '';
    document.getElementById('editemail').value = '';
    document.getElementById('editid').value = '';
    document.getElementById('useridinput').value = '';
    document.getElementById('addage').value = '';
    document.getElementById('addname').value = '';
    document.getElementById('addgender').value = '';
    document.getElementById('addemail').value = '';
    document.getElementById('singleuser').innerText = '';
}