// burger-menu

document.querySelector('.c-burger').addEventListener('click', function (e) {
    e.preventDefault();
    // this.classList.toggle('is-active');
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('.navigation').classList.remove('active');
        document.querySelector('.list').classList.remove('active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('.navigation').classList.add('active');
        document.querySelector('.list').classList.add('active');
    }
})

// closing chapters menu of burger-menu
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.list a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            // this.classList.remove('is-active');
            document.querySelector('.navigation').classList.remove('active');
            // document.querySelector('.c-burger').classList.remove('is-active');
        });
    });
});

// changing cross on 3 stripes
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.list a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            document.querySelector('.c-burger').classList.remove('is-active');
        });
    });
});
