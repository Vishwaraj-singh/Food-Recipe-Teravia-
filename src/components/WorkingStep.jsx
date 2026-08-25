import workingStep from "../api/WorkingSteps.json";
import { LuCookingPot } from "react-icons/lu";
import { BsForkKnife } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

export const Working = () => {
	const iconMap = {
		FaSearch: <FaSearch />,
		BsForkKnife: <BsForkKnife />,
		LuCookingPot: <LuCookingPot />,
	};

	return (
		<section className="working-section">
			<h1>Your Journey to Dinner</h1>

			<div className="working-container">

				<div className="line"></div>

				{workingStep.map((currData, index) => {
					const { icon, title, discription } = currData;

					return (
						<div className="step-card" key={index}>
							<div className={`icon-circle ${icon}`}>
								{iconMap[icon]}
							</div>

							<h2>{title}</h2>

							<p>{discription}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};