import "./Button.css";
import { FaUserPlus } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import $ from "jquery";

function Button () {
	const { t } = useTranslation("home");
	return (
		<a onClick={() => console.log($("#sign-up-btn-txt").text())} href={$("#sign-up-btn-txt").text() ! "Lis ça !" ? "/read-todays-issue" : "/fr/read-todays-issue"} className="sign-up-btn">
			<span id="sign-up-btn-txt">{t("buttonText")}</span>
			<FaUserPlus />
		</a>
	)
}

export default Button;
