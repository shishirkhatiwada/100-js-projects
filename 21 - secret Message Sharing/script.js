document.getElementById('getRecipe').addEventListener('click', getRandomRecipe);

function getRandomRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const recipe = data.meals[0];
            document.getElementById('recipe-title').textContent = recipe.strMeal;
            document.getElementById('recipe-ingredients').innerHTML = formatIngredients(recipe);
            document.getElementById('recipe-instructions').textContent = recipe.strInstructions;
            document.getElementById('recipe-container').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
        });
}

function formatIngredients(recipe) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (recipe['strIngredient' + i]) {
            ingredients.push(`${recipe['strIngredient' + i]} - ${recipe['strMeasure' + i]}`);
        } else {
            break;
        }
    }
    return ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
}
