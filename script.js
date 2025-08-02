// Місце для додаткової взаємодії у майбутньому
// Наприклад, тут можна додати обробку відправлення форми або мобільне меню

document.addEventListener('DOMContentLoaded', function () {
  // простий приклад: повідомлення при спробі надіслати форму
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Дякуємо за звернення! Наш менеджер зв’яжеться з вами найближчим часом.');
      form.reset();
    });
  }
});