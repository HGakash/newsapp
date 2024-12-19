import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
  static defaultProps = {
   category:'technology'
  }
  static propTypes = {
     category:PropTypes.string
  }

  constructor(){
    super(); //This ensures that the Component's constructor logic is executed before adding any custom behavior in NewsItem.
    console.log("hello iam constructor from news component");
    this.state = {
      articles: [],
      page:1,
      loading: false
    }
  }
  async componentDidMount(){
    console.log('cdm');
    let url = `https://newsdata.io/api/1/latest?apikey=pub_627257d039edab16bebe17dd84fa93b17d4ac&language=en&q=${this.props.category}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // console.log(parsedData.articles.length);         
    this.setState({
      articles:parsedData.results,
      loading:false
    });
  }
  handleNextClick = async () => {
    // if(this.state.page + 1 >Math.state.totalResults/20){
    //   //stop or else part
    // }
     console.log("next");
     let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=a7af41d512054e1ea167f7eabf1a7cf6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
     this.setState({loading:true})
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     
     //triggers render again to update the chages becuase of changing in the state
     this.setState({
      page:this.state.page+1,
      articles:parsedData.articles,
      loading:false
     })
  }

  handlePrevClick = async () => {
     let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=a7af41d512054e1ea167f7eabf1a7cf6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
     this.setState({loading:true})
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);

     //triggers render again to update the chages becuase of changing in the state
     this.setState({
      page:this.state.page-1,
      articles:parsedData.articles,
      loading:false
     })
  }

  render() {
    console.log('inside render');
   return (
    <div className='container my-3'>
      <h1 className='text-center' style={{margin:"29px 0px"}}>NewsMonkey - Top Headlines</h1>
       {this.state.loading&&<Spinner/>}
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
              />
            </div>
          );
        })}
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; previous</button>
      <button disabled={this.state.page===12} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &raquo;</button>
      </div>
     </div>
   )
}
}
