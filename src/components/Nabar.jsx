// deno-lint-ignore-file
import { NavLink } from "react-router"
import '../components/Navbar.css';

export const Navbar = ({ showMenu, setShowMenu }) => {

	const getNavStyle = ({ isActive }) => {
		return { color: isActive ? "#D88922" : "#ffff" }
	}

	const handelcloseMenu = () => {
		setShowMenu(!showMenu)
	}
	return (
		<>
			<nav className={showMenu ? "menu-Mob" : "menu-web"}>
				<NavLink className="navItem" style={getNavStyle} to={"/"} onClick={handelcloseMenu}>Home</NavLink>
				<NavLink className="navItem" style={getNavStyle} to={"/categories"} onClick={handelcloseMenu}>Categories</NavLink>
				<NavLink className="navItem" style={getNavStyle} to={"/About"} onClick={handelcloseMenu}>About</NavLink>
				<NavLink className="navItem" style={getNavStyle} to={"/contact"} onClick={handelcloseMenu}>Contact</NavLink>
			</nav>
		</>
	)
}