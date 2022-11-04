
const APP_ID = process.env.EDAMAM_APP_ID
const APP_KEY = process.env.EDAMAM_APP_KEY
const baseUrl = 'https://api.edamam.com/api/recipes/v2'

export async function recipeSearch() {
    const res = await fetch(`${baseUrl}?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&random=false`)
    // console.log(`${baseUrl}?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`)
    return res.json();

    // https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=08486f65&app_key=2865dc1b7735c27b677c50845e30d95b&random=true

}