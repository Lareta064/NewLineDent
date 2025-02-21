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

    // teamSlider
    let teamSlider = new Swiper(".teams-cards", {
      slidesPerView: 'auto',
      speed: 800,
      spaceBetween: 10,
      navigation: {
          nextEl: ".teams-cards-next",
         
      },
      breakpoints: {
       
       1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        
      }
  });

    // Fancybox
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
    });
    

    let serviceCards= null; // Переменная для хранения экземпляра Swiper

    function initSwiper() {
        if (window.innerWidth < 768 && !serviceCards) {
           serviceCards = new Swiper('.service-cards', {
            slidesPerView: 1,
            speed: 800,
            spaceBetween: 10,
            navigation: {
             nextEl: ".service-cards-nav .arrow-next",
             prevEl: ".service-cards-nav .arrow-prev",
           },
         });
        } else if (window.innerWidth >= 768 && serviceCards) {
            // Уничтожение Swiper при большом экране
            serviceCards.destroy(true, true);
            serviceCards = null;
        }
    }

    // Вызываем при загрузке страницы
    initSwiper();

    // Отслеживаем изменение размера окна
    window.addEventListener("resize", initSwiper);
});