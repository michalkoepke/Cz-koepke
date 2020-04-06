const navSlide = () => {
    const burger = document.querySelector('.burger');
    const test = document.querySelector('.nav-inside');



    burger.addEventListener('click', () => {
        test.classList.toggle('nav-inside-active');




    });
}


const iconToggle = () => {

    const ikona = document.querySelector('.burger i');
    console.log(ikona);

    ikona.addEventListener('click', () => {

        ikona.classList.toggle('fa-times');

    });

}



navSlide();
iconToggle();