// deno-lint-ignore-file
import { NavLink } from "react-router"

export const CategoryCard = ({ category }) => {

	return (
		<>
			<div className="category-card">
				<img
					src={category.strCategoryThumb}
					alt={category.strCategory}
					className="category-image"
				/>

				<div className="category-content">
					<h3>{category.strCategory}</h3>
					<p className="discription">{category.strCategoryDescription.slice(0, 150)}</p>
				</div>

				<NavLink to={`/categories/${category.strCategory}`}>
					<button className="category-btn">
						View Items
					</button>
				</NavLink>
			</div >
		</>
	)
}
