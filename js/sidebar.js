document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.menu-review-desk'); 
    const list = document.querySelector('.menu-review'); 
  
   
    button.addEventListener('click', function () {
      const isActive = list.classList.contains('active');
     list.classList.toggle('active', !isActive);
      button.classList.toggle('active', !isActive);
    });
  });