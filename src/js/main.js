document.addEventListener("DOMContentLoaded", function () {
    let bodyEl = document.body;
    	/*open mobile menu */
    const menuButton = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('#header-menu');
    
    menuButton.addEventListener('click', ()=> {
      
      if( menuButton.classList.contains('active')){
        menuButton.classList.remove('active');
        mobileMenu.classList.remove('active');
        bodyEl.classList.remove('lock');
        
      }else{
        menuButton.classList.add('active');
        mobileMenu.classList.add('active');
        bodyEl.classList.add('lock');
      }
    });
    // window.addEventListener('resize', ()=>{

    // });

    // POPPULARE SLIDER
    let poppulareSlider = new Swiper('.poppular-slider', {
       slidesPerView: 1,
       speed: 800,
       spaceBetween: 10,
       navigation: {
        nextEl: ".poppular-service-nav .arrow-next",
        prevEl: ".poppular-service-nav .arrow-prev",
      },
    });
});
