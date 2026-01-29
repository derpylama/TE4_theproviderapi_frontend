import './topbar.css'
import reactLogo from '../assets/react.svg'

function NavButton(prop) {
    
    return ( 

        <button onClick={() => {alert("ButtonPressed")}} className='topbar-nav-button'>
            <p>{prop.text}</p>

        </button>

    )
}



function Topbar() {


    return (
        <div className="topbar-container">
            
                <img src={reactLogo} className="topbar-logo"  alt="React logo" />

            <NavButton text="Home"/>
            <nav>
                Na
            </nav>
            <button className='topbar-button'>Logon</button>
        </div>
    )
}

export default Topbar