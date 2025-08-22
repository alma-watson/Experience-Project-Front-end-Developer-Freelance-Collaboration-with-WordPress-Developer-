// burger menu
const burger = document.querySelector('.btn_menu');
const closeMenu = document.querySelector('.close_menu');
const menuContainer = document.querySelector('.menu_container');

burger.addEventListener('click', () => {
  menuContainer.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  menuContainer.classList.remove('open');
});

document.addEventListener('click', (e) => {
   if (!menuContainer.contains(e.target) && !burger.contains(e.target)) {
     menuContainer.classList.remove('open');
   }
 });





 

// search input
const search = document.querySelector('.search_toggle');
const inputSearch = document.querySelector('.search_form');

search.addEventListener('click', () => {
   inputSearch.classList.toggle('showInput');
});


// slider for logo partners
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");
const items = slider.querySelectorAll(".partner_logo");

// dashed
items.forEach((_, index) => {
   const dot = document.createElement("span");
   dot.classList.add("dot");
   if (index === 0) dot.classList.add("active");
   dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll(".dot");

// 
slider.addEventListener("scroll", () => {
   const scrollLeft = slider.scrollLeft;
   const slideWidth = items[0].offsetWidth + 32; // ширина + gap
   const index = Math.round(scrollLeft / slideWidth);

   dots.forEach(dot => dot.classList.remove("active"));
   if (dots[index]) dots[index].classList.add("active");
});

// 

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-purchase").forEach(block => {
    const input = block.querySelector(".quantity-input");
    const incBtn = block.querySelector(".increase");
    const decBtn = block.querySelector(".decrease");

    incBtn.addEventListener("click", () => {
      input.value = parseInt(input.value) + 1;
    });

    decBtn.addEventListener("click", () => {
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });
  });
});



// ІВЕНТИ















window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // щоб плавно зникло
});
