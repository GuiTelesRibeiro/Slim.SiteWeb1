function updateCarouselImages() {
    const smallScreen = window.matchMedia("(max-width: 576px)");
    const carouselItems = document.querySelectorAll('.carousel-item img');

    carouselItems.forEach(item => {
        if (smallScreen.matches) {
            if (item.src.includes('Carrossel1.png')) {
                item.src = 'Imgs/Servicos/Carrossel1Small.png';
            } else if (item.src.includes('Carrossel2.png')) {
                item.src = 'Imgs/Servicos/Carrossel2Small.png';
            }else if (item.src.includes('Carrossel3.png')) {
                item.src = 'Imgs/Servicos/Carrossel3Small.png';
            }else if (item.src.includes('Carrossel4.png')) {
                item.src = 'Imgs/Servicos/Carrossel4Small.png';
            }
        } else {
            if (item.src.includes('Carrossel1Small.png')) {
                item.src = 'Imgs/Servicos/Carrossel1.png';
            } else if (item.src.includes('Carrossel2Small.png')) {
                item.src = 'Imgs/Servicos/Carrossel2.png';
            }else if (item.src.includes('Carrossel3Small.png')) {
                item.src = 'Imgs/Servicos/Carrossel3.png';
            }else if (item.src.includes('Carrossel4Small.png')) {
                item.src = 'Imgs/Servicos/Carrossel4.png';
            }
        }
    });
}

window.addEventListener('resize', updateCarouselImages);

// Trigger resize event to set the initial state
window.dispatchEvent(new Event('resize'));


