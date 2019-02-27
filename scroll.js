// code based on: https://codepad.co/snippet/YPDXE33r

$(function() {
    $('#arrow').click (function() {
      $('html, body').animate({scrollTop: $('div.section1').offset().top }, 'slow');
      return false;
    });
  });