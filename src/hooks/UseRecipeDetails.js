import { useQuery } from "@tanstack/react-query"
import { getRecipeDetails } from "../api/Api"



export const UseRecipeDetails = (id) => {
	return useQuery({
		queryKey: ["recipeDetails", id],
		queryFn: () => getRecipeDetails(id),
		staleTime: 1000 * 60 * 10,
		gcTime: 1000 * 60 * 30,
		enabled: !!id,
	});
};