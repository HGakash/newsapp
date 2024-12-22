import React, {useEffect,useState} from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) =>  {
   
  const  [articles, setArticles] = useState([]);
  const  [loading, setLoading] = useState(true);
  const  [totalResults,setTotalResults] = useState(0);
  const  [apiKey, setApiKey] = useState(null);
  const  [page, setPage]  = useState(null);
  
  // document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  
  const updateNews = async () => {
    const key = await props.getKey();
    console.log('hii');
    console.log(key);
    setApiKey(key);
    props.setProgress(10);
    let url = `https://newsdata.io/api/1/latest?apikey=${key}&language=en&q=${props.category}`
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(parsedData.nextPage);
    props.setProgress(100);
  }

  useEffect(()=>{
     updateNews();
  },[])

  // const handleNextClick = async () => {
    // if(state.page + 1 >Math.state.totalResults/20){
    //   //stop or else part
    // }
  //    console.log("next");
  //    let url = `https://newsdata.io/api/1/latest?apikey=pub_629723ff15891d7d8252f50089890bc443fab&language=en&q=${props.category}&page=${this.state.page}`
  //    this.setState({loading:true})
  //    let data = await fetch(url);
  //    let parsedData = await data.json();
  //    console.log(parsedData);
  //    //triggers render again to update the chages becuase of changing in the state
  //    this.setState({
  //     articles:parsedData.results,
  //     page:parsedData.nextPage,
  //     loading:false
  //    })
  // }


 const  fetchMoreData = async () => {  
    let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&language=en&q=${props.category}&page=${page}`
    // this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    // console.log(parsedData.articles.length);         
   setArticles(articles.concat(parsedData.results))
   setTotalResults(parsedData.totalResults);
   setPage(parsedData.nextPage);
 }


  // const handlePrevClick = async () => {
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

   return (
    <div className='container my-3'>
      <h1 className='text-center' style={{margin:"29px 0px",marginTop:"90px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
       {loading&&<Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        
      <div className='row'>
        {!loading && articles.map((element)=>{
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

export default News;

News.defaultProps = {
  category:'technology'
 }
 News.propTypes = {
    category:PropTypes.string
 }




