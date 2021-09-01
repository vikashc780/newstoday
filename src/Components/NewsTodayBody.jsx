import React, { Component } from 'react'
import NewsCard from './NewsCard'
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsTodayBody extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            page: 1,
            pageSize: 3,
            totalArticles:0,
            status : ""
        };
    }

    async componentDidMount() {
        this.props.progressfunc(10)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fd5481cadc5f45bb95311a876b6f4462&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        this.props.progressfunc(30)
        let parseData = await data.json()
        this.props.progressfunc(70)
        // console.log(`parseData`, parseData)
        this.setState({ article: parseData.articles, totalArticles: parseData.totalResults, status: parseData.status })
        this.props.progressfunc(100)
        console.log(`parseData`, parseData)
    }
    fetchMoreData = async () => {
        // console.log(`this.page`, this.state.page)
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fd5481cadc5f45bb95311a876b6f4462&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        // let data = await fetch(url);
        // let parseData = await data.json();
        // this.setState({ article: parseData.articles })

        this.setState({ page: this.state.page + 1, })
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fd5481cadc5f45bb95311a876b6f4462&pageSize=${this.state.pageSize}&page=${this.state.page}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ article: this.state.article.concat(parseData.articles) })
    }

    // handlePrePage = async () => {
    //     await this.setState({ page: this.state.page - 1, })
    //     this.fetchMoreData()
    // }
    // handleNextPage = async () => {
    //     console.log(`this.state.page`, this.state.page)
    //     await this.setState({ page: this.state.page + 1, })
    //     console.log(`next page`, this.state.page)
    //     this.fetchMoreData()
    // }


    render() {
        return (
            <>
                <h3 className="text-center my-4 mt-5 pt-4">News Today - Top Headlines</h3>
                    <InfiniteScroll
                        dataLength={this.state.article.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.article.length !== this.state.totalArticles.length}
                        loader={<h4 className="text-center mb-3">Loading...</h4>}
                        // loader = {this.state.article.length == this.state.totalArticles.length?"":<h4 className="text-center mb-3">Loading...</h4>}
                    >
                <div className="container row mx-auto my-3 g-3">
                    {this.state.article.map((e) => {
                        return (
                            <div className="col" key={e.url}>
                                <NewsCard title={e.title} desc={e.description} urlToImage={e.urlToImage} newsLink={e.url} time={e.publishedAt} />
                            </div>
                        )
                    })}
                </div>
                    </InfiniteScroll>
                    {/* <div className="container row mx-auto my-3 g-3">
                    {this.state.status === "ok"?  this.state.article.map((e) => {
                        return (
                            <div className="col" key={e.url}>
                                <NewsCard title={e.title} desc={e.description} urlToImage={e.urlToImage} newsLink={e.url} time={e.publishedAt} />
                            </div>
                        )
                    }) : <div className="text-center">API EXHAUSTED</div>}
                    </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrePage}> &larr; Previous</button>
                    <button disabled={this.state.page >= this.state.totalArticles / this.state.pageSize} type="button" className="btn btn-primary" onClick={this.handleNextPage}>Next &rarr; </button>
                </div> */}
            </>
        )
    }
}

export default NewsTodayBody
