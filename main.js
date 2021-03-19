
function initMap() {
  const loc = { lat: 35.548679, lng: 129.315002 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

$('#navbar a, .btn').on('click', function(e) {
  if(this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 80
    }, 800);
  }
})