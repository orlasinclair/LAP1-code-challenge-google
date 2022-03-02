const searchButton = document.querySelector('form')

searchButton.addEventListener('submit', redirect)

function redirect(e){
    e.preventDefault()
            location.href = 'results.html'

        }


// const randomButton = document.querySelector('#random-search-btn')

// randomButton.addEventListener('submit', randomRedirect)

// function randomRedirect(e){
//     e.preventDefault()
//     location.href = 'results.html'
// }



