import Link from "next/link";



export default function RecipeDetailsItem({getRecipeDetails}){

    return <div>
        
                <Link href={'/recipe-list'}>
                <h2 className="font-bold text-4xl text-gray-400 mb-3 "> Goto Recipe List</h2>
                </Link>
            
            
        
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full lg:sticky top-0 sm:flex gap-2">
                <img src={getRecipeDetails.image} 
                alt={getRecipeDetails.name}

                className="w-4/5 rounded object-cover" />

                </div>
                <div >
                    <h2 className="text-3xl font-extrabold text-gray-950">{getRecipeDetails.name}</h2>
                    <div className="flex mt-3 flex-wrap gap-4">
                        <p className="text-2xl">{getRecipeDetails?.mealType[0]}</p>
                        </div>
                        <div className="mt-5">
                        <p className="text-xl">{getRecipeDetails?.cuisine}</p>
                        </div>
                        <div className="mt-5">
                        <h3 className="text-lg font-bold text-gray-700"> Ingredients </h3>
                        <ul className="space-y-3 list-disc mt-4 pl-4 text-start text-gray-700">
                            {
                                getRecipeDetails?.ingredients.map(item=> <li>{item}</li>)
                            }
                        </ul>
                        </div>
                    
                    
                </div>
               
                

            </div>

        </div>
    </div>
}