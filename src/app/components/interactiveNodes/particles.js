import React from 'react';
import Particles from 'react-particles-js';

const ParticleNodes = () => {
  return (
    <Particles style={
      {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
      }
    }
    params={
      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#5b4ba7"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 0,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#362a91",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 641.3648243462092,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 280.1666382439641,
              "line_linked": {
                "opacity": 0.7321366874516714
              }
            },
            "bubble": {
              "distance": 243.62316369040352,
              "size": 1,
              "duration": 2.7610625218245732,
              "opacity": 0.1867777588293094,
              "speed": 3
            },
            "repulse": {
              "distance": 89.32849335314796,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    }
  />
  );
};

export default ParticleNodes;
