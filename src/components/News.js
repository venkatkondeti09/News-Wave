import React, {useState,useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
   
   const captialFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase + string.slice(1)
  } 
   

   document.title=`${captialFirstLetter(props.category)}-News World`;
       
   const updateNews= async()=>{
      props.setProgress(10)
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`
        setloading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedata = await data.json();
        props.setProgress(70)
        setarticles(parsedata.articles)
        settotalResults(parsedata.totalResults)
        setloading(false)
        props.setProgress(100)
    }
    useEffect(() => {
      document.title = `${captialFirstLetter(props.category)} - News World`
      updateNews();
      //eslint-disable-next-line
    }, [])
    const fetchMoreData= async()=>{
       setpage(page+1)
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=bda4364587dd4ae6807c5cecb98972df&page=${page+1}&pagesize=${props.pageSize}`
        let data = await fetch(url)
        let parsedata = await data.json();
        setarticles(articles.concat(parsedata.articles))
        settotalResults(parsedata.totalResults)
     }
    return (
      < >
        <h1 className='text-center' style={{margin:'30px 0px',marginTop:'50px'}}>News World- Top {props.category} Headlines</h1>
       {loading && <Spinner/>}
        <InfiniteScroll
           dataLength={articles.length}
           next={fetchMoreData}
           hasMore={articles.length!==totalResults}
           loader={<Spinner/>}>
            <div className='container'>
          <div className='row'>
            {articles.map((element)=>{ 
               return <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>  
              </div>
            })}  
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
}
News.defaultProps={
  country:'in',
  pageSize:8 ,
  category:'general'
}
News.propTypes={
   country:PropTypes.string,
   pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News