let currentImageIndex = 0;
let currentThumb = 0;
const images = [
    'img/2.png',
    'img/4.png',
    'img/5.png',
    'img/6.png',
    'img/7.png',
    'img/8.png',
    'img/1.png',
    'img/9.png'
];

function changeMainImage(index) {
    currentThumb = index;
    const mainImage = document.getElementById('mainImage');
    mainImage.src = images[index];
    
    // Atualiza a classe active nas miniaturas
    document.querySelectorAll('.thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function openGallery(index) {
    currentImageIndex = index;
    document.getElementById('galleryModal').style.display = 'block';
    document.getElementById('modalImage').src = images[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = '';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById('modalImage').src = images[currentImageIndex];
}

// Fechar modal quando clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeGallery();
    }
}

// Navegação com teclado
document.addEventListener('keydown', function(event) {
    if (document.getElementById('galleryModal').style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        }
        else if (event.key === 'ArrowRight') {
            changeImage(1);
        }
        else if (event.key === 'Escape') {
            closeGallery();
        }
    }
});

// Precarregamento das imagens
window.addEventListener('load', function() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}); 