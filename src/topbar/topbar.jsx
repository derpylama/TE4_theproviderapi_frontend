import './topbar.css'
import reactLogo from '../assets/react.svg'
import { NavLink } from 'react-router-dom'

const NavStyle = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#ffffffff',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal'

});



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
            <nav>
                <NavLink to="/wiki" style={NavStyle} className={"nav-link"}>
                    <p>Wiki</p>
                </NavLink>
                <NavLink to="/calendar" style={NavStyle} className={"nav-link"}>
                    <p>Kalender</p>
                </NavLink>
                <NavLink to="/" style={NavStyle} className={"nav-link"}>
                    <p>Blogg</p>
                </NavLink>
            </nav>
            

            <NavButton text="Home"/>
            <nav>
                Na
            </nav>
            <button className='topbar-button'>Logon</button>
        </div>
    )
}

export default Topbar