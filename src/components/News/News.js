import React  from "react";
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
      <div id="news-area">
        <div className="news-area">
          <div className="news-area-img">
            <img/>img
            </div>
          <div className="news-area-text"> text
          <div className="news-btn-readmore"><button>Read More</button></div>
        </div>
        </div>

        <div className="news-area">
          <div className="news-area-img"> 
          <img/>img
          </div>
          <div className="news-area-text"> text
          <div className="news-btn-readmore"><button>Read More</button></div>
        </div>
        </div>
    
        <div>
          <button id="news-btn-viewmore">View More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
