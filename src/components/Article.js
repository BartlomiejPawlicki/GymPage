import React from 'react'



const Article = ({title,author,text}) => {

const styles = {
  marginTop:40,
  paddingRight:5,
  paddingLeft:10,
}


    return (
      
  <article style={styles}>
  <h3 style={{ 
  marginBottom:4,
  textTransform:'uppercase',}}>{title}</h3>
  <span style={{ 
  display:'block',
  marginBottom:10,
  fontSize:12,
  fontStyle:'italic',
  color:'black'


  }}>{author}</span>
  <p>{text}</p>
  
</article>
      );
}
 
export default Article;