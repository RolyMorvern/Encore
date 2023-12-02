import "./TodaysIssue.css";
import Navbar from "../Navbar/Navbar";
import Content from "./ContentFr/ContentFr";

function TodaysIssue () {
	return (
		<>
			<Navbar />
			<div className="container">
				<Content />
			</div>
		</>
	)
}

export default TodaysIssue;