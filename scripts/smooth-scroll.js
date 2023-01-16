const logoLinks = document.querySelectorAll("a[href*='#scroll-top']");

for(let currentLink of logoLinks){
    currentLink.addEventListener("click",(event)=>{
        const linkHref = currentLink.getAttribute("href");
        document.querySelector("" + linkHref).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
        event.preventDefault();
    });
}