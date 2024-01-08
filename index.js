const select = document.getElementById("select");
select.addEventListener("change",function(event){
    let theme = event.target.value;
    document.documentElement.className = "";

// document.documentElement.classList.add(theme)
// if (theme === "light"){
//     document.documentElement.className = "";
// }











if (theme === "dark"){
    document.documentElement.classList.add(theme);
}

else if (theme === "purple"){
    document.documentElement.classList.add(theme);
}
else if (theme === "blue"){
    document.documentElement.classList.add(theme);
}


})


