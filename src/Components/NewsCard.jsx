import React, { Component } from 'react'

export class NewsCard extends Component {
    render() {
        return (
            <>
                <div className="card" style={{width:"18rem"}}>
                    <img src={!this.props.urlToImage?"https://images.indianexpress.com/2021/08/PTEROSAUR-FOSSIL-2.jpg":this.props.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desc}</p>
                        <div className="d-flex justify-content-between">
                        <a href={this.props.newsLink} className="btn btn-primary btn-sm" target="_blank">Read More</a>
                        <p class="card-text"><small class="text-muted">{this.props.time}</small></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsCard
