import { useEffect } from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import watermark from "../../../Images/watermark.svg";
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';

function Hero () {
	const { t } = useTranslation("home");
	useEffect(() => {	
		gsap.to("#hero-subheader", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			y: 0
		});
		gsap.to("#hero-header", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			y: 0
		});
	}, []);
	return (
		<header id="home-hero">
			<h1 id="hero-header" className="gradient">{t("headerLine1")}<br />{t("headerLine2")}</h1>
			<p id="hero-subheader">{t("subheader")}</p>
			<br />
			<br />
			<Button />
			<div id="hero-watermark-container">
				<img src={watermark} alt="watermark" id="hero-watermark" />
			</div>
		</header>
	)
}

export default Hero;