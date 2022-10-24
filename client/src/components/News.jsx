import React, { Component } from "react";
import { getNews } from "../context/api";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      apiError: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await getNews();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Currently there is no articless" });
    }
  }

  render() {
    const { articles, apiError } = this.state;
    return (
      <div id='news'>
        <div className='news'>
          <h2>Learn About Cryptocurrency</h2>
        </div>
        <div className='flexbox-container' id='container2'>
          <div className='flexbox-item flexbox-item-3'>
            {articles.length > 0 && (
              <img src={articles[0].urlToImage} className='news-image' />
            )}
            {articles.length > 0 && (
              <h3 className='news-title'>{articles[0].title}</h3>
            )}
            {articles.length > 0 && (
              <p className='news-description'>{articles[0].description}</p>
            )}
            {articles.length > 0 && (
              <a href={articles[0].url}>{articles[0].source.name}</a>
            )}
            {articles.length > 0 && (
              <a className='news-publish'>
                {articles[0].publishedAt.split("T")[0]}
              </a>
            )}
            {apiError && <p>Currently there is no cryptocurrency news.</p>}
          </div>
          <div className='flexbox-item flexbox-item-4'>
            {articles.length > 0 && (
              <img src={articles[1].urlToImage} className='news-image' />
            )}
            {articles.length > 0 && (
              <h3 className='news-title'>{articles[1].title}</h3>
            )}
            {articles.length > 0 && (
              <p className='news-description'>{articles[1].description}</p>
            )}
            {articles.length > 0 && (
              <a href={articles[1].url}>{articles[1].source.name}</a>
            )}
            {articles.length > 0 && (
              <a className='news-publish'>
                {articles[1].publishedAt.split("T")[0]}
              </a>
            )}
            {apiError && <p>Currently there is no cryptocurrency news.</p>}
          </div>
          <div className='flexbox-item flexbox-item-5'>
            {articles.length > 0 && (
              <img src={articles[2].urlToImage} className='news-image' />
            )}
            {articles.length > 0 && (
              <h3 className='news-title'>{articles[2].title}</h3>
            )}
            {articles.length > 0 && (
              <p className='news-description'>{articles[2].description}</p>
            )}
            {articles.length > 0 && (
              <a href={articles[2].url}>{articles[2].source.name}</a>
            )}
            {articles.length > 0 && (
              <a className='news-publish'>
                {articles[2].publishedAt.split("T")[0]}
              </a>
            )}
            {apiError && <p>Currently there is no cryptocurrency news.</p>}
          </div>
        </div>
        <hr />
        <div className='footer'>
          <p className='footer-p'>@exchange 2022</p>
        </div>
      </div>
    );
  }
}

export default News;
