import {
    Card,
    CardContent,

} from "@/components/ui/card"

import Link from "next/link"




export default function RecipeList({ recipeList }) {


    return <div>
       
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <div className="gap-3 flex items-center">
                <Link href={'/'}>
                <h2 className="font-bold text-4xl text-gray-400 mb-12 ">Home</h2>
                </Link>
            
            <h2 className="font-bold text-4xl text-gray-400 mb-12 mr-auto">Recipes</h2>
            
            </div>
            
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
                {
                    recipeList && recipeList.length > 0 ?
                        recipeList.map(recipe => <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
                            <Card>
                                <CardContent className='cursor-pointer bg-white rounded-md overflow-hidden hover:scale-[1.1]  transition-all' >
                                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                        <img src={recipe.image} alt={recipe.name} />
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-lg font-bold text-gray-800">{recipe.name}</h2>
                                        <div className=" mt-4 flex items-center flex-wrap gap-2">
                                            <p className=" text-lg text-gray-600">Rating:{recipe.rating}</p>
                                            <div className="ml-auto">
                                                <p className="font-bold text-lg text-gray-800">{recipe.cuisine} </p>

                                            </div>

                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                        </Link>)
                        : null
                }

            </div>
        </div>
    </div>
}