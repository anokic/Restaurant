window.onload = function() {

  $('.heading').animate({
    'opacity': '1'
  }, 700);

  document.querySelector('.hamburgerContainer').addEventListener('click', function() {

    document.querySelector('.hamburgerContainer').classList.toggle('active');
    if ($(window).width() < 1000) {
      if ($(".hamburgerContainer").hasClass("active")) {
        document.querySelector('.upHeader').style.marginBottom = "220px";
      } else {
        document.querySelector('.upHeader').style.marginBottom = "120px";
      }
    }

    $('nav').slideToggle(500);

  });

  document.querySelector('.book').addEventListener('click', function() {
    document.querySelector('.reserve').scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  });

  document.querySelector('.see').addEventListener('click', function() {
    document.querySelector('.appetisers').scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
  });

  $(window).scroll(function() {
    $('.plate').each(function(i) {
      let bottom_of_element = $(this).offset().top + $(this).outerHeight() - 300;
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'margin-left': '0',
          'opacity': '1'
        }, 700);
        $('.plateInfo').animate({
          'opacity': '1'
        }, 700);
      }

      console.log(bottom_of_window > (bottom_of_element + 1000));
    });
    $('.ingredient').each(function(i) {
      let bottom_of_element = $(this).offset().top + $(this).outerHeight() - 300;
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'margin-right': '10%',
          'opacity': '1',
          "margin-bottom": "0px"
        }, 700);
      }

      console.log(bottom_of_window > (bottom_of_element + 1000));
    });
    $('.appetisers, .starters, .salads, .mainDishes').each(function(i) {
      let bottom_of_element = $(this).offset().top + $(this).outerHeight() - 300;
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1'
        }, 1500);
      }

      console.log(bottom_of_window > (bottom_of_element + 1000));
    });
    $('.guestContent').each(function(i) {
      let bottom_of_element = $(this).offset().top + $(this).outerHeight() - 300;
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({
          'opacity': '1'
        }, 1000);
      }

      console.log(bottom_of_window > (bottom_of_element + 1000));
    });
  });

}
