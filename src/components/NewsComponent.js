import React from "react";
import NewsItems from "./NewsItems";

export default class NewsComponent extends React.Component {
  articles = [
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Landon Mion",
      title:
        "'Doctor Strange 2' brings in most opening day ticket sales of 2022  Fox Business",
      description:
        "Walt Disney Co. announced Sunday that “Doctor Strange and the Multiverse of Madness” grossed an estimated $185 million in ticket sales during its first weekend in theaters.",
      url: "https://www.foxbusiness.com/economy/doctorstrange2mostopeningdayticketsales2022",
      urlToImage:
        "https://www.cbc.ca/mediacentre/content/images/750x360_CBCNN_MediaCentre.jpg",
      publishedAt: "20220509T06:54:22Z",
      content:
        'Walt Disney Co. announced Sunday that the film "Doctor Strange and the Multiverse of Madness" grossed an estimated $185 million in ticket sales during its first weekend in theaters in the U.S. and Ca… [+2671 chars]',
    }
  ];
  constructor() {
    super();
    this.state = { 
      articles: this.articles,
      mode:"Dark-Mode"
    };
  }

  async componentDidMount() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=eb8d9177df63494f82966f79f0c7d997";
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={!element.title ? "CNBC News" : element.title.slice(0,49)}
                    description={!element.description ? "click on the below link to Read More for about this News. This may be provided through many different media: word of mouth, printing, postal systems.":element.description.slice(0,149)}
                    urlToImage={
                      !element.urlToImage
                        ? "https://www.cbc.ca/mediacentre/content/images/750x360_CBCNN_MediaCentre.jpg"
                        : element.urlToImage
                    }
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
