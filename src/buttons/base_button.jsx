export default BaseButton 

import "./base_button.css"

function BaseButton({text, onClick}) {
    return (
        <div onClick={onClick} className="button-body">
            <h2>{text}</h2>
        </div>
    )
}