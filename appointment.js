//modal items
const modal = document.getElementById('rules');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

//Click Events

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (a) => {
    if(a.target == modal){
        modal.style.display = 'none';
    }
});
