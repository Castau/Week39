import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

// const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
// document.getElementById("jokes").innerHTML = allJokes.join("");

// document.getElementById("submit").addEventListener('click', function(){
//     getjokebyid();
// });
// document.getElementById("addsubmit").addEventListener('click', function(){
//     addjoke();
// });

// function getjokebyid(){
//     let id = document.getElementById('input').value;
//     if(id && id < jokes.getJokes().length){
//         document.getElementById('foundjoke').innerHTML = jokes.getJokes()[id];
//     }
//     else{
//         document.getElementById('foundjoke').innerHTML = 'wrong input';
//     }
// }

// function addjoke(){
//     let newjoke = document.getElementById('addinput').value;
//     if(newjoke){
//         jokes.addJoke(newjoke);
//         document.getElementById('addp').innerHTML = 'joke added';
//         document.getElementById('addinput').value = '';
//     }
//     else{
//         document.getElementById('addp').innerHTML = 'wrong input';
//     }
// }

document.getElementById("submit3").addEventListener('click', function(){
    fetchjoke();
});
document.addEventListener("DOMContentLoaded", function () {
    setInterval(fetchjoke, 3000); // every hour = 3600000
});

function fetchjoke(){
    let url = "https://studypoints.info/jokes/api/jokes/random";

    fetch(url)
        .then(res => res.json())
        .then(randomjoke => {
            document.getElementById('rndjoke').innerHTML = randomjoke["joke"];
        });
}
