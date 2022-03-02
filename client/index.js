const searchButton = document.querySelector('form')

searchButton.addEventListener('submit', getResults)

function getResults(e){
    e.preventDefault()
    fetch('http://localhost:3000/results')
    .then(function(res){
        res.json().then(function(json){
            window.location.href = 'results.html'
            let result = document.querySelector('h1')
            result.textContent=json
            console.log(json)
        })
    })
}
