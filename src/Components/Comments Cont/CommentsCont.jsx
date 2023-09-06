import React, { useState } from 'react'
import styles from "./CommentsCont.module.css"
import NewCommentCont from '../New Comment/NewCommentCont'
const CommentsCont = ({item}) => {
    // console.log("item",item)
    const [showComment,setShowComment]=useState(false)
    const [comment,setComment]=useState("")
    const [commentArr,setCommentArr]=useState(item)
// console.log("commentArr",commentArr)
const handleNewComment=()=>{
    const newArr=commentArr.comments
    // console.log("newArr",newArr)
    const tempArr=[...newArr,{id:new Date().getTime(),post:comment,comments:[]}]
    // console.log("tempArr",tempArr)
    // let tempArr=commentArr.comments.push()
    setCommentArr((prev)=>{return {...prev,comments:tempArr}})
    setComment("")
    setShowComment(false)
}

  return (
 <>
    <section className={styles.outerCont}>
       <p>{item.post}</p> 
       <button onClick={()=>setShowComment(true)}>Comment</button>

       {showComment&&<><NewCommentCont comment={comment} setComment={setComment} handleComment={handleNewComment}/></>}
       {commentArr?.comments.length>0&&commentArr?.comments.map((item)=>{
        return <><CommentsCont key={item.id} item={item}/></>
       })}
    </section>
 </>
  )
}

export default CommentsCont