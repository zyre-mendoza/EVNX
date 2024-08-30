document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Function to update slide visibility
    const updateSlides = () => {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });
    };

    // Next slide functionality
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlides();
    };

    // Previous slide functionality
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlides();
    };

    // Event listeners for controls
    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

    // Automatic slide change every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize first slide state
    updateSlides();
});



function toggleMenu() {
        var navLinks = document.querySelector('.nav-links');
        var menuIcon = document.querySelector('.menu-icon');
        
    
        navLinks.classList.toggle('active');
        let currentSlide = 0;
        
        // Optional: Toggle an active class on the menu icon for styling or animations
        menuIcon.classList.toggle('active');
    }

function toggleDropdown(button) {
    // Close all dropdowns
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        if (dropdown !== button.parentNode) {
            dropdown.classList.remove('active');
        }
    });

    // Toggle the clicked dropdown
    button.parentNode.classList.toggle('active');
}

// Close dropdowns when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}


let currentIndex = 0;
const carouselInner = document.querySelector('.product-carousel-inner');
const cards = document.querySelectorAll('.product-carousel-inner .card');
const totalCards = cards.length;
const visibleCards = 3;

function updateCarousel() {
    // Reset expanded-card class and ensure default width
    cards.forEach(card => {
        card.classList.remove('expanded-card');
        card.style.flex = '0 0 33.333%'; // Reset flex-basis for all cards
    });

    // Calculate the position of the first visible card
    let firstVisibleIndex = currentIndex % totalCards;

    // Add expanded-card class to the first visible card
    cards[firstVisibleIndex].classList.add('expanded-card');

    // Reorder cards to simulate circular flow
    cards.forEach((card, index) => {
        // Calculate the new position based on currentIndex
        let newPosition = (index - currentIndex + totalCards) % totalCards;

        // Set the order for flexbox to manage the display sequence
        card.style.order = newPosition;

        // Position cards properly
        if (newPosition < visibleCards) {
            card.style.display = 'flex'; // Make sure visible cards are displayed
        } else {
            card.style.display = 'none'; // Hide non-visible cards
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
}

// Auto-slide functionality
let autoSlideInterval = setInterval(nextSlide, 5000);

// Reset auto-slide timer on manual navigation
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}


// Initial setup
updateCarousel();
