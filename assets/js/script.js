window.addEventListener('scroll', function(){
    document.querySelector('header')
        .classList.toggle('sticky', window.scrollY > 20)

    document.querySelector('.scroll-up-btn')
        .classList.toggle('show', window.scrollY > 1500)
})

window.onload = function(){

    let menu = document.querySelector('.btn-menu')
    menu.addEventListener('click', function(){
        document.querySelector('.navbar-links').classList.toggle('active')
        document.querySelector('.navbar i').classList.toggle('active')
    })

    document.querySelector('.scroll-up-btn')
        .addEventListener('click', function() {
            console.log("Click")
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        })
    
    document.querySelector('.navbar').addEventListener('click', e => {
        if(e.target.classList.contains('nav-link')) {
            document.querySelector('.navbar-links').classList.toggle('active')
            document.querySelector('.navbar i').classList.toggle('active')
        }
    })

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            800: {
                items: 2,
                nav: false
            },
            1200: {
                items: 3,
                nav: false
            }
        }
    })
}

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY
    
    sections.forEach(section => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop - 50;
        let sectionId = section.getAttribute('id');

        // console.log(scrollY, sectionId, sectionTop, sectionHeight)

        if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
            console.log(document.querySelector('.links a[href *=' + sectionId + ']'))
            document.querySelector('.links a[href *=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.links a[href *=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)