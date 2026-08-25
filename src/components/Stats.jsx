import stats from "../api/stats.json"
import "../pages/About.css"
export const Stats = () => {
	return (
		<>
			<section className="stats-section">
				<div className="stats-container">
					{stats.map((item, index) => (
						<div className="stat-card" key={index}>
							<h1>{item.number}</h1>
							<p>{item.title}</p>
						</div>
					))}
				</div>
			</section>
		</>
	)
}