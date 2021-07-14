const body = document.querySelector(".page-body");
const sliderBtn1 = document.querySelector(".promo__controllers-btn-1");
const sliderBtn2 = document.querySelector(".promo__controllers-btn-2");
const sliderBtn3 = document.querySelector(".promo__controllers-btn-3");
const slide1 = document.querySelector(".promo__slide-1");
const slide2 = document.querySelector(".promo__slide-2");
const slide3 = document.querySelector(".promo__slide-3");
const currentSlide = document.querySelector(".promo__controllers-btn--current");

sliderBtn1.addEventListener("click", function(evt){
  evt.preventDefault();
  body.classList.remove("page-body--color2");
  body.classList.remove("page-body--color3");
  slide1.classList.add("promo__slide--current");
  slide2.classList.remove("promo__slide--current");
  slide3.classList.remove("promo__slide--current");
  sliderBtn1.classList.add("promo__controllers-btn--current");
  sliderBtn2.classList.remove("promo__controllers-btn--current");
  sliderBtn3.classList.remove("promo__controllers-btn--current");
  console.log("click1");
});


sliderBtn2.addEventListener("click", function(evt){
  evt.preventDefault();
  body.classList.add("page-body--color2");
  body.classList.remove("page-body--color3");
  slide1.classList.remove("promo__slide--current");
  slide2.classList.add("promo__slide--current");
  slide3.classList.remove("promo__slide--current");
  sliderBtn1.classList.remove("promo__controllers-btn--current");
  sliderBtn2.classList.add("promo__controllers-btn--current");
  sliderBtn3.classList.remove("promo__controllers-btn--current");
  console.log("click2");
});

sliderBtn3.addEventListener("click", function(evt){
  evt.preventDefault();
  body.classList.remove("page-body--color2");
  body.classList.add("page-body--color3");
  slide1.classList.remove("promo__slide--current");
  slide2.classList.remove("promo__slide--current");
  slide3.classList.add("promo__slide--current");
  sliderBtn1.classList.remove("promo__controllers-btn--current");
  sliderBtn2.classList.remove("promo__controllers-btn--current");
  sliderBtn3.classList.add("promo__controllers-btn--current");
  console.log("click3");
});

currentSlide.tabIndex = -1;

// modal

const contactBtn = document.querySelector(".contacts__btn");
const modal = document.querySelector(".feedback-modal");
const modalClose = document.querySelector(".modal-close");
const feedbackInput = document.querySelector(".feedback-modal__input");

contactBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.remove("hidden");
  feedbackInput.focus();
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.add("hidden");
});

