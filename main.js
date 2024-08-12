
const leaf = document.getElementById("img-rotate");

window.addEventListener("scroll", () => {
    let value = window.scrollY * 0.5;
    leaf.style.transform = `translateX(-10%) rotate(${value}deg)`;
});
