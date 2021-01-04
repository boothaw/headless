import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import {Link, Route} from 'react-router-dom';
import client from "./SanityClient";

class Blog extends Route.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        }
    }

    componentDidMount() {
        this.getBlogArticles();
    }
    async getBlogArticles() {
        const query = '*[_type == "post"]'

        var articles = await client.fetch(query);
        this.setState({ articles: articles });
    }
    render() {
        return(
            <div>
                {!this.state.articles && "Loaing..."}
                {this.state.articles && this.state.articles.map((article, index) => {
                    return (
                        <p key={index}><Link to={"/blog." + article.slug.current}>{article.title}</Link></p>
                    )
                })};
            </div>
        );
    }
}

export default Blog;