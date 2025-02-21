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
  document.addEventListener("DOMContentLoaded", function () {
    let serviceCards= null; // Переменная для хранения экземпляра Swiper

    function initSwiper2() {
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
    initSwiper2();

    // Отслеживаем изменение размера окна
    window.addEventListener("resize", initSwiper2);
});