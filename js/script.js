/// loading website

jQuery(window).load(function () {

    // PAGE LOADER

    $(".loader").fadeOut(500,function(){

        $(".loading").delay(1000).fadeOut(500);

        $("body").css("overflow-y", "auto");

    });


    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});

// ADD IMAGE
$('.image-uploader').change(function (event) {
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block" data-count-order="' + one + '"><img src="' + URL.createObjectURL(event.target.files[one]) + '"><button class="close">&times;</button></div>');
    }
});

// REMOVE IMAGE
$('.images-upload-block').on('click', '.close',function (){
    $(this).parents('.uploaded-block').remove();
});

/// scrooltop nav-bar

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        $('.Tab_mobile ul').addClass('fading_scroll');
    } else {
        // upscroll code
        $('.Tab_mobile ul').removeClass('fading_scroll');
    }
    lastScrollTop = st;
});

/// Remove Disable

$(".edit_profile").click(function(){
    $('.form_input input , .form_input select').removeAttr("disabled")
});

// ADD IMAGE
$('.add_person').click(function () {
    $(this).parents('.form_group').find('.append_section').append('<div class="up_append">\n' +
        '                        <a class="btn_button btn_default remove_append"><i class="far fa-trash-alt"></i></a>\n' +
        '                        <div class="m_Top_10 m_Button_10">\n' +
        '                            <label class="color_gray">full name</label>\n' +
        '                            <div class="form_input position_R">\n' +
        '                                <input type="tel" placeholder="Enter full name" required>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="m_Top_10 m_Button_10">\n' +
        '                            <label class="color_gray">ID number / Passport</label>\n' +
        '                            <div class="form_input position_R">\n' +
        '                                <input type="tel" placeholder="Enter ID number / passport" required>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="m_Top_10 m_Button_10">\n' +
        '                            <label class="color_gray">Date of Birth</label>\n' +
        '                            <input type="date" placeholder="Enter Date of Birth">\n' +
        '                        </div>\n' +
        '                    </div>');
});

$('.remove_append').on('click', function (){
    $(this).parents('.up_append').remove();
});

$('.form_group').on('click', '.remove_append',function (){
    $(this).parents('.up_append').remove();
});

/// append New Day

$('.click_day').click(function () {
    $(this).parents('.form_group').find('.Section_Add_Day').append('<div class="up_day">\n' +
        '                        <div class="flex_space">\n' +
        '                            <div class="flex_space block_remove_item">\n' +
        '                                <h4 class="color_gray">Day 1</h4>\n' +
        '                                <a class="btn_button btn_default add_item"><i class="fas fa-times"></i></a>\n' +
        '                            </div>\n' +
        '                            <a class="btn_button btn_default add_destination"> <i class="fas fa-plus"></i> Add Destination </a>\n' +
        '                        </div>\n' +
        '                        <div class="new_destination">\n' +
        '                            <div class="con_destination">\n' +
        '                                <div class="row">\n' +
        '                                    <div class="col-md-6 col-xs-12">\n' +
        '                                        <div class="m_Top_10 m_Button_10">\n' +
        '                                            <label class="color_gray">Destination :</label>\n' +
        '                                            <div class="form_input position_R">\n' +
        '                                                <input type="text" placeholder="Destination" required>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <div class="col-md-5">\n' +
        '                                        <div class="m_Top_10 m_Button_10">\n' +
        '                                            <label class="color_gray">Time:</label>\n' +
        '                                            <div class="form_input position_R">\n' +
        '                                                <input type="text" placeholder="Time" required>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <div class="col-md-1 col-xs-12">\n' +
        '                                        <a class="btn_button bg_light color_gray rem_destination" style="width: auto;margin-top: 60px;"><i class="fas fa-trash-alt"></i></a>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="up_activity">\n' +
        '                                    <div class="row">\n' +
        '                                        <div class="col-md-11 col-xs-12">\n' +
        '                                            <div class="m_Top_10 m_Button_10">\n' +
        '                                                <label class="color_gray">Activity: <a class="btn_button btn_default add_item"><i class="fas fa-plus"></i></a></label>\n' +
        '                                                <div class="form_input position_R">\n' +
        '                                                    <input type="text" placeholder="Activity" required>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="col-md-1 col-xs-12">\n' +
        '                                            <a class="btn_button bg_light color_gray rem_activity" style="width: auto;margin-top: 60px;"><i class="fas fa-trash-alt"></i></a>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>');
});

$(document).on('click','.rem_item',function(e){
    $(this).parent().parent().parent().remove();
});

/// append New Destination
$(document).on('click','.add_destination',function(e){
    $(this).parents('.up_day').find('.new_destination').append('<div class="con_destination">\n' +
        '                                <div class="row">\n' +
        '                                    <div class="col-md-6 col-xs-12">\n' +
        '                                        <div class="m_Top_10 m_Button_10">\n' +
        '                                            <label class="color_gray">Destination :</label>\n' +
        '                                            <div class="form_input position_R">\n' +
        '                                                <input type="text" placeholder="Destination" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <div class="col-md-5">\n' +
        '                                        <div class="m_Top_10 m_Button_10">\n' +
        '                                            <label class="color_gray">Time:</label>\n' +
        '                                            <div class="form_input position_R">\n' +
        '                                                <input type="text" placeholder="Time" required="">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <div class="col-md-1 col-xs-12">\n' +
        '                                        <a class="btn_button bg_light color_gray rem_destination" style="width: auto;margin-top: 60px;"><i class="fas fa-trash-alt"></i></a>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="up_activity">\n' +
        '                                    <div class="row">\n' +
        '                                        <div class="col-md-11 col-xs-12">\n' +
        '                                            <div class="m_Top_10 m_Button_10">\n' +
        '                                                <label class="color_gray">Activity: <a class="btn_button btn_default add_item"><i class="fas fa-plus"></i></a></label>\n' +
        '                                                <div class="form_input position_R">\n' +
        '                                                    <input type="text" placeholder="Activity" required="">\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="col-md-1 col-xs-12">\n' +
        '                                            <a class="btn_button bg_light color_gray rem_activity" style="width: auto;margin-top: 60px;"><i class="fas fa-trash-alt"></i></a>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>');
});

$(document).on('click','.rem_destination',function(e){
    $(this).parent().parent().remove();
});

/// append New Activity
$(document).on('click','.add_item',function(e){
    $(this).parents('.con_destination').find('.up_activity').append('\n' +
        '                                    <div class="row">\n' +
        '                                        <div class="col-md-11 col-xs-12">\n' +
        '                                            <div class="m_Top_10 m_Button_10">\n' +
        '                                                <label class="color_gray">Activity:</label>\n' +
        '                                                <div class="form_input position_R">\n' +
        '                                                    <input type="text" placeholder="Activity" required>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="col-md-1 col-xs-12">\n' +
        '                                            <a class="btn_button bg_light color_gray rem_activity" style="width: auto;margin-top: 60px;"><i class="fas fa-trash-alt"></i></a>\n' +
        '                                        </div>\n' +
        '                                    </div>');
});

$(document).on('click','.rem_activity',function(e){
    $(this).parent().parent().remove();
});

/// Show And Hide Password

$('.eye').click(function() {
    $(this).toggleClass('active');
    $(this).toggleClass('fa-eye-slash');

    if( $(this).hasClass('active') ) {
        $(this).parents('.form_input').find('input').attr('type' , 'text');
    } else {
        $(this).parents('.form_input').find('input').attr('type' , 'password');
    }
});

/// Click Favorite

$(".btn_favorite").on("click", function () {
    $(this).parents('.favorite_event').find(".btn_favorite i").toggleClass("far fa-star fas fa-star");
});

/// Click Remove Blcok

$('.remove').on("click", function () {
    $(this).parents('.blcok_group').addClass("remove_block");
});

$('.next_table').click(function(){
    $('.section_1').addClass('remove_right');
    $('.section_2').addClass('back');
});

$('.prev_table').click(function(){
    $('.section_1').removeClass('remove_right');
    $('.section_2').removeClass('back');
});

/// Scrool Nav

$('#nav-icon3').click(function(){
    $('#nav-icon3').fadeOut(100);
    $(".Nav_Mobile").addClass('back');
    $(".overlay_mobile").addClass('back');
    $("body").css("overflow-y", "hidden");
});

$('.overlay_mobile').click(function(){
    $('#nav-icon3').removeClass('open');
    $('#nav-icon3').fadeIn(100);
    $(".Nav_Mobile").removeClass('back');
    $(".overlay_mobile").removeClass('back');
    $("body").css("overflow-y", "auto");
});

/// Scrool Nav

$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {

        $('.header_fixed').addClass('fix-top');

    } else {

        $('.header_fixed').removeClass('fix-top');

    }
});

/// Click Mune Category

$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$(".title_category").click(function () {
    $(this).parent(".up_category").children(".choose_category").slideToggle("100");
    $(this).find(".plus").toggleClass("fas fa-plus fas fa-minus");
});

$('#file-upload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});

$('#file-upload-1').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload-1')[0].files[0].name;
    $(this).prev('label').text(file);
});

$('#file-upload-2').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload-2')[0].files[0].name;
    $(this).prev('label').text(file);
});



/// Open Form Search

$('.open_search').click(function(){
    $(".search").addClass('fading_mobile');
    $(".overlay").addClass('back');
});

/// Open Social_Media

$('.open_social a').click(function(event){
    event.preventDefault();
    $('#nav-icon3').removeClass('open');
    $(".Nav_Mobile").removeClass('back');
    $(".block_footer").addClass('fading_mobile');
});

$(document).ready(function() {
    $('.modal').on('shown.bs.modal', function() {

        var h = $(this).find(".bg-login").height();

        $(".bg-coming").css("height", h+19);

        var k = $(this).find(".bg-coming").height();

        $(".bg-login").css("height", k);

    })
});

$('.remove-block').on("click", function (e) {
    e.preventDefault();
    $(this).parents('.section-notifiction').fadeOut(100);
});


// IMAGE PARALLAX

var mouseXPercent = 0, myX = 0, myX2 = 0;

$('.Header').mousemove(function (e) {
    var offset = $(this).offset();
    var xPos = e.pageX - offset.left;
    var xWidth = $(window).width() / 2;

    mouseXPercent = (xPos - xWidth) / 2;

    myX = mouseXPercent / 10;
    $('.layer-empty').css({'right': - myX});

});

//// add slider

$('#owl_home').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#owl_details').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#owl_2').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
              ],
    responsive:{
        0:{
            items:3
        },
        900:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('#sync1').owlCarousel({
    items:1,
    loop:false,
    center:true,
    autoplay:true,
    margin:10,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    animateOut: 'fadeOut',
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
});

$('#sync2').owlCarousel({
    items:4,
    loop:false,
    center:false,
    margin:10,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash',
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ]
});

// Start Rate
var $star_rating = $('.star-rating span');

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('starGray').addClass('starYellow');
        } else {
            return $(this).removeClass('starYellow').addClass('starGray');
        }
    });
};

$star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();



