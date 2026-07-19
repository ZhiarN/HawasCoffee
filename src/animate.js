export function animate() {
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {	
        entry.target.classList.toggle("animate", entry.isIntersecting)
    })
    
}, {
    threshold: 0.3
});
document.querySelectorAll("[data-animation]").forEach(element => {
    observer.observe(element)
    
});
}
