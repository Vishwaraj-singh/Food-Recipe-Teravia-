import { Navbar } from "../components/Nabar";
import { LogoCnt } from "../components/LogoCnt";
import { Hamburger } from "../components/Hamburger";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import '../layouts/Header.css';



export const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};

	}, []);
	return (
		<>
			<header className={isScrolled ? "header scrolled" : "header"}>
				<div className="right">
					<NavLink to={"/"}>
						<LogoCnt />
					</NavLink>
				</div>

				<div >
					<Navbar showMenu={showMenu} setShowMenu= {setShowMenu} />
				</div>

		
				<Hamburger
					setShowMenu={setShowMenu}
					showMenu={showMenu} />
			</header>
		</>
	)
}