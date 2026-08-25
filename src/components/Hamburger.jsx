import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const Hamburger = ({ showMenu, setShowMenu }) => {

	const [showHamburger, setShowHamburger] = useState(false)
	const handelBtnToggel = () => {
		setShowMenu(!showMenu)
		setShowHamburger(!showHamburger)
	}

	return (
		<>
			<div className="hamMenu">
				<button onClick={handelBtnToggel}>
					{showHamburger ? <IoMdClose /> : <RxHamburgerMenu />}
				</button>
			</div>
		</>
	)
}