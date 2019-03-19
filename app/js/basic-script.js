var bookingButton = $('.booking-form__item_submit');
var roomtypeCard = $('.booking-form__item');

bookingButton.on('click', function(){
   
   
    $(this).closest('.booking-form__item').one('mouseleave',function(){
        
        $(this).gray();
        $(this).addClass('active-item');
        $(this).find('.booking-form__item_submit').text('Подробнее');
        
    })
    
    event.preventDefault();
})

roomtypeCard.on('click', function(){
    
    
        $('.grayscale').toggleClass('grayscale-off');;
        $(this).removeClass('active-item');
        $(this).find('.booking-form__item_submit').text('Забронировать');
        
      
    
})

