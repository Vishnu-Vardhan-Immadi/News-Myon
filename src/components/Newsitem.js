import React from 'react'

const Newsitem=(props)=> {
   
  
        let {title, description,imageUrl,newsUrl,author,date,source}= props;
        return (
          <div className="container my-3">
            <div className="card" >
              <div style={{
                display:'flex',
                justifyContent:'flex-end',
                position:'absolute',
                right:'0'
              }}>
            <span className=" badge rounded-pill bg-danger" >{source}
           </span>
           </div>
            <img src={!imageUrl?" https://www.livemint.com/lm-img/img/2023/08/31/600x338/Basilic_Fly_Studio_IPO_GMP_1693472399670_1693472419764.JPG":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {!author?"Unknown": author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target= "blank" className="btn btn-sm btn-dark">Read More</a>
             </div>
           </div>
          </div>
          
    )
  }

export default Newsitem
