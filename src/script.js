'use strict';

const langsParent = document.querySelector('.hero__langs');
const langs = document.querySelectorAll('.hero__lang');

langs[1].classList.add('active-lang');

function translate(language) {
  for (let key in arrLang) {
    let elem = document.querySelector('.translate-' + key);
    if (elem) {
      elem.innerHTML = arrLang[key][language];
    }
  }

  const sections = document.querySelectorAll('.header__nav-link');
  const titles = document.querySelectorAll('.title');

  for (let i = 1; i <= titles.length; i++) {
    const title = sections[i].innerHTML;
    titles[i - 1].innerHTML = title;
  }
}

langsParent.addEventListener('click', (e) => {
  if (e.target == langs[0]) {
    langs[1].classList.remove('active-lang');
    langs[0].classList.add('active-lang');

    translate('ru');
  }

  if (e.target == langs[1]) {
    langs[0].classList.remove('active-lang');
    langs[1].classList.add('active-lang');

    translate('eng');
  }
});
