import { Link, useParams } from 'react-router-dom'
import './blog.css'
import '../index.css'
import '../App.css'

import {PrimaryAuthorHeader} from '../primarycomponents/text_component.jsx'
import Topbar from '../topbar/topbar.jsx'
import SideBar from '../sidebar/sidebar.jsx'
import { useFetch } from '../api/content_handler.js'
import { useEffect, useState } from 'react'




function BlogPostCard({props}) {
    return (
        <div key={props.id} className="blog-post-card">
            <Link to={"/blog/post/" + props.id}>
                <h2>{props.title}</h2>
            </Link>
            <div className='blog-post-card-user-container'>
                
            </div>
            
        </div>
    )
}
function BlogCard({props}) {
    return (
        <div className="blog-card">
            <div className='blog-card-top-container'>
                <Link to={"/blog/" + props.id}>
                    <h2>{props.title}</h2>
                </Link>
            </div>
            <div className='blog-card-text-container'>
                {props.description}
            </div>
            
        </div>
    )
}

export function BlogPost({posts}) {
    const {data: perms, loading: permLoading, error:permError} = useFetch({
        
    })

    return (
        <div className='blog-post-container'>
            {
                posts.map((post, index) => (<BlogPostCard props={post}></BlogPostCard>))
            }
        </div>
    )
}



export function Blog() {
    return (
        <div className='blog-post-card-container blog-background'>

        </div>
    )
}

export function BlogMain({blogs}) {
    return (
        <div className="blog-card-container">
            {blogs.map((blog, index) => (
                <BlogCard key={index} props={blog}></BlogCard>
            )
            )
            }
        </div>
    )
}

export function BlogPostContent() {
    const {id} = useParams()
    const [content, setContent] = useState({})


    const {data, loading, error} = useFetch({
        url: "https://tp1.api.ntigskovde.se/api/blog/post/get?id=" + id,
        requestType: "GET",

        asPerson: false
    })


    useEffect(() => {
        if (loading || data.fields == undefined) {return}

        setContent(data.fields);
        
    }, [data, loading])


    return(
        <>
        <Topbar></Topbar>
        <div className='content-container background'>
            <SideBar></SideBar>
            <div className='blog-post-container'>
                <div className='blog-post-header'>
                    {content.title}
                </div>
                <div className='blog-post-info-container'>
                    {/* <PrimaryAuthorHeader text={"Smoke"}></PrimaryAuthorHeader> */}
                    {/* <div className='blog-post-info'>06-24-2025</div> */}
                </div>

                <div className='blog-post-text-container text-background'>
                    <p>
                        {content.content}
                    </p>
                </div>

                
            </div>

        </div>
        </>
    )

}