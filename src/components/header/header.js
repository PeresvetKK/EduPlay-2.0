$('#root').on('click', '.burger', function(){
    $('.header__right').css("display", "flex").hide().fadeIn();
    $('#root').toggleClass('fixed-scroll')
}).on('click', '.close-menu', function(){
    $('.header__right').fadeOut(); 
    $('#root').toggleClass('fixed-scroll')
})