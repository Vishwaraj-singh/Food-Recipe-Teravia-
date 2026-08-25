import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../api/Api"

export const UseCategory = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: getCategory,
		staleTime: 1000 * 60 * 10,
	})
}