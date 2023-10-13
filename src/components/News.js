import React, { Component } from 'react';
import NewsItem from './Newsitem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Footer from './Footer'; 



class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      articlesLoaded: false, // New state variable
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} -|- News-Myon`;
  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=04b162b1b6cf444e82a3b7bec1b8890b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);

    if (parsedData.articles && Array.isArray(parsedData.articles)) {
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } else {
      console.log('No articles found in the API response.');
      this.setState({ loading: false });
    }

    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=04b162b1b6cf444e82a3b7bec1b8890b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ page: this.state.page + 1 });

      let data = await fetch(url);

      let parsedData = await data.json();

      // Filter out articles with incomplete data
      const filteredArticles = parsedData.articles.filter((article) => {
        return article.title && article.url;
      });

      // Check if there are no more articles to load
      if (filteredArticles.length === 0) {
        // You can display a message to the user or take other actions as needed
        console.log('No more articles to load.');
        // Remove or hide the loading bar here
        this.setState({ loading: false });
        return;
      }

      // Remove duplicates and update the state with new articles
      this.setState((prevState) => ({
        articles: [...new Set([...prevState.articles, ...filteredArticles])],
        totalResults: parsedData.totalResults,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.totalResults === this.state.articles.length &&
      !this.state.articlesLoaded
    ) {
      // All articles are loaded
      this.setState({ articlesLoaded: true });
    }
  }

  render() {
    const { category } = this.props;
    return (
      <>
      <div id="news-component">
        <div className="content-wrapper">
          <main className="news-container">
           
          <h1
           className="text-center"
           style={{ margin: '50px 0px', marginTop: '60px', color: '#007bff' }}
          >
         News-Myon -|- Top {this.capitalizeFirstLetter(category)} Headlines
      </h1>
      <hr style={{ borderColor: '#fff' }} /> 

            
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={
                !this.state.loading &&
                this.state.articles.length < this.state.totalResults
              }
            >
              <div className="container">
                <div className="row" >
                  {this.state.articles.map((element, index) => {
                    return (
                      <div className="col-md-4"  key={index}>
                        <NewsItem
                          title={element.title ? element.title : ''}
                          description={
                            element.description ? element.description : ''
                          }
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </InfiniteScroll>
          </main>
          {this.state.articlesLoaded && <Footer />} {/* Conditionally render the Footer */}
        </div>
        </div>
      </>
    );
  }
}

export default News;