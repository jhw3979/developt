import parseMarkdown from './parser.js';
import {INIT_CONTENTS, USER_INFO, LOGGED, UNLOGGED, USER, CRUD, LOGOUT,
  NEW, GET, POST, DELETE} from './consts.js';

const headerEl = document.querySelector('header');
const slidesEl = document.querySelector('.slides');
const textareaEl = document.querySelector('.markdown-textarea');
const loginBtnEl = document.querySelector('.login-btn');
const userPhotoEl = document.querySelector('.user-photo');
const userInfoEl = document.querySelector('.user-info');
const userNameEl = document.querySelector('.user-name');
const userEmailEl = document.querySelector('.user-email');
const crudBtnEl = document.querySelector('.crud-btn');
const crudInfoEl = document.querySelector('.crud-info');
const layerEl = document.querySelector('.layer');

// 자동 로그인
const userInfo = JSON.parse(localStorage.getItem(USER_INFO));
if (userInfo && Object.keys(userInfo).length) {
  if (userInfo.photoURL) {
    userPhotoEl.src = userInfo.photoURL;  
  }
  userNameEl.textContent = userInfo.displayName;
  userEmailEl.textContent = userInfo.email;
  headerEl.className = LOGGED;
}

// 슬라이드 만들기 예시
slidesEl.innerHTML = parseMarkdown(INIT_CONTENTS);
textareaEl.value = INIT_CONTENTS;
textareaEl.focus();

// 마크다운 입력 시 슬라이드 생성
textareaEl.addEventListener('input', ({target: {value}}) => {
  slidesEl.innerHTML = parseMarkdown(value);
});

// 로그인
loginBtnEl.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result.user);
    const {user: {email, photoURL, displayName}} = result;
    userPhotoEl.src = photoURL;
    userNameEl.textContent = displayName;
    userEmailEl.textContent = email;
    headerEl.className = LOGGED;
    localStorage.setItem(USER_INFO, JSON.stringify({email, displayName, photoURL}));
  }).catch((error) => {
    alert(error.message);
  });
});

// 로그아웃
userInfoEl.addEventListener('click', evt => {
  evt.stopPropagation();
  if (evt.target.dataset.func === LOGOUT) {
    layerEl.hidden = true;
    layerEl.dataset.popup = null;
    headerEl.className = UNLOGGED;
    localStorage.setItem(USER_INFO, JSON.stringify({}));  
  }
});

// 팝업 닫기
layerEl.addEventListener('click', () => {
  layerEl.hidden = true;
  layerEl.dataset.popup = null;
});

// 사용자 정보 팝업 열기
userPhotoEl.addEventListener('click', () => {
  layerEl.hidden = false;
  layerEl.dataset.popup = USER;
});

// 더보기 팝업 열기
crudBtnEl.addEventListener('click', () => {
  layerEl.hidden = false;
  layerEl.dataset.popup = CRUD;
});

// CRUD
crudInfoEl.addEventListener('click', evt => {
  evt.stopPropagation();
  // TODO: 새로 만들기, 불러오기, 저장하기
});
