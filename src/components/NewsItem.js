import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
   let {title,description,imageUrl,newsUrl,lengthTitle,lengthDesc} = this.props
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={imageUrl?imageUrl:"https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835"} className="card-img-top" alt="newImage"/>
            <div className="card-body">
              <h5 className="card-title">{title}{lengthTitle<=45?"":'...'}</h5>
              <p className="card-text">{description}{lengthDesc<=85?"":'...'}</p>
              <a rel='norefferer' href={newsUrl}  target='_blank' className="btn btn-sm btn-dark">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}
