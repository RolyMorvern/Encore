import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png"
import $ from "jquery";
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';

function Navbar () {
	const { t } = useTranslation("navbar");
	const [isActive, setIsActive] = useState(false);
	const [ language, setLanguage ] = useState();
	useEffect(() => {
		const updateLanguage = () => {
		  if ($("#l-2").text() === "How It Works") {
		    setLanguage("en");
		  } else {
		    setLanguage("fr");
		  }
		};
		updateLanguage();
	}, []); 
	const handleMenuClick = () => {
		setIsActive(!isActive);
	    $("#nav-links").css("display", isActive ? "none" : "flex");
		const tl = gsap.timeline();
		if ($("#nav-links").css("display") == "flex") {		
			tl.from("#nav-links", { duration: 1, x: "100vh" })
			  .from(".nav-link", { duration: 1, y: -25, opacity: 0, stagger: 0.15 }, "-=0.45")
		} else if ($("#nav-links").css("display") == "none") {
			tl.reverse();
		}
	};
	return (
		<nav id="navbar">
			<a href={language == "en" ? "/" : "/fr"}>
				<img id="nav-img" src={logo} alt="Logo" />
			</a>
			<div id="nav-links">
				<a className="nav-link" id="l-2" href={language == "en" ? "/#how-it-works" : "/fr/#how-it-works"}>{t("l_2")}</a>
				<a className="nav-link" href={language == "en" ? "/read-todays-issue" : "/fr/read-todays-issue"}>{t("l_3")}</a>
			</div>
			<div id="menu-button" className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleMenuClick}><span></span></div>
		</nav>
	)
}

export default Navbar;