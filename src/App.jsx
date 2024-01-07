import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Post from './components/Post'

import Button from './components/Button'
import AlertButton from './components/AlertButton'

import NewPost from './components/NewPost'

import PostsList from './components/PostsList'

import MainHeader from './components/MainHeader'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function showModalHandler() {
    setModalIsVisible(true)
  }
  function hideModalHandler() {
    setModalIsVisible(false)
}
  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main><PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/></main>
    
    {/*<NewPost/>
     
     <Post author="ahmed" body="he is a SW"/>
     <Post author="Nahla" body="she is a CS"/>
     <Button/>
     <AlertButton/>
    t */}
    </>
  )
}

export default App
