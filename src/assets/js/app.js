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

lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
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
  responsive: [
    {
      breakpoint: 991,
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
      breakpoint: 991,
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

$(".review-card__rate").rate();
