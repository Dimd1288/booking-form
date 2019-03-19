var bookingButton = $('.booking-form__item_submit');
var roomtypeCard = $('.booking-form__item');

/*$(document).ready(function () {
    bookingButton.click(function(){
   
   
    $(this).parents('.booking-form__item').on('mouseleave',function(){
        
        $(this).addClass('grayscale');
        
        $(this).find('.booking-form__item_submit').text('Подробнее');
        
    })
    
   event.preventDefault();
    
})

roomtypeCard.on('click', function(){ 
    if ($(this).hasClass('grayscale')){     
        $(this).removeClass('grayscale');
        $(this).find('.booking-form__item_submit').text('Забронировать');
        $(this).unbind('mouseleave');
    }
    
})

})

*/

$(document).ready(function () {
	$('.booking-form__item_submit').click(function () {
        event.preventDefault();
		$(this).parents('.booking-form__item').hasClass("item-active") || $(this).parents('.booking-form__item').one("mouseleave", function () {
			$(this).addClass("item-active"),
            $(this).children('.booking-form__item_photo').addClass("grayscale"),
       
			$(this).find('.booking-form__item_photo').gray(),
		
			$(this).find('.booking-form__item_submit').text("Подробнее"),
			$(this).addClass("item-active")
		})
	}),
	roomtypeCard.click(function () {
		$(this).hasClass("item-active") && ($(this).removeClass("item-active"), 
        $(this).children(".booking-form__item_photo").removeClass("grayscale"), 
        $(this).removeClass("grayscale"),
		$(this).children(".grayscale").toggleClass("grayscale-off"), 
		$(this).find(".booking-form__item_submit").text("Забронировать"), 
		$(this).parent().find("*").removeClass("item-active"))
	})
});