import {Component} from "react";

export default class NewsItems extends Component{
  render(){
    let {title,description,urlToImage,url} = this.props;
    return(
      <div>
        <div className="news-card-bg-color">
          <img src={urlToImage} className="news-card-image" alt="unable to load" />
          <div className="news-card-body">
            <h5 className="news-card-title">{title}...</h5>
            <p className="news-card-text">{description}...</p>
            <p className="center-btn">
              <a href={url} className="btn news-btn-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}