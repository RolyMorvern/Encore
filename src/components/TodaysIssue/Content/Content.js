import { useState, useEffect } from "react";
import Card from "../Card/Card";
import getNews from "./news.js";
import ktImage from "../../../Images/kt.png";
import bbcImage from "../../../Images/bbc.png";
import cnnImage from "../../../Images/cnn.png";
import wsjImage from "../../../Images/wsg.png";
import Loading from "../Loading/Loading";
import { BsDownload } from "react-icons/bs";
import "./Content.css";

function Content() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  function getCurrentDayOfWeek() {
	  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeekIndex = currentDate.getDay();
    return daysOfWeek[dayOfWeekIndex];
  }
  const currentDayOfWeek = getCurrentDayOfWeek();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNewsList(response);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };
    fetchNews();
  }, []);

  const generateCards = () => {
    return newsList.map((newsItem, index) => (
      <Card key={index} img={getImg(index)} link={newsItem.url} text={newsItem.title} />
    ));
  };
  const getImg = index => {
  	switch (index) {
  		case 0:
  			return bbcImage;
  			break;
		case 1:
			return ktImage;
			break;
		case 2:
			return cnnImage;
			break;
		case 3:
			return wsjImage;
			break;
  	};
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div id="news-content-container">
          <div id="news-content">
            <h3 onClick={() => console.log(newsList)} id="content-header" className="gradient">
              {"Today is " + currentDayOfWeek}
            </h3>
            {generateCards()}
          </div>
        </div>
     )}
    </div>
  );
}

export default Content;
