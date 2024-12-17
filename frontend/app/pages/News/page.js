"use client";
import Footer from "@/app/components/Footer";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const fetchNews = async () => {
    try {
      const query = `aviation OR aircraft OR airlines`;

      const apiKey = "cd7b47f66ee5452d9c80a024110d8af6";

      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          query
        )}&apiKey=${apiKey}`
      );
      const data = await response.json();
      console.log(data)

      if (data.articles) {
        setNews((prevNews) => {
          const newArticles = data.articles.filter(
            (article) =>
              article.title &&
              article.description &&
              article.urlToImage &&
              article.url &&
              !prevNews.some((prevArticle) => prevArticle.url === article.url)
          );
          return [...prevNews, ...newArticles];
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();

    const interval = setInterval(() => {
      fetchNews();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const paginatedNews = news.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#19232D]">
      <Navbar hasBorder={true} isTransparent={false}/>
        <div className="mt-8">
          <h1
            className="text-[#FFF] text-center text-3xl font-sans font-bold"
            style={{ textShadow: "3px 3px 10px black" }}
          >
            Aviation News
          </h1>
          <div className="mt-8 px-4 pb-8">
            {isLoading ? (
              <p className="text-center text-[#DCBB87] text-lg font-sans">
                Loading news...
              </p>
            ) : news.length === 0 ? (
              <p className="text-center text-[#DCBB87] text-lg font-sans">
                No news found for aviation.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedNews.map((article, index) => (
                    <div
                      key={index}
                      className="bg-[#1E2A35] p-4 rounded-lg shadow-md hover:shadow-lg"
                    >
                      {article.urlToImage && (
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                      )}
                      <h2 className="text-[#DCBB87] font-bold text-lg mt-2">
                        {article.title}
                      </h2>
                      <p className="text-[#FFF] text-sm mt-2">
                        {article.description || "No description available."}
                      </p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8AB4F8] hover:underline text-sm mt-2 block"
                      >
                        Read More
                      </a>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`mx-1 px-4 py-2 rounded-lg ${
                          page === currentPage
                            ? "bg-[#DCBB87] text-[#19232D]"
                            : "bg-[#1E2A35] text-[#FFF]"
                        } hover:bg-[#DCBB87] hover:text-[#19232D]`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;