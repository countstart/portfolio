const bar = document.getElementById('hidenav');
const nav = document.getElementById('navbarli');
const cross = document.getElementById('cross');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(cross){
    cross.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}