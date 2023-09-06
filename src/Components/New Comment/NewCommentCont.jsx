import React from 'react'
import styles from "./NewCommentCont.module.css"
const NewCommentCont = ({comment,setComment,handleComment}) => {
  return (
   <>
    <div className={styles.inputCont}>
<input onChange={(e)=>setComment(e.target.value)} type="text" placeholder='Comment' value={comment} />
<button onClick={handleComment}>Submit</button>
</div>
   </>
  )
}

export default NewCommentCont