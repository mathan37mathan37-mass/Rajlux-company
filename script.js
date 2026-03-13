// ==========================
// Dark Mode Toggle + Save Mode
// ==========================

const toggle = document.getElementById("themeToggle");

if (toggle) {

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent = "☀️";
localStorage.setItem("theme","dark");
}else{
toggle.textContent = "🌙";
localStorage.setItem("theme","light");
}

});

}


// ==========================
// Active Menu Highlight
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if (window.scrollY >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});


// ==========================
// Navbar Scroll Shadow
// ==========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if (navbar) {

if (window.scrollY > 50) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}

}

});


// ==========================
// Scroll Reveal Animation
// ==========================

function revealOnScroll() {

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el => {

const windowHeight = window.innerHeight;
const revealTop = el.getBoundingClientRect().top;

if (revealTop < windowHeight - 100) {
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==========================
// Service Search
// ==========================

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

if(searchInput){

searchInput.addEventListener("keyup", () => {

let filter = searchInput.value.toLowerCase();

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if (text.includes(filter)) {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});

}


// ==========================
// Contact Form
// ==========================

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e) {

e.preventDefault();

alert("Message Sent Successfully!");

this.reset();

});

}


// ==========================
// Gallery Modal
// ==========================

const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".close");

if(images && modal){

images.forEach(img => {

img.addEventListener("click", () => {

modal.style.display="flex";
modalImg.src=img.src;

});

});

}

if(close){

close.onclick = () => {

modal.style.display="none";

};

}


// ==========================
// 3D Animated Background
// ==========================

const canvas = document.getElementById("bgCanvas");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="#4f46e5";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

});

requestAnimationFrame(animateParticles);

}

animateParticles();

}


// ==========================
// Mobile Hamburger Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle){

menuToggle.onclick = () => {

navMenu.classList.toggle("active");

};

}
