document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".reviews__slider", {
        loop: true,
        spaceBetween: 50,
        slidesPerView: 1,
        navigation: {
            prevEl: ".reviews__prev",
            nextEl: ".reviews__next",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
            },
        },
    });
    const phoneInput = document.getElementById("phone");
    const maskOptions = {
        mask: '+38(000) 000-00-00',
        lazy: true
    };
    new IMask(phoneInput, maskOptions);
    function checkHeaderClass() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        if (scrollPosition > 10) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    }
    window.addEventListener('scroll', checkHeaderClass);
    checkHeaderClass()
    document.querySelector('.hero__form').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data)
        this.reset();
        document.querySelector('.popup').classList.add('active');
        document.querySelector('.body').classList.add('no-scroll');
    
        // fetch('send.php', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
    });
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const links = document.querySelectorAll('.header__link');
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1071) {
                menu.classList.remove('active');
            }
        });
    });
    AOS.init({once: true});
});
window.onload = function() {
    window.scrollTo(0, 0);
};
