import { NavLink } from "react-router";
import '../layouts/Footer.css'

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-cnt">
				<h2 className="footer-title">Teravia</h2>

				<p>
					Bringing the joy of cooking back to your kitchen with simple,
					delicious, and curated recipes.
				</p>
			</div>

			<div className="centerNavigation">
				<NavLink className="footer-nav" to="/termsOfServices">
					Terms of Service
				</NavLink>

	
				<NavLink className="footer-nav" to="/contact">
					Contact Us
				</NavLink>

				<NavLink className="footer-nav" to="/about">
					About
				</NavLink>
			</div>

			<div className="copyRight-cnt">
				<p>© 2026 Teravia. All rights reserved.</p>
			</div>
		</footer>
	);
};