import { useParams } from "react-router";
import { UseRecipeDetails } from "../hooks/UseRecipeDetails";
import "../pages/RecipeDetails.css"

export const RecipeDetails = () => {
	const { id } = useParams();

	const { data, isLoading } = UseRecipeDetails(id)

	if (isLoading) {
		return <div className="loader-cnt">
			<div className="loader"></div>
		</div>;
	}
	console.log(data);

	if (!data) {
		<h1>Recipe not found !</h1>
	}

	return (
		<>

			<section className="recipe-container">
				<div className="recipe-details">

					<div className="recipe-image">
						<img src={data.strMealThumb} alt={data.strMeal} />
					</div>

					<div className="recipe-content">

						<h1>{data.strMeal}</h1>

						<div className="recipe-info">
							<span>{data.strCategory}</span>

							{data.strArea && (
								<span>{data.strArea}</span>
							)}

						</div>

						<div className="ingredients-section">
							<h2>Ingredients</h2>

							<ul className="ingredients-list">
								{[...Array(20)].map((_, index) => {
									const ingredient = data[`strIngredient${index + 1}`];
									const measure = data[`strMeasure${index + 1}`];

									if (!ingredient || ingredient.trim() === "") {
										return null;
									}

									return <li key={index}>
										<input type="checkbox" />
										<span> {measure} {ingredient}</span>
									</li>
								})}
							</ul>
						</div>

						<div className="instruction-section">
							<h2>Instructions</h2>

							<p>{data.strInstructions}</p>
						</div>

						<div className="recipe-buttons">
							{data.strYoutube && (
								<a
									href={data.strYoutube}
									target="_blank"
									rel="noopener noreferrer"
								>
									Watch on YouTube
								</a>
							)}

							{data.strSource && (
								<a
									href={data.strSource}
									target="_blank"
									rel="noopener noreferrer"
								>
									View Recipe
								</a>
							)}
						</div>

					</div>

				</div>
			</section>
		</>
	)
}