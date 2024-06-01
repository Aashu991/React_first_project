import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spiner from './spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 12,
        category: "science"
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };

    constructor(props) {
        super(props)

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
        document.title = `${this.captlize(this.props.category)}-News`;
    };

    captlize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d2dfe158e9649d99a3b598c59e71244&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(60);
        let parcData = await data.json();
        this.props.setProgress(80);
        this.setState({
            articles: parcData.articles,
            totalResults: parcData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    };

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d2dfe158e9649d99a3b598c59e71244&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parcData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parcData.articles),
            totalResults: parcData.totalResults,
            loading: false
        });
    };

    render() {
        return (
            <div className='container my-3'>
                <h1 style={{marginTop:"80px"}} className='text-center'>News - Top {this.captlize(this.props.category)} Headlines</h1>
                <div className='container'>
                    {this.state.loading && <Spiner />}
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spiner />}
                >
                    <div className='container'>
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return (
                                    <div className='col-md-4' key={element.url}>
                                        <NewsItem title={element.title} description={element.description} urlImage={element.urlToImage} Newsurl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>
                                )
                            })};
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handelPrev} type="button" className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handelNext} type="button" className="btn btn-dark">Next &rarr;</button>
                </div> */}
            </div>
        )
    };
};

export default News;
