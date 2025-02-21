function abreModal(element){
    const modal = document.getElementById("modal");
    const modal_img = document.getElementById("modal-img");
    const captionTitulo = document.getElementById("caption");

    modal.style.display = "block";
    modal_img.src = element.querySelector("img").src;
    captionTitulo.innerHTML = element.querySelector("h1").innerHTML;
 
}
function closeModal(){
    document.getElementById("modal").style.display = "none";
    }

document.getElementById("modal").addEventListener("click",function(event){
    if(event.target === this) {
        closeModal();
        }
})
document.querySelectorAll(".filho-estrutura").forEach(zunba => {
    zunba.addEventListener("click", function(event) {
        abreModal(this);
    });
})
