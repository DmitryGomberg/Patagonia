
console.log('dddd');
$(document).ready(function() {
   $('.swiper-container').addClass('swiper');
    
    $('.burger_menu').click(function(event){
        $('.burger_menu,.menu').toggleClass('_active');
        $('body').toggleClass('lock');
    });
    
    
    let button = $('.back-to-top');
    
    
    button.fadeOut(0);
    
    
    
    
    
    
    
    
    
    
    $(window).on('scroll', ()=>{
        if($(this).scrollTop()>=50){
           button.fadeIn(300);
            console.log('dswdwfdwefeddd');
        }else{
           button.fadeOut(300);
        }
    });
    
    button.on('click' ,(e) =>{
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 500);
    })
});




