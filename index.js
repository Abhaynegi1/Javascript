
//THIS IS FOR POP UP TEXT AND IMAGES


function scrollAppear(){
    var introText = document.querySelector(".intro-text");
    var intrPhoto = document.querySelector(".photo");
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.7;
    
    if(introPosition < screenPosition){
        introText.classList.add("text-appear");
        intrPhoto.classList.add("photo-appear")
    }
}

window.addEventListener("scroll",scrollAppear);


//TIS IS FOR IMAGE SLIDER

const ImageSlide = document.querySelector(".slide");
const photos = document.querySelectorAll(".slide img");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let counter = 1;
const size = photos[0].clientWidth;

ImageSlide.style.transform = "translateX(" + (-size * counter) + "px)";


nextButton.addEventListener("click", () =>{
    if(counter >= photos.length - 1) return;
    ImageSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    ImageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevButton.addEventListener("click", () =>{
    if(counter <= 0) return ;
    ImageSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    ImageSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});


ImageSlide.addEventListener("transitionend", () => {
    if(photos[counter].id === "last"){
        ImageSlide.style.transition = "none";
        counter = photos.length - 2;  
        ImageSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
    }
    if(photos[counter].id === "first"){
        ImageSlide.style.transition = "none";
        counter = photos.length - counter;  
        ImageSlide.style.transform = "translateX(" + (-size * counter) + "px)"; 
    }
});


//THIS IS FOR NAVIGATION BAR
const NavSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", ()=> {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = `nevFade 0.7s ease forwards ${index / 7 + 1.2}s`;
            }
            
        });
    });


}

NavSlide();







