const logoBtn = document.getElementById('logoBtn');
const sideBar = document.querySelector('.k-sidebar');
const mainSpace = document.querySelector('.main-space');
logoBtn.addEventListener('click', function (){
    sideBar.classList.toggle('k-sidebar-hidden');
    mainSpace.classList.toggle('main-space-hidden');
});

