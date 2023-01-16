let carouselID = 1;
const carouselContorllBtn = document.querySelectorAll(".our-clients__controll-btn");

ShowCarouselItem(carouselID);

carouselContorllBtn[0].addEventListener("click",(event)=>{
    SwitchCarousel(-1);
    event.preventDefault();
});
carouselContorllBtn[1].addEventListener("click",(event)=>{
    SwitchCarousel(1);
    event.preventDefault();
});

function SwitchCarousel(id){
    ShowCarouselItem(carouselID += id);
}

function ShowCarouselItem(id){
    let i;
    const carouselItems = document.querySelectorAll(".our-clients__carousel-item");

    if(id > carouselItems.length){
        carouselID = 1;
    }
    if(id < 1){
        carouselID = carouselItems.length;
    }

    for(i = 0; i < carouselItems.length; i++){
        carouselItems[i].classList.remove("show")
    }
    carouselItems[carouselID - 1].classList.add("show");
}