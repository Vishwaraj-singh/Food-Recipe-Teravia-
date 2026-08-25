import { NavLink } from "react-router"

export const Navbar = ({ showMenu }) => {

	const getNavStyle = ({ isActive }) => {
		return { color: isActive ? "#D88922" : "#ffff" }
	}
	return (
		<>
			<nav className={showMenu ? "menu-Mob" : "menu-web"}>
				<NavLink className="navItem" style={getNavStyle} to={"/"}>Home</NavLink>
				<NavLink className="navItem" style={getNavStyle} to={"/categories"}>Categories</NavLink>
				<NavLink className="navItem" style={getNavStyle} to={"/About"}>About</NavLink>
				<NavLink className="navItem" style={getNavStyle} to={"/contact"}>Contact</NavLink>
			</nav>
		</>
	)
}