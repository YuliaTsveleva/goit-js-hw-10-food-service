import menuTemplate from '../templates/menu.hbs';
import menu from './menu.json';

const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('afterbegin', createMenuMarkup(menu));

function createMenuMarkup(menu) {
  return menuTemplate(menu);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
