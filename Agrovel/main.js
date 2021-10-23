/* Constante para abrir e fechar o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
        /* se tiver show tira se não tiver coloca => Toggle == trocar */
    })
}

/** Quando clicar em um item do menu, fechar e correr para o local */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/** Quando o usuario scrollar a pagina */

function ChangeHeader() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
   
    if(window.scrollY >= navHeight) {
        // Scroll é maior que a altura do header
        header.classList.add('scroll')
    }else {
        // Scroll é menor que a altura do header
        header.classList.remove('scroll')
    }
}

/**  Botão voltar para o topo */

  function BackToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY >= 3300 ){
        backToTopButton.classList.add('show')

    }else {
        backToTopButton.classList.remove('show')
    }
  }


window.addEventListener('scroll', function() {
    ChangeHeader()
    BackToTop()
})


/* Testimonials Slider */


const swiper = new Swiper('.swiper', {
    
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true
  });
  


  /** Animação ao scrollar o site */

  AOS.init();
