// document.addEventListener('DOMContentLoaded', displayWebsitePresets)

// function displayWebsitePresets(){

// }


function getCocktails (){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
.then(response => response.json())
.then(data => renderCocktails(data)
)}

getCocktails()

let cocktailList = document.getElementById("list")
let clickName = document.getElementById("header-show-panel")
let cocktailImage = document.getElementById("img-cocktail")
// let clickDescription = document.getElementById("description")
// let likes = document.getElementById("like-button")


function renderCocktails(data){
    for(const item of data.drinks){

    let cocktailName = document.createElement('li')
    cocktailName.innerHTML = item.strDrink
    cocktailList.append(cocktailName)
    
    cocktailName.addEventListener('click', function(){
       clickName.innerText = item.strDrink
       cocktailImage.src = item.strDrinkThumb
    //    Description.innerText = item.description
})
    }
}
    