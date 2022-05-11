document.addEventListener('DOMContentLoaded', displayWebsitePresets)

function displayWebsitePresets(){
    clickName.innerText = "Vodka Cocktails"
    cocktailImage.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Un_bar_aux_Folies-Berg%C3%A8re_d%27E._Manet_%28Fondation_Vuitton%2C_Paris%29_%2833539037428%29.jpg/1920px-Un_bar_aux_Folies-Berg%C3%A8re_d%27E._Manet_%28Fondation_Vuitton%2C_Paris%29_%2833539037428%29.jpg`
    clickDescription.innerText = "Description of the Website Function, tagline, or something"
}

function getCocktails (){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
.then(response => response.json())
.then(data => renderCocktails(data.drinks)
)}

getCocktails()

let cocktailList = document.getElementById("list")
let clickName = document.getElementById("header-show-panel")
let cocktailImage = document.getElementById("img-cocktail")
let clickDescription = document.getElementById("description")
let likeButton = document.getElementById("like-button")
let formThing = document.getElementById("cocktail-form")
let buttonIcon = document.getElementById("button-icon")
let likeAmt = document.getElementById("like-amt")

function renderCocktails(data){
    // for(const item of data.drinks){
    // let cocktailName = document.createElement('li')
    // cocktailName.innerHTML = item.strDrink
    // cocktailList.append(cocktailName)
    for(let i = 0; i < 15; i++){
        console.log(data[i].idDrink)
        let cocktailName = document.createElement('li')
        cocktailName.innerHTML = data[i].strDrink
        cocktailList.append(cocktailName)     
    
    cocktailName.addEventListener('click', function(){
       clickName.innerText = data[i].strDrink
       cocktailImage.src = data[i].strDrinkThumb
       clickDescription.innerText = " "
       let count = 0;

       likeAmt.textContent = count;
       likeButton.addEventListener('click', function(){
            count = count + 1;
            likeAmt.innerHTML = count;
            likeAmt.textContent = count;
})
    
})
    }
}
// let count = 0;
// likeAmt.textContent = count;
// likeButton.addEventListener('click', function(){
//     count = count + 1;
//     likeAmt.innerHTML = count;
//     likeAmt.textContent = count;

// })
    