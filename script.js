
// Temple Data
const templeData = {
    kailasa: {
        title: "Kailasa Temple",
        image: "https://www.travassa.in/wp-content/uploads/2023/11/Kailasa-2.webp",
        text: "The Kailasa Temple at Ellora is one of the largest rock-cut Hindu temples in the world. Built in the 8th century by King Krishna I of the Rashtrakuta dynasty, this magnificent structure was carved out of a single rock from top to bottom. The temple covers an area twice the size of the Parthenon in Athens and is considered one of the most remarkable cave temples in India. It features intricate carvings depicting scenes from Hindu mythology, including the Ramayana and Mahabharata. The temple complex includes elaborate sculptures of deities, mythological creatures, and scenes from daily life, all carved with extraordinary precision and artistic skill."
    },
    konark: {
        title: "Konark Sun Temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Sun_Temple_Konark_Puri_District_Odisha.jpg/2560px-Sun_Temple_Konark_Puri_District_Odisha.jpg",
        text: "The Konark Sun Temple, built in the 13th century by King Narasimhadeva I, is designed as a colossal chariot of the Sun God Surya, with 24 elaborately carved stone wheels, pulled by seven horses. This architectural masterpiece is renowned for its intricate stone carvings that cover every inch of its surface, depicting celestial beings, mythological scenes, animals, and everyday life. The temple's design reflects advanced astronomical knowledge, with the wheels functioning as sundials. The erotic sculptures on the temple walls represent various aspects of human life and spiritual pursuit. Despite damage over centuries, the temple remains a stunning example of Kalinga architecture and engineering prowess."
    },
    shore: {
        title: "Shore Temple",
        image: "https://thrillingtravel.in/wp-content/uploads/2022/12/Mamallapuram-shore-temple.jpg",
        text: "The Shore Temple at Mahabalipuram, built in the 8th century during the reign of Narasimhavarman II, is one of the oldest structural stone temples in South India. Overlooking the Bay of Bengal, this five-story temple complex is built from granite blocks and showcases early Dravidian architecture. The temple consists of two shrines dedicated to Lord Shiva and one to Lord Vishnu, demonstrating the religious harmony of the period. The intricate carvings and sculptures have withstood centuries of sea erosion and natural calamities. The temple's location and design suggest it once served as a landmark for sailors. It represents the culmination of architectural developments initiated by the Pallava dynasty and has been designated a UNESCO World Heritage Site."
    },
    brihad: {
        title: "Brihadeeswarar Temple",
        image: "https://www.trawell.in/admin/images/upload/921956429Thanjavur_Brihadeeswarar_Temple_Main.jpg",
        text: "The Brihadeeswarar Temple in Thanjavur, completed in 1010 CE by Raja Raja Chola I, is a supreme example of Chola architecture. The temple's massive tower (vimana) rises to 66 meters, topped with a single granite block weighing approximately 80 tons. The engineering feat of raising this capstone to such heights remains a mystery and testament to ancient Indian engineering skills. The temple walls are adorned with exquisite frescoes and inscriptions documenting the Chola period's history, administration, and culture. The Nandi (bull) statue at the entrance, carved from a single rock, is one of the largest in India. This UNESCO World Heritage Site continues to be an active place of worship and stands as a symbol of the Chola dynasty's architectural and cultural achievements."
    }
};

// Page Navigation
let currentPage = 'home';

function showPage(pageId) {
    const oldPage = document.getElementById(currentPage);
    const newPage = document.getElementById(pageId);
    
    if (oldPage === newPage) return;
    
    oldPage.classList.add('exit');
    
    setTimeout(() => {
        oldPage.classList.remove('active', 'exit');
        newPage.classList.add('active');
        currentPage = pageId;
        window.scrollTo(0, 0);
    }, 600);
}

// Modal Functions
function openModal(templeId) {
    const modal = document.getElementById('templeModal');
    const data = templeData[templeId];
    
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalText').textContent = data.text;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('templeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('templeModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Parallax Effect
const templeParallax = document.getElementById('templeParallax');
if (templeParallax) {
    templeParallax.addEventListener('mousemove', function(e) {
        const layer = this.querySelector('.parallax-layer');
        const speed = 0.02;
        
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        layer.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    });
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
function observeElements() {
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Initial observation
observeElements();

// Re-observe when page changes
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    setTimeout(observeElements, 100);
};

// Add floating animation to hero on mouse move
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', function(e) {
        const content = this.querySelector('.hero-content');
        const x = (e.clientX - window.innerWidth / 2) / 50;
        const y = (e.clientY - window.innerHeight / 2) / 50;
        
        content.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add dynamic background animation to religion cards
document.querySelectorAll('.religion-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        this.style.background = `radial-gradient(circle at ${x}% ${y}%, #a52a2a 0%, #8b0000 50%, #c19a6b 100%)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #8b0000, #c19a6b)';
    });
});

// Timeline items stagger animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Add ripple effect to temple cards
document.querySelectorAll('.temple-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 204, 102, 0.5);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Add cursor trail effect on hero section
let particles = [];
const heroSection = document.querySelector('.hero');

if (heroSection) {
    heroSection.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.9) {
            createParticle(e.clientX, e.clientY);
        }
    });
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, #ffcc66, transparent);
        border-radius: 50%;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        z-index: 999;
        animation: particleFade 1s ease-out forwards;
    `;
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
}

const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFade {
        from {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        to {
            opacity: 0;
            transform: scale(0.3) translateY(-30px);
        }
    }
`;
document.head.appendChild(particleStyle);

// Add 3D tilt effect to timeline content
document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    content.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

console.log('✨ Indian Heritage Experience Loaded - Explore the timeless legacy!');

