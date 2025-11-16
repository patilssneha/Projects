import {useState} from "react";
function Login(){
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (username.trim() === "") {
            setMessage("Please enter username");

        }else{
            setMessage(`Welcome ${username}`); // if you are using $ then you should use `` not ''
        }
    }
    return(
        <div style={{margin: "30px"}}>
            <h2> Login From</h2>

            <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br />
            <button onClick={handleLogin}></button>
            <br /><br />
            {message && <h3>{message}</h3>}
            
        </div>
    );
}
export default Login;