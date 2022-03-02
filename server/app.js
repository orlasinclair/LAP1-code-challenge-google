const express = require('express')
const app = express()
const cors = require('cors');


app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

const searchResults = [

    { id: 1, result: "https://www.w3schools.com/whatis/whatis_fullstack.asp#:~:text=A%20full%20stack%20web%20developer,ASP%2C%20Python%2C%20or%20Node)", title: "What is full stack-W3Schools",description: "A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he/she also knows how to: Program a browser (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)" },
    { id: 2, result: "https://www.geeksforgeeks.org/what-is-full-stack-development/",title: "What is full stack development ? - GeeksforGeeks", description: "Full stack development: It refers to the development of both front end(client side) and back end(server side) portions of web application." },
    { id: 3, result: "https://careerfoundry.com/en/blog/web-development/what-is-a-full-stack-web-developer/",title:"What is a Full-Stack Web Developer Exactly? A Complete Guide", description: "ull-stack developers are experts in both the frontend and backend; so, the full-stack of technology that makes up a website. They are ..."},
    { id: 4, result: "https://www.lewagon.com/tech-jobs/web-development/full-stack-developer",title:"What Does A Full Stack Developer Do? | Le Wagon", description: "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack ..."},
    { id: 5, result: "https://bootcamp.learn.utoronto.ca/blog/what-is-a-full-stack-developer/",title:"What is a Full Stack Developer? Back End + Front End", description: "What is Full Stack Development? ... A full stack developer is someone who works with both the front end and back end of a web application. The ..."},
    { id: 6, result: "https://skillcrush.com/blog/front-end-back-end-full-stack/",title:"What Is a Full Stack Developer & What Do They Do?", description: "Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the ..."},
    { id: 7, result:"https://skillcrush.com/blog/front-end-back-end-full-stack/" ,title:"What is a Full Stack Developer? Find out here! - Skillcrush", description: "What's the difference between a full stack web developer and full stack engineer? — Full stack development includes pretty much any project where you're ..."},
    { id: 8, result:"https://www.youtube.com/watch?v=8KaJRw-rfn8&ab_channel=Simplilearn" ,title:"Become a Full Stack Web Developer - Udacity", description: "As a full stack web developer, you'll have an active hand in implementing relationship databases, configure and deploy your applications to the cloud, and build ..."},
    { id: 9, result:"https://www.bloomtech.com/article/difference-between-full-stack-backend-development" ,title:"What Is a Full Stack Developer? (And the Skills They Need)", description: "Full stack development refers to web development taking place in both the front and back ends of a website. In other words, the process may involve a ..."},
    { id: 10, result: "https://letsgodojo.com/what-is-a-full-stack-developer-and-why-it-matters-to-your-website/",title:"How to Become a Full Stack Developer (Step-by-Step Guide)", description: "This is where full stack development comes in. “Full stack” refers to the entirety of a site or application's front and back end architecture. As you might ..."},
];

app.get('/results', (req,res)=> {
    res.json(searchResults)
})

function getRandomresult(){
    var randomResult= searchResults[Math.floor(Math.random()*searchResults.length)];
    return randomResult
}

app.get('/results/random', (req,res) =>{
    let randomR = getRandomresult();
    res.json(randomR)
  })

module.exports={app}
