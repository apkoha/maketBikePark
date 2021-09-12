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


// форма login__form - Вход 
var button__enter = document.querySelector(".button__enter"); // кнопка button__enter в шапке 
var popup__login = document.querySelector(".login-section");  // Форма "Вход"
var close__loginform = document.querySelector(".login-form__close-button"); // кнопка закрыть форму (крестик)
var button__enter__active = document.querySelector(".login-button__enter"); // кнопка "Вход" в форме

button__enter.addEventListener("click", function (evt) {  // при клике по кнопке button__enter в шапке 
  evt.preventDefault();
  popup__login.classList.add("login-section--show");  // форме "Вход" добавляем класс, делающий её видимой
  button__enter__active.classList.add("login__button--enter");  // кнопке "Вход" добавляется класс, делающий её синей
});

close__loginform.addEventListener("click", function (evt) { // клик по кнопке закрыть форму
  evt.preventDefault();
  popup__login.classList.remove("login-section--show"); // форме "Вход" удаляет класс, делающий её видимой
  button__enter__active.classList.remove("login__button--enter"); // // кнопке "Вход" удаляет класс, делающий её синей
});

window.addEventListener("keydown", function (evt) { // при нажатии клавиши
  if (evt.keyCode === 27)  {  // клавиша ESC
    if (popup__login.classList.contains("login-section--show")) { // если у формы "Вход" есть класс login-section--show
      evt.preventDefault();
      popup__login.classList.remove("login-section--show"); // форме "Вход" удалить класс login-section--show
    }
  }
});


// форма registration__form - Регистрация
var button__registration = document.querySelector(".login-button__registration");
var popup__registration = document.querySelector(".registration-section");
var button__registration__active = document.querySelector(".registration-button__registration");
var close__registrationform = document.querySelector(".registration-form__close-button");

button__registration.addEventListener("click", function (evt) {  // при клике по кнопке Регистрация
  evt.preventDefault();
  popup__registration.classList.add("registration-section--show");  // форме "Регистрация" добавляем класс, делающий её видимой
  popup__login.classList.remove("login-section--show"); // форме "Вход" удаляет класс, делающий её видимой
  button__registration__active.classList.add("login__button--registration");  // кнопке "Регистрация" добавляется класс, делающий её синей
});

close__registrationform.addEventListener("click", function (evt) { // клик по кнопке закрыть форму
  evt.preventDefault();
  popup__registration.classList.remove("registration-section--show"); // форме "Регистрация" удаляет класс, делающий её видимой
  button__registration__active.classList.remove("login__button--registration"); // // кнопке "Регистрация" удаляет класс, делающий её синей
});

window.addEventListener("keydown", function (evt) { // при нажатии клавиши
  if (evt.keyCode === 27)  {  // клавиша ESC
    if (popup__registration.classList.contains("registration-section--show")) { // если у формы "Регистраци" есть класс registration-section--show
      evt.preventDefault();
      popup__registration.classList.remove("registration-section--show"); // форме "Вход" удалить класс registration-section--show
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