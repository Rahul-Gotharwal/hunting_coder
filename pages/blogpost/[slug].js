import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router'

const slug = (props) => {
  const [blog , setblog]  = useState(props.myBlog);
  // local redering means on clent request html bundle is not sent javascript will execute only
  // const [blog , setblog]  = useState();
  // const router = useRouter();
  // useEffect(()=>{
  //   if(!router.isReady)
  //   return ;
  //   const {slug} = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
  //     return a.json();
  //   }).then((parsed)=>{
  //     setblog(parsed)
  //   })
  // },[router.isReady])
    
  return (
    <div>
    <h1>{blog && blog.title}</h1>
    <hr/>
    <div>{blog&& blog.content}</div>
    </div>
  )
}
export async function getServerSideProps(context) {
   const {slug} = context.query;
   //let data  = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
   let data  = await fetch(`${process.env.CONNECTION_URL}/api/getblog?slug=${slug}`)
   let myBlog = await data.json()
  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}


export default slug
