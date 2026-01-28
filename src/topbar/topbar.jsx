import './topbar.css'


function NavButton(prop) {
    
    return ( 

        <button onClick={() => {alert("ButtonPressed")}} className='topbar-button'>
            {prop.text}
        </button>

    )
}



function Topbar() {


    return (
        <div className="topbar-container">
            <NavButton text="Login"/>
        </div>
    )
}

export default Topbar