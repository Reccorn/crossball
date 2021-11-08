document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    const dropBtn = document.querySelector('.side-menu__stat-btn');
    const dropList = document.querySelector('.side-menu__list__stats');

    if (e.target.classList.contains('side-menu__stat-btn')) {
      dropBtn.classList.add('side-menu__stat-btn__active');
      dropList.classList.add('side-menu__list__stats__active');
    } else {
      dropBtn.classList.remove('side-menu__stat-btn__active');
      dropList.classList.remove('side-menu__list__stats__active');
    }
  });
});