import { NavLink } from "react-router";
import { CategoryCard } from "../components/CategoryCard";
import { UseCategory } from "../hooks/UseCategory";
import "../pages/Categories.css"
export const Categories = () => {
	const { data, isLoading, isError } = UseCategory();

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
	return (
		<>
			<section className="categories">
				<div className="titleCnt">
					<div className="intro-line">
						<div>
							<h1 className="title">All Categories</h1>
							<p className="subTitle">
								Browse recipes by cuisine type or ingredient
							</p>
						</div>
					</div>
				</div>

				<div className="categoriesSection">
					{data?.map((category) => (
						<CategoryCard
							key={category.idCategory}
							category={category}
						/>
					))}
				</div>
			</section>
		</>
	)
}