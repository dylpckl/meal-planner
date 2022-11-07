
// EDAMAM_RECIPE_SEARCH_APP_ID=08486f65
// EDAMAM_RECIPE_SEARCH_APP_KEY=2865dc1b7735c27b677c50845e30d95b
// EDAMAM_FOOD_SEARCH_APP_ID=46f10da2
// EDAMAM_FOOD_SEARCH_APP_KEY=d20a5216e2325dd122e2dc856dc6ad1b	

import Query from './Query';
import RecipeList from './RecipeList';
import data from './recipes.json'

// async function recipeSearch() {
//     const baseUrl = 'https://api.edamam.com/api/recipes/v2'
//     const res = await fetch(`${baseUrl}?type=public&q=chicken&app_id=${process.env.EDAMAM_RECIPE_SEARCH_APP_ID}&app_key=${process.env.EDAMAM_RECIPE_SEARCH_APP_KEY}&random=false`)

//     // console.log(`${baseUrl}?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`)
//     return res.json();

//     // https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=08486f65&app_key=2865dc1b7735c27b677c50845e30d95b&random=true
// }

export default function Page() {
    // const recipes = recipeSearch();
    // console.log(recipes)
    return (



        <div className="w-screen h-screen flex flex-col gap-12 p-12">

            <div className="w-full bg-gray-500 flex flex-col">

                {/* {data && data.hits.map(r => (
                    <div>{r.recipe.label}</div>
                ))} */}

                <RecipeList recipes={data.hits} />

            </div>

        </div>

    );
}