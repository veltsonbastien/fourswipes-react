import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Pane from '../components/pane.jsx'
import Footer from '../components/footer.jsx'

export default function Home() {
  return (
  <>
    <div>
      <a href="#pane01"></a>
      <div className = {styles.maintitle}> FourSwipes </div>
      <div className = {styles.maindesc}> Get your news short and simple, in just four swipes. </div>
      <div className = {styles.maindesc}> Here's what's happening: </div>
      <div className = {styles.downarrow}> v </div>
    </div>
    {/*Four "Featured Panes"*/}
    <Pane
     style = {{backgroundColor: '#2083bf'}}
     panetitle = "Some interesting news."
     panetag = "Interesting"
     panedesc = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
     paneimgsrc = "https://compote.slate.com/images/222e0b84-f164-4fb1-90e7-d20bc27acd8c.jpg?width=1920"
     />
     <Pane
      style = {{backgroundColor: '#27ae60'}}
      panetitle = "Some interesting news."
      panetag = "Interesting"
      panedesc = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      paneimgsrc = "https://compote.slate.com/images/222e0b84-f164-4fb1-90e7-d20bc27acd8c.jpg?width=1920"
     />
     <Pane
       style = {{backgroundColor: '#e74c3c'}}
       panetitle = "Some interesting news."
       panetag = "Interesting"
       panedesc = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
       paneimgsrc = "https://compote.slate.com/images/222e0b84-f164-4fb1-90e7-d20bc27acd8c.jpg?width=1920"
      />
      <Pane
        style = {{backgroundColor: '#bdc3c7'}}
        panetitle = "Some interesting news."
        panetag = "Interesting"
        panedesc = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        paneimgsrc = "https://compote.slate.com/images/222e0b84-f164-4fb1-90e7-d20bc27acd8c.jpg?width=1920"
       />
     <Footer/>
  </>
  )
}
