$(function () {
  'use strict'
  var winH = $(window).height(),
  upperH = $('.upper-bar').innerHeight(),
  navH = $('.navbar').innerHeight()
  $('  ').height(winH -  navH)
  // nav bar
  $(' .collapse ul li , a ').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
  });
// //slider
//   $('.carousel').carousel({
//     interval:1000});

  // featured Work Shuffle
  $(' .featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    if ($(this).data('class') === 'all') {
      $('.shuffle-images .col-md').css('opacity', 1)
    } else {
      $('.shuffle-images .col-md').css('opacity', 0.1)
      $($(this).data('class')).parent().css('opacity', 1)
    }
  })
  //counter of statistics
  $('.number1').countTo({
    from: 0,
    to: 624,
    speed: 2000,
    refreshInterval: 80,
  })
  $('.number2').countTo({
    from: 0,
    to: 112,
    speed: 2000,
    refreshInterval: 80,
  })
  $('.number3').countTo({
    from: 0,
    to: 595,
    speed: 2000,
    refreshInterval: 80,
  })
  $('.number4').countTo({
    from: 0,
    to: 50,
    speed: 2000,
    refreshInterval: 80,
  })
  //smooth scroll to div
  $('.nav-link, .dropdown-item ').click(function () {
    $('html,body').animate(
      {
        scrollTop: $('#' + $(this).data('value')).offset().top,
      },
      1000,
    )
  })

  //nice scroll
  $('html').niceScroll({
    cursorcolor: '#ed1d24',
    cursorwidth: '10px',
    cursorborder: '1px solid #ed1d24',
    cursorborderradius: '0px',
    scrollspeed: 50,
    mousescrollstep: 40,
    zindex: "auto" | [2],
  })

  const backToTopButton = document.querySelector('#back-to-top-btn')

  window.addEventListener('scroll', scrollFunction)

  function scrollFunction() {
    if (window.pageYOffset > 300) {
      // Show backToTopButton
      if (!backToTopButton.classList.contains('btnEntrance')) {
        backToTopButton.classList.remove('btnExit')
        backToTopButton.classList.add('btnEntrance')
        backToTopButton.style.display = 'block'
      }
    } else {
      // Hide backToTopButton
      if (backToTopButton.classList.contains('btnEntrance')) {
        backToTopButton.classList.remove('btnEntrance')
        backToTopButton.classList.add('btnExit')
        setTimeout(function () {
          backToTopButton.style.display = 'none'
        }, 250)
      }
    }
  }

  backToTopButton.addEventListener('click', smoothScrollBackToTop)

  // function backToTop() {
  //   window.scrollTo(0, 0);
  // }

  function smoothScrollBackToTop() {
    const targetPosition = 0
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 350
    let start = null

    window.requestAnimationFrame(step)

    function step(timestamp) {
      if (!start) start = timestamp
      const progress = timestamp - start
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration),
      )
      if (progress < duration) window.requestAnimationFrame(step)
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t * t + b
    t -= 2
    return (c / 2) * (t * t * t + 2) + b
  }
  // var wow = new wow(
  //   {
  //     boxClass:     'wow',      // animated element css class (default is wow)
  //     animateClass: 'animated', // animation css class (default is animated)
  //     offset:       0,          // distance to the element when triggering the animation (default is 0)
  //     mobile:       true,       // trigger animations on mobile devices (default is true)
  //     live:         true,       // act on asynchronously loaded content (default is true)
  //     callback:     function(box) {
  //       // the callback is fired every time an animation is started
  //       // the argument that is passed in is the DOM node being animated
  //     },
  //     scrollContainer: null // optional scroll container selector, otherwise use window
  //   }
  // );
  // wow.init();




})


// let username ="Ahmed",
// age=22 ,title="UserName" ;
// const myHtml=`
// <div class="container">
//         <div class="card mt-5" style="width: 18rem;">
//             <div class="card-body">
//                     <h1 class="title">${username}</h1>
//                     <h2 >${age}</h2>
//                     <h2 >${title}</h2>
//                     <input type="text" class="form-control"><br>
//                     <div><button type="submit" class="btn btn-primary offset-4">Submit</button></div>
//             </div>

//         </div>
// </div>

// `
// document.body.innerHTML = myHtml;
