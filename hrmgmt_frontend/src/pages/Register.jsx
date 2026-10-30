import {useState} from "react"
function Register(){
    let [name,setName]=useState("")
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let [age,setAge]=useState(17)
    return(<div>
        <input type="text" value={name} placeholder="Enter name"></input><br/>
        <input type="text" value={emailid} placeholder="Enter emailid"></input><br/>
        <input type="password" value={password} placeholder="enter password"></input><br/>
        <input type="number" value={age} placeholder="Enter age"></input><br/>
        <button type="submit">Register</button>
    </div>)
}
export default Register