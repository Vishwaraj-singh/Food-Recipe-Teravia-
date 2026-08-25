import { NavLink } from "react-router";
import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => {
	return (
		<article
			className="recipe-card"
			style={{
				backgroundImage: `linear-gradient(
					rgba(0, 0, 0, 0.2),
					rgba(0, 0, 0, 0.2)
				), url(${recipe.strMealThumb})`,
			}}
		>
			<div className="recipe-card-overlay">

				<div className="recipe-card-overlay-content">

					<h2>{recipe.strMeal}</h2>

					<p>
						Discover this delicious recipe and
						explore its ingredients and preparation.
					</p>

					<NavLink
						to={`/recipe/${recipe.idMeal}`}
						className="recipe-card-btn"
					>
						View Recipe
					</NavLink>

				</div>

			</div>
		</article>
	);
};