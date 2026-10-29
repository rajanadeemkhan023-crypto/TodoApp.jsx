import UserContext from "../Context/UserContext";
import { useContext } from "react"
function Login() {
//     const users = useContext(UserContext)

//     const user = useContext(UserContext)

//     console.log(user);
// console.log("hi")
// try {
// console.log("hello")
// }catch (error){
//     console.log(error)
// }
// console.log("hay")
const students = [
    {
        id : 1,
        Name : "Kashaf",
        City : "Karachi",
    },
    {
        id : 2,
        Name : "Munaza",
        City : "Islamabad",
    },
    {
        id : 3,
        Name : "Amina",
        City : "Lahore"
    },
    {
        id : 4,
        Name : "Mehak",
        City : "Karachi", 
    },
    {
        id : 5,
        Name : "Tayyiba",
        City : "Haripur"
    },
]
const result = students.find((elem,index) => {
    return elem.City === "Karachi"
})
console.log(result)
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}
export default Login;