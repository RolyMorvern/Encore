import { useEffect } from "react";
import "./HowItWorks.css";
import Card from "./Card/Card";
import { useTranslation } from 'react-i18next';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function HowItWorks () {
	gsap.registerPlugin(ScrollTrigger);
	const { t } = useTranslation("home");
	useEffect(() => {	
		gsap.to(".how-it-works-card", {
			scrollTrigger: "#how-it-works-card-container",
			y: 0,
			stagger: 0.2,
			opacity: 1
		});
	}, []);
	return (
		<section id="how-it-works">
			<h3 className="gradient">{t("howItWorksHeader")}</h3>
			<div id="how-it-works-card-container">
				<Card classN="light-blue-bg" header={t("card1Header")} link1={t("card1Point1")} link2={t("card1Point2")} link3={t("card1Point3")} />
				<Card classN="mid-blue-bg" header={t("card2Header")} link1={t("card2Point1")} link2={t("card2Point2")} />
				<Card classN="dark-blue-bg" header={t("card3Header")} link1={t("card3Point1")} />
			</div>
			<br />
		</section>
	)
}

export default HowItWorks;