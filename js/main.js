/*------------------------------------------------------------------
* Project:        Realshield
* Author:         Bizberg_Themes
* URL:            https://themeforest.net/user/bizberg_themes
* Created:        01/15/2022
-------------------------------------------------------------------
*/

 (function($) {
     "use strict";


      /*======== Doucument Ready Function =========*/
    jQuery(document).ready(function () {
     //CACHE JQUERY OBJECTS
      $("#status").fadeOut();
      $("#preloader").delay(200).fadeOut("slow");
      $("body").delay(200).css({ "overflow": "visible" });

      
      /* Init Wow Js */
      new WOW().init();

    });

     //search categories
    $('a[href="#search1"]').on('click', function(event) {
         event.preventDefault();
         $('#search1').addClass('open');
         $('#search1 > form > input[type="search"]').focus();
     });
     $('#search1, #search1 button.close').on('click keyup', function(event) {
         if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
             $(this).removeClass('open');
         }
     });

    jQuery(document).ready(() => {
         jQuery('.js-video-button').modalVideo({
             channel: 'vimeo'
         });
     });

     // Range sliders activation
     $(".range-slider-ui").each(function() {
         var minRangeValue = $(this).attr('data-min');
         var maxRangeValue = $(this).attr('data-max');
         var minName = $(this).attr('data-min-name');
         var maxName = $(this).attr('data-max-name');
         var unit = $(this).attr('data-unit');
         $(this).slider({
             range: true,
             min: minRangeValue,
             max: maxRangeValue,
             values: [minRangeValue, maxRangeValue],
             slide: function(event, ui) {
                 event = event;
                 var currentMin = parseInt(ui.values[0]);
                 var currentMax = parseInt(ui.values[1]);
                 $(this).children(".min-value").text(currentMin + " " + unit);
                 $(this).children(".max-value").text(currentMax + " " + unit);
                 $(this).children(".current-min").val(currentMin);
                 $(this).children(".current-max").val(currentMax);
             }
         });
     });


     /* ------------------------------------------------------------------------ */
     /* BACK TO TOP
    /* ------------------------------------------------------------------------ */
     $(document).on('click', '#back-to-top, .back-to-top', () => {
         $('html, body').animate({
             scrollTop: 0
         }, '500');
         return false;
     });
     $(window).on('scroll', () => {
         if ($(window).scrollTop() > 500) {
             $('#back-to-top').fadeIn(200);
         } else {
             $('#back-to-top').fadeOut(200);
         }
     });

     // Slick SLider
     $('.slider-store').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         direction: 'vertical',
         arrows: false,
         dots: false,
         fade: true,
         autoplay: true,
         asNavFor: '.slider-thumbs'
     });
    

     $('.slider-thumbs').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         asNavFor: '.slider-store',
         dots: false,
         arrows: true,
         autoplay: true,
         direction: 'vertical',
         centerMode: true,
         focusOnSelect: true,
         responsive: [{
             breakpoint: 800,
             settings: {
                 arrows:false,
             }
         }]

     });

     $('.review-slider').slick({
         infinite: true,
         slidesToShow: 2,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         rows:0,
         autoplay: true,
         speed: 2000,
         loop:true,
         responsive: [{
             breakpoint: 916,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.review-slider1').slick({
         infinite: true,
         slidesToShow: 2,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         rows:0,
         autoplay: true,
         speed: 5000,
         loop:true,
         responsive: [{
             breakpoint: 1100,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.about-slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         rows:0,
         speed: 4000,
         loop:true,
         responsive: [{
             breakpoint: 700,
             settings: {
                 arrows:false
             }
         }]
     });

     $('.side-slider').slick({
         infinite: true,
         slidesToShow: 5,
         slidesToScroll: 1,
         arrows: false,
         rows:0,
         dots: false,
         autoplay: true,
         speed: 4000,
         loop:true,
          responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 3
             }
         }, 
         {
             breakpoint: 811,
             settings: {
                 slidesToShow: 2
            }
         }, 
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

      $('.attract-slider').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         speed: 2000,
         rows:0,
         autoplay: true,
         draggable:false,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 3
             }
         }, 
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2
            }
         }, 
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 2
             }
         }]
     });

     $('.team-slider').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         autoplay: true,
         speed: 1000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 750,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.item-slider').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         speed: 2000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 750,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.shop-slider').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         speed: 4000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 800,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 600,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.properties-slider').slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         speed: 1000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 800,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 600,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     $('.banner-slider').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         autoplay: true,
         speed: 2000,
         rows:0,
         cursor: false,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 800,
             settings: {
                 slidesToShow: 1
             }
         }]
     });

     // Slick Testimonial Slider
        $('.sl-testimonial-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          autoplay: true,
          Speed: 8000,
          rows:0,
          infinite: true,
          arrows: false,
          dots: false,
          adaptiveHeight: true
        });

     $('.partner-slider').slick({
         infinite: true,
         slidesToShow: 5,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         autoplay: true,
         speed: 2000,
         rows:0,
         loop:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 3
             }
         }, {
             breakpoint: 800,
             settings: {
                 slidesToShow: 2
             }
         }, {
             breakpoint: 500,
             settings: {
                 slidesToShow: 1
             }
         }]
     });


     $("#contactform2").validate({      
      submitHandler: function() {
        
        $.ajax({
          url : 'mail/contact.php',
          type : 'POST',
          data : {
            fname : $('input[name="first_name"]').val(),
            lname : $('input[name="last_name"]').val(),
            email : $('input[name="email"]').val(),
            phone : $('input[name="phone"]').val(),
            comments : $('textarea[name="comments"]').val(),
          },
          success : function( result ){
            $('#contactform-error-msg').html( result );
            $("#contactform2")[0].reset();
          }     
        });

      }
    });

    // burgermenu


    $(document).on( 'click', '.menu-ham' , function(){
        $('.menu').animate({right: '0px'}, 50)
        $('.header_sidemenu_in .overlay').addClass('show').removeClass('hide');
    });

    $(document).on( 'click', '.close-menu' , function(){
        $('.menu').animate({right: '-500px'}, 50)
        $('.header_sidemenu_in .overlay').addClass('hide').removeClass('show');
    });

    $(document).on( 'click', '.header_sidemenu_in .overlay' , function(){
        $('.header_sidemenu_in .overlay').addClass('hide').removeClass('show');
        $('.menu').animate({right: '-500px'}, 50)
    });

    // bubbles ----------------- 
    var bArray = [];
    var sArray = [2, 4, 6, 8];
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);

     //search categories
    $('a[href="#search1"]').on('click', function(event) {
         event.preventDefault();
         $('#search1').addClass('open');
         $('#search1 > form > input[type="search"]').focus();
     });
     $('#search1, #search1 button.close').on('click keyup', function(event) {
         if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
             $(this).removeClass('open');
         }
     });

    /*--------------------------------------------
    Wicked Picker
    --------------------------------------------*/  

    $('.set-time').wickedpicker();
    $('.selector').wickedpicker({

      // current time
      now: new Date(),

      // 12- or 24-hour format
      twentyFour: false,

      // CSS classes
      upArrow: 'wickedpicker__controls__control-up',
      downArrow: 'wickedpicker__controls__control-down',
      close: 'wickedpicker__close',
      hoverState: 'hover-state',

      // title

      title: 'Timepicker'

    });
    
     /*-----------------------------------------------------------------------------------*/
    /*  COUNTDOWN
    /*-----------------------------------------------------------------------------------*/

     $(document).ready(() => {
         loopcounter('coming-counter');
     });

    /*-----------------------------------------------------------------------------------*/
    /*  COUNTER UP
    /*-----------------------------------------------------------------------------------*/

     const callback = entries => {
         entries.forEach( entry => {
             const el = entry.target
             if ( entry.isIntersecting  && ! el.classList.contains( 'is-visible' )  ) {
                 counterUp( el, {
                     duration: 1000,
                     delay: 15,
                 } )
                 el.classList.add( 'is-visible' )
             }
         } )
     }

     const IO = new IntersectionObserver( callback, { threshold: 1 } )

     document.querySelectorAll(".value").forEach( value => {
         IO.observe(value)
     })

     $( window ).resize(function() { //Prevent being triggered again with window resize

         $('.value').destroy();

     });


     const counterUp = window.counterUp.default

     counterUp( document.querySelector( '.value' ), {
         duration: 1500,
         delay: 50,
     } )







    /*-----------------------------------------------------------------------------------*/
    /*  MASONRY
    /*-----------------------------------------------------------------------------------*/
    
     $('.blog-main').masonry({
         // options
         itemSelector: '.mansonry-item',
     });

     $('.trend-box1').masonry({
         // options
         itemSelector: '.mansonry-item1',
     });

     // Nice Select JS
     $('.niceSelect').niceSelect();

     $('a[href="#search1"]').on('click', function(event) {
         event.preventDefault();
         $('#search1').addClass('open');
         $('#search1 > form > input[type="search"]').focus();
     });
     $('#search1, #search1 button.close').on('click keyup', function(event) {
         if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
             $(this).removeClass('open');
         }
     });
     //Do not include! This prevents the form from submitting for DEMO purposes only!
     $('form').submit(function(event) {
         event.preventDefault();
         return false;
     });

 })(jQuery);


/*-----------------------------------------------------------------------------------*/
/*  CONTACT POPUP
/*-----------------------------------------------------------------------------------*/
(function() {
    try{

        if( document.readyState == "complete" ){
            onloadActions_881255();
        }  else {
            window.addEventListener('load', function (){
                onloadActions_881255();
            }, false);
        }

        function onloadActions_881255(){
            constructDiv_881255();

        }

        function constructDiv_881255(){
            var iframeDiv = document.createElement("div");
            iframeDiv.setAttribute('id','Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255');
            iframeDiv.setAttribute('class','zf_main_id_881255');

            var closeFormDiv = document.createElement("div");
            closeFormDiv.setAttribute('id','deleteform_881255');
            closeFormDiv.setAttribute('class','zf_lb_closeform_881255');


            var containerDiv = document.createElement("div");
            containerDiv.setAttribute('id','containerDiv_881255');
            containerDiv.setAttribute('class','zf_lB_Container_881255 ');
            containerDiv.appendChild(iframeDiv);
            containerDiv.appendChild(closeFormDiv);

            var wrapperDiv = document.createElement("div");
            wrapperDiv.setAttribute('class','zf_lB_Wrapper_881255');
            wrapperDiv.appendChild(containerDiv);


            var dimmerDiv = document.createElement("div");
            dimmerDiv.setAttribute('class','zf_lB_Dimmer_881255');
            dimmerDiv.setAttribute('elname','popup_box');

            var mainDiv = document.createElement("div");
            mainDiv.setAttribute('id','formsLightBox_881255');
            mainDiv.style.display = "none";
            mainDiv.appendChild(wrapperDiv);
            mainDiv.appendChild(dimmerDiv);

            document.body.appendChild(mainDiv);

        }

        function showZForm_881255(){
            console.log("Hello")
            var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
            if(iframe == undefined ||iframe.length == 0){
                loadZForm_881255();

            }
            document.getElementById("formsLightBox_881255").style.display = "block";
            document.body.style.overflow = "hidden";
        }

        function loadZForm_881255() {
            var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
            if(iframe == undefined ||iframe.length == 0){
                var f = document.createElement("iframe");
                f.src = getsrcurlZForm_881255('https://forms.zohopublic.com/panopticongroup1/form/RockoffContact/formperma/Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg?zf_rszfm=1');

                f.style.border="none";
                f.style.minWidth="100%";
                f.style.overflow="hidden";
                var d = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255");
                d.appendChild(f);

                var deleteForm = document.getElementById("deleteform_881255");
                deleteForm.onclick = function deleteZForm_881255() {
                    var divCont = document.getElementById("formsLightBox_881255");
                    divCont.style.display="none";
                    document.body.style.overflow = "";

                    var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
                    iframe.remove();
                }



                window.addEventListener('message', function (){
                    var evntData = event.data;
                    if( evntData && evntData.constructor == String ){
                        var zf_ifrm_data = evntData.split("|");
                        if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                            var zf_perma = zf_ifrm_data[0];
                            var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                            var iframe = document.getElementById("Wf5Jzwfqkmx74zEHgJpkZXswizec05Tofou3KRK4kIg_881255").getElementsByTagName("iframe")[0];
                            if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                                var prevIframeHeight = iframe.style.height;

                                var zf_tout = false;
                                if( zf_ifrm_data.length == 3 ) {
                                    iframe.scrollIntoView();
                                    zf_tout = true;
                                }

                                if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                                    if( zf_tout ) {
                                        setTimeout(function(){
                                            iframe.style.minHeight = zf_ifrm_ht_nw;
                                            var containerDiv = document.getElementById("containerDiv_881255");
                                            containerDiv.style.height=zf_ifrm_ht_nw;
                                        },500);
                                    } else {
                                        iframe.style.minHeight = zf_ifrm_ht_nw;
                                        var containerDiv = document.getElementById("containerDiv_881255");
                                        containerDiv.style.height=zf_ifrm_ht_nw;
                                    }
                                }
                            }
                        }
                    }

                }, false);
            }
        }



        function getsrcurlZForm_881255(zf_src) {
            try {

                if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
                    for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                        var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                        var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                        if ( typeof utmVal !== "undefined" ) {
                            if ( utmVal != "" ){
                                if(zf_src.indexOf('?') > 0){
                                    zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
                                }else{
                                    zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
                                }
                            }
                        }
                    }
                }

                if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
                    for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                        var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                        var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                        if ( typeof utmVal !== "undefined" ) {
                            if ( utmVal != "" ){
                                if(zf_src.indexOf('?') > 0){
                                    zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
                                }else{
                                    zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
                                }
                            }
                        }
                    }
                }
            }catch(e){}
            return zf_src;
        }

        document.querySelectorAll(".contact-btn").forEach(val => {
            val.addEventListener("click", showZForm_881255);
        })






    }catch(e){}
})();

 /*Title: Cool Modal Popup Sign In/Out Form*/

$(function() {
  //defining all needed variables
  var $overlay = $('.overlay');
  var $mainPopUp = $('.main-popup')
  var $signIn = $('#sign-in');
  var $register = $('#register');
  var $formSignIn = $('form.sign-in');
  var $formRegister = $('form.register');
  
  var $firstChild = $('nav ul li:first-child');
  var $secondChild = $('nav ul li:nth-child(2)');
  var $thirdChild = $('nav ul li:nth-child(3)');
  
  //defining function to create underline initial state on document load
  function initialState() {
    $('.underline').css({
      "width": $firstChild.width(),
      "left": $firstChild.position().left,
      "top": $firstChild.position().top + $firstChild.outerHeight(true) + 'px'
    });
  }
  initialState(); //() used after calling function to call function immediately on doc load
  
  //defining function to change underline depending on which li is active
  function changeUnderline(el) {
    $('.underline').css({
      "width": el.width(),
      "left": el.position().left,
      "top": el.position().top + el.outerHeight(true) + 'px'
    });
  } //note: have not called the function...don't want it called immediately
  
  $firstChild.on('click', function(){
    var el = $firstChild;
    changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
    $secondChild.removeClass('active');
    $thirdChild.removeClass('active');
    $(this).addClass('active');
  });
  
  $secondChild.on('click', function(){
    var el = $secondChild;
    changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
    $firstChild.removeClass('active');
    $thirdChild.removeClass('active');
    $(this).addClass('active');
  });
  
  $thirdChild.on('click', function(){
    var el = $thirdChild;
    changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
    $firstChild.removeClass('active');
    $secondChild.removeClass('active');
    $(this).addClass('active');
  });
  
  
  $('button').on('click', function(){
    $overlay.addClass('visible');
    $mainPopUp.addClass('visible');
    $signIn.addClass('active');
    $register.removeClass('active');
    $formRegister.removeClass('move-left');
    $formSignIn.removeClass('move-left');
  });
  $overlay.on('click', function(){
    $(this).removeClass('visible');
    $mainPopUp.removeClass('visible');
  });
  $('#popup-close-button a').on('click', function(e){
    e.preventDefault();
    $overlay.removeClass('visible');
    $mainPopUp.removeClass('visible');
  });
  
  $signIn.on('click', function(){
    $signIn.addClass('active');
    $register.removeClass('active');
    $formSignIn.removeClass('move-left');
    $formRegister.removeClass('move-left');
  });
  
  $register.on('click', function(){
    $signIn.removeClass('active');
    $register.addClass('active');
    $formSignIn.addClass('move-left');
    $formRegister.addClass('move-left');
  });
  
  $('input').on('submit', function(e){
    e.preventDefault(); //used to prevent submission of form...remove for real use
  });
});



 jQuery(window).on('resize load', () => {
     resize_eb_slider();
 }).resize();
 /**
  * Resize slider
  */
 function resize_eb_slider() {
     let bodyheight = jQuery(this).height();
     if (jQuery(window).width() > 1400) {
         bodyheight *= 0.90;
         jQuery('.slider').css('height', `${bodyheight}px`);
     }
 }
