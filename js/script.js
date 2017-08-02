
/* Start Header Slider */
var slides = document.getElementsByClassName("slider");
var dots = document.getElementsByClassName("dot");

var slideIndex = 0;
showSlidesAuto();
var i;
function currentSlide (n) {
	showSlides(slideIndex = n);
}

function showSlides (n) {
	function execute() {
	for(i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	if(slideIndex > slides.length - 1) {slideIndex = 0}
	if(slideIndex < 0) {slideIndex = slides.length - 1}
		
	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
	}
	setTimeout(execute, 300);
}
function showSlidesAuto () {
	for(i=0; i<slides.length; i++) {
		slides[i].style.display = "none";
	}
	for(i=0; i<dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slideIndex++;
	if(slideIndex > slides.length) {slideIndex = 1}
	if(slideIndex < 1) {slideIndex = slides.length}
		
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	setTimeout(showSlidesAuto, 8000);
}
/* End Header Slider */
/* Start navbar coloring when scrolling */
$(window).on("scroll", function(){
	$(".navbar-inverse").addClass("nav-anim")
if($(window).scrollTop() > 10) {
	$(".navbar-inverse").addClass("nav-bg");
	} else {
	$(".navbar-inverse").removeClass("nav-bg");
	}
});
/* End navbar coloring when scrolling */
/* Start Google Map */
function initMap() {
        var uluru = {lat: 30.060470, lng: 31.219203};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

      }
 /* End Google Map */
 /* Start To Top arrow */
      var $top = $(".to-top");
      $(window).on("scroll", function() {
      	if($(this).scrollTop() >= 500) {
      		$top.fadeIn(500);
      	} else {
      		$top.fadeOut(500);
      	}
      });

      $top.on("click", function() {
      	$("html, body").animate({
      		scrollTop:0
      	}, 800);
      });
/* End To Top arrow */
new WOW().init();