const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);
}

const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const mobileNavigationMenu = document.querySelector('.mobile-navigation-menu');
  if (mobileNavigationMenu) {
    mobileNavigationMenu.style.background = 'var(--cream)';
  }

  const menuTitles = document.querySelectorAll('.menu-title');
  menuTitles.forEach(title => {
    title.style.color = 'var(--dark-teal)';
  });

  const submenuTitles = document.querySelectorAll('.submenu-title');
  submenuTitles.forEach(title => {
    title.style.color = 'var(--medium-teal)';
  });

  const mobileBottomNav = document.querySelector('.mobile-bottom-navigation');
  if (mobileBottomNav) {
    mobileBottomNav.style.background = 'var(--cream)';
    const actionBtns = mobileBottomNav.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
      btn.style.color = 'var(--dark-teal)';
    });
  }

  const desktopNav = document.querySelector('.desktop-navigation-menu');
  if (desktopNav) {
    desktopNav.style.background = 'var(--cream)';
    const menuItems = desktopNav.querySelectorAll('.menu-title');
    menuItems.forEach(item => {
      item.style.color = 'var(--dark-teal)';
    });
  }
});
