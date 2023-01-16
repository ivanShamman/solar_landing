const tabsLink = document.querySelectorAll(".tabs-link");
const tabsItem = document.querySelectorAll(".green-tariff__collapse-item");

if(tabsLink.length > 0){
    for(let i = 0; i < tabsLink.length; i++){
        let currentLink = tabsLink[i];
        currentLink.addEventListener("click",(event)=>{
            TabsLinkReset(tabsLink);
            currentLink.classList.add("tabs-link_active");
            const linkHref = currentLink.getAttribute("href");
            let itemHref = document.querySelector(linkHref);
            TabsItemReset(tabsItem);
            itemHref.classList.add("green-tariff__collapse-item-active");
            event.preventDefault();
        });
    }
}

function TabsLinkReset(linkArray){
    for(let i = 0; i < linkArray.length;i++){
        let link = linkArray[i];
        link.classList.remove("tabs-link_active");
    }
}

function TabsItemReset(tabsArray){
    for(let i = 0; i < tabsArray.length;i++){
        let item = tabsArray[i];
        item.classList.remove("green-tariff__collapse-item-active");    
    }
}