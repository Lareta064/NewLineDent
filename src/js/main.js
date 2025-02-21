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

    // Fancybox
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
    });
    
});
 
   document.addEventListener("DOMContentLoaded", function () {
    let teamSlider = null; // Переменная для хранения экземпляра Swiper

    function initSwiper() {
        if (window.innerWidth < 1200 && !teamSlider) {
            // Инициализация Swiper
            teamSlider = new Swiper(".teams-cards", {
                slidesPerView: "auto",
                speed: 800,
                spaceBetween: 10,
                navigation: {
                    nextEl: ".teams-cards-nav .arrow-next",
                    prevEl: ".teams-cards-nav .arrow-prev",
                },
            });
        } else if (window.innerWidth >= 1200 && teamSlider) {
            // Уничтожение Swiper при большом экране
            teamSlider.destroy(true, true);
            teamSlider = null;
        }
    }

    // Вызываем при загрузке страницы
    initSwiper();

    // Отслеживаем изменение размера окна
    window.addEventListener("resize", initSwiper);
});