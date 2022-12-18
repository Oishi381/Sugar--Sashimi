/**
* Template Name: Sailor - v4.7.0
* Template URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
/*
const firebaseConfig = {
  apiKey: "AIzaSyAMXYtWzJCy21N7MI72EgjbIgOOD5PVB14",
  authDomain: "sugarandsashimi.firebaseapp.com",
  databaseURL: "https://sugarandsashimi-default-rtdb.firebaseio.com",
  projectId: "sugarandsashimi",
  storageBucket: "sugarandsashimi.appspot.com",
  messagingSenderId: "524144971019",
  appId: "1:524144971019:web:0a9cdec068d109916b660e",
  measurementId: "G-BXS81KX6LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

var database=firebase.database();
function sendMessage()
{
  ///getting the required values to send to firebase database and
  ///saving them in the variabbles
  var email=document.getElementById("email").value;
  var name=document.getElementById("name").value;
  var message=document.getElementById("message").value;
  var comment=document.getElementById("comment").value;
  
  var newMessagekey=database.ref().child('comments').push().key;
  database.ref('comments/'+newMessagekey+'/Email').set(email);
  database.ref('comments/'+newMessagekey+'/Name').set(name);
  database.ref('comments/'+newMessagekey+'/message').set(message);
  database.ref('comments/'+newMessagekey+'/Comment').set(comment);

}
///submit form
function submitForm(e)
{
  e.preventDefault();
}
///Listen for submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
///show alert
document.querySelector('.alert').getElementsByClassName.display='block';

///hide alert after 3 secs
function hideAlert()
{
  document.querySelector('.alert').getElementsByClassName.display="none";
}
setTimeout(hideAlert,3000); */


function show() {

  var name = document.getElementById("name").value;
  
  var email= document.getElementById("email").value;
  var comment= document.getElementById("comment").value;


   firebase.database().ref('Cupcake/' + name).set({
          name : name,
          email : email,
            ///id ->fire base er id : id->amar id
            comment : comment
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
              alert("Your Comment has been Taken!");
            
         
          }
        });
} 
function comm() {

  var name = document.getElementById("name").value;
  
  var email= document.getElementById("email").value;
  var comment= document.getElementById("comment").value;


   firebase.database().ref('ChocolateCookie/' + name).set({
          name : name,
          email : email,
            ///id ->fire base er id : id->amar id
            comment : comment
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
              alert("Your Comment has been Taken!");
            
         
          }
        });
} 
function pie() {

  var name = document.getElementById("name").value;
  
  var email= document.getElementById("email").value;
  var comment= document.getElementById("comment").value;


   firebase.database().ref('BlueberryPie/' + name).set({
          name : name,
          email : email,
            ///id ->fire base er id : id->amar id
            comment : comment
        }, function(error) {
          if (error) {
            // The write failed...
          } else {
              alert("Your Comment has been Taken!");
            
         
          }
        });
} 




(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

})()