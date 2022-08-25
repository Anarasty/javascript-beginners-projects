const getMealBtn = document.querySelector("#get_meal");
const mealContainer = document.querySelector("#meal");

getMealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});

function createMeal(meal) {
  const ingredients = [];
  for (let i = 1; i < 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  console.log(ingredients);

  mealContainer.innerHTML = `
        <div class="row meal-container">
            <div class="column img-main-info">
                <h4>${meal.strMeal}</h4>
                <img class="mealIMG" src="${
                  meal.strMealThumb
                }" alt="meal img" />
                <p><strong>Category: </strong>${meal.strCategory}</p>
                <p><strong>Country: </strong>${meal.strArea}</p>
                <strong>Tags: </strong>${meal.strTags}</p>
                <div class="video-meal">
                    <h3>Video recipe</h3>
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"></iframe>
                </div>
            </div>
            <div class="column meal-description">
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        ${ingredients
                          .map(
                            (ingredient) => `
                            <li>${ingredient}</li>
                        `
                          )
                          .join("")}
                    </ul>
                </div>
                <p>Instructions:</p>
                <p>${meal.strInstructions}</p>
            </div>
        </>
    `;
}
