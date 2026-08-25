import { CiSearch } from 'react-icons/ci'
import heroImg from '../asset/heroImg.png'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import "../components/HeroComponent.css"

export const HeroComponent = () => {
	const [searchRecipe, setSearchRecipe] = useState("");
	const navigate = useNavigate()

	const handelSearch = () => {
		if (!searchRecipe.trim()) return;
		navigate(`/search/${searchRecipe}`);
	}
	return (
		<>
			<section className='hero'>
				<div className="heroCnt">
					<img src={heroImg} alt="Hero-Image" className="heroImg" />
				</div>

				<div className="heroOverlay">
					<div className="heroContent">

						<h1>What are you cooking today?</h1>

						<p className='heroText' >
							Explore thousands of recipes from around the world.
						</p>

						<div className="heroSearch">
							<CiSearch id='searchIcon' />
							<input
								type="text"
								placeholder="Search recipes..."
								value={searchRecipe}
								onChange={(e) => setSearchRecipe(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										handelSearch();
									}
								}} />

							< button onClick={handelSearch}> Search</button>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}