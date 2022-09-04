//change navbar style on scrolling
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})
//alert("Hello! I am an alert box!!");