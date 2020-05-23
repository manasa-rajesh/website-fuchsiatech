document.getElementById("open").addEventListener('click', () => {
    document.getElementsByClassName('slider-nav')[0].classList.add('slider-show');
});
document.getElementById("close").addEventListener('click', () => {
    document.getElementsByClassName('slider-nav')[0].classList.remove('slider-show');
});