const sidebarStatusBtn = document.querySelector(".sidebarStatusBtn");
const sidebar = document.querySelector(".sidebar");

sidebarStatusBtn.onclick = async() => {
    if(sidebarStatusBtn.dataset.status === "off"){
        sidebarStatusBtn.dataset.status = "on";
        sidebar.style.transform = "translateX(0)";
        sidebarStatusBtn.style.marginLeft = "10.5rem";
    }
    else{
        sidebarStatusBtn.dataset.status = "off";
        sidebar.style.transform = "translateX(-10rem)";
        sidebarStatusBtn.style.marginLeft = "0.5rem";
    }
}