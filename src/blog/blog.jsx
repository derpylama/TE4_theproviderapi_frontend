import { Link } from 'react-router-dom'
import './blog.css'
import '../index.css'
import '../App.css'

import {PrimaryAuthorHeader} from '../primarycomponents/text_component.jsx'




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

export function BlogPost() {
    return (
        <div className='blog-post-container'>
            <div className='blog-post-header'>
                TV-Krabbor
            </div>
            <div className='blog-post-info-container'>
                <PrimaryAuthorHeader text={"Smoke"}></PrimaryAuthorHeader>
                <div className='blog-post-info'>06-24-2025</div>
            </div>

            <div className='blog-post-text-container text-background'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat ipsum eu nisi interdum, non ultricies neque tincidunt. Nunc ac odio arcu. Mauris mattis vulputate lectus pretium feugiat. Vestibulum nec elementum tortor. Sed eu dapibus tellus, gravida tristique orci. Morbi fermentum ex nisi, eget maximus ex dapibus vitae. Duis gravida lobortis interdum. Nam porttitor pharetra gravida. Nullam viverra ultrices nunc sed convallis. Nunc suscipit blandit nisi, in rutrum quam laoreet at. Ut quis diam a dolor scelerisque tempor. Integer sagittis vitae erat rutrum scelerisque.<br/>

                Curabitur ligula dui, dictum non neque nec, lobortis vehicula leo. Vivamus scelerisque et purus nec dictum. Nulla commodo et enim id lacinia. Praesent ligula mi, interdum ac tincidunt ac, convallis efficitur quam. Nam lobortis dignissim lacus at rhoncus. Fusce mattis dignissim est a cursus. Sed hendrerit nec nunc in dignissim. Vestibulum magna nunc, feugiat sit amet consectetur a, dignissim in nunc. Sed ullamcorper metus vestibulum tellus ornare posuere vel id tortor.<br/>

                Maecenas ornare auctor felis, at luctus neque mollis quis. Ut vel convallis nulla. Vivamus hendrerit gravida neque, ut gravida ante tincidunt et. Donec ipsum massa, luctus non dignissim at, euismod ut purus. Donec hendrerit fermentum blandit. Fusce semper auctor nibh, in vehicula risus semper a. Nam tellus nisi, lacinia in nulla eget, accumsan faucibus lacus. Vestibulum sodales sodales justo. Donec sit amet tincidunt libero, sed ullamcorper nunc. Donec ut urna sagittis, commodo mi sed, semper justo.<br/>

                In blandit lobortis lectus, vel aliquet ipsum ullamcorper non. Quisque tincidunt enim ut neque vestibulum, at commodo tellus cursus. Ut ultricies nisi ac quam mollis, ac rhoncus urna luctus. Fusce in faucibus urna. Nunc pellentesque nunc nisl, ut aliquet tellus blandit eget. Sed auctor lacinia viverra. Sed rutrum porta ante vel mollis. Praesent aliquet, sapien in faucibus semper, nulla lacus interdum dolor, in tempus felis nisi et enim. Duis aliquet accumsan rutrum. Nunc dignissim erat vitae auctor tincidunt. Proin in venenatis lorem, non rutrum tortor. Cras consequat dui quam, eu congue lacus fringilla interdum. Mauris quis lorem mattis, malesuada orci vel, dignissim tellus. Cras tincidunt rutrum nulla, eget iaculis lacus auctor vel.<br/>

                Pellentesque fringilla eget turpis a semper. Vestibulum porta gravida semper. Vestibulum placerat sem eget gravida fermentum. Sed ultricies faucibus orci, cursus venenatis neque iaculis mollis. Aenean dictum nibh quis elementum bibendum. Donec commodo magna at est mattis lacinia. In tristique gravida facilisis. Maecenas vulputate diam odio, nec accumsan metus fringilla eget. Aliquam gravida sollicitudin gravida. Donec interdum dapibus est, quis rutrum eros dictum ut. Integer vel semper mi, in hendrerit mi. Curabitur lacinia faucibus laoreet. 
                </p>
            </div>


        </div>
    )
}



export function Blog() {
    return (
        <div className='blog-post-card-container blog-background'>
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
    return (
        <div className="blog-card-container">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blogTitle={blog.title} blogUser={blog.user} blogDescription={blog.description}></BlogCard>
            )
            )
            }
        </div>
    )
}
