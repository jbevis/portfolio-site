const projectsList = [
  {
    title: 'SLOPE',
    description: 'The beta State and Local Planning for Energy (SLOPE) Platform launched in January 2020, delivering a wealth of energy consumption, efficiency, and renewable energy generation data for state and local governments. The result of a collaboration between the U.S.Department of Energy(DOE) and NREL, SLOPE is a tool to enable more data- driven state and local energy planning by integrating dozens of distinct sources of data and analyses into one easy - to - access online platform.\n\nThe application is built using a React/Redux front end and a Node.js server. The map components are leveraging Mapbox GL and Google Places API. The charting is done using D3. I contributed largely on the initial scaffolding of the app and component buildout. I also work extensively on the data config side as well as assisting in the geolocation aspects of the map component.',
    image: './project-images/slope.png',
    site: 'https://gds.nrel.gov/slope',
    info: 'https://www.nrel.gov/state-local-tribal/blog/posts/state-local-planning-energy-beta-platform-launches.html',
    techUsed: ['JavaScript(ES6)', 'React', 'Redux', 'Node.js', 'SCSS/Sass', 'postgreSQL', 'GeoServer', 'Mapbox GL', 'D3.js', 'Amazon Web Services', 'Docker', 'Jest', 'Enzyme', 'Chai', 'Proprietary NREL data'],
    icons: {
      site: './project-images/desktop.svg',
      info: './project-images/info.svg'
    }
  },
  {
    title: 'National Solar Radiation Database Website',
    description: 'I spearheaded the redesign and migration of the National Solar Radiation Database (NSRDB) website from an expiring Drupal server to a Joomla CMS instance. This new site has an updated, more modern appeareance and utilized UX best practices to help drive traffic to the NSRDB data viewer application. Another proprietary NREL product',
    image: './project-images/nsrdb.png',
    site: 'https://nsrdb.nrel.gov',
    techUsed: ['JavaScript(ES6)', 'PHP', 'MySQL', 'HTML5', 'CSS', 'Joomla', 'jQuery'],
    icons: {
      site: './project-images/desktop.svg',
    }
  },
  {
    title: 'Renewable Energy Explorer Suite',
    description: 'The Renewable Energy Data Explorer is a suite of web applications that help users analyze and visualize renewable energy potential under difference scenarios across the globe.\n\nThese applications are part of a broader proprietary OpenCarto platform that leverages modular design to handle a multitude of different datasets to create customizable geospatial applications. I contributed feature development, general code maintenace, and migrations for these applications. The Southeast Asia app featured above is just one of many applications.',
    image: './project-images/asean.png',
    site: 'https://maps.nrel.gov/rede-southeast-asia',
    info: 'https://www.nrel.gov/gis/data-tools.html',
    techUsed: ['JavaScript(ES6)', 'Node.js', 'Ember.js', 'Ruby', 'Sass', 'PostgreSQL', 'PostGIS', 'GeoServer', 'Leaflet.js', 'D3', 'HighCharts'],
    icons: {
      site: './project-images/desktop.svg',
      info: './project-images/info.svg'

    },
  },
  {
    title: 'Trivial',
    description: 'This application was our capstone project for Turing. It is a progressive web application that uses a Jeopardy questions API for a multi-player trivia game. This app was built with a Node / Express server and Knex / postgreSQL database. The front end of the app was built with React, React Router, and utilizes Socket.io for cross user interaction.',
    image: './project-images/trivial.png',
    gitHub: 'https://github.com/kamos1/trivial',
    site: 'https://trivial123.herokuapp.com',
    techUsed: ['JavaScript', 'React', 'React Router', 'Socket.io', 'Node', 'Express', 'Knex', 'postgreSQL', 'Webpack', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'SCSS', 'jService.io API', 'CircleCI'],
    icons: {
      gitHub: './project-images/github-logo.svg',
      site: './project-images/desktop.svg'
    }
  },
  {
    title: 'Get Out There',
    description: 'Get Out There is a hiking trail application built using React/Redux with React Router and uses Victory.JS for data visualization. The motivation for this app was as a personal project designed to aggregate hiking trail data easily while also solidfying my understanding of Redux. In its current format there is only a front end, but I plan to a backend so users can login, favorite trails, and rate them.',
    image: './project-images/getoutthere.png',
    gitHub: 'https://github.com/jbevis/Get-Out-There',
    site: 'https://jbevis.github.io/Get-Out-There/',
    techUsed: ['JavaScript', 'React', 'React Router', 'Redux', 'Redux-thunk', 'Victory.js', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'CSS', 'Google Maps API', 'Hiking Project API'],
    icons: {
      gitHub: './project-images/github-logo.svg',
      site: './project-images/desktop.svg'
    }
  },
  {
    title: 'Jet Fuel',
    description: 'Jet Fuel is a single page url encoding application built using a Node/Express server with a Knex/postgreSQL database. The front end is built using JavaScript, jQuery, semantic HTML5 and CSS. The app allows users to create folders and shorten long urls similar to how bit.ly operates.',
    image: './project-images/jetfuel.png',
    gitHub: 'https://github.com/jbevis/jetfuel',
    site: 'https://aw-jb-jetfuel.herokuapp.com/',
    techUsed: ['JavaScript', 'jQuery', 'Node', 'Express', 'Knex', 'postgreSQL', 'Mocha', 'Chai', 'HTML5', 'CSS', 'CircleCI'],
    icons: {
      gitHub: './project-images/github-logo.svg',
      site: './project-images/desktop.svg'
    }
  },
  // {
  // 	title: 'Movie Tracker',
  // 	description: 'Built to practice Redux and become acquainted with Node, PostgresSQL, Express, this app consumes The Movie Database API and allows users to mark and save their favorite films.',
  // 	image: './project-images/movietracker.png',
  // 	gitHub: 'https://github.com/jbevis/movie-tracker',
  // 	site: 'https://movie-tracker-jbevis.herokuapp.com/',
  // 	techUsed: ['JavaScript', 'React', 'React Router', 'Redux', 'Redux-thunk', 'Node', 'Express', 'Knex', 'postgreSQL', 'Webpack', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'CSS', 'Movie Database API'],
  // 	icons: {
  // 		gitHub: './project-images/github-logo.svg',
  // 		site: './project-images/desktop.svg'
  // 	}
  // },
  // {
  // 	title: 'Weatherly',
  // 	description: 'Weatherly was the first React app that I ever built. It uses ajax calls to hit the Weather Underground API, and then renders current weather, hourly, and 10 day forecasts for a given location.',
  // 	image: './project-images/weatherly.png',
  // 	gitHub: 'https://github.com/jbevis/weatherly',
  // 	site: 'https://jbevis.github.io/weatherly',
  // 	techUsed: ['JavaScript', 'jQuery(ajax)', 'React', 'Webpack', 'Mocha', 'Chai', 'Enzyme', 'Jest', 'CSS', 'Weather Underground API'],
  // 	icons: {
  // 		gitHub: './project-images/github-logo.svg',
  // 		site: './project-images/desktop.svg'
  // 	}
  // },
  // {
  // 	title: 'Game Time',
  // 	description: 'Game Time is a web application of the classic arcade game Breakout. Users move the paddle back and forth to keep the ball alive and break bricks to increase score. This project was designed to reinforce TDD best practices, while also emphasizing OOP principles. The game was built using ES6 and HTML Canvas with CSS.',
  // 	image: './project-images/gametime.png',
  // 	gitHub: 'https://github.com/jbevis/game-time',
  // 	site: 'https://jbevis.github.io/game-time/',
  // 	techUsed: ['JavaScript / ES6', 'Webpack', 'Mocha', 'Chai', 'CSS', 'HTML Canvas'],
  // 	icons: {
  // 		gitHub: './project-images/github-logo.svg',
  // 		site: './project-images/desktop.svg'
  // 	}
  // }
]

export default projectsList;