// Fade Out Lodaing Page When Page Downloaded

window.onload = function() {
    $('.spinner-box .spinner').fadeOut(500, function() {
        $(this).parent().fadeOut(600);
    });
}

$(function () {

    $(window).resize(function() {
        $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - $('.navbar').height() + 20);
    });

    $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - $('.navbar').height() + 20);

    // Next Section
    $('header .fa-chevron-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 800)
    });


    // Full Image Plugin
    $('fullBackground').fullClip({
        images : ['imgs/1-min.jpg', 'imgs/2-min.jpg', 'imgs/3-min.jpg']
    });

    // Change Collapse On Focus 

    $('.navbar-toggle').on('click', function () {
        let n = 0;
        if( n === 0 ) {
            $('.navbar-collapse').css('background', '#2c3e50');
            n++;
        } else {
            $('.navbar-collapse').css('background', 'transparent');
            n = 0;
        }
        
    });


    // Testimonials Fade In Slides On By One

    (function autoSlider() {
        
        $('.slider .active').each(function () {
            
           
            if (!$(this).is(':last-child')) {
                
                
                $(this).delay(800).fadeOut(1000, function () {
                    
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            } else {
                
                $(this).delay(800).fadeOut(1000, function () {
                    
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                });
            }
            
        });
        
    }());


    // Go To Contact Us 

    $('.header-content a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate( {
            scrollTop: $('#contact').offset().top
        }, 1000);
    });

    // Set Background To Navbar On Scroll Down

    $(window).scroll(function () {
        if($(this).scrollTop() > $('header').height()) {
            $('.navbar').css('background', '#2c3e50');
        } else {
            $('.navbar').css('background', 'transparent');
        }
    });


    
});