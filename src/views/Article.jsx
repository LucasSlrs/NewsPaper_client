import React from "react";
import "../styles/article.css";
// import ButtonAdd from "../components/ButtonAdd";
// import axios from "axios";

class Article extends React.Component {
  render() {
    const extractInformation = this.props.location.info;
    // console.log("REPONSE", this.props.location.info);
    return (
      <div className="allInfo">
        <h2>Article</h2>
        <img
          src={extractInformation.image}
          alt={this.props.location.info.name}
        />
        <div className="information">
          <h2>{extractInformation.title}</h2>
          <p>{extractInformation.description}</p>
          <p>{extractInformation.author}</p>
          <a
            href={extractInformation.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to the article
          </a>
        </div>
      </div>
    );
  }
}
export default Article;
