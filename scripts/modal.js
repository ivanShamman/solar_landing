const modalLink = document.querySelectorAll(".modal-link");
const modal = document.querySelector(".modal");
const closeModalLink = document.querySelectorAll(".modal__close")
const body = document.querySelector("body");
let isOpen = false;

console.log(modalLink);
console.log(modal);
console.log(closeModalLink);

if(modalLink.length > 0){
    for(let i = 0; i < modalLink.length; i++){
        let currentLink = modalLink[i];
        currentLink.addEventListener("click",(event)=>{
            ModalOpen();
            event.preventDefault();
        })
    }
}

if(closeModalLink.length > 0){
    console.log(closeModalLink.length);
    for(let currentCloseLink of closeModalLink ){
        console.log(currentCloseLink);
        currentCloseLink.addEventListener("click",(event)=>{
            ModalClose();
            event.preventDefault();
        });
    }
}

document.addEventListener("keydown" , (event) =>{
    if(event.code === "Escape"){
        ModalClose();
    }
});


function ModalOpen(){
    modal.classList.add("modal__open");
    body.classList.add("lock");
    isOpen = true;
}
function ModalClose(){
    modal.classList.remove("modal__open");
    body.classList.remove("lock");
    isOpen = false;
}