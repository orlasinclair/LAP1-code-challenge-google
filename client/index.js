const searchButton = document.getElementById('submit-btn')
const homepage =document.getElementById('homepage')
const resultPage = document.getElementById('results-page')


searchButton.addEventListener('submit', getResults)

function getResults(e){
    e.preventDefault()
    if(resultPage.classList.contains('invisible')){
        resultPage.classList.remove('invisible')
        homepage.classList.add('invisible')
    }
    fetch('http://localhost:3000/results')
    .then(function(res){
        res.json().then(function(json){
            for(let r of json){
            let list = document.createElement('li')
            let link=document.createElement('a')
            let para = document.createElement('p')
            let result = r.result
            let resulttext= document.createTextNode(`${r.title}`)
            let description = document.createTextNode(`${r.description}`)
            para.appendChild(description)
            link.href= result
            link.appendChild(resulttext)
            list.appendChild(link)
            list.appendChild(para)
            console.log(result)
            let resultlist = document.querySelector('ul')
            resultlist.append(list)
        }})
})
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

let logoHome = document.getElementById('logo-result')
logoHome.addEventListener('click', returnHome)

function returnHome(){
    if (homepage.classList.contains('invisible')){
        homepage.classList.remove('invisible')
        resultPage.classList.add('invisible')
    }
}

