export default SideBar

import "./sidebar.css"

function SideBar({barContent}) {
    return (
        <div className="sidebar">
            <div className="search-bar">

            </div>
            {
                barContent.map((child) => (
                    
                    <div className="sidebar-content">
                        <h3>{child.title}</h3>
                        <p>
                            {child.description}
                        </p>


                    </div>
                ))
            }
        </div>
    )
}
