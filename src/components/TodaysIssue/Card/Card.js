import "./Card.css";

function Card (props) {
	return (
		<a href={props.link} target="_blank" className="card">
			<img src={props.img} className="card-img" />
			<br />
			<p>{props.text}</p>
		</a>
	)
}

export default Card;