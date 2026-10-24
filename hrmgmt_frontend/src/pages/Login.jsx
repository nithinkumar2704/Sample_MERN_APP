/* function Login () {
return (
    <div>
        <h1>Welcome to Login Page</h1>
    </div>
)
}
export default Login */
import {useState} from "react" 
function Login(){
    let [emailid,setEmailid]=useState("")
    let [password,setPassword]=useState("")
    let handleLogin=(e)=>{
        e.preventDefault()
        //used to collect the input from the form
        if(emailid=="admin@gmail.com" && password=="admin"){
            console.log("Login success")
        }else{
            console.log("Login failed")
        }}
return(
    <div>
        <form onSubmit={handleLogin}>
            <br></br>
            <input type="text" value={emailid} onChange={event=>setEmailid(event.target.value)} placeholder="Enter emailid"></input><br/>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password"></input><br/>
            <br/>
            <button type="submit">Login</button>
        </form>
        <p>{emailid}</p>
        <p>{password}</p>
    </div>
      )}
export default Login