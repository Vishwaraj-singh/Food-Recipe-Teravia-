import ProfileImage from "../asset/55.png"
import { FaCode } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import "../pages/About.css"
export const Profile = () => {

	return (
		<>
			<section className="profile-section">
				<div className="profile-card">

					<div className="profile-image">
						<img src={ProfileImage} alt="Profile" />
					</div>
					<div className="profile-content">

						<h1>Meet the Creator</h1>

						<h3>Lead Product Designer & Developer</h3>

						<p>
							Driven by a passion for both technology and culinary arts,
							Savora was created to solve the "what's for dinner" dilemma
							once and for all. My goal is to build digital experiences
							that are as nourishing as the meals they help create.
						</p>

						<div className="profile-buttons">



							<a
								className="github-btn"
								href="https://github.com/Vishwaraj-singh"
								rel="noopener noreferrer"
								target="_blank">
								<FaCode />GitHub
							</a>
							<a
								className="linkedin-btn"
								href="https://www.linkedin.com/in/vishwaraj-singh-harod"
								rel="noopener noreferrer"
								target="_blank">
								<MdOutlineShare />LinkedIn
							</a>

						</div>

					</div>

				</div>
			</section >
		</>
	)
}