import { useNavigate } from "react-router-dom";
function HrHome() {
    let currentuser=JSON.parse(localStorage.getItem("currentuser")) //json.parse used to convert json to string
    let navigate=useNavigate()
    let handleLogout=(e)=>{
        localStorage.removeItem("currentuser")
        navigate("/login")
    }
    return(
        <div>
            <h1>Welcome {currentuser.name}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>  
    )
}
export default HrHome;