const projects = [
	{
		title: 'Trivial',
		description: 'This application was our capstone project for Turing. It is a progressive web application that uses a Jeopardy questions API for a multi-player trivia game. This app was built with a Node / Express server and Knex / postgreSQL database. The front end of the app was built with React, React Router, and utilizes Socket.io for cross user interaction.',
		image: '../styles/images/trivial.png',
		gitHubRepo: 'https://github.com/kamos1/trivial',
		siteURL: 'https://trivial123.herokuapp.com',
		techUsed: ['JavaScript', 'React', 'React Router', 'Socket.io', 'Node', 'Express', 'Knex', 'postgreSQL', 'webpack', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'SCSS', 'jService.io API', 'CircleCI'],
		icons: {
			gitHub: '../styles/images/github-logo.svg',
			site: '../syles/images/desktop.svg'
		}
	},
	{
		title: 'Get Out There',
		description: 'Get Out There is a hiking trail application built using React/Redux with React Router and uses Victory.JS for data visualization. The motivation for this app was as a personal project designed to aggregate hiking trail data easily while also solidfying my understanding of Redux. In its current format there is only a front end, but I plan to a backend so users can login, favorite trails, and rate them.',
		image: '../styles/images/getoutthere.png',
		gitHubRepo: 'https://github.com/jbevis/Get-Out-There',
		siteURL: 'https://jbevis.github.io/Get-Out-There/',
		techUsed: ['JavaScript', 'React', 'React Router', 'Redux', 'Redux-thunk', 'Victory.js', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'CSS', 'Google Maps API', 'Hiking Project API'],
		icons: {
			gitHub: '../styles/images/github-logo.svg',
			site: '../syles/images/desktop.svg'
		}
	},
	{
		title: 'Jet Fuel',
		description: 'Jet Fuel is a single page url encoding application built using a Node/Express server with a Knex/postgreSQL database. The front end is built using JavaScript, jQuery, semantic HTML5 and CSS. The app allows users to create folders and shorten long urls similar to how bit.ly operates.',
		image: '../styles/images/jetfuel.png',
		gitHubRepo: 'https://github.com/jbevis/jetfuel',
		siteURL: 'https://aw-jb-jetfuel.herokuapp.com/',
		techUsed: ['JavaScript', 'jQuery', 'Node', 'Express', 'Knex', 'postgreSQL', 'Mocha', 'Chai', 'HTML5', 'CSS', 'CircleCI'],
		icons: {
			gitHub: '../styles/images/github-logo.svg',
			site: '../syles/images/desktop.svg'
		}
	},
	{
		title: 'Movie Tracker',
		description: 'Built to practice Redux and become acquainted with Node, PostgresSQL, Express, this app consumes The Movie Database API and allows users to mark and save their favorite films.',
		image: '../styles/images/movietracker.png',
		gitHubRepo: 'https://github.com/jbevis/movie-tracker',
		siteURL: 'https://movie-tracker-jbevis.herokuapp.com/',
		techUsed: ['JavaScript', 'React', 'React Router', 'Redux', 'Redux-thunk', 'Node', 'Express', 'Knex', 'postgreSQL', 'webpack', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'CSS', 'Movie Database API'],
		icons: {
			gitHub: '../styles/images/github-logo.svg',
			site: '../syles/images/desktop.svg'
		}
	},
	{
		title: 'Weatherly',
		description: 'Weatherly was the first React app that I ever built. It uses ajax calls to hit the Weather Underground API, and then renders current weather, hourly, and 10 day forecasts for a given location.',
		image: '../styles/images/weatherly.png',
		gitHubRepo: 'https://github.com/jbevis/weatherly',
		siteURL: 'https://jbevis.github.io/weatherly',
		techUsed: ['JavaScript', 'jQuery(ajax)', 'React', 'webpack', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'CSS', 'Weather Underground API'],
		icons: {
			gitHub: '../styles/images/github-logo.svg',
			site: '../syles/images/desktop.svg'
		}
	},
	{
		title: 'Game Time',
		description: 'Game Time is a web application of the classic arcade game Breakout. Users move the paddle back and forth to keep the ball alive and break bricks to increase score. This project was designed to reinforce TDD best practices, while also emphasizing OOP principles. The game was built using ES6 and HTML Canvas with CSS.',
		image: '../styles/images/gametime.png',
		gitHubRepo: 'https://github.com/jbevis/game-time',
		siteURL: 'https://jbevis.github.io/game-time/',
		techUsed: ['JavaScript / ES6', 'webpack', 'Mocha', 'Chai', 'CSS', 'HTML Canvas'],
		icons: {
			gitHub: '../styles/images/github-logo.svg',
			site: '../syles/images/desktop.svg'
		}
	}
]