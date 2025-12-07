// const ham = document.querySelector('.hamburger');
// const menu = document.querySelector('.sp-menu');
// const closeBtn = document.querySelector('.close-btn');

// ham.addEventListener('click', () => menu.classList.add('active'));
// closeBtn.addEventListener('click', () => menu.classList.remove('active'));

$(function () {
  $(".hamburger").click(function () {
    $(".sp-menu").fadeToggle();
    $(".hamburger").toggleClass("open");
    $(".close-btn").fadeToggle();
    $(".logo").toggleClass("hide");
  });

  $(".close-btn").click(function () {
    $(".sp-menu").fadeToggle();
    $(".hamburger").toggleClass("open");
    $(".close-btn").fadeToggle();
    $(".logo").toggleClass("hide");
  });
});



