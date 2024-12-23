const horizontalScroll = document.getElementById('carousel');
const rightBtn = document.getElementById('rightBtn');
const leftBtn = document.getElementById('leftBtn');
const card = document.querySelector('.carousel-item');
let cardWidth = card.offsetWidth;

rightBtn.addEventListener("click", (qualifiedName, value)=> {
        horizontalScroll.style.scrollBehavior = "smooth";
        horizontalScroll.scrollLeft += cardWidth;
        rightBtn.setAttribute('disabled', value);
        setTimeout(function () {
                rightBtn.removeAttribute('disabled')
        }, 300);
});

leftBtn.addEventListener("click", (qualifiedName, value)=> {
        horizontalScroll.style.scrollBehavior = "smooth";
        horizontalScroll.scrollLeft -= cardWidth;
        leftBtn.setAttribute('disabled', value);
        setTimeout(function () {
                leftBtn.removeAttribute('disabled')
        }, 300);
});


const horizontalScroll1 = document.getElementById('carousel1');
const rightBtn1 = document.getElementById('rightBtn1');
const leftBtn1 = document.getElementById('leftBtn1');

rightBtn1.addEventListener("click", (qualifiedName, value)=> {
        horizontalScroll1.style.scrollBehavior = "smooth";
        horizontalScroll1.scrollLeft += cardWidth;
        rightBtn1.setAttribute('disabled', value);
        setTimeout(function () {
                rightBtn1.removeAttribute('disabled')
        }, 300)
});

leftBtn1.addEventListener("click", (qualifiedName, value)=> {
        horizontalScroll1.style.scrollBehavior = "smooth";
        horizontalScroll1.scrollLeft -= cardWidth;
        leftBtn1.setAttribute('disabled', value);
        setTimeout(function () {
                leftBtn1.removeAttribute('disabled')
        }, 300);
});


const horizontalScroll2 = document.getElementById('carousel2');
const rightBtn2 = document.getElementById('rightBtn2');
const leftBtn2 = document.getElementById('leftBtn2');

rightBtn2.addEventListener("click", ()=> {
        horizontalScroll2.style.scrollBehavior = "smooth";
        horizontalScroll2.scrollLeft += cardWidth;
});

leftBtn2.addEventListener("click", ()=> {
        horizontalScroll2.style.scrollBehavior = "smooth";
        horizontalScroll2.scrollLeft -= cardWidth;
});


const horizontalScroll3 = document.getElementById('carousel3');
const rightBtn3 = document.getElementById('rightBtn3');
const leftBtn3 = document.getElementById('leftBtn3');

rightBtn3.addEventListener("click", ()=> {
        horizontalScroll3.style.scrollBehavior = "smooth";
        horizontalScroll3.scrollLeft += cardWidth;
});

leftBtn3.addEventListener("click", ()=> {
        horizontalScroll3.style.scrollBehavior = "smooth";
        horizontalScroll3.scrollLeft -= cardWidth;
});