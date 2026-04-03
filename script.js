let counter = 0;
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Função principal para mudar o slide
function showSlide(index) {
    if (index >= images.length) {
        counter = 0;
    } else if (index < 0) {
        counter = images.length - 1;
    } else {
        counter = index;
    }
    slide.style.transform = `translateX(${-counter * 100}%)`;
}

// Função para os botões Próximo/Anterior
function changeSlide(n) {
    showSlide(counter + n);
    resetTimer(); // Reseta o tempo do autoplay ao clicar
}

// Autoplay
let slideTimer = setInterval(() => {
    showSlide(counter + 1);
}, 4000);

// Reinicia o contador de tempo para não pular rápido após um clique manual
function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        showSlide(counter + 1);
    }, 4000);
}

// Funções do Modal (Lightbox) permanecem iguais
function openModal(src) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}