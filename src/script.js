let arrow = document.querySelector(".arrow");

document.body.onscroll = () => {    
    if (scrollY >= 256) {
        arrow.style.display = "inline-block";    
    } else {
        arrow.style.display = "none";    
    }
    
    

}