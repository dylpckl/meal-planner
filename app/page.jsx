import Image from "next/image";
import styles from "./page.module.css";

// async function getRandomRecipes() {
//   const res = await fetch(
//     `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}&number=1`
//   );
//   return res.json();
//   // console.log(res.json);
// }

// async function getRecipesComplex() {
//   // const res = await fetch(
//   //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=pasta&maxFat=25&number=2`
//   // );
// }

// async function getRecipeInformation() {
//   const res = await fetch(
//     "https://api.spoonacular.com/recipes/664087/information?apiKey=92d90398aaec4f4e9173f7e79ced6df7"
//   );
//   return res.json();
// }

import { recipeSearch } from "./edamam";

const imageBuilder = (recipeId, imageType = "jpg", size = "480x360") => {
  // https://spoonacular.com/food-api/docs#Show-Images
  const baseUrl = "https://spoonacular.com/recipeImages/";
  const imageUrl = baseUrl + recipeId + "-" + size + "." + imageType;
  return imageUrl;
};

const RecipeCard = ({ recipe }) => {
  // const imageUrl = recipe.image;
  // console.log(recipe.image);
  // if (imageUrl === undefined) {
  //   const imageUrl = imageBuilder(recipe.id);

  //   console.log(
  //     "No recipe image, called imageBuilder with resulting string ",
  //     imageUrl
  //   );
  // }
  // console.log(imageUrl);
  return (
    <div className="bg-pink-300 rounded text-black max-w-48 flex flex-col w-full whitespace-pre">
      {/* <p className="break-all">{recipe.uri}</p> */}
      <h1 className="text-3xl">{recipe.label}</h1>
      <Image
        src={recipe.image}
        alt="recipe image"
        width={400}
        height={400}
      />
      {/* <p>{recipe.id}</p>
      <p>{recipe.id}</p> */}
    </div>
  );
};

// async function getStaticRecipes() {
//   const res = await fetch("./recipes.json");
//   const data = await res.json();
//   return data;
// }

import data from "./recipes.json";

export default async function Home() {
  // const recipes = await getRandomRecipes();
  // const recipes = await getRecipeInformation();
  // const recipes = await recipeSearch();
  // const recipes = await getStaticRecipes();
  const recipes = data;
  // console.log(recipes);

  return (
    <div className="p-8 w-screen">
      <div className="bg-sky-300 w-full h-full">
        <ul className="flex gap-4 max-w-screen overflow-auto flex-wrap">
          {recipes.hits.map((recipe) => {
            // console.log(recipe);
            return (
              <li
                key={recipe.recipe.uri}
                className="text-black w-1/3"
              >
                <RecipeCard recipe={recipe.recipe} />
              </li>
            );
          })}

          {/* <RecipeCard recipe={recipes} /> */}
        </ul>
      </div>
    </div>
  );
}
