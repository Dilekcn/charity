import React from "react";
import "./News.css";

const News = () => {
  return (
    <div>
      <div className="newss-bg-img"></div>
      <div className="newss-text">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </span>
      </div>
      <div className="newss-header">
        <p>Latest News</p>
      </div>
      <div className="news-area">
        <div className="first-news">
          <button className="news-btn-readmore">Read More</button>
        </div>
        <div className="first-news">
          <button className="news-btn-readmore">Read More</button>
        </div>
        <div>
          <button id="news-btn-viewmore">View More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
