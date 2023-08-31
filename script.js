let searchbar = document.getElementById('searchbar');
let search = document.querySelector(".fa-magnifying-glass");

function showSearchBar() {
    searchbar.innerHTML = 
    `<input type="text" id="inputBar" placeholder="Search here ...">`;
}

search.addEventListener("click", showSearchBar) 

window.onscroll = function () {
    document.getElementById("inputBar").style.display = "none";
}


let submit = document.getElementById('submit');

function showProductPage() {
    document.getElementById('form').submit();
}

submit.addEventListener("click", showProductPage) 