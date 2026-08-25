import { motion } from "framer-motion";
import AboutImage from '../asset/aboutIMG1.jpg'
import AboutContent from '../api/AboutContent.json'
import p2 from '../asset/p2.jpeg'
import { FaRegCompass } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiSparkling2Line } from "react-icons/ri";
import { Working } from "../components/WorkingStep";
import { Stats } from "../components/Stats";
import { Profile } from "../components/Profile";
import { NavLink } from "react-router";
import "../pages/About.css"


const fadeUp = {
	hidden: {
		opacity: 0,
		y: 60,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

const fadeLeft = {
	hidden: {
		opacity: 0,
		x: -80,
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
		x: 80,
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
export const About = () => {

	const iconMap = {
		FaRegCompass: <FaRegCompass />,
		RiSparkling2Line: <RiSparkling2Line />,
		FaHandHoldingHeart: <FaHandHoldingHeart />,
	}
	return (
		<>
			<section className="About-Section">

				<img src={p2} alt="p2" className="AboutHeroImg" />

				<div className="overlay">

					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}

					>
						<div className="aboutHeading">
							<h1 >About US</h1>
						</div>
					</motion.div>
				</div>


				<section className="wrapper">

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

						<span>OUR STORY</span>

						<h1>Why we built Teravia</h1>

						<p>
							Every time we wanted to cook something new, we ended up stuck
							wading through SEO stuffed blog posts before reaching the actual
							recipe.
						</p>

						<p>
							The idea behind Teravia was simple: what if finding a recipe felt
							like browsing Netflix? Fast, beautiful, and enjoyable.
						</p>

						<p>
							We built Teravia on top of TheMealDB API and designed an interface
							that keeps food not advertisements at the center.
						</p>

					</motion.div>

					<motion.div
						className="aboutImg"
						variants={fadeRight}
						initial="hidden"
						whileInView="visible"
						viewport={{
							once: true,
							amount: 0.3,
						}}
					>

						<img
							src={AboutImage}
							alt="About"
						/>

					</motion.div>

				</section>


				<motion.div
					className="valueCnt"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}

				>
					<div className="valueCnt">
						<div className="intro-line">
							<h1>Our Core Values</h1>
						</div>
						<p>The principles that inspire every recipe, every experience, and every moment in the kitchen.</p>
					</div>
				</motion.div>


				<div className="about-grid">
					{AboutContent.map((currData, index) => {
						const { icon, title, discription } = currData;

						return (

							<motion.div
								className="about-card"
								key={index}
								variants={fadeUp}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								transition={{
									delay: index * 0.15,
								}}
							>
								<div className="icon-box">
									{iconMap[icon]}
								</div>

								<h2>{title}</h2>

								<p>{discription}</p>
							</motion.div>
						);
					})}
				</div>

				<section>
					<Working />
				</section>

				<section className="statsComponent">
					<Stats />
				</section>

				<section>
					<Profile />
				</section>

				<motion.section

					className="exploreCnt"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}>

					<h1>Ready to explore?</h1>
					<p>Your next culinary adventure is just a click away. Discover thousands of recipes tailored to your taste.</p>

					<NavLink to={"/"}>
						<button>Start Exploring Recipe</button>
					</NavLink>

				</motion.section>

			</section >
		</>
	)
}