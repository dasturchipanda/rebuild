import React from "react";
import logo from "../../public/images/EasyGasLogo.png";
import news from "../../datas/news.json";
const News = () => {
  const data = news;

  return (
    <>
      <div className="news ">
        <div className="news-inner">
          <div className="logo-wrapper flex items-start justify-center pt-[40px]">
            <img
              className="white-logo"
              src={logo}
              alt="photo error"
              width={50}
              height={50}
            />
            <h1 className="news-title ms-1 pt-3">Easy Gas</h1>
          </div>
          <div className="main-news container mx-auto px-4">
            {data.map((e, i) => (
              <div
                className={`news-content my-[10px] bg-white rounded-lg ${i === data.length - 1 ? 'mb-[100px]' : ''}`}
                key={i}
              >
                <img
                  src={e.news_image}
                  alt="photo error"
                  className="new-content-image rounded-t-lg"
                />
                <div className="content-body px-3 py-[5px]">
                  <h3 className="content-title">{e.news_title}</h3>
                  <p className="content-text">{e.news_text}</p>
                  <span className="content-time">{e.news_time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
