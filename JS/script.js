// Open the list 
$('.home-content span').click(function () {
    $('.home-list').animate({ width: '300px' }, 500)
    $('.home-content').animate({ marginLeft: '300px' }, 500)
})

// Close the list 
$('.btn-close').click(function () {
    $('.home-list').animate({ width: '0' }, 500)
    $('.home-content').animate({ marginLeft: '0' }, 500)
})

// Drag down the list items
$('#Duration h4').click(function () {
    $(this).next('.singer-text').slideToggle(500);
    $(this).prev('.singer-text').slideUp(500);
})

// Create the count down
$(window).ready(function(){
    let countDownDate =  new Date("Jul 28, 2024 23:59:59").getTime();
    let countDown = setInterval(function(){
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

$('.days').text(days + ' Days');
$('.hours').text(hours + '  Hours');
$('.minutes').text(minutes + ' minutes');
$('.seconds').text(seconds + ' seconds');
})
})

//Characters Numbers
$(window).ready(function(){
    $('.charNum').text('100')
})
$('.message').on('input', function() {
    let charCount = $(this).val().length;
    
    if(charCount <= 100){
        $('.charNum').text(100 - charCount)
       
    }
});