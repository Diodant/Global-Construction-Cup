import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 
import TopSection from "./TopSection";



const ArticlesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <>
<TopSection
  subtitle="Новости"
  title="Global Construction Cup"
/>
    <div className="articles-page">
      <div className="articles-container">
        {articlesData.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-info">
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
              </div>
              <h2 className="article-title"><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              <Link to={`/articles/${article.id}`} className="article-read-more">ПОДРОБНЕЕ</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ArticlesList;
