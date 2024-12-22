import React from "react";

const NewsItem = (props) => {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      lengthTitle,
      lengthDesc,
      date,
      author,
      source
    } = props;
    return (
      <div className="my-3">
        <div className="card mx-4">
          <div style={{display:'flex',justifyContent:"flex-end",position:'absolute',right:0}}>
          <span className="badge rounded-pill bg-danger" >
                {source}
              </span>
          </div>
          <img
            src={
              imageUrl? imageUrl: "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835"
            }
            className="card-img-top"
            alt="newImage"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              {lengthTitle <= 45 ? "" : "..."}{" "}
             
            </h5>
            <p className="card-text">
              {description}
              {lengthDesc <= 85 ? "" : "..."}
            </p>
            <a
              rel="norefferer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
            <p className="card-text my-2">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem




