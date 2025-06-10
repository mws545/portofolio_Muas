particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 50, // lebih sedikit
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00bfff" // biru muda
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.4,
        "random": false
      },
      "size": {
        "value": 4,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00bfff",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2, // gerakan lebih halus
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 150
        },
        "push": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "background_color": "#0f172a", // biru tua kehitaman
      "background_image": "",
      "background_position": "center center",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
