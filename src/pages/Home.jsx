import { Accordian } from "../components/Accordian";
import { HeroComponent } from "../components/HeroComponent";
import { RecipeIntro } from "../components/RecipeIntro";
import { RecipeSection } from "../components/RecipeSection";
import { WhyChoose } from "../components/WhyChoose";
import { HomeCategory } from "../data/homeCategory";
import "../pages/Home.css"

export const Home = () => {
	return (
		<>
			<HeroComponent />

			<RecipeIntro />
			<section className="curved-section">
				<div className="curvedContent" >
					<main className="home-recipes">

						{HomeCategory.slice(0, 4).map((item) => (
							<RecipeSection
								key={item.category}
								title={item.title}
								category={item.category}
							/>
						))}
					</main>
				</div>
			</section>

			<WhyChoose />
			<Accordian />

		</>
	);
};