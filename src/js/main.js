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
      // clinicSlider
      let clinicSlider = new Swiper(".clinic-slider", {
        slidesPerView: 'auto',
        speed: 800,
        spaceBetween: 18,
        navigation: {
            nextEl: ".clinic-slider-nav .arrow-next",
            prevEl: ".clinic-slider-nav .arrow-prev",
          
        },
        
    });
    // Fancybox
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
    });
    
    //service-cards slider
    let serviceCards= null; 

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

    initSwiper();

    // Отслеживаем изменение размера окна
    window.addEventListener("resize", initSwiper);
    
    
    //STERS SLIDER
    let stepsSlider= null;
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
    initSwiperSlider();
    window.addEventListener("resize", initSwiperSlider);
   
    //Review slider
    let testimonialSlider= null; // Переменная для хранения экземпляра Swiper

    function initSwiperSliderReview() {
        if (window.innerWidth < 768 && !testimonialSlider) {
          testimonialSlider = new Swiper('.testimonial-slider', {
            slidesPerView: 'auto',
            speed:800,
            navigation: {
                nextEl: ".testimonial-slider-nav .arrow-next",
                prevEl: ".testimonial-slider-nav .arrow-prev",
                
              }
         });
        } else if (window.innerWidth >= 768 && testimonialSlider) {
            // Уничтожение Swiper при большом экране
            testimonialSlider.destroy(true, true);
            testimonialSlider = null;
        }
    }

    initSwiperSliderReview();
    window.addEventListener("resize", initSwiperSliderReview);

   //FORMS FAKE PLACEHOLDER
   const formItems = document.querySelectorAll('.form-item');
				
   if(formItems.length > 0){
     formItems.forEach((item)=>{
       let itemFakePlhl = item.querySelector('.fake-placeholder');
       let itemInput = item.querySelector('.form-input');
       if(itemFakePlhl && itemInput){
       itemInput.addEventListener('focus', ()=>{
         console.log(formItems)
         item.classList.add('input-focus');
       });
       itemInput.addEventListener('blur', ()=>{
       if(itemInput.value == ''){
         item.classList.remove('input-focus');
       }
       });
       }

     });
   }
});
// ACCORDION
document.addEventListener("DOMContentLoaded", function () {
    ;(function ($, window, document, undefined) {
      "use strict";
      var pluginName = 'simpleAccordion',
      defaults = {
        multiple: false,
        speedOpen: 300,
        speedClose: 150,
        easingOpen: null,
        easingClose: null,
        headClass: 'accordion-header',
        bodyClass: 'accordion-body',
        openClass: 'open',
        defaultOpenClass: 'default-open',
        cbClose: null, //function (e, $this) {},
        cbOpen: null //function (e, $this) {}
      };
      function Accordion(element, options) {
        this.$el = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        if (typeof this.$el.data('multiple') !== 'undefined') {
          this.options.multiple = this.$el.data('multiple');
          } else {
          this.options.multiple = this._defaults.multiple;
        }
        this.init();
      }
      Accordion.prototype = {
        init: function () {
          var o = this.options,
          $headings = this.$el.children('.' + o.headClass);
          $headings.on('click', {_t:this}, this.headingClick);
          $headings.filter('.' + o.defaultOpenClass).first().click();
        },
      
      
      headingClick: function (e) {
        var $this = $(this),
            _t = e.data._t,
            o = _t.options,
            $headings = _t.$el.children('.' + o.headClass),
            $currentOpen = $headings.filter('.' + o.openClass),
            $accordionGroup = _t.$el; // Ссылка на accordion-group
        
        // Проверяем, есть ли класс .accordion-group--open
        var isGroupOpen = $accordionGroup.hasClass('accordion-group--open');

        if (!$this.hasClass(o.openClass)) {
          // Если класс .accordion-group--open есть, или multiple включен, не закрываем другие
          if (!isGroupOpen && $currentOpen.length && o.multiple === false) {
            $currentOpen.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
              if ($.isFunction(o.cbClose)) {
                o.cbClose(e, $currentOpen);
              }
              $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
                if ($.isFunction(o.cbOpen)) {
                  o.cbOpen(e, $this);
                }
              });
            });
          } else {
            $this.addClass(o.openClass).next('.' + o.bodyClass).slideDown(o.speedOpen, o.easingOpen, function () {
              $this.removeClass(o.defaultOpenClass);
              if ($.isFunction(o.cbOpen)) {
                o.cbOpen(e, $this);
              }
            });
          }
        } else {
          $this.removeClass(o.openClass).next('.' + o.bodyClass).slideUp(o.speedClose, o.easingClose, function () {
            if ($.isFunction(o.cbClose)) {
              o.cbClose(e, $this);
            }
          });
        }
      }
      
      };


      $.fn[pluginName] = function (options) {
        return this.each(function () {
          if (!$.data(this, 'plugin_' + pluginName)) {
            $.data(this, 'plugin_' + pluginName,
            new Accordion(this, options));
          }
        });
      };
      }(jQuery, window, document));

      $(function() {
        $('.accordion-group').simpleAccordion({
          cbClose: function(e, $header) {
            var video = $header.next('.accordion-body').find('.video')[0];
            if (video && !video.paused) {
              video.pause();
              $(video).parent().removeClass('active');
            }
          }
        });
      });

 	
})
// TABS
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs-group").forEach((tabsGroup) => {
      const tabButtons = tabsGroup.querySelectorAll("[data-tbat]");
      const tabContents = tabsGroup.querySelectorAll("[data-tcontent]");

      tabButtons.forEach((button) => {
          button.addEventListener("click", () => {
             tabButtons.forEach((el)=>{el.classList.remove("active");})
              const target = button.getAttribute("data-tbat");

              // Удаляем активный класс у всех вкладок
              tabContents.forEach((content) => {
                  content.classList.remove("active");
                
              });

              // Находим и добавляем активный класс к нужному контенту
              const activeContent = tabsGroup.querySelector(`[data-tcontent="${target}"]`);
              if (activeContent) {
                  activeContent.classList.add("active");
                  button.classList.add("active");
              }
          });
      });
  });
});
