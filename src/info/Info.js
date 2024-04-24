import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;



export const info = {
    firstName: "Garrett",
    lastName: "Sullivan",
    initials: "GS", 
    position: "A Web Dev Student",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Currently looking for work!"
        },
        {
            emoji: "📧",
            text: "Gsullivan7402@gmail.com"
        }
    ],
    socials: [
       
        {
            link: "https://www.instagram.com/garrettmsullivan/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Gsullivan7402",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/garrett-sullivan-623283293/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       

    ],
    bio: "Hi, my name is Garrett Sullivan. I come from a background of customer facing roles. currently pivoting to the tech industry, focusing on web design through intensive training of HTML, CSS, and Javascript. ",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', ],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
        {
            title: "snout-route",
            source: "https://github.com/JohnChewning/Snout-Route", 
            image: mock1
        },
        {
            title: "Penny Wise",
            live: "https://gsullivan7402.github.io/finance-app/",
            source: "https://github.com/Gsullivan7402/finance-app",
            image: mock2
        },
        {
            title: "BlogIT",
            source: "https://github.com/Gsullivan7402/BlogIT",
           
        },
    ]
}