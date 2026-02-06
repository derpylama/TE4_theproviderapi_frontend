import { useNavigate } from "react-router-dom"

function PermissionButton({
    userID,
    text,
    ownerID,
    blogID,
    isLoading,
    hasError,
    perms = [],
}) {
    const navigate = useNavigate()


    function handleClick() {
        navigate("/blog-editor/" + blogID)
    }

    if (isLoading || hasError) return null

    if (userID == ownerID) {
        return <button onClick={handleClick}>{text}</button>
    }

    if (perms.includes(userID)) {
        return <button onClick={handleClick}>{text}</button>
    }

    return null
}

export default PermissionButton