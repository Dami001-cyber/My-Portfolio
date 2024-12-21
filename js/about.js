// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress Bar Animation on Page Load
window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;  // Get the width from the inline style
        bar.style.width = '0';  // Set the initial width to 0
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-in-out';  // Smooth transition for animation
            bar.style.width = width;  // Set it to the actual width after the delay
        }, 300);  // Delay to ensure smooth animation on page load
    });
});
