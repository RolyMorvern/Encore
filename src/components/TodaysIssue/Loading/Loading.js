import "./Loading.css";
import loading from "../../../Images/loading.gif";

function Loading () {
	return (
		<div id="loading-container">
		  <h1 className="gradient">Attendre</h1>
		  <img id="loading-gif" src={loading} />
		</div>
	)
}

export default Loading;