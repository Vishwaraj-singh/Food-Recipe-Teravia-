import { NavLink } from "react-router";
import "../pages/ErrorPage.css";

export const ErrorPage = () => {
	return (
		<section className="errorSection">

			<div className="errorContent">

				<p className="errorSmallText">OOPS! SOMETHING WENT WRONG</p>

				<h1>404</h1>

				<h2>
					This recipe seems to have<br />
					disappeared from the kitchen.
				</h2>

				<p className="errorDescription">
					The page you're looking for may have been moved,
					removed, or simply doesn't exist.
				</p>

				<div className="errorButtons">

					<NavLink to="/" className="errorHomeBtn">
						Back to Home
					</NavLink>

					<NavLink to="/categories" className="errorCategoryBtn">
						Explore Recipes
					</NavLink>

				</div>

			</div>

		</section>
	);
};