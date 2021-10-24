/* Constante para abrir e fechar o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')



/* add atributo data-aos em todas as tags dentro da main */
const all = document.querySelectorAll('main>*')

for( let i=0, max = all.length; i<max; i++) {
    all[i].setAttribute("data-aos", "fade-up")
}

/* fim dessa parte */

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
    Keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
  });
  


  /** Animação ao scrollar o site */

  AOS.init();


/* Indentificar qual item do menu que a pagina está e informar com CSS */
/* tentativa ==========>
const sections = document.querySelectorAll('main section[id]') 

function ActivateMenuAtCurrentSection() {

    const checkpoint = scrollY

    if(checkpoint < 670 ){
        console.log('menu')
    }else if(checkpoint < 1360) {
        console.log("sobre")
    }else if(checkpoint < 2230) {
        console.log("Culturas")
    }else if(checkpoint < 3040) {
        console.log("depoimentos")
    }else
    console.log("contatos")

}

addEventListener('scroll', ActivateMenuAtCurrentSection)

*/

const sections = document.querySelectorAll('main section[id]')

function ActivateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight/8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const cehckpointStart = checkpoint >= sectionTop
        
    }
}