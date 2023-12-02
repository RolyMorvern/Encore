import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";

function Home () {
	return (
		<>
			<Navbar />
			<div className="container" id="hero-bg">
				<Hero />
			</div>
			<div className="container-no-top">
				<HowItWorks />
			</div>
		</>
	)
}

export default Home;