import RecipeDetailsItem from "@/components/recipe-details"



async function  fetchRecipeDetails(currentID){
    try{
        const response = await fetch(`https://dummyjson.com/recipes/${currentID}`)
        const data = await response.json()
        return data
        console.log(data)

    }catch(err){
        throw new Error(err)
    }

}

export default async function RecipeDetails({params}){
    const getRecipeDetails = await fetchRecipeDetails(params?.details)
   

    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
}