import { useQuery } from "@tanstack/react-query"
import { getRecipeCategories } from "../api/Api"


export const UseRecipe = (category) => {
	return useQuery({
		queryKey: ["recipe", category],
		queryFn: () => getRecipeCategories(category),
		staleTime: 1000 * 60 * 10,
		gcTime: 1000 * 60 * 30,
	})

}