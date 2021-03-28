const btnHamburger = document.querySelector('#btnHamburger');
const mobilemenu = document.querySelector('#mobilemenu');

btnHamburger.addEventListener('click', function() {
    console.log('hello');
    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        mobilemenu.classList.remove('show');
    }
    else {
        btnHamburger.classList.add('open');
        mobilemenu.classList.add('show');
    }
});