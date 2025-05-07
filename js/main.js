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