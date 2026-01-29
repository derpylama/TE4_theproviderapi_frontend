import { Link } from 'react-router-dom'
import './blog.css'

function BlogPostCard(props) {
    return (
        <div className="blog-post-card">
            <Link to="/wiki">
                <h2>{props.postTitle}</h2>
            </Link>

            <div className='blog-post-card-text-container'>
                {props.postContent}
            </div>
            <div className='blog-post-card-user-container'>
                <p>{props.postUser}</p>
            </div>
            
        </div>
    )
}
function BlogCard(props) {
    return (
        <div className="blog-card">
            <div className='blog-card-top-container'>
                <Link to="/wiki">
                    <h2>{props.blogTitle}</h2>
                </Link>
                <p>{props.blogUser}</p>
            </div>
            <div className='blog-card-text-container'>
                {props.blogDescription}
            </div>
            
        </div>
    )
}

export function Blog() {
    return (
        <div className='blog-post-card-container'>
            <BlogPostCard postTitle="Det stora äventyret om Tintin´s strid mot Sakarias." postUser="Tintin" postContent="58 .
EXT. OCEAN/ROWBOAT - DAY
ANGLEON: HADDOCKis rowing .. . cold and exhausted . TINTIN and
SNOWYare huddled asleep in the pro w of the boat .
HADDOCK
(to himself)
Oh, so cold! And thirsty ! My throat
is parched! Let's see if there's
any fresh water ...
EXT. OCEAN/ROWBOAT - DAY
HADDOCKleans over to a hatch in the prow, opens it and
finds ... a BOTTLE of RUM"></BlogPostCard>
        </div>
    )
}

export function BlogMain({blogs}) {
    console.log(blogs)
    return (
        <div className="blog-card-container">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blogTitle={blog.title} blogUser={blog.user} blogDescription={blog.description}></BlogCard>
            )
            )
            }
            <BlogCard blogTitle="Bloggen om nordpolen" blogUser="Elf" blogDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam  purus, tristique nec scelerisque ac, lacinia sit amet lorem.  Pellentesque ut tortor lobortis, facilisis est ut, commodo ligula.  Curabitur purus massa, tristique a imperdiet id, rhoncus id libero. In  hac habitasse platea dictumst. Aenean maximus metus nec tellus eleifend, sed varius risus scelerisque. Suspendisse vitae diam a elit mattis  finibus. Proin elementum lorem id tristique accumsan. Sed volutpat  lectus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et  ultrices posuere cubilia curae; Nam fringilla molestie gravida.  Vestibulum ornare risus ipsum, eget ullamcorper purus blandit pretium.  Aliquam pulvinar hendrerit elit, ac vulputate lorem lacinia quis. Etiam risus orci, facilisis et efficitur dictum, tincidunt placerat  nibh. Curabitur a viverra lacus. Vestibulum id mollis massa. Proin  consectetur magna egestas arcu iaculis, quis malesuada massa tristique.  Phasellus vitae tincidunt est. Phasellus suscipit hendrerit nisi, a  pulvinar diam. Quisque nunc dui, molestie nec malesuada at, iaculis vel  elit. Etiam dictum malesuada nibh eget hendrerit. Nam venenatis id ante  sed convallis. Aliquam laoreet molestie luctus. Maecenas finibus a nibh  eu bibendum."></BlogCard>

        
        </div>
    )
}
