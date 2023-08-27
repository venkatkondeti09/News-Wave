import React from 'react'

const Newsitem =(props)=>{
    const {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div>
        <div className="card">
          <div style={{display:'flex',
              justifyContent:'flex-end',
              right:'0',
              position:'absolute'}}>
        <span class="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span></div>
          <img src={imageUrl==null? "https://c.biztoc.com/p/1d5cf987548688e6/s.webp":imageUrl} className="card-img-top" alt="images" />
          <div className="card-body mx-3 my-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">by {author?author:'unknown'} on {new Date(date).toGMTString()}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
         </div>
      </div>
    )
}

export default Newsitem