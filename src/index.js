document.addEventListener('DOMContentLoaded', displayWebsitePresets)

function displayWebsitePresets(){
    clickName.innerText = "BYOB"
    cocktailImage.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Un_bar_aux_Folies-Berg%C3%A8re_d%27E._Manet_%28Fondation_Vuitton%2C_Paris%29_%2833539037428%29.jpg/1920px-Un_bar_aux_Folies-Berg%C3%A8re_d%27E._Manet_%28Fondation_Vuitton%2C_Paris%29_%2833539037428%29.jpg`
    clickDescription.innerText = "For the community of people who love both vodka and the letter B"
}

function getCocktails (){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b')
.then(response => response.json())
.then((data) => {renderCocktails(data.drinks)
console.log(data.drinks)
}
)}

getCocktails()

let cocktailList = document.getElementById("list")
let clickName = document.getElementById("header-show-panel")
let cocktailImage = document.getElementById("img-cocktail")
let clickDescription = document.getElementById("description")
let likeButton = document.getElementById("like-button")
let buttonIcon = document.getElementById("button-icon")
let likeAmt = document.getElementById("like-amt")
let ingredientsList = document.getElementById('ingredient-list')

console.log(ingredientsList)

function detailsFinder(arr, string){
    let drinkDetails = arr.find(item => item.idDrink === string)
    let ingli1 = document.createElement('li');
    ingli1.textContent =drinkDetails.strMeasure1+ " "+drinkDetails.strIngredient1
   console.log(drinkDetails.strInstructions);
    let ingli2 = document.createElement('li'); 
    ingli2.textContent = drinkDetails.strMeasure2+" "+drinkDetails.strIngredient2
    let ingli3 = document.createElement('li')
    if(drinkDetails.strIngredient4 !== null){
    ingli3.textContent = drinkDetails.strMeasure3+" "+drinkDetails.strIngredient3;}
    let  ingli4 = document.createElement('li')
   if(drinkDetails.strIngredient4 !== null){
    ingli4.textContent = drinkDetails.strMeasure4+" "+drinkDetails.strIngredient4;}
    let instructli = document.createElement('li');
    instructli.textContent= 'Instructions: ' +drinkDetails.strInstructions
    ingredientsList.append(ingli1, ingli2, ingli3, ingli4, instructli);
  }
function renderCocktails(data){
    // for(const item of data.drinks){
    // let cocktailName = document.createElement('li')
    // cocktailName.innerHTML = item.strDrink
    // cocktailList.append(cocktailName)
    for(let i = 0; i < 15; i++){
        let cocktailName = document.createElement('li')
        cocktailName.innerHTML = data[i].strDrink
        cocktailList.append(cocktailName)     
    
    cocktailName.addEventListener('mouseenter',(e)=> {
            e.target.style.color = "pink";
            setTimeout(()=>e.target.style.color = "", 500)
        })
    cocktailName.addEventListener('click', function(){
        ingredientsList.innerText = ''
        detailsFinder(data, data[i].idDrink);
        clickName.innerText = data[i].strDrink;
        cocktailImage.src = data[i].strDrinkThumb;
        clickDescription.innerText = "Ingredients: ";
        commentArea.textContent = '';

    formThing.addEventListener('submit', (e) => {
            e.preventDefault();
            let newLi = document.createElement('li');
            newLi.textContent = newComment.value
            commentArea.append(newLi);
            formThing.reset();
        })
        let count = 0;
        likeAmt.textContent = count;
    likeButton.addEventListener('click', function(){
            count = count + 1;
            likeAmt.textContent = count;
})
    
})
    }
}



//grab elements from HTML by id, assign variables to 
//be used in event listener 'submit' form

let formThing = document.getElementById("cocktail-form");
let newComment = document.getElementById('form-comment');
let commentArea = document.getElementById('comments-section');

//attach event listener to cocktail-form, 'submit' event
// formThing.addEventListener('submit', (e) => {
//prevent page from reloading 
//     e.preventDefault();
//create new list item in order to append a new comment 
//     let newLi = document.createElement('li');
//assign new comment (newLi) and grab value  
//     newLi.textContent = newComment.value
//     commentArea.append(newLi);
// })