const searchButton = document.querySelector('form')

searchButton.addEventListener('submit', redirect)

function redirect(e){
    e.preventDefault()
            location.href = 'results.html'

        }






