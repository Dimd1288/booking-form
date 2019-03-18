var bookingButton = $('.booking-form__item_submit');
var roomtypeCard = $('.booking-form__item');

bookingButton.on('click', function(){
   
    $(this).closest('.booking-form__item').on('mouseleave',function(){
        
        $(this).addClass('active-item')
        $(this).find('.booking-form__item_submit').text('Подробнее');
        
    })
    
    
})

roomtypeCard.on('click', function(){
    
    if ($(this).hasClass('active-item')){
        $(this).removeClass('active-item');
        $(this).find('.booking-form__item_submit').text('Забронировать');
        $(this).unbind('mouseleave');
    }  
    
})