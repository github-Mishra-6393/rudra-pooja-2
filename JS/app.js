// Slider
// Fucntion for slide
let slideIndex = 1;
function currentSlide(n){
    slide(slideIndex = n);
}
slide(slideIndex);
function slide(n){
    let slides = document.getElementsByClassName('slide-div');
    let dots = document.getElementsByClassName('dot');
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }

    let i;
    for (i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
        dots[i].classList.remove('active');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].classList.add('active');

    setTimeout(() => {
        slide(slideIndex+=1)
    }, 8000);
}