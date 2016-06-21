// init wow
new WOW().init();

//jquery smooth scroll
    $('ul.nav a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
          scrollTarget: link.hash,
            speed: 500
        });
      });
    
// Navbar animation when scrolling
var a = $(".navbar-default").offset().top;
$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.navbar-default').css({"background":"#877A70"});
    } else {
       $('.navbar-default').css({"background":"transparent"});
    }
});

// Using wow for animating content 
$(".banner").addClass('wow animated fadeIn');
$(".title-story").addClass('wow animated fadeInDown');
$(".left-story").addClass('wow animated fadeInLeft');
$(".right-story").addClass('wow animated fadeInRight');
$(".text-thecoffee").addClass('wow animated fadeInDown');
$(".pic-thecoffee").addClass('wow animated');
$(".expl-thecoffee").addClass('wow animated slideInDown');
$(".cupofcoffee .img-cup").addClass('wow animated slideInLeft');
$(".text-cupofcoffee h1").addClass('wow animated fadeIn');
$('.text-cupofcoffee h5').addClass('wow animated fadeIn');
$('.text-cupofcoffee p').addClass('wow animated fadeIn'); 
$('.text-cupofcoffee h3').addClass('wow animated');
$('.text-cupofcoffee li').addClass('wow animated slideInDown');
$(".text-buycoffee").addClass('wow animated fadeInDown');
$(".buycoffee img").addClass('wow animated');
$(".product-coffee img").addClass('wow animated');
$(".product-coffee .coffee-vote").addClass('wow animated bounce');
$(".product-coffee h4").addClass('wow animated fadeInDown');
$(".product-coffee h5").addClass('wow animated fadeInDown');
$(".visit-content h3").addClass('wow animated fadeInLeft');
$(".visit-content h1").addClass('wow animated fadeInLeft');
$(".visit-content p").addClass('wow animated');
$(".visit-content .contact-item").addClass('wow animated fadeInRight');
$(".visit-content i").addClass('wow animated rotateIn');
$(".visit-content img").addClass('wow animated fadeInDown');