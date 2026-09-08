import { useState } from "react"
import Swal from "sweetalert2"
import "./Todo.css";

function Todo(){


    const [value,setvalue]=useState("")
    const [todos, setTodos] = useState ([
        {
            value : "Adnan",
            disabled : true
        },
        {
            value : "Khan",
            disabled : true
        }
    ])

const addTodo = ()=> {

if (!value){
    // alert ("Please enter todo..")

Swal.fire({
  position: "center",
  icon: "error",
  title: "Please enter todo...",
  showConfirmButton: false,
  timer: 2000
});


} else {


    const oldTodo = [...todos, {value , disabled: true}]
    setTodos(oldTodo)
    setvalue ("")
}
}

const deleteAll = () => {
    setTodos([])

Swal.fire({
  position: "center",
  icon: "error",
  title: "All todo have been deleted!",
  showConfirmButton: false,
  timer: 2000
});


}
const deleteTodo = (i) => {
    console.log(i)

    const oldTodo =[...todos]
    oldTodo.splice(i,1)
    setTodos(oldTodo)
}

const editTodo = (i) => {
    // console.log (i);

    const oldTodo = [...todos]
    oldTodo.splice(i,1, {...value , disabled: false})
    setTodos(oldTodo)
   
}


return(

<div>
    <h2>Todo App!</h2>
    <input value={value} type="text" placeholder="Enter Todo"  onChange={(e) => setvalue(e.target.value)} />
<button onClick={addTodo}>Add</button>
<button onClick={()=>deleteAll()}>deleteAll</button>

<ul>
    {
        todos.map ((v,i) => {
            return (
                <li key= {i}>

<input type="text" disabled = {v.disabled} value={v.value} onChange={(e)=> v.value = e.target.value } />



{
    v.disabled ? (
    <button onClick={() => editTodo(i)}>Edit</button>
    ) : (
        <button onClick={() => {
            v.disabled = true
            setTodos ([...todos])

Swal.fire({
  position: "center",
  icon: "success",
  title: "Your todo has been updated!",
  showConfirmButton: false,
  timer: 1500
});


        }}>Update</button>
    )
}

<button onClick={() => deleteTodo(i)}>Delete</button>


                </li>
              
            )
        })
    }

</ul>


</div>

)


}



export default Todo;