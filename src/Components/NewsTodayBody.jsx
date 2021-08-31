import React, { Component } from 'react'
import NewsCard from './NewsCard'

export class NewsTodayBody extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            page: 1,
            pageSize: 10
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fd5481cadc5f45bb95311a876b6f4462&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(`parseData`, parseData)
        this.setState({ article: parseData.articles, totalArticles: parseData.totalResults })
    }
    handlePrePage = async () => {
        console.log('pre-click');
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fd5481cadc5f45bb95311a876b6f4462&pageSize=${this.state.pageSize}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page - 1,
            article: parseData.articles
        })
        console.log(`pre`, url)
    }
    handleNextPage = async () => {
        console.log('next-click');
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fd5481cadc5f45bb95311a876b6f4462&pageSize=${this.state.pageSize}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page + 1,
            article: parseData.articles
        })
        console.log(`next`, url)
    }


    render() {
        return (
            <>
                <h3 className="text-center my-4">News Today - Top Headlines</h3>
                <div className="container row mx-auto my-3 g-3">
                    {this.state.article.map((e) => {
                        return (
                            <div className="col" key={e.url}>
                                <NewsCard title={e.title} desc={e.description} urlToImage={e.urlToImage} newsLink={e.url} time={e.publishedAt}/>
                            </div>
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrePage}> &larr; Previous</button>
                    <button disabled={this.state.page >= this.state.totalArticles/this.state.pageSize} type="button" className="btn btn-primary" onClick={this.handleNextPage}>Next &rarr; </button>
                </div>
            </>
        )
    }
}

export default NewsTodayBody
