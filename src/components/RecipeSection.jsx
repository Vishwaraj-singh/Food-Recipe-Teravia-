import { NavLink } from "react-router";
import { UseRecipe } from "../hooks/UseRecipe";
import { RecipeCard } from "./RecipeCard";
import '../components/RecipeSection.css'

export const RecipeSection = ({ title, category }) => {
	const { data, isLoading, isError } = UseRecipe(category);

	if (isLoading) {
		return <div className="loader-cnt">
			<div className="loader"></div>
		</div>;

	}

	if (isError) {
		return (
			<NavLink to="/ErrorPage">
				Something went wrong
			</NavLink>
		);
	}

	return (
		<section className="recipeSection" >
			<div className="recipe-grid">


				{data?.slice(0, 1).map((recipe) => (
					<RecipeCard
						key={recipe.idMeal}
						recipe={recipe}
					/>
				))}

				<div className="section-header">
					<h2>{title}</h2>
				</div>
			</div>
		</section>
	);
};