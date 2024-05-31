import React, { Component } from 'react'

class NewsItem extends Component {
    render() {
        let { title, description, urlImage, Newsurl, author, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!urlImage ? "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw" : urlImage} className="card-img-top" alt="any" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unkwown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={Newsurl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
