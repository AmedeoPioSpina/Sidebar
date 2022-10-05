const sidebarStatusBtn = document.querySelector(".sidebarStatusBtn");
const sidebar = document.querySelector(".sidebar");

sidebarStatusBtn.onclick = () => {
    if(sidebarStatusBtn.dataset.status === "off"){
        sidebarStatusBtn.dataset.status = "on";
        sidebar.style.display = "flex";
        sidebar.style.left = "0";
        sidebarStatusBtn.style.marginLeft = "10.5rem";
    }
    else{
        sidebarStatusBtn.dataset.status = "off";
        sidebar.style.display = "none";
        sidebar.style.left = "-10rem";
        sidebarStatusBtn.style.marginLeft = "0.5rem";
    }
}