import './component.css'
import '../index.css'




export function PrimaryAuthorHeader({text}) {
    return (
        <div className="primary-author-header">
            {text}
        </div>
    )
}

export function SmallAuthorHeader({text}) {
    return (
        <div className="small-author-header">
            {text}
        </div>
    )
}