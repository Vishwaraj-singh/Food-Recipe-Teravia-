import { useQuery } from "@tanstack/react-query"
import { filterByCategory } from "../api/Api"

export const UseFilterCategory = (categoryName) => {
	return useQuery({
		queryKey: ["FilterCategory", categoryName],
		queryFn: () => filterByCategory(categoryName),
		staleTime: 1000 * 60 * 10,
		gcTime: 1000 * 60 * 30,
		enabled: !!categoryName,
	})
}
