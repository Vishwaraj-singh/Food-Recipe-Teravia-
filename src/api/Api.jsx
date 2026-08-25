import axios from "axios";

const Api = axios.create({
	baseURL: "https://www.themealdb.com/api/json/v1/1/"
})

export const getRecipeCategories = async (category) => {
	try {
		const { data } = await Api.get(`filter.php?c=${category}`);
		return data.meals || [];


	} catch (error) {
		console.error(error.message);
		return [];
	}
};

export const getCategory = async () => {
	try {
		const { data } = await Api.get("categories.php")
		return data.categories || [];
	} catch (error) {
		console.log(error.message);
		return [];

	}
}

export const getRecipeDetails = async (id) => {
	try {
		console.log(id);

		const { data } = await Api.get(`lookup.php?i=${id}`)
		return data.meals?.[0] || null;
	} catch (error) {
		console.log(error.message);
		return [];

	}
}

export const getRecipeByName = async (recipeName) => {
	try {
		const { data } = await Api.get(`search.php?s=${recipeName}`)
		return data.meals || [];
	} catch (error) {
		console.log(error.message);
		return [];

	}
}
export const filterByCategory = async (categoryName) => {
	try {
		const { data } = await Api.get(`filter.php?c=${categoryName}`)
		return data.meals || [];
	} catch (error) {
		console.log(error.message);
		return [];

	}
}

 