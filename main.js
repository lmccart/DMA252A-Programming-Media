$(document).ready(function() {

  var hash = window.location.hash;
  if (hash && $(hash).length) {
    openSection(hash);
  }

  $.get('date.json', function(data) {
    $('#updated_date').html(data.date);
  });

  $('#links .button').click(function() {
    var selected = '#'+$(this).data('id');
    openSection(selected);
  });

  $('#studies h3').click(function() {
    var selected = $(this).attr('id');
    openSection('#studies', selected);
  });
});

function openSection(id, heading) {
  if (open && open === heading) closeSection(heading);
  else {
    $('.block').hide();
    if (heading) $('.toggle').hide();
    $(id).show();
    $('#'+heading+'-content').show();    
    if ($('#studies div.toggle:visible')[0]) {
      open = $('#studies div.toggle:visible')[0].id.substring(0, 2);
    }
    window.location.hash = id.substring(1);
    if (!heading) {
      $(window).scrollTop(0);
    } else {
      console.log(heading)
      $(window).scrollTop($("#"+heading).offset().top-30);
    }
  }
}

function closeSection(heading) {
  $('.toggle').hide();
  open = null;
}

