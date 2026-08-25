import { useQuery } from "@tanstack/react-query"
import { getRecipeByName } from "../api/Api"

export const UseSearchRecipe = (recipeName) => {
	return useQuery({
		queryKey: ["search", recipeName],
		queryFn: () => getRecipeByName(recipeName),
		staleTime: 1000 * 60 * 10,
		gcTime: 1000 * 60 * 30,
		enabled: !!recipeName

	})
}