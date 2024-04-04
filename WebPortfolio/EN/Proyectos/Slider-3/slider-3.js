const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var direction;

prev.addEventListener('click', function(){
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    direction = 1;
    slider.style.transform = 'translate(33%)';
    carousel.style.justifyContent = 'flex-end';
});

next.addEventListener('click', function(){
    if (direction === 1) {
        direction = -1;
        slider.prepend(slider.lastElementChild);
    }

    direction = -1;
    slider.style.transform = 'translate(-33%)';
    carousel.style.justifyContent = 'flex-start';
});

slider.addEventListener('webkitTransitionEnd', function(){
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1){
        slider.prepend(slider.lastElementChild);
    }
    

    slider.style.transition = 'none'
    slider.style.transform = 'translate(0)'
    setTimeout(function(){
        slider.style.transition = 'all 0.5s'

    });
})
