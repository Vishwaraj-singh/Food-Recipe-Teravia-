import { NavLink } from "react-router";
import "../pages/Terms.css";
import Terms from "../api/Terms.json";

export const TermsOfServices = () => {

	return (
		<section className="termsSection">

			{/* ================= HERO ================= */}

			<div className="termsHero">

				<p className="termsLabel">
					TERAVIA
				</p>

				<h1>
					Terms & Services
				</h1>

				<p className="termsSubtitle">
					Simple guidelines for a better experience.
				</p>

				<div className="termsDivider">
					<span></span>
					<i>◆</i>
					<span></span>
				</div>

			</div>



			<main className="termsContent">


				<div className="termsIntro">

					<span className="sectionLabel">
						TERMS OF SERVICE
					</span>

					<h2>
						Welcome to Teravia
					</h2>

					<p>
						We created Teravia to make discovering recipes,
						exploring cuisines, and finding inspiration in
						the kitchen simple and enjoyable.
					</p>

					<p>
						By accessing or using our website, you agree
						to the terms and conditions described below.
					</p>

				</div>



				<div className="termsList">

					{Terms.map((currElem) => (

						<article
							className="termsItem"
							key={currElem.id}
						>

							<div className="termsNumber">
								{String(currElem.id).padStart(2, "0")}
							</div>

							<div className="termsText">

								<h3>
									{currElem.heading}
								</h3>

								<p>
									{currElem.discription}
								</p>

							</div>

						</article>

					))}

				</div>



				<div className="termsContact">

					<p>
						Have questions about our terms?
					</p>

					<NavLink
						to="/contact"
						className="termsContactBtn"
					>
						Get in Touch →
					</NavLink>

				</div>



				<div className="termsFooter">

					<div className="footerLine"></div>

					<p>
						Last updated · September 2026
					</p>

					<p>
						© 2026 Teravia. All rights reserved.
					</p>

				</div>

			</main>

		</section>
	);
};