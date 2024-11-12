import React, { useEffect, useState } from "react";
import Link from "next/link";
const blog = (props) => {
  console.log(props)
  const [blogs, setblogs] = useState(props.allBlogs);
  console.log(props)
  // useEffect(()=>{
  
  // },[])
  return (

    <div>
      {blogs.map((blogItem)=>{
        return<div key={blogItem.slug} className="blogItem mb-10">

        <Link href={`/blogpost/${blogItem.slug}`}><h2>{blogItem.title}</h2></Link>
        <p>
         {blogItem.content.substr(0,400)}
        </p>
      </div>
      })}
    

      <div className="blogItem mb-10">
        <h2>How to learn javascript in 2023</h2>
        <p>
          javascript is the langyuage for used to design logic for the web page
        </p>
      </div>

      <div className="blogItem mb-10">
        <h2>How to learn javascript in 2023</h2>
        <p>
          javascript is the langyuage for used to design logic for the web page
        </p>
      </div>

      <div className="blogItem mb-10">
        <h2>How to learn javascript in 2023</h2>
        <p>
          javascript is the langyuage for used to design logic for the web page
        </p>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  let data = await fetch(`${process.env.CONNECTION_URL}/api/blogs`)
  let allBlogs =await data.json()
  return {
    props: { allBlogs }// will be passed to the page component as props
  }
}
export default blog;
