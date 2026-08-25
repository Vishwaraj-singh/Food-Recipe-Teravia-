import { useEffect, useState } from "react"
import FAQ from '../api/FAQ.json'
import { Faq } from "./Faq"
import "../components/Accordian.css"

export const Accordian = () => {

	const [data, setdata] = useState([])
	const [isActive, setIsActive] = useState(false)


	useEffect(() => {
		setdata(FAQ)
	}, [])

	const handelBtn = (id) => {
		setIsActive((prevId) => (prevId === id) ? "false" : id)
	}
	return (
		<>
			<section className="AccordianSection">
				<div className="container">
					<div className="faqContainer">
						<h2>FAQ</h2>
						<ul>
							{
								data?.map((currElem) => {
									return <Faq
										key={currElem.id}
										currData={currElem}
										isActive={isActive === currElem.id}
										onToggel={() => handelBtn(currElem.id)}
									/>
								})
							}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}