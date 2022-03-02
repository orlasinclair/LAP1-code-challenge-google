const searchButton = document.getElementById('submit-btn')

searchButton.addEventListener('submit', redirect)

function redirect(e){
        e.preventDefault()
            location.href = 'results.html'
            console.log('hello')

        }


const randomButton = document.getElementById('random-btn')

randomButton.addEventListener('submit', randomRedirect)

function randomRedirect(e){
    e.preventDefault()
    fetch('http://localhost:3000/results/random')
    .then(function(res){
        res.json().then(function(json){
            let result = json.result
           location.href = result
            console.log(result)
            console.log("hello")
        })
    })
}

// const clickedLogo = document.getElementById('logo');
// clickedLogo.addEventListener('click', redirectPage);

// function redirectPage(e){
//     e.preventDefault()
//     window.location.replace("/index.html");
// };
