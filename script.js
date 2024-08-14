$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('nav a').on('click', function(event) {
    event.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 50 // Offset for header height
    }, 1000);
  });

  // Scroll to "About Me" section from hero button
  $('#scrollToAbout').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top - 50
    }, 1000);
  });

  // Hover effect on skill items
  $('.skill').on('mouseenter', function() {
    $(this).css({
      transform: 'scale(1.1)',
      transition: 'transform 0.3s'
    });
  }).on('mouseleave', function() {
    $(this).css('transform', 'scale(1)');
  });

  // Contact form submit event
  $('#contactForm').on('submit', function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
    
    // Display a success message or clear form fields
    alert(`Thank you ${name}, your message has been sent!`);
    $('#contactForm')[0].reset(); // Clear form
  });
});
