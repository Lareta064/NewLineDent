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
    //.promo-product-cards grid
    const promoCardsWrapper= document.querySelector('.promo-product-cards');
    if( promoCardsWrapper){
      
      if(promoCardsWrapper.childElementCount == 4){
        promoCardsWrapper.classList.add('two-columns-grid');
      }
    }
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

    //teamShortSlider
    let teamShortSlider = null; 
    function initShortSwiper() {
        if (window.innerWidth < 768 && !teamShortSlider) {
          teamShortSlider = new Swiper('.team-short-swiper', {
            slidesPerView: 'auto',
            speed: 800,
            spaceBetween: 10,
            navigation: {
                nextEl: ".team-short-nav .arrow-next",
                prevEl: ".team-short-nav .arrow-prev",
              
            },
         });
        } else if (window.innerWidth >= 768 && teamShortSlider) {
            // Уничтожение Swiper при большом экране
            teamShortSlider.destroy(true, true);
            teamShortSlider = null;
        }
    }
    initShortSwiper();
    window.addEventListener("resize", initShortSwiper);
    
    let teamSwiperBlog = null; 
    function initblogTeamSwiper() {
        if (window.innerWidth < 768 && !teamSwiperBlog) {
          teamSwiperBlog = new Swiper('.teams-swiper', {
            slidesPerView: 'auto',
            speed: 800,
            spaceBetween: 10,
            
         });
        } else if (window.innerWidth >= 768 && teamSwiperBlog) {
            // Уничтожение Swiper при большом экране
            teamSwiperBlog.destroy(true, true);
            teamSwiperBlog = null;
        }
    }
    initblogTeamSwiper();
    window.addEventListener("resize", initblogTeamSwiper);


    //revSlider
    let revSlider = new Swiper(".about-review", {
      slidesPerView: 3,
      speed: 800,
      spaceBetween: 10,
      navigation: {
         nextEl: ".about-review-nav .arrow-next",
         prevEl: ".about-review-nav .arrow-prev",
        
      },
      breakpoints: {
      320: {
        slidesPerView: 1,
        
        },
      699: {
          slidesPerView: 2,
          
          }, 
      1024: {
          slidesPerView: 3,
         
        },
        1280: {
          slidesPerView: 2.9,
          
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
        if (window.innerWidth < 768 && !stepsSlider) {
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
        } else if (window.innerWidth >= 768 && stepsSlider) {
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

   
   /*=====CUSTOM SELECT===== */
   if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--visible');
      this.classList.toggle('dropdown__button--active');
    });
      

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--active');
        
      });
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
      }
    });
  });

    /* =============== modal с атрибутом [data-modal] ===============*/ 
    const modalOpen = document.querySelectorAll('[data-btn]');
    const modalFrames = document.querySelectorAll('[data-modal]');
    
    if (modalFrames.length > 0) {
        const modalFramesClose = document.querySelectorAll('[data-close]');
    
        // Открытие модального окна
        for (let item of modalOpen) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation(); // Предотвращаем всплытие
    
                const itemAttr = item.getAttribute('data-btn');
    
                for (let frame of modalFrames) {
                    const frameAttr = frame.getAttribute('data-modal');
                    if (frameAttr === itemAttr) {
                        frame.classList.add('visible');
                        document.body.classList.add('lock');
                    }
                }
            });
        }
    
        // Закрытие модального окна при клике на крестик (data-close)
        for (let item of modalFramesClose) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation(); // Предотвращаем всплытие
    
                const parentModal = item.closest('[data-modal]');
                if (parentModal) {
                    // Закрываем текущее модальное окно
                    parentModal.classList.remove('visible');
    
                    // Закрываем все дочерние модальные окна внутри родителя
                    const childModals = parentModal.querySelectorAll('[data-modal].visible');
                    for (let child of childModals) {
                        child.classList.remove('visible');
                    }
    
                    // Проверяем, остались ли открытые модальные окна
                    const anyModalVisible = document.querySelector('[data-modal].visible');
                    if (!anyModalVisible) {
                        document.body.classList.remove('lock');
                    }
                }
            });
        }
    
        // Закрытие модальных окон по клику вне их
        document.addEventListener('click', function (e) {
            const target = e.target;
    
            // Проверяем, кликнули ли мы по data-modal, но не по data-btn внутри него
            if (target.matches('[data-modal]') && !target.querySelector('[data-btn]:hover')) {
                // Закрываем и текущее модальное окно, и его дочерние модалки
                target.classList.remove('visible');
                const childModals = target.querySelectorAll('[data-modal].visible');
                for (let child of childModals) {
                    child.classList.remove('visible');
                }
    
                // Проверяем, остались ли открытые модальные окна
                const anyModalVisible = document.querySelector('[data-modal].visible');
                if (!anyModalVisible) {
                    document.body.classList.remove('lock');
                }
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
  let activeSwiper = null; // Храним активный Swiper

  function initSwiper(container) {
      return new Swiper(container, {
          slidesPerView: 'auto',
          speed: 800,
          navigation: {
              nextEl: ".mySwiper .arrow-next",
              prevEl: ".mySwiper .arrow-prev",
          },
      });
  }

  function activateTab(tabButton) {
      const tabValue = tabButton.getAttribute("data-tbat");

      document.querySelectorAll(".tabs__nav-btn").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tabs-content").forEach(tab => tab.classList.remove("active"));

      
      tabButton.classList.add("active");
      const activeTab = document.querySelector(`.tabs-content[data-tcontent="${tabValue}"]`);
      if (activeTab) {
          activeTab.classList.add("active");

         
          setTimeout(() => {
              const swiperContainer = activeTab.querySelector(".mySwiper");
              if (swiperContainer) {
                  if (activeSwiper) activeSwiper.destroy(true, true); // Удаляем старый Swiper
                  activeSwiper = initSwiper(swiperContainer); // Запускаем новый Swiper
              }
          }, 50);
      }
  }

 
  document.querySelectorAll(".tabs__nav-btn").forEach(btn => {
      btn.addEventListener("click", () => activateTab(btn));
  });

  
  const firstActiveTab = document.querySelector(".tabs__nav-btn.active") || document.querySelector(".tabs__nav-btn");
  if (firstActiveTab) activateTab(firstActiveTab);

  /*ОТОБРАЖЕНИЕ ЕЩЕ КАРТОЧЕК НА СТР БЛОГ */
  let wrapperHasHideCars = document.querySelectorAll('.has-hide-cards');
  if(wrapperHasHideCars.length > 0){
    wrapperHasHideCars.forEach(function(box){
      let showMoreBtn = box.querySelector('[data-target="show-more"]');
      let hideCards = box.querySelectorAll('.hide-card');
      if(showMoreBtn){

        showMoreBtn.addEventListener('click',  function(){
          hideCards.forEach(function(card){
            if(card.classList.contains('d-none')){
              card.classList.remove('d-none');
              showMoreBtn.innerText = 'Показать меньше'
            }else{
              card.classList.add('d-none');
              showMoreBtn.innerText = 'Показать больше'
            }
          })
        });
      }

    });
  }
});
