window.onload = function() {
  setInterval(function() {

    // Minutes
    var minutes = new Date().getMinutes();
    document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;

    // Hours
    var hours = new Date().getHours();
    document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
  }, 1000);
}



// feedback-form__close-button формы Обратная связь
var button = document.querySelector(".button__feedback");
var popup = document.querySelector(".feedback-section");
var close = document.querySelector(".feedback-form__close-button");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-section--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-section--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)  {
    if (popup.classList.contains("feedback-section--show")) {
      evt.preventDefault();
      popup.classList.remove("feedback-section--show");
    }
  }
}); 

// инициализация слайдера старницы "О нас"
    document.addEventListener('DOMContentLoaded', function () {
      new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 5000,
        refresh: true,
      });
    });