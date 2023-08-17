const menuBarIcon = document.getElementById("menuBarIcon");
const menuBarOptions = document.getElementById("menuBarOptions");
const searchBarIcon = document.getElementById("searchBarIcon");
const inputField = document.getElementById("inputField");

// MenuBar System
menuBarIcon.addEventListener("click", () => {
    
    if(menuBarOptions.style.display === "none")
    {
        menuBarOptions.style.display = "block";
    }
    else
    {
        menuBarOptions.style.display = "none";
    }
},false)

// Input Section
searchBarIcon.addEventListener("click", () => {
    if(inputField.style.display === "none")
    {
        inputField.style.display = "block";
    }
    else
    {
        inputField.style.display = "none";
    }
})