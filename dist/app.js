const navSlide = () => {
    const burger = document.querySelector('.burger');
    const test = document.querySelector('.nav-inside');

    burger.addEventListener('click', () => {
        test.classList.toggle('nav-inside-active');
    });
}

navSlide();