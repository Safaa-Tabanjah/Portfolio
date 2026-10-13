
// --- THEME TOGGLE ---
const themeToggle = document.getElementById('theme');
const sunIcon = themeToggle.querySelector('.fa-sun');
const moonIcon = themeToggle.querySelector('.fa-moon');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') { 
        sunIcon.style.display = 'none'; 
        moonIcon.style.display = 'inline-block'; 
    } else { 
        sunIcon.style.display = 'inline-block'; 
        moonIcon.style.display = 'none'; 
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

// --- LIGHTBOX GALLERY LOGIC ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox-close');

// Only add event listeners if the elements actually exist on the page
if (closeBtn) {
    closeBtn.addEventListener('click', () => { 
        lightbox.style.display = 'none'; 
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}