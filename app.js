// document.querySelector('クラス名') :クラス名から要素を選択
const hamburger = document.querySelector('.hamburgerMenu');
const link = document.querySelector('.link');
const link_li = document.querySelector('.link li');

//ハンバーガーメニューに対してイベントをつくる
hamburger.addEventListener('click', () => {
  //toggle('open')：クラス名があれば削除、なければ追加
  link.classList.toggle('open');
});