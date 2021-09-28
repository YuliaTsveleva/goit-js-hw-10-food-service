import menuTemplate from '../templates/menu.hbs';
import menu from './menu.json';

const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('afterbegin', createMenuMarkup(menu));

function createMenuMarkup(menu) {
  return menuTemplate(menu);
}

const themeSwitcher = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (
  // localStorage.getItem('theme-swith') === null ||
  localStorage.getItem('theme-swith') === 'lightTheme'
) {
  toSetLightTheme();
  themeSwitcher.checked = false;
}

if (localStorage.getItem('theme-swith') === 'darkTheme') {
  toSetDarkTheme();
  themeSwitcher.checked = true;
}

themeSwitcher.addEventListener('change', e => {
  if (e.target.checked) {
    toSetDarkTheme();
  } else {
    toSetLightTheme();
  }
});

function toSetLightTheme(e) {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);
  localStorage.setItem('theme-swith', 'lightTheme');
}

function toSetDarkTheme(e) {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme-swith', 'darkTheme');
}
