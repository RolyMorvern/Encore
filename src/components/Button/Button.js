import "./Button.css";
import { FaUserPlus } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import $ from "jquery";

function Button () {
	const { t } = useTranslation("home");
	return (
		<a href={$("#sign-up-btn").text() == "Read it!" ? "/read-todays-issue" : "/fr/read-todays-issue"} className="sign-up-btn">
			<span id="sign-up-btn">{t("buttonText")}</span>
			<FaUserPlus />
		</a>
	)
}

export default Button;