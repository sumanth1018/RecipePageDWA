let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientsList = recipeObj.ingredients;
let recipeTitle = document.getElementById("RecipePageHeading");
let recipeimage = document.getElementById("recipePageImage");
let recipeList = document.getElementById("recipePageList");
let imageContainer = document.getElementById("imageContainer");

recipeTitle.textContent = recipeObj.title;

recipeimage.setAttribute("src", recipeObj.imgSrc);
recipeimage.classList.add("w-100");
imageContainer.appendChild(recipeimage);

for (let ingredients of ingredientsList) {
    let ingredientE1 = document.createElement("li");
    ingredientE1.textContent = ingredients;
    ingredientE1.classList.add("list-items");
    recipeList.appendChild(ingredientE1);
}