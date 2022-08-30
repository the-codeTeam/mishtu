$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      navText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
        1000: {
          items: 3,
          nav: true,
        },
        1500: {
          items: 4,
          nav: true,
          loop: false,
        },
      },
    });
  
    // Scroll event check
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll > 20) {
        $('.headernav').addClass('sticky');
        $('#mySidenav').addClass('sidenavposition');
      } else {
        $('.headernav').removeClass('sticky');
        $('#mySidenav').removeClass('sidenavposition');
      }
    });
  });
  
  // hamburger
  function openNav() {
    if (document.getElementById('mySidenav').classList.contains('w-100')) {
      document.getElementById('mySidenav').classList.remove('w-100');
      document.getElementById('xxx').classList.remove('menu-icons');
    } else {
      document.getElementById('mySidenav').classList.add('w-100');
      document.getElementById('xxx').classList.add('menu-icons');
    }
  }
  