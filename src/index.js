import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/Home/Home';
import TodaysIssueEn from "./components/TodaysIssue/TodaysIssue";
import TodaysIssueFr from "./components/TodaysIssue/TodaysIssueFrench";
import i18n from './i18n'; 
import { I18nextProvider } from 'react-i18next';

function HomeLanguage (props) {
	i18n.changeLanguage(props.lang);
	return (
		<Home />
	)
}

function TodaysIssue (props) {
	i18n.changeLanguage(props.lang);
	return (
		<>
			{props.lang == "en" ? <TodaysIssueEn /> : <TodaysIssueFr />}
		</>
	)
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLanguage lang="en" />,
	},
	{
		path: "/read-todays-issue",
		element: <TodaysIssue lang="en" />,
	},
	{
		path: "/fr/read-todays-issue",
		element: <TodaysIssue lang="fr" />,
	},
	{
		path: "/fr",
		element: <HomeLanguage lang="fr" />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  	<I18nextProvider i18n={i18n}>
    	<RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);