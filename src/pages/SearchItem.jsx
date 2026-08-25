import { NavLink, useParams } from "react-router"
import { UseSearchRecipe } from "../hooks/UseSearchRecipe"
import { NoRecipeFound } from "../components/NotResultFound"
import '../pages/SearchItem.css'
import "../components/RecipeCard.css";


export const SearchItem = () => {

	const { recipeName } = useParams()

	const { data, isLoading, isError } = UseSearchRecipe(recipeName)
	if (isLoading) {
		return <div className="loader-cnt">
			<div className="loader"></div>
		</div>;
	}
	if (isError) {
		return <NavLink to={"/ErrorPage"}></NavLink>
	}
	if (data.length === 0) {
		return <NoRecipeFound recipeName={recipeName} />
	}

	return (
		<>
			<section className="searchSection">

				<h1 className="search-Text">
					Results for "{recipeName}"
				</h1>

				<ul className="search-results">
					{data?.map((currElem) => {
						const { idMeal, strMeal, strMealThumb, strCategory } = currElem;

						return (
							<li className="search-card" key={idMeal}>
								<article
									className="recipe-card"
									style={{
										backgroundImage: `linear-gradient(
										rgba(0, 0, 0, 0.2),
										rgba(0, 0, 0, 0.2)
								), url(${strMealThumb})`,
									}}>

									<div className="recipe-card-overlay">

										<div className="recipe-card-overlay-content">

											<h2>{strMeal}</h2>

											<p>
												{strCategory}
											</p>

											<NavLink
												to={`/recipe/${idMeal}`}
												className="recipe-card-btn"
											>
												View Recipe
											</NavLink>

										</div>

									</div>
								</article>
								{/* <div className="search-card-content">
								<h2>{strMeal}</h2>

								<p>{strCategory}</p>

								<NavLink to={`/recipe/${idMeal}`}>
									<button className="category-btn ">View Recipe</button>
								</NavLink>
							</div> */}
							</li>
						);
					})}
				</ul>
			</section>
		</>
	)
}