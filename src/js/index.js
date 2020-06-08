// стереть на билде
import jQuery from "jquery";
import popper from "popper.js";

// ----------------


// --------------- открывает субменю

if (document.querySelector(".header-menu .sub .drop-down-list")) {
  const submenu = document.querySelector(".sub");
  submenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") submenu.classList.toggle("active");
  });

  // ----------- активные разделы меню ---
  const nav = document.querySelector("nav");
  nav.addEventListener("click", (e) => {
    if (e.target.className == "nav-item") {
      const navItem = document.querySelectorAll(".nav-item");
      navItem.forEach((elem) => {
        elem.classList.remove("active");
      });
      e.target.classList.add("active");
    }
    // Если открыты "Услуги" (нет никакого класса на элементе меню)
    // "Услуги" закрываются.
    if (!e.target.parentNode.className) {
      submenu.classList.remove("active");
    }
  });
}

// ------------ Открываю форму поиска
if (document.querySelector(".search-form")) {
  const search = document.querySelector(".search-form");
  search.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName !== "INPUT") {
      document.querySelector(".search-form").classList.toggle("visible");
      return true;
    }
  });
}

// ----------------- Мобильное меню -----------

if (document.querySelector(".hamburher")) {
  const hamburher = document.querySelector(".hamburher");
  const dropMenu = document.querySelector(".drop-menu");
  const modalShadow = document.querySelector(".modal-shadow");
  const body = document.querySelector('body');

  const closeTablet_t = document.querySelector(".close-tablet");
  closeTablet_t.style.display = "none";

  hamburher.addEventListener("click", () => {
    dropMenu.classList.add("active");
    modalShadow.classList.add("active");
    
    body.style.overflow='hidden';

    hamburher.style.display = "none"; // костыль для таблетки
    closeTablet_t.style.display = "block";
  });

  // ------ Для таблетки

  const closeTablet = document.querySelector(".close-tablet");
  closeTablet.addEventListener("click", () => {
    dropMenu.classList.remove("active");
    modalShadow.classList.remove("active");

    hamburher.style.display = "flex"; // костыль для таблетки
    closeTablet_t.style.display = "none";
  });
  // ---- Для мобильного
  const closeMenu = document.querySelector(".close-menu");
  closeMenu.addEventListener("click", () => {
    dropMenu.classList.remove("active");
    modalShadow.classList.remove("active");
    body.style.overflow='visible';

    hamburher.style.display = "flex"; // костыль для таблетки
    closeTablet_t.style.display = "block";
  });
}

// ----------------- Субменю мобильная -------------------

if (document.querySelector(".drop-down-list_m")) {
  const dropMenu = document.querySelector(".drop-menu");
  const body = document.querySelector('body');
  dropMenu.addEventListener("click", (e) => {
    // элементы открытого меню
    const arrayElementMenu = [];
    arrayElementMenu.push(document.querySelector(".modal-shadow"));
    arrayElementMenu.push(document.querySelector(".drop-menu"));
    arrayElementMenu.push(document.querySelector(".drop-down-list_m"));
  
    if (
      e.target.parentNode.className == "sub_link active" ||
      e.target.parentNode.className == "sub"
    ) {
      const subMenuMobile = document.querySelector(".drop-down-list_m");
      subMenuMobile.classList.toggle("active");
      
    }
    else if (e.target.parentNode.tagName!='FORM' && // кроме поиска
    e.target.parentNode.tagName!='BUTTON'
    ){
      // закрывает все элементы меню
      arrayElementMenu.forEach((elem) => {
        elem.classList.remove("active");
      });

      document.querySelector(".hamburher").style.display = "flex"; // показывает кнопку гамбургера
      document.querySelector(".close-tablet").style.display = "none"; // скрывает кнопку закрытия меню
      body.style.overflow='visible';
    }
  });
}

//----------------  Поиск в мобильной версии ---------------------

if (document.querySelector(".top-line form")) {
  const mobileSearch = document.querySelector(".mobile-search");
  mobileSearch.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.tagName !== "INPUT")
      // если клик не в инпут - переключаю класс
      mobileSearch.classList.toggle("active");
    return true;
  });
}

//======================= footer ========================================
// --------------------  Меню ------------------------------

if (document.querySelector("footer .footer-nav")) {
  const footerNav = document.querySelector(".footer-nav");
  footerNav.addEventListener("click", (e) => {
    const footerDropDown = document.querySelector(".footer-drop-down");
    if (
      e.target.parentNode.className == "nav-item submenu" ||
      e.target.parentNode.className == "drop-down-item" ||
      e.target.parentNode.className == "m back"
    ) {
      if(e.target.textContent=='Услуги') e.preventDefault();
      footerDropDown.classList.toggle("active");
    }
  });
}


// ============================ timeline ============================

if(document.querySelector('.history')){
  const timelineMark = document.querySelectorAll('.timeline_mark');
  timelineMark[0].classList.add('active');
  const arrTimelineText = document.querySelectorAll('.timeline-text-item');

  // -------------- tabs (клик по дате в таймлайн)
  timelineMark.forEach((item, index)=>{
    item.addEventListener('click', ()=>{

      timelineMark.forEach((item,index)=>{
        item.classList.remove('active')
      })

      arrTimelineText.forEach((item,index)=>{
        item.classList.remove('active')
      })
      arrTimelineText[index].classList.add('active');
      timelineMark[index].classList.add('active');
    })
  })

  // ------------------- по кнопке с годами


  const counterStart =0; // начальный год;
  const counterEnd =arrTimelineText.length-1; // последний год
  let counter=counterStart; // иницилизация счетчика начальным годом

  const buttonPrev = document.querySelector('.timeline-wrapper .owl-prev');
  const buttonNext = document.querySelector('.timeline-wrapper .owl-next');


  buttonPrev.addEventListener('click', ()=>{
    if(counter>counterStart) counter--;
    else counter;
    arrTimelineText.forEach(item=>{ // блоки с текстом
      item.classList.remove('active');
    })
    timelineMark.forEach(item=>{ // года в ленте
      item.classList.remove('active');
    })

    arrTimelineText[counter].classList.add('active');
    timelineMark[counter].classList.add('active');
  })
 

  buttonNext.addEventListener('click', ()=>{
    if(counter<counterEnd) counter++;
    else counter;

    timelineMark.forEach(item=>{
      item.classList.remove('active');
    })
    arrTimelineText.forEach(item=>{
      item.classList.remove('active');
    })
    arrTimelineText[counter].classList.add('active');
    timelineMark[counter].classList.add('active');
  })



}
// ================= схема проезда
// -------------------

if(document.querySelector('.directions')){
  const sxemaButton = document.querySelector('.directions');
  sxemaButton.addEventListener('click', ()=>{
    sxemaButton.classList.toggle('active');
    const sxemaImg = document.querySelector('.directions-map');
    sxemaImg.classList.toggle('active');
  })
}


