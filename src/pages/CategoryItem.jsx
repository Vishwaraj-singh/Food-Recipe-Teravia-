import { NavLink, useParams } from "react-router"
import { UseFilterCategory } from "../hooks/UseFilterCategory"
import { RecipeCard } from "../components/RecipeCard"
import { NoRecipeFound } from "../components/NotResultFound"

export const CategoryItem = () => {

	const { categoryName } = useParams()

	const { data, isLoading, isError } = UseFilterCategory(categoryName)

	if (isLoading) {
		return <div className="loader-cnt">
			<div className="loader"></div>
		</div>;
	}
	if (isError) {
		return <NavLink to="/ErrorPage">
			Something went wrong
		</NavLink>
	}
	if (data?.length === 0) {
		return <NoRecipeFound recipeName={categoryName} />
	}

	return (
		<>
			<section className="categories">
				<div className="titleCnt">
					<div className="intro-line">
						<div>
							<h1 className="title">{categoryName} Recipes</h1>
							<p className="subTitle">All recipes in the {categoryName} category</p>
						</div>
					</div>
				</div>

				<div className="categoriesSection">
					{data?.map((recipe) => (
						<RecipeCard
							key={recipe.idMeal}
							recipe={recipe}
						/>
					))}
				</div>
			</section>
		</>
	)
}
