'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark'); // navbar의 classList에 class 추가
    } else {
        navbar.classList.remove('navbar--dark'); // navbar의 classList에 class 제거
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    // 클릭이 되는 아이템의 이벤트에 타겟은 우리가 클릭한 요소가 출력이 된다.
    // dataset에 우리가 정의한 변수들이 다 할당 되어진다. (data-link라고 했으므로 저렇게 접근) 
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});