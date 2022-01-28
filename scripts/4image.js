let images = document.querySelectorAll("img");

function moveImage(){
        images[0].src = images[1].src;
        images[1].src = images[2].src;
        images[2].src = images[3].src;
        images[3].src = images[0].src;
        
}