import axios from 'axios';

window.addEventListener('load', () => {

  const api = 'http://www.colr.org/json/color/random';
  const body = document.querySelector('body');

  function randomColor() {
    axios.get(api).then(res => {
      let color = res.data.colors[0].hex;

      if (!color) {
        console.error('Random color could not be fetched.');
      }

      color = '#' + color;

      body.style.backgroundColor = color;
    }).catch(() => console.error('Random color could not be fetched.'));
  }

  randomColor();

  setInterval(randomColor, 8000);

});


// AOS animation plugin initialisation

// AOS.init();


// Light gallery initialisation

lightGallery(document.getElementById('gallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});


// Star rating plugin initialisation

$(".review-card__rate").rate();


// Slick slider initialisations

$('.slider-techniques-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-techniques-nav'
});

$('.slider-techniques-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-techniques-content',
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-story').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-story-nav'
});

$('.slider-story-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-story',
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.reviews-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.plans-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});


// Smooth section scroll

$('a[href*="#"]').on('click', function(e) {
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  e.preventDefault();
});


// Navigation dropdown class on hover

$('.nav__dropdown').hover(function () {
  $(this).toggleClass('nav__dropdown--active');
});


// Mobile menu class toggle

$('.nav-icon').click(function() {
  $(this).toggleClass('open');
  $('.nav--mobile').toggleClass('nav--mobile-active');
});


// Search field

$('.btn-search').click(function() {
  $('.input-wrapper').toggle();
});


