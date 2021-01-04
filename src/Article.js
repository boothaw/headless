import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import client from "./SanityClient";


const BlockContent = require('@sanity/block-content-to-react')

const serializers = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        )
    }
}


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        }
    }

    async retreiveArticle(articleSlug) {
        const query = '*[_type == "post" && slgu.current == $postSlug]'
        const params = {postSlug: articleSlug};
        var articles = await client.fetch(query, params);

        // TODO: check article size here
        this.setState({ article: articles[0]});
    }

    componentDidMount() {
        var articleSlug = this.props.match.params.articleSlug;
        this.retreiveArticle(articleSlug);
    }
    renderArticle(article) {
        return(
            <div>
                <h1>{article.title}</h1>
                <BlockContent blocks={article.body} serializers={serializers}></BlockContent>
            </div>
        )
    }
    render() {
        return(
            <div className="BlogArticle" style={{padding: "40px", testAlign: "left"}}>
                {!this.state.article && "Loading..."}
                {this.state.article && this.renderArticle(this.state.article)}
            </div>
        )
    }
} 

export default Article;