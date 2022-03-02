window.addEventListener('load', getResults)

function getResults(e){
    e.preventDefault()
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

// let randomResult = r[result[Math.floor(Math.random() * result.length)]];


