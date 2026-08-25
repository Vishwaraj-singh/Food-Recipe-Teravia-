import "../components/Accordian.css"
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export const Faq = ({ currData, isActive, onToggel }) => {
	const { question, answer } = currData
	return (
		<>
			<li>
				<div className="faq-grid">
					<p className="question">{question}</p>
					<button onClick={onToggel}>{isActive ? <FaAngleUp /> : <FaAngleDown />}</button>
				</div>
				<p className="answer">{isActive && answer}</p>
			</li>
		</>
	)
}