
import { useEffect, useState, Activity } from 'react'
import ViewTransition from 'react'
import "./sidebar.css"
import '../index.css'
import '../App.css'
import {SmallAuthorHeader, PrimaryAuthorHeader} from '../primarycomponents/text_component.jsx'



function SideBar({barContent}) {
    const [isShowingSidebar, setIsShowingSidebar] = useState(true);
    return (
        <div className={isShowingSidebar ? "sidebar-open sidebar-container" : "sidebar-closed sidebar-container"}>

            
            <button onClick={() => setIsShowingSidebar(!isShowingSidebar)} className="sidebar-button">
                <svg className={isShowingSidebar ? "button-rotate" : ""} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="arrow-ios-back"> <rect width="2rem" height="2rem" transform="rotate(90 12 12)" opacity="0"></rect> <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"></path> </g> </g> </g></svg>
            </button>
            
            <div className="sidebar">
                <div className="search-bar">
                    <input type="text"></input>

                </div>
                <div className="sidebar-content">
                    <div className="sidebar-result">
                        <PrimaryAuthorHeader text="Nya trall Skruvar i lager"></PrimaryAuthorHeader>
                        
                    </div>
                    <div className="sidebar-result">
                        <PrimaryAuthorHeader text="Nya storlekar av reglar"></PrimaryAuthorHeader>
                        
                    </div>
                </div>

            </div>

        </div>


        
    )
}
export default SideBar