import "./WhyChoose.css";
import { motion } from "framer-motion";
import basil from "../asset/png-basil.png";
import tomato from "../asset/tomato.png";
import parsley from "../asset/parsley.png";
import masala from "../asset/masala.png";
import garlic from "../asset/garlic.png";

export const WhyChoose = () => {

	const fadeLeft = {
		hidden: {
			opacity: 0,
			x: -50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const fadeRight = {
		hidden: {
			opacity: 0,
			x:90,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};
	return (
		<section className="why-choose">

			<div className="why-decorations">


				<motion.div
					className="about-left"
					variants={fadeLeft}
					initial="hidden"
					whileInView="visible"
					viewport={{
						once: true,
						amount: 0.3,
					}}
				>
					<img
						src={basil}
						alt=""
						className="why-basil"
					/>

					<img
						src={parsley}
						alt=""
						className="why-parsley"
					/>
				</motion.div>

				<motion.div
					variants={fadeRight}
					initial="hidden"
					whileInView="visible"
					viewport={{
						once: true,
						amount: 0.3,
					}}
				>
					<img
						src={tomato}
						alt=""
						className="why-tomato"
					/>


					<img
						src={masala}
						alt=""
						className="why-masala"
					/>
				</motion.div>

				<img
					src={garlic}
					alt=""
					className="why-garlic"
				/>

			</div>

			<div className="why-content">

				<div className="why-label">
					<span></span>
					<small>WHY TERAVIA?</small>
					<span></span>
				</div>

				<h2>
					Made for People<br />
					Who Love to Cook.
				</h2>

				<p className="why-description">
					Teravia brings recipes from around the world
					into one beautiful place. Discover new flavors,
					learn simple cooking techniques, and find
					something delicious for every mood.
				</p>


				<div className="why-features">

					<div className="why-feature">
						<span>01</span>
						<div>
							<h3>Curated Recipes</h3>
							<p>
								Discover delicious recipes selected
								from cuisines around the world.
							</p>
						</div>
					</div>


					<div className="why-feature">
						<span>02</span>
						<div>
							<h3>Simple to Follow</h3>
							<p>
								Easy recipes and clear instructions
								make cooking enjoyable.
							</p>
						</div>
					</div>


					<div className="why-feature">
						<span>03</span>
						<div>
							<h3>Discover New Flavors</h3>
							<p>
								Explore different cuisines and
								find your next favorite dish.
							</p>
						</div>
					</div>

				</div>

			</div>

		</section>
	);
};