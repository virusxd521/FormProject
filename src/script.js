let arrow = document.querySelector(".arrow");
let arrow_on_tablets = document.querySelector(".button_arrow");
let width_of_page = window.innerWidth;

document.body.onscroll = () => {    
    if (scrollY >= 80 && width_of_page <= 700) {
        arrow.style.display = "inline-block";    
    } else{
        arrow.style.display = "none";    
    }
}