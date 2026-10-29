import { useParams } from "react-router-dom"

function Profile(){

const user = useParams ()
console.log(user);

    return(
        <div>
            <h1>Profile:{user.username}</h1>

        </div>
    )
}

export default Profile;