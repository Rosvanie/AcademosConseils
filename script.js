// Fonction pour vérifier la visibilité des sections
function checkVisibility() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Fonction optimisée pour vérifier la visibilité avec requestAnimationFrame
function onScroll() {
    requestAnimationFrame(checkVisibility);
}


// Ajouter un événement de défilement pour vérifier la visibilité
window.addEventListener('scroll', onScroll);

// Vérifier la visibilité lors du chargement de la page
window.addEventListener('load', checkVisibility);

// Appeler la fonction de vérification initiale au chargement
checkVisibility();


// Sélectionner le header et la navbar
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const headerHeight = header.offsetHeight; // Hauteur du header

// Fonction pour gérer la position de la navbar
function handleScroll() {
    if (window.scrollY > headerHeight) {
        // Si l'utilisateur a défilé au-delà de la hauteur du header
        navbar.style.position = 'fixed'; // Fixe la navbar en haut de la page
        navbar.style.top = '0'; // Positionne la navbar en haut de la fenêtre
        navbar.style.bottom = 'auto'; // Annule la position en bas
    } else {
        // Si l'utilisateur est en haut de la page
        navbar.style.position = 'relative'; // Positionne la navbar en bas du header
        navbar.style.bottom = '0'; // Positionne la navbar en bas du header
        navbar.style.top = 'auto'; // Annule la position en haut
    }
}

// Écouter l'événement de défilement
window.addEventListener('scroll', handleScroll);

// Appeler la fonction au chargement de la page pour initialiser
handleScroll();




