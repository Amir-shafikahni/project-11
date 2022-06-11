let $ = document

/////////////////////////

let loaderBox = $.querySelector(".loaderBox")
let mainWeb = $.querySelector(".mainWeb")

function loaderRemove(){
    setTimeout(function(){
        loaderBox.style.display = "none"
        mainWeb.style.display = "block"
    },2000)
}