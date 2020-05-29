
window.onload = () => {
    show();
};
function show(){
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 100);
}

document.getElementById("open").addEventListener('click', () => {
    document.getElementsByClassName('sliding-nav-outlet')[0].classList.add('slider-show');
    document.getElementsByClassName('dim-background-on-menu')[0].classList.add('show-dimmed-background');
});
document.getElementById("close").addEventListener('click', () => {
    document.getElementsByClassName('sliding-nav-outlet')[0].classList.remove('slider-show');
    document.getElementsByClassName('dim-background-on-menu')[0].classList.remove('show-dimmed-background');
});
