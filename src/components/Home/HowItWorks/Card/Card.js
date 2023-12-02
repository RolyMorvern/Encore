import "./Card.css";

function Card (props) {
	return (
		<div className={`how-it-works-card ${props.classN}`}>
			<h4 className="h-card-header">{props.header}</h4>
			<p className="h-card-point">{props.link1}</p>
			<p className="h-card-point">{props.link2}</p>
			<p className="h-card-point">{props.link3}</p>
		</div>
	)
}

export default Card;