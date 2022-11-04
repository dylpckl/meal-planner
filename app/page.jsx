import Image from "next/image";
import styles from "./page.module.css";

async function getRandomRecipes() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=92d90398aaec4f4e9173f7e79ced6df7&number=7`
  );
  // const res = await fetch(
  //   `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`
  // );
  return res.json();
  // console.log(res.json);
}

export default async function Home() {
  const recipes = await getRandomRecipes();
  // console.log(recipes);
  return (
    <div className="p-8 h-screen w-screen">
      <div className="bg-sky-300 w-full h-full">
        <ul>
          {recipes.recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="text-black"
            >
              <p>{recipe.id}</p>
              <p>{recipe.title}</p>
            </li>
          ))}
        </ul>
        {/* <p>{recipes.recipes}</p> */}
      </div>
    </div>
  );
}
