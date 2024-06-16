// Objeto que mantém o controle dos slides atuais para cada carousel
let currentSlides = {};

// Função para mostrar um slide específico
function showSlide(button, index) {
    // Encontrar o carousel ao qual o botão pertence
    const carousel = button.closest('.carousel');
    // Encontrar o elemento que contém os slides dentro do carousel
    const carouselInner = carousel.querySelector('.carousel-inner');
    // Selecionar todos os slides dentro do carousel
    const slides = carouselInner.querySelectorAll('.carousel-item');
    // Identificar o ID único deste carousel
    const carouselId = carousel.dataset.carouselId;

    // Verificar se não existe um índice de slide atual para este carousel, definir como 0
    if (!currentSlides[carouselId]) currentSlides[carouselId] = 0;

    // Lógica para determinar o índice do slide a ser exibido
    if (index >= slides.length) {
        // Se o índice fornecido for maior ou igual ao número de slides, voltar ao primeiro slide
        currentSlides[carouselId] = 0;
    } else if (index < 0) {
        // Se o índice fornecido for negativo, ir para o último slide
        currentSlides[carouselId] = slides.length - 1;
    } else {
        // Caso contrário, definir o slide conforme o índice fornecido
        currentSlides[carouselId] = index;
    }

    // Calcular o deslocamento necessário para exibir o slide correto
    const offset = -currentSlides[carouselId] * 100;
    // Aplicar a transformação para mover os slides horizontalmente
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Função para avançar para o próximo slide
function nextSlide(button) {
    // Encontrar o carousel ao qual o botão pertence
    const carousel = button.closest('.carousel');
    // Identificar o ID único deste carousel
    const carouselId = carousel.dataset.carouselId;
    // Chamar a função showSlide para exibir o próximo slide (incrementando o índice atual)
    showSlide(button, (currentSlides[carouselId] || 0) + 1);
}

// Função para voltar para o slide anterior
function prevSlide(button) {
    // Encontrar o carousel ao qual o botão pertence
    const carousel = button.closest('.carousel');
    // Identificar o ID único deste carousel
    const carouselId = carousel.dataset.carouselId;
    // Chamar a função showSlide para exibir o slide anterior (decrementando o índice atual)
    showSlide(button, (currentSlides[carouselId] || 0) - 1);
}

// Configurar um ID único para cada carousel encontrado na página
document.querySelectorAll('.carousel').forEach((carousel, index) => {
    carousel.dataset.carouselId = index;
});


function cancelar(event) {
    event.preventDefault();
    window.location.href = 'index.html';
}
