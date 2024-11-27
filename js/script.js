var sidenav = document.getElementById("menu-burger");

var openBtn = document.getElementById("open-button");

var closeBtn = document.getElementById("close-button");

var sliderImg = document.getElementById("slider-img")

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

//ajoute une classe active au button pour ouvrir le menu burger
function openNav() {
    sidenav.classList.add("active");
}

//on enlève la class active au button pour fermer le menu burger
function closeNav() {
    sidenav.classList.remove("active");
}

//assigne une valeur a une variable
let imageIndex = 1;

function slider() {
    if (imageIndex === 1) {
        //change la source de l'image
        sliderImg.src = "img/AdobeStock_199295625-scaled-e16759389722552.jpeg";
        //change la valeur de la variable
        imageIndex = 2;
    }
    else if (imageIndex === 2) {
        sliderImg.src = "img/31957519_1769725339733394_4539706554139541504_o.jpg";
        imageIndex = 3;
    }
    else if (imageIndex === 3) {
        sliderImg.src = "img/46355145855_afdd7fd2fa_k.jpg";
        imageIndex = 4;
    }
    else if (imageIndex === 4) {
        sliderImg.src = "img/21_re.jpg";
        imageIndex = 1;
    }
}

//assign une duree de chaque etape de la boucle 
setInterval(slider, 4000);