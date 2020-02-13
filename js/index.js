//10 events scattered
let busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseover', () => {
    busImg.style.transform = 'scale(1.2)';
});

busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = 'scale(1)';
});

let changeImg = document.querySelector('.img-content img');
changeImg.addEventListener('mouseenter', () => {
    changeImg.src = 'img/adventure2.jpg';
});

changeImg.addEventListener('mouseleave', () => {
    changeImg.src = 'img/adventure.jpg';
});

let bodyNest = document.querySelector('body');
bodyNest.addEventListener('click', () => {
    bodyNest.style.backgroundColor = 'green';
});

let homeNest = document.querySelector('.footer');
homeNest.addEventListener('dblclick', () => {
    homeNest.style.backgroundColor = 'orange';
});

let buttonScale = document.querySelector('.btn');
buttonScale.addEventListener('mouseover', () => {
    buttonScale.style.transform = 'scale(2)';
});
buttonScale.addEventListener('mouseover', () => {
    buttonScale.style.color = 'red';
});

buttonScale.addEventListener('mouseleave', () => {
    buttonScale.style.transform = 'scale(1)';
});

//stopPropagation so background click color change isn't fired
let introNest = document.querySelector('.intro h2');
introNest.addEventListener('click', (event) => {
    introNest.style.backgroundColor = 'purple';
    event.stopPropagation();
});

//preventing the default action of the links so they don't refresh
let noRefresh = document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
