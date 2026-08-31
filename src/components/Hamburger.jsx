// deno-lint-ignore-file
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const Hamburger = ({ showMenu, setShowMenu }) => {


	const handelBtnToggel = () => {
		setShowMenu(!showMenu)
	}

	return (
		<>
			<div className="hamMenu">
				<button onClick={handelBtnToggel}>
					{showMenu ? <IoMdClose /> : <RxHamburgerMenu />}
				</button>
			</div>
		</>
	)
}