
function searchData(){
    let queryid = document.getElementById("searchInput").value;
    const xhr = new XMLHttpRequest();
    xhr.onload  = function(){
        js = JSON.parse(this.responseText);
        console.log(js);
        displayImgData(js);
    }
    xhr.open("GET", `https://api.tvmaze.com/search/shows?q=${queryid}`);
    xhr.send();
}

displayImgData = (js) =>{
    document.getElementById("searchInput").value = "";

    let akshatS = ``;
    for(let image of js){
        akshatS = `${akshatS}<img src="${image.show.image.medium}" alt="">`
    }
    document.querySelector(".image-div-container").innerHTML = akshatS;


}

const theme = document.querySelectorAll(`[name="theme"]`);
console.log(theme);

const storeTheme = function(theme)
{
    localStorage.setItem('theme',theme);
}

theme.forEach(themeoption => {
    themeoption.addEventListener('click',()=>{
        storeTheme(themeoption.id);
    })
});

const applyTheme = function()
{
    const activetheme = localStorage.getItem('theme');

    document.getElementById(activetheme).checked = true;
}
document.onload = applyTheme();