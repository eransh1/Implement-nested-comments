import React, { useState } from 'react'
import styles from "./App.module.css"
import CommentsCont from './Components/Comments Cont/CommentsCont'
import NewCommentCont from './Components/New Comment/NewCommentCont'
const App = () => {

  const [comment,setComment]=useState("")
  const[commentArray,setCommentArray]=useState([])

const handleComment=()=>{
  setCommentArray((prev)=>{
    return [...prev,{id:new Date().getTime(),post:comment,comments:[]}]
   
  })
  setComment("")
}

  return (
   <>
    <section className={styles.outerCont}>
<div className={styles.innerCOnt}>
<NewCommentCont comment={comment} setComment={setComment} handleComment={handleComment}/>

{commentArray.length>0&&commentArray.map((item)=>{
  return <><CommentsCont item={item} key={item.id}/></>
})}
</div>
    </section>
   </>
  )
}

export default App