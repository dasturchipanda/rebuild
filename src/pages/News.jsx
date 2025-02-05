import React, { useEffect, useState } from "react";
import logo from "../../public/images/EasyGasLogo.png";
import axios from "axios";  // Axiosni import qilamiz

const News = () => {
  const [news, setNews] = useState([]);  // State yaratish
  const [loading, setLoading] = useState(true);  // Yuklanayotgan holatni saqlash
  const [error, setError] = useState(null);  // Xatolikni saqlash
  const API = "http://localhost:9000"

  // Ma'lumotlarni API orqali olish
  useEffect(() => {
    axios
      .get(`${API}/api/news/en`)  // API endpointni ko‘rsating
      .then(response => {
        setNews(response.data);  // Ma'lumotlarni state-ga joylashtiramiz
        setLoading(false);  // Yuklanish holatini to‘xtatamiz
      })
      .catch(error => {
        setError(error.message);  // Xatolikni qayd etamiz
        setLoading(false);  // Yuklanish holatini to‘xtatamiz
      });
  }, []);

  // Agar yuklanayotgan bo‘lsa, xabar beramiz
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;  // Xatolik yuz bersa, xabarni ko‘rsatamiz
  

  

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
            {news.map((e, i) => (
              <div
                className={`news-content my-[10px] bg-white rounded-lg ${i === news.length - 1 ? 'mb-[100px]' : ''}`}
                key={i}
              >
                <img
                  src={`${API}${e.news_image}`}
                  alt="photo error"
                  className="new-content-image rounded-t-lg"
                />
                <div className="content-body px-3 py-[5px]">
                  <h3 className="content-title">{e.news_title}</h3>
                  <p className="content-text">{e.news_description}</p> {/* JSONda mavjud bo‘lsa, matnni ko‘rsating */}
                  <span className="content-time">{e.created_at}</span> {/* Yaratilgan vaqtni ko‘rsating */}
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
