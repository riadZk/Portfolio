const html = './images/html5-badge-h-solo.png'
const css = "./images/css.png"
const javascript = "./images/javascript.png"
const bootstrap = "./images/bootstrap.png"
const next = "./images/next.png"
const react = "./images/react.png"
const wordpress = "./images/wordpress-6942722_640.webp"
const laravel = "./images/laravel.png"
const php = "./images/PHP-logo.svg.png"
const tailwindcss = "./images/images.png"
const postman = "./images/postman.png"
const express = './images/express.png'
const mysql = "./images/mysql.png"
const mongodb = "./images/mongodb.png"
const git = "./images/git.svg"
const github = "./images/github.png"
const visual = "./images/visual.png"

const site1 = "./images/restaurant.png";
const shop = "./images/shop.png";
//const portfolioImg03 = "../images/4SITE1.png";
const portfolio = "./images/site5.png";
const salle = "./images/salle.jpg";
const game = "./images/game.jpg";

const skills = [
    {
      Title: "Frontend",
      skills: [
        {
          name: "HTML", 
          image: html,
        },
        {
          name: "CSS",
          image:css
        },
        {
          name: "JavaScript",
          image:javascript
        },
        {
          name: "Bootstrap",
          image:bootstrap,
        },
        {
          name: "React Js",
          image:react
        },
        {
          name: "Tailwindcss",
          image:tailwindcss
          },
  
        {
          name: "Next Js",
          image:next
        },
      ],
    },
    {
      Title: "Backend",
      skills: [
        {
          name: "php",
          image:php
        },
        {
          name: "Laravel",
          image:laravel
        },
        {
          name: "Express Js",
          image:express,
        },
        {
          name: "MySQL",
          image:mysql,
        },
        {
          name: "MongoDB",
          image:mongodb
        }
      ],
    },
    {
      Title: "Others",
      skills: [
        {
          name: "Git",
          image:git
        },
        {
          name: "GitHub",
          image:github
        
        },
        {
          name: "VS Code",
          image:visual
        },
        {
          name:'wordpress',
          image:wordpress
       },
       {
        name:'postman',
        image:postman
       }
      ],
    },
  ];



  const portfolios = [
    {
      ImgSrc: site1,
      Title: "SavorSphere",
      Description:'website restaurant',
      Technologies: ["Nextjs", "Tailwind css", "Express", "MongoDB"],
      UrlP: "https://github.com/riadZk/Restaurant",
    },
    {
      ImgSrc: shop,
      Title: "OwenShop",
      Description:"An attractive and user-friendly online store to showcase and sell a variety of products.",
      Technologies: ["Reactjs", "Tailwind css", "Node.js", "MongoDB"],
      UrlP: "https://github.com/riadZk/OwenShop",
    },
    {
      ImgSrc: portfolio,
      Title: "Portfolio",
      Description:"Personal website",
      Technologies: ["Reactjs", "Tailwind css","Express", "MongoDB"],
      UrlP: "https://github.com/riadZk/Restaurant",
    },
    {
      ImgSrc: salle,
      Title: "Salle Sport",
      Description:"web application for a sports center's account.",
      Technologies: ["Reactjs", "Tailwind css", "Node.js", "MongoDB"],
      UrlP: "https://github.com/riadZk/SportsCenter",
    },
    {
      ImgSrc:game ,
      Title: "EGAMIA",
      Description:"shopping article gaming",
      Technologies: ["Reactjs", "Bootstrap"],
      UrlP: "https://github.com/riadZk/EGAMIA",
    }
  ];

  module.exports = {
    skills,
    portfolios
  }