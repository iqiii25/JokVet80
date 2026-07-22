/* ==========================
   NAVBAR SCROLL
========================== */

const navbar = document.querySelector("nav");

/* ==========================
   NAVBAR SCROLL
========================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(8,17,31,.97)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.background = "rgba(8,17,31,.85)";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ==========================
   CARD ANIMATION
========================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".6s";

observer.observe(card);

});


/* ==========================
   COUNTER STATS
========================== */

const counters=document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText.replace(/\D/g,""));

let current=parseInt(counter.dataset.count)||0;

const increment=Math.ceil(target/80);

if(current<target){

current+=increment;

if(current>target) current=target;

counter.dataset.count=current;

if(counter.innerText.includes("%")){

counter.innerText=current+"%";

}else if(counter.innerText.includes("+")){

counter.innerText=current+"+";

}else{

counter.innerText=current;

}

requestAnimationFrame(update);

}

};

update();

});


/* ==========================
   ORDER BUTTON
========================== */

const orderButtons=document.querySelectorAll(".button");

orderButtons.forEach(btn=>{

btn.addEventListener("click",function(e){

e.preventDefault();

window.open(

"https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20order%20jasa%20JokVet80",

"_blank"

);

});

});


/* ==========================
   FLOATING WHATSAPP
========================== */

const wa=document.querySelector(".whatsapp");

wa.addEventListener("click",function(e){

e.preventDefault();

window.open(

"https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20Joki%20Rank",

"_blank"

);

});


/* ==========================
   ACTIVE MENU
========================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ==========================
   CARD ANIMATION
========================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(60px)";
card.style.transition=".6s";

observer.observe(card);

});


/* ==========================
   COUNTER STATS
========================== */

const counters=document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText.replace(/\D/g,""));

let current=parseInt(counter.dataset.count)||0;

const increment=Math.ceil(target/80);

if(current<target){

current+=increment;

if(current>target) current=target;

counter.dataset.count=current;

if(counter.innerText.includes("%")){

counter.innerText=current+"%";

}else if(counter.innerText.includes("+")){

counter.innerText=current+"+";

}else{

counter.innerText=current;

}

requestAnimationFrame(update);

}

};

update();

});


/* ==========================
   ORDER BUTTON
========================== */

const orderButtons=document.querySelectorAll(".button");

orderButtons.forEach(btn=>{

btn.addEventListener("click",function(e){

e.preventDefault();

window.open(

"https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20order%20jasa%20JokVet80",

"_blank"

);

});

});


/* ==========================
   FLOATING WHATSAPP
========================== */

const wa=document.querySelector(".whatsapp");

wa.addEventListener("click",function(e){

e.preventDefault();

window.open(

"https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20bertanya%20tentang%20Joki%20Rank",

"_blank"

);

});


/* ==========================
   ACTIVE MENU
========================== */

const sections=document.querySelectorAll("section, footer");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});