
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(){
     let [email,setEmail]=useState("")
     let [password,setPassword]=useState("")
     let navigate = useNavigate()
     let handleLogin=async (e)=>{
        e.preventDefault()
        //used to collect the input from the form
        if(email=="admin@gmail.com" && password=="admin"){
            navigate("/adminhome")
        }else{
            let req=await fetch("http://localhost:3000/api/emp/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,password})
            });
            let res=await req.json();
            console.log(res)
            if(res.user){
                localStorage.setItem("currentuser",JSON.stringify(res.user))
                if(res.user.role=="HR"){
                    navigate("/hrhome") 
                }else{
                    navigate("/emphome")
                }
            }else{
                console.log(res.msg)
            }
        }
     }
    return(
        <div>
          <form  onSubmit={handleLogin}>
<input type="text" 
   value={email} 
   onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email"></input><br/>
            <input type="password" 
            value={password}
    onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"></input>
            <br/>
            <button type="submit">Login</button>
          </form>
          <p>{email}</p>
          <p>{password}</p>
        </div>
    )
}
export default Login