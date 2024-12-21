import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
   category:'technology'
  }
  static propTypes = {
     category:PropTypes.string
  }
  capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props){
    super(props); //This ensures that the Component's constructor logic is executed before adding any custom behavior in NewsItem.
    console.log("hello iam constructor from news component");
    this.state = {
      articles: [],
      page:null,
      loading: true,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`
  }

  

  async componentDidMount(){
    this.props.setProgress(10);
    let url = `https://newsdata.io/api/1/latest?apikey=pub_629723ff15891d7d8252f50089890bc443fab&language=en&q=${this.props.category}`
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    // console.log(parsedData.articles.length);         
    this.setState({
      articles:parsedData.results,
      page:parsedData.nextPage,
      loading:false,
      totalResults:parsedData.totalResults

    });
    this.props.setProgress(100);
    console.log(this.state.page);
  }



  handleNextClick = async () => {
    // if(this.state.page + 1 >Math.state.totalResults/20){
    //   //stop or else part
    // }
     console.log("next");
     let url = `https://newsdata.io/api/1/latest?apikey=pub_629723ff15891d7d8252f50089890bc443fab&language=en&q=${this.props.category}&page=${this.state.page}`
     this.setState({loading:true})
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     //triggers render again to update the chages becuase of changing in the state
     this.setState({
      articles:parsedData.results,
      page:parsedData.nextPage,
      loading:false
     })
  }


  fetchMoreData = async () => {  
    let url = `https://newsdata.io/api/1/latest?apikey=pub_629723ff15891d7d8252f50089890bc443fab&language=en&q=${this.props.category}&page=${this.state.page}`
    // this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles.length);         
    this.setState({
      articles:this.state.articles.concat(parsedData.results),
      page:parsedData.nextPage,
      totalResults:parsedData.totalResults

    });
  };


  // handlePrevClick = async () => {
  //    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=a7af41d512054e1ea167f7eabf1a7cf6`
  //    this.setState({loading:true})
  //    let data = await fetch(url);
  //    let parsedData = await data.json();
  //    console.log(parsedData);

  //    //triggers render again to update the chages becuase of changing in the state
  //    this.setState({
  //     articles:parsedData.results,
  //     loading:false
  //    })
  // }

  render() {
    console.log('inside render');
    
   return (
    <div className='container my-3'>
      <h1 className='text-center' style={{margin:"29px 0px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
       {this.state.loading&&<Spinner/>}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        
      <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
        return ( <div className = 'col-md-4' key={element.link}>
              <NewsItem 
              title={element.title?element.title.slice(0,45):""} 
              description={element.description?element.description.slice(0,88):""} 
              imageUrl = {element.image_url}
              newsUrl = {element.source_url}
              lengthTitle = {element.title?element.title.length:""}
              lengthDesc = {element.description?element.description.length:""}
              date = {element.pubDate}
              author = {element.creator}
              source = {element.source_name}

              />
            </div>
          );
        })}
      </div>
      </InfiniteScroll>

      {/* <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; previous</button>
      <button disabled={this.state.page===12} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &raquo;</button>
      </div> */}
     </div>
   )
}
}

