//The props is where we would be able to pass in info
//such as title, data, author, and perchance the actual
//article, which might just be it's own Component as well.
import styles from '../styles/Home.module.css'


export default function Pane(props){
  return(
    <div style={props.style}>
    <a></a>
      <div className = { styles.paneTitle}>{props.panetitle}</div>
      <div className = { styles.paneTag}>{props.panetag}</div>
      <div className = { styles.paneDesc}>{props.panedesc}</div>
      <img className = {styles.paneImg} src={props.paneimgsrc}></img>
      <h1> Here's some more articles on this topic: </h1>
      <ul>
         {props.extraArticles}
         {/* Will have to find a way to connect this directly to db*/}
      </ul>
    </div>
  )
}
