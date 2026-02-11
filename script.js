// On attend que le HTML soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {

    // 1. On sélectionne les éléments dont on a besoin
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    // 2. On vérifie s'ils existent (pour éviter les erreurs dans la console)
    if (menuToggle && navigation) {
        
        // 3. On écoute le "clic" sur le bouton hamburger
        menuToggle.addEventListener('click', () => {
            
            // On ajoute ou on enlève la classe "active" au menu
            navigation.classList.toggle('active');

            // On ajoute une classe au bouton pour l'animer (le transformer en X)
            menuToggle.classList.toggle('is-active');
            
            // Optionnel : on empêche le scroll de la page quand le menu est ouvert
            document.body.classList.toggle('no-scroll');
        });
    }

});


//annee en cours dans le footer

const yearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear; 


// On crée le "gardien" (l'Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Si l'élément est visible dans l'écran
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, {
    threshold: 1 // L'animation se déclenche quand 10% de l'élément est visible
});

// On dit au gardien de surveiller tous les éléments qui ont la classe .reveal
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});