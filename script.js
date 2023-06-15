let offset = 0;// смещение влево
const sliderLine = document.querySelector ('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
offset = offset + 250;
if (offset > 750){
    offset = 0;
} 
sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 250;
    if (offset < 0){
        offset = 750;
    } 
    sliderLine.style.left = -offset + 'px';
    });
