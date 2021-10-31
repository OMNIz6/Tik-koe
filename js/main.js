$(document).ready(function(){
	$(".toggle").click(function(){
		$(".nav li").slideToggle("normal");
	});
});

$(document).ready(function(){
	$(".nav li a").click(function(){
		$("a").removeClass("select");
		$(this).addClass("select");
	});
});

// owl-carousel
var owl = $('.owl-carousel');
              owl.owlCarousel({
                loop: true,
                nav: true,
                margin: 10,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  960: {
                    items: 3
                  },
                  1200: {
                    items: 4
                  }
                }
              });
              owl.on('mousewheel', '.owl-stage', function(e) {
                if (e.deltaY > 0) {
                  owl.trigger('next.owl');
                } else {
                  owl.trigger('prev.owl');
                }
                e.preventDefault();
              });

// to top of the page
function topFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// scroll
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
		document.getElementById('to-top-btn').style.display = "inline-block";
	}
	else{
		document.getElementById('to-top-btn').style.display = "none";
	}
}

// dialog
function showDialog(){
	document.getElementById('dialogbox-overlay').style.display = "block";
	document.getElementById('dialogbox').style.display = "block";
}

function hideDialog(){
	document.getElementById('dialogbox-overlay').style.display = "none";
	document.getElementById('dialogbox').style.display = "none";
}