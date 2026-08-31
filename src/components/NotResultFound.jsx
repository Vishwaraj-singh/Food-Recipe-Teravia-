import { NavLink, useNavigate } from "react-router-dom";
import '../components/NotResultFound.css';

export const NoRecipeFound = ({ recipeName }) => {
	const navigate = useNavigate();

	return (
		<section className="not-found">
			<div className="not-found-content">
				<h1>Recipe Not Found</h1>

				<p>
					Sorry! We couldn't find any recipe matching
					<strong> "{recipeName}"</strong>.
				</p>

				<div className="btn-group">
					<button onClick={() => navigate(-1)}>
						Search Again
					</button>

					<NavLink to="/">
						<button>Go Home</button>
					</NavLink>
				</div>
			</div>
		</section>
	);
};