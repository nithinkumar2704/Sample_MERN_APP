import {useState} from "react" 
function Register(){
    let [name,setName]=useState("")
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let [age,setAge]=useState("")
    let handleRegister=(e)=>{
        e.preventDefault()
        //used to collect the input from the form 
    }
return(
    <div>
        <form onSubmit={handleRegister}>
            <br></br>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter name"></input><br/>
            <input type="text" value={emailid} onChange={event=>setEmailid(event.target.value)} placeholder="Enter emailid"></input><br/>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password"></input><br/>
            <input type="number" value={age} onChange={e=>setAge(e.target.value)} placeholder="Enter age"></input><br/>
            <br/>
            <button type="submit">Register</button>
        </form>
        <p>{name}</p>
        <p>{emailid}</p>
        <p>{password}</p>
        <p>{age}</p>
    </div>
      )}
export default Register