const fulImg =document.getElementById("p-img");
const imagen =document.getElementById("n-img");


function openFulImg(reference){
    imagen.style.display="flex";
    fulImg.src=reference
}
function closeOpenImg(){
    imagen.style.display="none";

}
