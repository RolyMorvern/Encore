async function getNews() {
    const bbcResponse = await fetch("https://api.thenewsapi.com/v1/news/top?api_token=gi1Djf5t2unMz7VFnuBUpurcM5yjgTVgVjeoTvqI&limit=1&language=en&domains=bbc.co.uk");
    let bbc = await bbcResponse.json();
    bbc = bbc.data;
    bbc = bbc.splice(0, 1);

    const ktResponse = await fetch("https://api.thenewsapi.com/v1/news/top?api_token=gi1Djf5t2unMz7VFnuBUpurcM5yjgTVgVjeoTvqI&limit=1&language=en&domains=koreatimes.co.kr");
    let kt = await ktResponse.json();
    kt = kt.data;
    kt = kt.splice(0, 1);

    const cnnResponse = await fetch("https://api.thenewsapi.com/v1/news/top?api_token=gi1Djf5t2unMz7VFnuBUpurcM5yjgTVgVjeoTvqI&limit=1&language=en&domains=cnn.com");
    let cnn = await cnnResponse.json();
    cnn = cnn.data;
    cnn = cnn.splice(0, 1);

    const forbesResponse = await fetch("https://api.marketaux.com/v1/news/all?&language=en&limit=1&domains=forbes.com&api_token=xnP5odnZqSgyqeIqrPqeaD10ptmmxQq0uzPseZBP");
    let forbes = await forbesResponse.json();
    forbes = forbes.data;
    forbes = forbes.splice(0, 1);

    const finalArray = [bbc[0], kt[0], cnn[0], forbes[0]];

    return finalArray;
}

async function translate() {
    const news = await getNews(); 

    const translationPromises = news.map(async item => {
        const titleResponse = await fetch(`https://api.mymemory.translated.net/get?q=${item.title}&langpair=en|fr`);
        const translatedTitle = await titleResponse.json();

        return {
            title: translatedTitle.responseData.translatedText,
            link: item.url
        };
    });

    const translatedNews = await Promise.all(translationPromises);

    return translatedNews;
}

export default translate;
