var bookingButton = $('.booking-form__item_button');
var roomtypeCard = $('.booking-form__item');

bookingButton.on('click', function(){
   
    $(this).closest('.booking-form__item').on('mouseleave',function(){
        
        $(this).addClass('active-item')
        
    })
    
    
})

roomtypeCard.on('click', function(){
    
    if ($(this).hasClass('active-item')){
        $(this).removeClass('active-item');
        $(this).unbind('mouseleave');
    }  
    
})