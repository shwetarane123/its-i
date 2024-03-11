(function ($) {
  "use strict";

  // Slick Slider Activation
  var $slickActivation = $(".slick_activation");
  if ($slickActivation.length > 0) {
    $slickActivation.slick({
      prevArrow:
        '<button class="prev_arrow"> <i class="ion-ios-arrow-back"></i> </button>',
      nextArrow:
        '<button class="next_arrow"><i class="ion-ios-arrow-forward"></i></button>',
    });
  }

  // Slick Slider Activation style2
  var $slickActivation = $(".slick_activation-style2");
  if ($slickActivation.length > 0) {
    $slickActivation.slick({
      prevArrow: '<button class="prev_arrow"> Previous </button>',
      nextArrow: '<button class="next_arrow"> Next </button>',
    });
  }

    /* tab btn Activation */
  $(".tab_btn-list a").on("click", function (e) {
    e.preventDefault();

    var $href = $(this).attr("href");

    $(".tab_btn-list a").removeClass("active");
    $(this).addClass("active");

    $(".articles_tab_content .tab-pane").removeClass("active show");
    $(".articles_tab_content " + $href).addClass("active show");
  });

  

  /*
    mobile website menu Activation
  */
  $(".mobile__menu--open__btn").initMM({
    enable_breakpoint: true,
    mobile_button: true,
    breakpoint: 991,
    menu_class: "navbar_mobile_menu",
  });

  /*
    mobile cms article menu Activation
  */
  $(".cms_article-icon").initMM({
    enable_breakpoint: true,
    mobile_button: true,
    breakpoint: 991,
    menu_class: "cms_articles_mobile_menu",
  });

  /*
    mobile cms article menu Activation
  */
  $(".page__mobile--menu__btn").initMM({
    enable_breakpoint: true,
    mobile_button: true,
    breakpoint: 991,
    menu_class: "page_filter_mobile_menu",
  });



   /*
    about swiper activation
  */
   var swiper3 = new Swiper(".about__swiper--activation", {
    slidesPerView: 1,
    loop: false,
    clickable: true,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

   /* article count swiper activation */
   var swiper = new Swiper(".article_count-swiper", {
    slidesPerView: 2,
    loop: false,
    clickable: true,
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".article_count-inner .swiper-button-next",
      prevEl: ".article_count-inner .swiper-button-prev",
    },
  });

   /* articles structure swiper activation */
   var swiper = new Swiper(".articles__structure--swiper", {
    slidesPerView: 1,
    loop: false,
    clickable: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


   /* articles sponsored swiper activation */
   var swiper = new Swiper(".articles__sponsored--swiper", {
    slidesPerView: 1,
    loop: false,
    clickable: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".articles__sponsored--inner .swiper-button-next",
      prevEl: ".articles__sponsored--inner .swiper-button-prev",
    },
  });
  
  /* section navigation swiper activation */
  var swiper3 = new Swiper(".section__navigation--swiper", {
    slidesPerView: 8,
    loop: true,
    clickable: true,
    spaceBetween: 0,
    breakpoints: {
      1600: {
        slidesPerView: 8,
      },
      1366: {
        slidesPerView: 7,
      },
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 4,
      },
      300: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: " .section__navigation--slider__inner .swiper-button-next",
      prevEl: " .section__navigation--slider__inner .swiper-button-prev",
    },
  });


  // explore column4 activation
var swiper = new Swiper(".explore__column4", {
  slidesPerView: 4,
  loop: false,
  clickable: true,
  spaceBetween: 40,
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: " .swiper-button-next",
    prevEl: " .swiper-button-prev",
  },
});


  /* active class activation */
  $(".table_click_icon a").click(function () {
    $(".table_dropdown_contents").slideToggle();
    $(this).toggleClass("active");
  });

/*
  Sorting active class
*/
const sortingList = document.querySelectorAll('.sorting__item--list');
if(sortingList){
  sortingList.forEach(function(item){
    item?.addEventListener('click', function(event){
      event.preventDefault();
      if(item.parentElement.classList.contains('active')){
        item.parentElement.classList.remove('active');
      }else{
        item.parentElement.classList.add('active');
      }
    })
  })
}
  

})(jQuery);

/*
    Get window top offset
  */
    function TopOffset(el) {
      let rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop };
    }
    /*
      Header sticky activation
    */
      const headerStickyWrapper = document.querySelector("header");
      const headerStickyTarget = document.querySelector(".header__sticky");
    
      if (headerStickyTarget) {
        window.addEventListener("scroll", function () {
          let StickyTargetElement = TopOffset(headerStickyWrapper);
          let TargetElementTopOffset = StickyTargetElement.top;
    
          if (window.scrollY > 100) {
            headerStickyTarget.classList.add("sticky");
          } else {
            headerStickyTarget.classList.remove("sticky");
          }
        });
      }



/*
  Header left offset
*/
function headerNavigationOffset(){
  const headerMainArea = document.querySelector(".header__section")
  const NavPageTitle = document.querySelector(".page__title--name");
  if (window.outerWidth >= 1300) {
    if(NavPageTitle){
      const NavigationOffsetLeft = `${215 - NavPageTitle.clientWidth}px`;
      headerMainArea.setAttribute(`style`, `--page-title-offset: ${NavigationOffsetLeft}`);
    }
  }
  if (window.outerWidth <= 1299) {
    if(NavPageTitle){
      const NavigationOffsetLeft = `${188 - NavPageTitle.clientWidth}px`;
      headerMainArea.setAttribute(`style`, `--page-title-offset: ${NavigationOffsetLeft}`);
    }
  }
}
headerNavigationOffset();
window.addEventListener("resize", function () {
  headerNavigationOffset();
});

/*
  Nice select 2 activation
*/
let selectOptionAllTag = document.querySelectorAll(".select_option");
if(selectOptionAllTag.length > 0){
  selectOptionAllTag.forEach((select) => {
    NiceSelect.bind(select);
  });
}


/*
  header Sidebar activation
*/
const sidebarToggle = document.querySelector(".header__sidebar--menu__icon");
const sidebarHeader = document.querySelector(".header__sidebar");
const HeaderTopProfileText = document.getElementById("infotopia-main-id");

if (sidebarToggle && sidebarHeader) {
  sidebarToggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (sidebarHeader.classList.contains("active")) {
      sidebarHeader.classList.remove("active");
    } else {
      sidebarHeader.classList.add("active");
    }
    /* Profile text */
    if (HeaderTopProfileText.classList.contains("active")) {
      HeaderTopProfileText.classList.remove("active");
    } else {
      HeaderTopProfileText.classList.add("active");
    }
  });
}

/*
cms article sidebar activation
*/
const smallSIdebarMain = document.getElementById("cms-article-sidebar-id");
const smallSIdebarToggle = document.getElementById("cms-article-toggle");
const mainContentWrapper = document.querySelector(".main__content--wrapper");

if (smallSIdebarToggle && smallSIdebarMain) {
  smallSIdebarToggle.addEventListener("click", (event) => {
    event.preventDefault();
    if (smallSIdebarMain.classList.contains("active")) {
      smallSIdebarMain.classList.remove("active");
    } else {
      smallSIdebarMain.classList.add("active");
    }

    // Main content class add and remove
    if (mainContentWrapper.classList.contains("active")) {
      mainContentWrapper.classList.remove("active");
    } else {
      mainContentWrapper.classList.add("active");
    }
  });
}

/*
  Header menu bar hover js
*/
const headerMenuAccount = document.querySelector(".header__profile--link");
if(headerMenuAccount){
  let headerAccountMenuLIst = document.querySelector(".account_dropdown-menu");
  headerMenuAccount.addEventListener("click", function(event){
    event.preventDefault();
    if(headerAccountMenuLIst.classList.contains("active") === false){
      headerAccountMenuLIst.classList.add("active");
    }else{
      headerAccountMenuLIst.classList.remove("active");
    }
    if(headerMenuAccount.classList.contains("active") === false){
      headerMenuAccount.classList.add("active");
    }else{
      headerMenuAccount.classList.remove("active");
    }
  })

  document.addEventListener("click", function(event){
    if(!event.target.closest(".header__profile--link") && !event.target.closest(".account_dropdown-menu")){
      if(headerAccountMenuLIst.classList.contains("active") && headerMenuAccount.classList.contains("active")){
        headerAccountMenuLIst.classList.remove("active");
        headerMenuAccount.classList.remove("active");
      }
    }
  })
}


/*
  Password show
*/
const passwordField = document.querySelectorAll(".passoword--field");
if (passwordField) {
  passwordField.forEach(function (singleField) {
    let password = singleField.querySelector("input");
    let togglePassword = singleField.querySelector("button");

    togglePassword?.addEventListener("click", function (e) {
      e.preventDefault();
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      if (togglePassword.classList.contains("active")) {
        togglePassword.classList.remove("active");
      } else {
        togglePassword.classList.add("active");
      }
    });
  });
}

/* 
  categories header name active class
*/
const sortingList = document.querySelectorAll(
  ".articles__categories--header__name"
);
if (sortingList) {
  sortingList.forEach(function (item) {
    item?.addEventListener("click", function (event) {
      sortingList.forEach(function (item) {
        if (item.parentElement.classList.contains("desc-active") && item.parentElement.classList.contains("active") == false) {
          item.parentElement.classList.remove("desc-active");
        }
        if (item.parentElement.classList.contains("asc-active")  && item.parentElement.classList.contains("active") == false) {
          item.parentElement.classList.remove("asc-active");
        }
        item.parentElement.classList.remove("active");
      });

      this.parentElement.classList.add("active");
          
      if (this.parentElement.classList.contains("desc-active")) {
        this.parentElement.classList.add("asc-active");        
        this.parentElement.classList.remove("desc-active");
      }else{
        if(this.parentElement.classList.contains("asc-active")){
          this.parentElement.classList.remove("asc-active");        
          this.parentElement.classList.add("desc-active");
        }else{
          this.parentElement.classList.add("asc-active"); 
        }
      }
    });
  });
}


/*
  Comment show more button
*/
const commentShowMoreBtn = document.querySelector(".comment__show__more__btn");
const allCommentList = document.querySelectorAll("#comment__list--wrapper .comment__reply--list")
if(allCommentList){
  commentShowMoreBtn?.addEventListener("click", function(event){
    allCommentList.forEach(function(singleComment, index){
      if(singleComment.classList.contains("d-none")){
        singleComment.classList.remove("d-none");
        singleComment.classList.add("d-flex");
        commentShowMoreBtn.innerHTML = `Show less <svg xmlns="http://www.w3.org/2000/svg" width="11.457" height="7.457" viewBox="0 0 11.457 7.457">
        <g id="Group_7482" data-name="Group 7482" transform="translate(-873.674 -384.891)">
          <line id="Line_1136" data-name="Line 1136" x2="4.52" y2="4.28" transform="matrix(0.985, 0.174, -0.174, 0.985, 875.646, 386.119)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"></line>
          <line id="Line_1137" data-name="Line 1137" y1="4.28" x2="4.52" transform="matrix(0.985, -0.174, 0.174, 0.985, 878.708, 386.904)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"></line>
        </g>
      </svg>`;
      }else{
        if(index > 1){
          singleComment.classList.add("d-none");
          commentShowMoreBtn.innerHTML = `Show more <svg xmlns="http://www.w3.org/2000/svg" width="11.457" height="7.457" viewBox="0 0 11.457 7.457">
            <g id="Group_7482" data-name="Group 7482" transform="translate(-873.674 -384.891)">
              <line id="Line_1136" data-name="Line 1136" x2="4.52" y2="4.28" transform="matrix(0.985, 0.174, -0.174, 0.985, 875.646, 386.119)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"></line>
              <line id="Line_1137" data-name="Line 1137" y1="4.28" x2="4.52" transform="matrix(0.985, -0.174, 0.174, 0.985, 878.708, 386.904)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"></line>
            </g>
          </svg>`;
        }
      }
    });
  });
}



/*
  Module CRUD  activation
*/
const addButtonAll = document.querySelectorAll(".add_module-btn");
if(addButtonAll.length > 0){
  addButtonAll.forEach((addButton) => {
    addButton?.addEventListener("click", function () {
      // Add module content
      let moduleContent = `<div class="modules_category-list  reference module__list--item">
        <span class="input__label module__list--count-label">${addButton.dataset.label} (<span class="add__module--count">1</span>)</span>
        <div class="input__box modules_category-one">
            <input class="input__field" type="text">
        </div> 
        <button class="close_module-btn"><svg xmlns="http://www.w3.org/2000/svg" width="19.997" height="19.997" viewBox="0 0 19.997 19.997">
          <g id="vuesax_linear_close-circle" data-name="vuesax/linear/close-circle" transform="translate(-236 -252)">
            <g id="close-circle" transform="translate(236 252)">
              <path id="Vector" d="M8.332,16.664A8.332,8.332,0,1,0,0,8.332,8.356,8.356,0,0,0,8.332,16.664Z" transform="translate(1.666 1.666)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path id="Vector-2" data-name="Vector" d="M0,4.716,4.716,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path id="Vector-3" data-name="Vector" d="M4.716,4.716,0,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
              <path id="Vector-4" data-name="Vector" d="M0,0H20V20H0Z" fill="none" opacity="0"></path>
            </g>
          </g>
        </svg>
        </button>
      </div>`;
    
      let moduleContentTwo = `<div class="modules_category-list module__list--item"><div class="create_articles-category"><input type="text" class="articles_input-field"></div><button class="close_module-btn"><svg xmlns="http://www.w3.org/2000/svg" width="19.997" height="19.997" viewBox="0 0 19.997 19.997">
      <g id="vuesax_linear_close-circle" data-name="vuesax/linear/close-circle" transform="translate(-236 -252)">
        <g id="close-circle" transform="translate(236 252)">
          <path id="Vector" d="M8.332,16.664A8.332,8.332,0,1,0,0,8.332,8.356,8.356,0,0,0,8.332,16.664Z" transform="translate(1.666 1.666)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          <path id="Vector-2" data-name="Vector" d="M0,4.716,4.716,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          <path id="Vector-3" data-name="Vector" d="M4.716,4.716,0,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          <path id="Vector-4" data-name="Vector" d="M0,0H20V20H0Z" fill="none" opacity="0"></path>
        </g>
      </g>
    </svg>
    </button></div>`;
    
    let sponsorContent = `<div class="create_articles-inner module__list--item">
    <div class="articles__sponsorship mb-30">
      <div class="articles__sponsorshipry--list notification__box">
        <div class="notify__button--header mb-12">
          <label class="input__label">Name</label>
          <button class="terms__condition--button sponsor__notify_button"><img class="input__label__icon" src="https://firstclass.ams3.digitaloceanspaces.com/Small_Icon_Explanation.svg" alt="icon"></button>
        </div>
        <!--  Notification box start -->
        <div class="terms__condition--message">
          <button class="terms__condition--message__remove--button">
            <svg id="vuesax_linear_add-square" data-name="vuesax/linear/add-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="add-square" transform="translate(0 0)">
                <path id="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0"/>
              </g>
              <path id="Vector-2" data-name="Vector" d="M0,0H15.8" transform="translate(17.585 6.415) rotate(135)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              <path id="Vector-3" data-name="Vector" d="M0,15.8V0" transform="translate(17.585 17.585) rotate(135)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </svg>                                                           
          </button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <!--  Notification box end -->
        <div class="articles__sponsorshipry--inner position-relative d-flex align-items-center">
          <div class="articles__sponsorshipry--input width-330">
            <input type="text" class="input__field">
          </div>
          <button class="close_sponsor-btn close_module-btn"><svg xmlns="http://www.w3.org/2000/svg" width="19.997" height="19.997" viewBox="0 0 19.997 19.997">
            <g id="vuesax_linear_close-circle" data-name="vuesax/linear/close-circle" transform="translate(-236 -252)">
              <g id="close-circle" transform="translate(236 252)">
                <path id="Vector" d="M8.332,16.664A8.332,8.332,0,1,0,0,8.332,8.356,8.356,0,0,0,8.332,16.664Z" transform="translate(1.666 1.666)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                <path id="Vector-2" data-name="Vector" d="M0,4.716,4.716,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                <path id="Vector-3" data-name="Vector" d="M4.716,4.716,0,0" transform="translate(7.64 7.64)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                <path id="Vector-4" data-name="Vector" d="M0,0H20V20H0Z" fill="none" opacity="0"></path>
              </g>
            </g>
          </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="create_articles-step width-330">
      <div class="input__box mb-30">
        <label class="input__label mb-12">Website Link</label>
        <input class="input__field" type="text">
      </div> 
    </div>
    </div>`;
    
      // Main wrapper Parent Element
      let mainParentElement = document.querySelector(".category__wrapper--list");
    
      if(addButton.dataset.action == "with_label"){
        mainParentElement.insertAdjacentHTML("beforeend", moduleContent);
        let addModuleList = document.querySelector(".create_articles-step_list").querySelectorAll(".module__list--count-label");
        if(addModuleList.length > 0){
          addModuleList.forEach((item, i) => {
            item.querySelector(".add__module--count").innerText = ++i;
          })
        }
      }else if(addButton.dataset.action == "sponsor"){
        document.querySelector(".sponsor__wrapper--list").insertAdjacentHTML("beforeend", sponsorContent);
      }else{
        mainParentElement.insertAdjacentHTML("beforeend", moduleContentTwo);
      }
      
     
    });
  })
}
// Delete Item
let listItemWrapperList = document.querySelectorAll(".category__wrapper--list");
if(listItemWrapperList.length > 0){
  listItemWrapperList.forEach((listItemWrapper) => {
    listItemWrapper?.addEventListener("click", function (event) {
      if (event.target.classList.contains("close_module-btn")) {
        event.target.closest(".module__list--item").remove();
        let addModuleList = document.querySelector(".create_articles-step_list").querySelectorAll(".module__list--count-label");
    
        if(addModuleList.length > 0){
          addModuleList.forEach((item, i) => {
            item.querySelector(".add__module--count").innerText = ++i;
          })
        }
      }
      // Notify message
      let onBodyNotification;
      let clearTimeOutSave;
      if (event.target.classList.contains("sponsor__notify_button")) {
        let button = event.target;
        if (button.parentElement.parentElement.classList.contains("active")) {
          button.parentElement.parentElement.classList.remove("active");
        } else {
          button.parentElement.parentElement.classList.add("active");
        }
        
        onBodyNotification = handleBodyOnClick.bind(this);
        document.body.addEventListener("click", onBodyNotification);
        let self = button;
        clearTimeOutSave = setTimeout(function () {
          self.parentElement.parentElement.classList.remove("active");
        }, 5000);

        function handleBodyOnClick(evt) {
          const target = evt.target;
          if (
            !target.closest(".sponsor__notify_button") &&
            !target.closest(".terms__condition--message")
          ) {
            clearTimeout(clearTimeOutSave);
            document.body.removeEventListener("click", onBodyNotification);
            if (self.parentElement.parentElement.classList.contains("active")) {
              self.parentElement.parentElement.classList.remove("active");
            }
          }
        }
      }
      if (event.target.classList.contains("terms__condition--message__remove--button")) {
        let removeButton = event.target;
        clearTimeout(clearTimeOutSave);
        removeButton.parentElement.parentElement.classList.remove("active");
        document.body.removeEventListener("click", onBodyNotification);
      }

    });
  })
}


/*
  Terms and condition notification js
*/
const notifyButton = document.querySelectorAll(".terms__condition--button");
const notifyRemoveButton = document.querySelectorAll(
  ".terms__condition--message__remove--button"
);
if (notifyButton) {
  let onBodyNotification;
  let clearTimeOutSave;
  notifyButton.forEach(function (button) {
    button?.addEventListener("click", function (event) {
      event.preventDefault();
      onBodyNotification = handleBodyOnClick.bind(this);
      if (this.parentElement.parentElement.classList.contains("active")) {
        this.parentElement.parentElement.classList.remove("active");
      } else {
        this.parentElement.parentElement.classList.add("active");
      }
      document.body.addEventListener("click", onBodyNotification);
      let self = this;
      clearTimeOutSave = setTimeout(function () {
        self.parentElement.parentElement.classList.remove("active");
      }, 5000);
      function handleBodyOnClick(evt) {
        const target = evt.target;
        if (
          !target.closest(".terms__condition--button") &&
          !target.closest(".terms__condition--message")
        ) {
          clearTimeout(clearTimeOutSave);
          document.body.removeEventListener("click", onBodyNotification);
          if (self.parentElement.parentElement.classList.contains("active")) {
            self.parentElement.parentElement.classList.remove("active");
          }
        }
      }
    });
  });
  notifyRemoveButton.forEach(function (button) {
    button?.addEventListener("click", function (event) {
      event.preventDefault();
      clearTimeout(clearTimeOutSave);
      this.parentElement.parentElement.classList.remove("active");
      document.body.removeEventListener("click", onBodyNotification);
    });
  });
}


/*
  Search button hover active
*/
const searchHoverFullWidth = document.querySelector(
  ".search__mobile--click__btn"
);
const searchBackButton = document.querySelector(".search__back--btn");
searchHoverFullWidth?.addEventListener("click", function (event) {
  if (
    searchHoverFullWidth.parentElement.classList.contains("active") === false
  ) {
    searchHoverFullWidth.parentElement.classList.add("active");
  }
});
searchBackButton?.addEventListener("click", function (event) {
  if (searchHoverFullWidth.parentElement.classList.contains("active")) {
    searchHoverFullWidth.parentElement.classList.remove("active");
  }
});



/*
  PDF file type
*/
const pdfFileUpload = document.getElementById("pdf__file--download");
const pdfFileUploadWrapper = document.getElementById(
  "pdf__file--upload-wrapper"
); 
const uploadPdfName = document.querySelector(".upload__pdf--name");

pdfFileUpload?.addEventListener("change", function (event) {
  uploadPdfName.innerText = `${event.target.files[0].name}`;

  //Show image name
  let removeButton = document.createElement("button");
  let removeIcon = document.createElement("img");
  removeIcon.setAttribute(
    "src",
    "https://firstclass.ams3.digitaloceanspaces.com/Small_Icon_X.svg"
  );
  removeButton.appendChild(removeIcon);
  removeButton?.classList.add("resources__field__file__close");
  if (pdfFileUploadWrapper) {
    pdfFileUploadWrapper.appendChild(removeButton);
  }

  // Remove image
  removeButton?.addEventListener("click", (event) => {
    removeButton.remove();
    uploadPdfName.innerText = "";
  });
});

// Offline pdf upload
const pdfFileUpload_offline = document.getElementById("offline--pdf__file--download"); 
const uploadPdfName_two = document.querySelector(".offline__upload__pdf--name");
const pdfFileUploadWrapper_two = document.getElementById(
  "pdf__file--upload-wrapper--two"
); 

pdfFileUpload_offline?.addEventListener("change", function (event) {
  uploadPdfName_two.innerText = `${event.target.files[0].name}`;

  //Show image name
  let removeButton = document.createElement("button");
  let removeIcon = document.createElement("img");
  removeIcon.setAttribute(
    "src",
    "https://firstclass.ams3.digitaloceanspaces.com/Small_Icon_X.svg"
  );
  removeButton.appendChild(removeIcon);
  removeButton?.classList.add("resources__field__file__close");
  if (pdfFileUploadWrapper_two) {
    pdfFileUploadWrapper_two.appendChild(removeButton);
  }

  // Remove image
  removeButton?.addEventListener("click", (event) => {
    removeButton.remove();
    uploadPdfName_two.innerText = "";
  });
});




/*
  Image upload on the file type
*/
const image_input = document.querySelectorAll("#image-input");
const uploadedImageId = document.getElementById("uploaded__image-id");
image_input.forEach((e,index)=>{

e?.addEventListener("change", function (event) {
  if (uploadedImageId) {
    if (uploadedImageId.querySelector("button")) {
      uploadedImageId.querySelector("button").remove();
    }
  }
  // Show image
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelectorAll(
      "#display-image"
    )[index].style.backgroundImage = `url(${uploaded_image})`;
    document.querySelectorAll("#display-image")[index]?.classList.add("loaded__image");
    document.querySelectorAll("#uploaded__title--change")[index]?.classList.add("active");
  });
  reader.readAsDataURL(this.files[0]);

  //Show image name
  let removeButton = document.createElement("button");
  removeButton?.classList.add("active__facets--button", "mt-20");
  let imageRemoveButtonText = `${event.target.files[0].name} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
  <path id="_Color" data-name=" ↳Color" d="M7,14A7,7,0,0,1,2.048,2.048a7,7,0,0,1,9.9,9.9A6.956,6.956,0,0,1,7,14ZM7,7.987H7L9.513,10.5l.987-.987L7.987,7,10.5,4.487,9.513,3.5,7,6.013,4.487,3.5,3.5,4.487,6.013,7,3.5,9.513l.987.987L7,7.988Z" fill="#74c3b3"></path>
  </svg>`;
  removeButton.innerHTML = imageRemoveButtonText;
  if (uploadedImageId) {
    uploadedImageId.appendChild(removeButton);
  }

  // Remove image
  removeButton?.addEventListener("click", (event) => {
    document.querySelectorAll("#display-image")[index].style.backgroundImage = ``;
    document.querySelectorAll("#display-image")[index].classList.remove("loaded__image");
    removeButton.remove();
    if (document.querySelectorAll("#uploaded__title--change")[index]) {
      if (
        document
          .querySelectorAll("#uploaded__title--change")[index]
          .classList.contains("active")
      ) {
        document
          .querySelectorAll("#uploaded__title--change")[index]
          .classList.remove("active");
      }
    }
  });
});
})


// Popup enable and disable activation
const sidebarArticleToggleButtonList = document.querySelectorAll(".sidebar__article--toggle-button");
if(sidebarArticleToggleButtonList){
  sidebarArticleToggleButtonList.forEach((toggleButton) => {
    toggleButton?.addEventListener("click", function(event){
      event.preventDefault();
      if(toggleButton.classList.contains("active")){
        toggleButton.classList.remove("active");
      }else{
        toggleButton.classList.add("active");
      }
    })
  })
}



/*  ----- Dark to light mode js ----- */
const lightToDarkButtonAll = document.querySelectorAll(".light__to--dark");
if(lightToDarkButtonAll.length > 0){
  lightToDarkButtonAll.forEach((lightToDarkButton) => {
    lightToDarkButton?.addEventListener("click", function () {
      if (localStorage.getItem("theme-color")) {
        if (localStorage.getItem("theme-color") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme-color", "dark");
          lightToDarkButton?.classList.add("dark--version");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme-color", "light");
          lightToDarkButton?.classList?.remove("dark--version");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          lightToDarkButton?.classList?.remove("dark--version");
          localStorage.setItem("theme-color", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme-color", "dark");
          lightToDarkButton?.classList.add("dark--version");
        }
      }
    });
  })
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  if(lightToDarkButtonAll.length > 0){
    lightToDarkButtonAll.forEach((lightToDarkButton) => {
      lightToDarkButton?.classList.add("dark--version");
    })
  }   
} 
if (localStorage.getItem("theme-color") === "light") {
  if(lightToDarkButtonAll.length > 0){
    lightToDarkButtonAll.forEach((lightToDarkButton) => {
      lightToDarkButton?.classList.remove("dark--version");
    })
  }
} 

/** 
 * Page zoom in and zoom out for accessibility
 */
const pageZoomInButtons = document.querySelectorAll(".zoom__in");
const pageZoomOutButtons = document.querySelectorAll(".zoom__out");
let zoomInit = 63;

if(pageZoomInButtons.length > 0){
  pageZoomInButtons.forEach((pageZoomIn) => {
    pageZoomIn?.addEventListener("click", (event) => {
      zoomInit = zoomInit + 5;
      if(zoomInit <= 100 && zoomInit >= 50){
        document.getElementsByTagName("html")[0].style.fontSize = `${zoomInit}%`;
      }
      console.log(zoomInit);
    })
  })
}

if(pageZoomOutButtons.length > 0){
  pageZoomOutButtons.forEach((pageZoomOut) => {
    pageZoomOut?.addEventListener("click", (event) => {
      zoomInit = zoomInit - 5;
      if(zoomInit >= 40){
        document.getElementsByTagName("html")[0].style.fontSize = `${zoomInit}%`;
      }
    })
  })
}


/**
 * Font settings for article page
*/
const fontsSettings = {
  container: document.getElementById("article__font--settings-container"),
  fontSize: {
    normal: document.querySelector(".font__normal--settings"),
    large: document.querySelector(".font__large--settings"),
  },
  fontsFamily: {
    fontsList: document.querySelectorAll(".fonts__family--settings")
  }
}
if(fontsSettings.container){
  fontsSettings.fontSize.normal?.addEventListener("click", function(event){
    fontsSettings.container.classList.add("fonts__normal");
    fontsSettings.container.classList.remove("fonts__large");
    localStorage.setItem("customFontSize", "fonts__normal");
    fontsSettings.fontSize.normal.classList.add("active");
    fontsSettings.fontSize.large.classList.remove("active");
  });
  fontsSettings.fontSize.large?.addEventListener("click", function(event){
    fontsSettings.container.classList.add("fonts__large");
    fontsSettings.container.classList.remove("fonts__normal");
    localStorage.setItem("customFontSize", "fonts__large");
    fontsSettings.fontSize.normal.classList.remove("active");
    fontsSettings.fontSize.large.classList.add("active");
  });
  
  if(fontsSettings.fontsFamily.fontsList.length > 0){
    fontsSettings.fontsFamily.fontsList.forEach((button) => {
      button.addEventListener("click", function(event){
        fontsSettings.fontsFamily.fontsList.forEach((button) => {
          button.classList.remove('active');
        })
        fontsSettings.container.setAttribute(`style`, `${button.dataset.fontFamily}`);
        localStorage.setItem("customFontFamily", `${button.dataset.fontFamily}`);
        this.classList.add("active");
      })
    })
  }
  if(localStorage.getItem("customFontSize") !== null){
    if(localStorage.getItem("customFontSize") == "fonts__large"){
      // fontsSettings.container.classList.add("fonts__large");
      // fontsSettings.container.classList.remove("fonts__normal");
      fontsSettings.fontSize.normal.classList.remove("active");
      fontsSettings.fontSize.large.classList.add("active");
    }else{
      // fontsSettings.container.classList.add("fonts__normal");
      // fontsSettings.container.classList.remove("fonts__large");
      fontsSettings.fontSize.normal.classList.add("active");
      fontsSettings.fontSize.large.classList.remove("active");
    }
  }
  if(localStorage.getItem("customFontFamily") !== null){
    fontsSettings.fontsFamily.fontsList.forEach((button) => {
      button.classList.remove("active");
      if(button.dataset.fontFamily === localStorage.getItem("customFontFamily")){
        button.classList.add("active");
      }
    })
    // fontsSettings.container.setAttribute(`style`, `--custom-font-family: ${localStorage.getItem("customFontFamily")}`);
  }
  
}

// Article like button
const articleLikeBtn = document.getElementById('article--like-button');
if(articleLikeBtn){
  articleLikeBtn.addEventListener('click', function(){
    if(articleLikeBtn.classList.contains('active')){
      articleLikeBtn.classList.remove('active');
    }else{
      articleLikeBtn.classList.add('active');
    }
  });
}

// Article Boring button
const articleBoringBtn = document.getElementById('article--boring-button');
if(articleBoringBtn){
  articleBoringBtn.addEventListener('click', function(){
    if(articleBoringBtn.classList.contains('active')){
      articleBoringBtn.classList.remove('active');
    }else{
      articleBoringBtn.classList.add('active');
    }
  });
}

// Article Feedback button
const articleFeedbackBtn = document.getElementById('article--feedback-button');
if(articleFeedbackBtn){
  articleFeedbackBtn.addEventListener('click', function(){
    if(articleFeedbackBtn.classList.contains('active')){
      articleFeedbackBtn.classList.remove('active');
    }else{
      articleFeedbackBtn.classList.add('active');
    }
  });
}