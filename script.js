$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Web Developer", "Designer", "Software Developer","Competitive Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Web Developer", "Designer", "Software Developer","Competitive Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz5_TWatxzGB-_1Yw71IBSfOTNzcP7BNaVeTMf6ZnSquDVDUx8WsL3cddrWbmWOBF2LQw/exec';
    const form = document.forms['submit-to-google-sheet'];
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('msg').innerHTML = 'Sending...';
    
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          document.getElementById('msg').innerHTML = 'Message sent!';
          setTimeout(function(){
            msg.innerHTML = "";
        },1500)
        form.reset();
      })
        .catch(error => {
          document.getElementById('msg').innerHTML = 'An error occurred. Please try again.';
        });
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});