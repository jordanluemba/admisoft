(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

document.getElementById("openChatBtn").addEventListener("click", function() {
    document.getElementById("chatBox").style.display = "flex";
});

document.getElementById("closeChatBtn").addEventListener("click", function()  {
    document.getElementById("chatBox").style.display = "none";
});

// Gestion du chat
document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chatIcon');
    const chatContainer = document.getElementById('chatContainer');
    const closeChat = document.getElementById('closeChat');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    
    // Ouvrir le chat
    chatIcon.addEventListener('click', function() {
        chatContainer.style.display = 'flex';
    });
    
    // Fermer le chat
    closeChat.addEventListener('click', function() {
        chatContainer.style.display = 'none';
    });
    
    // Envoyer un message
    function sendNewMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            // Ajouter le message envoyé
            const sentMessage = document.createElement('div');
            sentMessage.className = 'message sent';
            sentMessage.textContent = messageText;
            chatMessages.appendChild(sentMessage);
            
            // Réponse automatique après un délai
            setTimeout(() => {
                const responses = [
                    "Merci pour votre message. Comment puis-je vous aider ?",
                    "Je vais vérifier cela pour vous.",
                    "Nous avons bien reçu votre demande.",
                    "Un conseiller va vous répondre sous peu.",
                    "Avez-vous besoin d'autres informations ?"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                
                const receivedMessage = document.createElement('div');
                receivedMessage.className = 'message received';
                receivedMessage.textContent = randomResponse;
                chatMessages.appendChild(receivedMessage);
                
                // Faire défiler vers le bas
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
            
            // Effacer le champ de saisie
            messageInput.value = '';
            
            // Faire défiler vers le bas
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
    
    // Envoyer avec le bouton
    sendMessage.addEventListener('click', sendNewMessage);
    
    // Envoyer avec Entrée
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendNewMessage();
        }
    });
    
    // Faire défiler les messages vers le bas au chargement
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

/*******
 * *******
 */


document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarCollapse');

    navbarToggler.addEventListener('click', function () {
        // Toggle the "X" icon
        this.classList.toggle('collapsed');
        this.innerHTML = this.classList.contains('collapsed')
            ? '<span>&times;</span>' // X icon
            : '<span class="navbar-toggler-icon"></span>'; // Hamburger icon
    });

    // Close the menu when a link is clicked (optional)
    navbarCollapse.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            navbarToggler.classList.remove('collapsed');
            navbarToggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
            navbarCollapse.classList.remove('show');
        }
    });
});
    document.getElementById("current-year").textContent = new Date().getFullYear();


//JavaScript de filtrage

  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.project-item');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        items.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });


// Filtrage des projets
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrer les projets
            projectItems.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = 0;
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animation initiale des projets
    projectItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Animation des cartes au scroll
document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    blogCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Filtrage des produits
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.marketplace-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrer les produits
            productItems.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Initialiser les tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Script pour le slider de témoignages
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Gestion des événements pour les boutons de navigation
    nextBtn.addEventListener('click', function() {
        slider.scrollBy({ left: 380, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', function() {
        slider.scrollBy({ left: -380, behavior: 'smooth' });
    });
    
    // Animation au survol des cartes
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.testimonial-bg').style.width = '150px';
            this.querySelector('.testimonial-bg').style.height = '150px';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.testimonial-bg').style.width = '100px';
            this.querySelector('.testimonial-bg').style.height = '100px';
        });
    });
});

// Animation au survol des badges
document.querySelectorAll('.member-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(15deg) scale(1.1)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0) scale(1)';
    });
});

// Animation pour les éléments de formulaire
document.querySelectorAll('.form-floating input, .form-floating textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.querySelector('.form-line').style.width = '100%';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentNode.querySelector('.form-line').style.width = '0';
        }
    });
});

// Année dynamique dans le copyright
document.getElementById('year').textContent = new Date().getFullYear();
    
// Bouton retour en haut
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});