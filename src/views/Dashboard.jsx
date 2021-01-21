import React from "react";
import apiHandler from "../api/apiHandler";
import DisplayArticles from "../components/DisplayArticles";
import UserContext from "../components/Auth/UserContext";
import "../styles/dashboard.css";

class Dashboard extends React.Component {
  static contextType = UserContext;
  state = {
    articles: [],
  };

  componentDidMount() {
    // console.log("JE SUIS LA");
    apiHandler.getArticle().then((data) => {
      console.log("DATA", data);
      this.setState({ articles: data });
    });
  }

  handleClick = (id) => {
    console.log("ARTICLE", id);
    apiHandler
      .deleteArticle(id)
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2>My Dashboard</h2>
        {this.state.articles.map((article) => {
          return (
            <div className="divGeneral" key={article.id}>
              <img
                src={article.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg";
                }}
                alt="Article"
              />
              <div className="description">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p>{article.author}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  link of the article
                </a>
              </div>
              <button
                className="btn-delete"
                onClick={() => this.handleClick(article.id)}
              >
                Delete this article
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
