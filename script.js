const searchIcon = document.getElementById("sIcon");
const inputBar = document.getElementById("inputBar");
const menuBar = document.getElementById("menuBar");
const slideMenuContent = document.getElementById("slideMenuContent");
const menuBar2 = document.getElementById("menuBar2");
const slideMenuContent2 = document.getElementById("slideMenuContent2");

// Search Bar
searchIcon.addEventListener("click", () => {
    if(inputBar.style.display === "none")
    {
        inputBar.style.display = "block";
    }
    else
    {
        inputBar.style.display = "none";
    }
},false)

// Menu Bar
menuBar.addEventListener("click", () => {
    if(slideMenuContent.style.display === "none")
    {
        slideMenuContent.style.display = "block";
    }
    else
    {
        slideMenuContent.style.display = "none";
    }
},false)


// MenuBar 2
menuBar2.addEventListener("click", () => {
    if(slideMenuContent2.style.display === "none")
    {
        slideMenuContent2.style.display = "block";
    }
    else
    {
        slideMenuContent2.style.display = "none";
    }
},false)