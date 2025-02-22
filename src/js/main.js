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

    let stepsSlider= null; // Переменная для хранения экземпляра Swiper

    function initSwiperSlider() {
        if (window.innerWidth < 1280 && !stepsSlider) {
          stepsSlider = new Swiper('.steps-slider', {
            slidesPerView: 'auto',
            speed: 800,
            spaceBetween: 10,
            pagination: {
              el: ".steps-slider-pagination",
              type: "fraction",
            },
            navigation: {
             nextEl: ".steps-slider-next",
            
           }
         });
        } else if (window.innerWidth >= 1280 && stepsSlider) {
            // Уничтожение Swiper при большом экране
            stepsSlider.destroy(true, true);
            stepsSlider = null;
        }
    }

    // Вызываем при загрузке страницы
    initSwiperSlider();

    // Отслеживаем изменение размера окна
    window.addEventListener("resize", initSwiperSlider);

    //FORMS FAKE PLACEHOLDER
    const formItems = document.querySelectorAll('.form-item');
    if(formItems.length > 0){
      formItems.forEach((item)=>{
        let itemFakePlhl = item.querySelector('.fake-placeholder');
        let itemInput = item.querySelector('.form-input');
        if(itemFakePlhl){
          itemInput.addEventListener('input', ()=>{
            item.classList.add('form-item--focus');
          });
          itemInput.addEventListener('blur', ()=>{
           if(itemInput.value == ''){
            item.classList.remove('form-item--focus');
           }
          });
        }

      })
    }
});