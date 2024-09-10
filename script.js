document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Actualización del array con los paths correctos de las imágenes
    const images = ['img/img1.png', 'img/img2.png', 'img/img3.png', 'img/img4.png'];

    // Modal elements
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const body = document.body;
    
    let currentIndex = 0;

    // Agregar imágenes a la galería
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.dataset.index = index;  // Guardamos el índice de la imagen
        imgElement.addEventListener('click', openModal);
        galleryContainer.appendChild(imgElement);
    });

    // Función para abrir el modal
    function openModal(event) {
        currentIndex = parseInt(event.target.dataset.index);
        showImage(currentIndex);
        modal.style.display = "block";
        body.classList.add('modal-open');
    }

    // Función para mostrar la imagen en el modal
    function showImage(index) {
        modalImg.src = images[index];
        captionText.innerHTML = `Imagen ${index + 1} de ${images.length}`;
    }

    // Cerrar el modal
    const closeModal = document.querySelector('.close');
    closeModal.onclick = function() {
        modal.style.display = "none";
        body.classList.remove('modal-open');
    };

    // Funcionalidad para pasar a la siguiente imagen
    const next = document.querySelector('.next');
    next.onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    // Funcionalidad para retroceder a la imagen anterior
    const prev = document.querySelector('.prev');
    prev.onclick = function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    // Cerrar el modal al hacer clic fuera de la imagen
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            body.classList.remove('modal-open');
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('nav ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento estándar del link
            const targetId = this.getAttribute('href'); // Obtener el id del destino
            const targetSection = document.querySelector(targetId);

            // Desplazamiento suave hacia la sección objetivo
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    });
});
