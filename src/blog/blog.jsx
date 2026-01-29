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

export function BlogMain() {
    return (
        <div className="blog-card-container">
            <BlogCard blogTitle="Bloggen om nordpolen" blogUser="Elf" blogDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam  purus, tristique nec scelerisque ac, lacinia sit amet lorem.  Pellentesque ut tortor lobortis, facilisis est ut, commodo ligula.  Curabitur purus massa, tristique a imperdiet id, rhoncus id libero. In  hac habitasse platea dictumst. Aenean maximus metus nec tellus eleifend, sed varius risus scelerisque. Suspendisse vitae diam a elit mattis  finibus. Proin elementum lorem id tristique accumsan. Sed volutpat  lectus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et  ultrices posuere cubilia curae; Nam fringilla molestie gravida.  Vestibulum ornare risus ipsum, eget ullamcorper purus blandit pretium.  Aliquam pulvinar hendrerit elit, ac vulputate lorem lacinia quis. Etiam risus orci, facilisis et efficitur dictum, tincidunt placerat  nibh. Curabitur a viverra lacus. Vestibulum id mollis massa. Proin  consectetur magna egestas arcu iaculis, quis malesuada massa tristique.  Phasellus vitae tincidunt est. Phasellus suscipit hendrerit nisi, a  pulvinar diam. Quisque nunc dui, molestie nec malesuada at, iaculis vel  elit. Etiam dictum malesuada nibh eget hendrerit. Nam venenatis id ante  sed convallis. Aliquam laoreet molestie luctus. Maecenas finibus a nibh  eu bibendum."></BlogCard>
            <BlogCard blogTitle="Hundar är häftiga." blogUser="John Wick" blogDescription="       FADE IN:
                         
                         
          EXT. THE COUNTRYSIDE - ESTABLISHING - EARLY DAY
                         
          SUPER: ARDMORE, PENNSYLVANIA
                         
          A verdant landscape of rolling hills, lush countryside, and
          ambient peace.
                         
                         
          EXT. THE WICK HOME - ESTABLISHING - EARLY DAY
                         
          A small, quaint, two-bedroom farmhouse: a classic. Nearby, a
          small barn -its paint chipped, wood worn- sits nestled within
          the setting. The homestead feels slightly abandoned, the
          facade -especially the roof- in dire need of an overhaul.
                         
                         
          INT. THE WICK HOME - THE MASTER BEDROOM - CONTINUOUS
                         
          The hour hand of an old, electric clock shifts slightly,
          marking six a.m. A soft alarm sounds. Beneath the blankets,
          a body shifts, a weathered hand reaching out to silence the
          antique.
                         
          A beat... a sigh... a groan... and JOHN WICK -early sixties,
          salt-and-pepper hair, three-day beard, former boxer, former
          military, tired, beaten down, and at wit's end- sits up,
          staring unblinkingly out at the day.
                         
          A beat... and he stands, donning a weathered robe and a pair
          of slippers. John stuffs his hands into his pockets...
                         
                         
          INT. THE WICK HOME - THE HALLWAY - CONTINUOUS
                         
          ...and shuffles down the corridor, the walls overflowing with
          family pictures, each badly in need of dusting. They
          catalogue a long and healthy life with his wife, Norma; the
          pictures presenting a time line of sorts. No children, yet
          sheer, unadulterated happiness.
                         
                         
          INT. THE WICK HOME - THE LIVING ROOM - CONTINUOUS
                         
          As John makes his way through his home, we can see that it is
          cluttered and unorganized. Dirty, in fact, as if it hasn't
          been cleaned in months.
                                                                      2.
                         
                         
          EXT. THE WICK HOME - CONTINUOUS
                         
          John opens the door, retrieves the newspaper, closes, and
          locks the door behind him, without giving the outside so much
          as a glance.
                         
                         
          INT. THE WICK HOME - THE KITCHEN - CONTINUOUS
                         
          John unceremoniously tosses the newspaper onto the table,
          opens a cupboard, and measures out a couple of tablespoons of
          Folgers Coffee into an old percolator.
                         
          As it begins to bubble, John open the fridge, studies its
          contents for a moment or two, and then closes it, abandoning
          the thought of breakfast.
                         
          He pours himself a cup of coffee and sits at the table. The
          newspaper is ignored. He drinks in silence for a long, dark,
          brooding moment, the loneliness almost unsettling.
                         
          Suddenly, the phone on the wall RINGS.
                         
          John lowers his cup, staring at the device, his eyes tired.
          A beat... and he stands, walking slowly to answer it.
                         
                                             JOHN
                    This is John.
                         
          As he listens to the voice on the other end, John remains
          still... stoic.
                         
                                                JOHN (CONT'D)
                                          (WHISPERS)
                    Ok.
                         
          John hangs up the phone and returns to the table, sinking
          slowly down into his chair.
                         
          A long beat...
                         
          ...and John begins to weep, his hands trembling as he lowers
          his face in excruciating, utter, and complete sorrow.
                         
                                                                          FADE TO:
                         
                         
          EXT. THE BARN - ESTABLISHING - DAY
                         
          Having shaved and showered, wearing an old -but well-fitted-
          gray suit, John pushes open the garage door...
                         
          ...to reveal a legend in dire need of a total overhaul: a
          black, 1969 FORD MUSTANG `BOSS 429'.
                                                                      3.
                         
                         
          A smile plays at his lips as John walks into the garage,
          running a hand along the chassis, desperately in need of a
          wash and wax. Behind him, the wall is lined with tools: a
          mechanic's dream enclave.
                         
                         JOHN ENTERS-
                         
                         
          INT. JOHN'S CAR - CONTINUOUS
                         
          -and closes the door behind him.
                         
          John takes a moment to breath it in: he loves this car...
          although he hasn't taken very good care of it as of late. A
          beat... and he slips the key into the ignition, twisting it,
          the motor coughing to life, the exhaust pipe belching black
          smoke."></BlogCard>
            <BlogCard blogTitle="Bloggen om nordpolen" blogUser="Elf" blogDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam  purus, tristique nec scelerisque ac, lacinia sit amet lorem.  Pellentesque ut tortor lobortis, facilisis est ut, commodo ligula.  Curabitur purus massa, tristique a imperdiet id, rhoncus id libero. In  hac habitasse platea dictumst. Aenean maximus metus nec tellus eleifend, sed varius risus scelerisque. Suspendisse vitae diam a elit mattis  finibus. Proin elementum lorem id tristique accumsan. Sed volutpat  lectus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et  ultrices posuere cubilia curae; Nam fringilla molestie gravida.  Vestibulum ornare risus ipsum, eget ullamcorper purus blandit pretium.  Aliquam pulvinar hendrerit elit, ac vulputate lorem lacinia quis. Etiam risus orci, facilisis et efficitur dictum, tincidunt placerat  nibh. Curabitur a viverra lacus. Vestibulum id mollis massa. Proin  consectetur magna egestas arcu iaculis, quis malesuada massa tristique.  Phasellus vitae tincidunt est. Phasellus suscipit hendrerit nisi, a  pulvinar diam. Quisque nunc dui, molestie nec malesuada at, iaculis vel  elit. Etiam dictum malesuada nibh eget hendrerit. Nam venenatis id ante  sed convallis. Aliquam laoreet molestie luctus. Maecenas finibus a nibh  eu bibendum."></BlogCard>
            <BlogCard blogTitle="Hundar är häftiga." blogUser="John Wick" blogDescription="       FADE IN:
                         
                         
          EXT. THE COUNTRYSIDE - ESTABLISHING - EARLY DAY
                         
          SUPER: ARDMORE, PENNSYLVANIA
                         
          A verdant landscape of rolling hills, lush countryside, and
          ambient peace.
                         
                         
          EXT. THE WICK HOME - ESTABLISHING - EARLY DAY
                         
          A small, quaint, two-bedroom farmhouse: a classic. Nearby, a
          small barn -its paint chipped, wood worn- sits nestled within
          the setting. The homestead feels slightly abandoned, the
          facade -especially the roof- in dire need of an overhaul.
                         
                         
          INT. THE WICK HOME - THE MASTER BEDROOM - CONTINUOUS
                         
          The hour hand of an old, electric clock shifts slightly,
          marking six a.m. A soft alarm sounds. Beneath the blankets,
          a body shifts, a weathered hand reaching out to silence the
          antique.
                         
          A beat... a sigh... a groan... and JOHN WICK -early sixties,
          salt-and-pepper hair, three-day beard, former boxer, former
          military, tired, beaten down, and at wit's end- sits up,
          staring unblinkingly out at the day.
                         
          A beat... and he stands, donning a weathered robe and a pair
          of slippers. John stuffs his hands into his pockets...
                         
                         
          INT. THE WICK HOME - THE HALLWAY - CONTINUOUS
                         
          ...and shuffles down the corridor, the walls overflowing with
          family pictures, each badly in need of dusting. They
          catalogue a long and healthy life with his wife, Norma; the
          pictures presenting a time line of sorts. No children, yet
          sheer, unadulterated happiness.
                         
                         
          INT. THE WICK HOME - THE LIVING ROOM - CONTINUOUS
                         
          As John makes his way through his home, we can see that it is
          cluttered and unorganized. Dirty, in fact, as if it hasn't
          been cleaned in months.
                                                                      2.
                         
                         
          EXT. THE WICK HOME - CONTINUOUS
                         
          John opens the door, retrieves the newspaper, closes, and
          locks the door behind him, without giving the outside so much
          as a glance.
                         
                         
          INT. THE WICK HOME - THE KITCHEN - CONTINUOUS
                         
          John unceremoniously tosses the newspaper onto the table,
          opens a cupboard, and measures out a couple of tablespoons of
          Folgers Coffee into an old percolator.
                         
          As it begins to bubble, John open the fridge, studies its
          contents for a moment or two, and then closes it, abandoning
          the thought of breakfast.
                         
          He pours himself a cup of coffee and sits at the table. The
          newspaper is ignored. He drinks in silence for a long, dark,
          brooding moment, the loneliness almost unsettling.
                         
          Suddenly, the phone on the wall RINGS.
                         
          John lowers his cup, staring at the device, his eyes tired.
          A beat... and he stands, walking slowly to answer it.
                         
                                             JOHN
                    This is John.
                         
          As he listens to the voice on the other end, John remains
          still... stoic.
                         
                                                JOHN (CONT'D)
                                          (WHISPERS)
                    Ok.
                         
          John hangs up the phone and returns to the table, sinking
          slowly down into his chair.
                         
          A long beat...
                         
          ...and John begins to weep, his hands trembling as he lowers
          his face in excruciating, utter, and complete sorrow.
                         
                                                                          FADE TO:
                         
                         
          EXT. THE BARN - ESTABLISHING - DAY
                         
          Having shaved and showered, wearing an old -but well-fitted-
          gray suit, John pushes open the garage door...
                         
          ...to reveal a legend in dire need of a total overhaul: a
          black, 1969 FORD MUSTANG `BOSS 429'.
                                                                      3.
                         
                         
          A smile plays at his lips as John walks into the garage,
          running a hand along the chassis, desperately in need of a
          wash and wax. Behind him, the wall is lined with tools: a
          mechanic's dream enclave.
                         
                         JOHN ENTERS-
                         
                         
          INT. JOHN'S CAR - CONTINUOUS
                         
          -and closes the door behind him.
                         
          John takes a moment to breath it in: he loves this car...
          although he hasn't taken very good care of it as of late. A
          beat... and he slips the key into the ignition, twisting it,
          the motor coughing to life, the exhaust pipe belching black
          smoke."></BlogCard>
        
        </div>
    )
}
