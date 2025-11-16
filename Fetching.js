import { useEffect, useState} from "react";

function FetchingApi(){
    const[users,setUsers]= useState([]);
    const[loading, setLoading]= useState(true);
    const[error,setError] =useState("");

     useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(response =>{
         if(!response.ok) throw new Error("Failed to fetch");  
        
        return  response.json();
        })
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch(err =>{
            setError(err.message);
            setLoading(false)
        })
        
       

     },[])
     return(
     <div>
        <h1> Users List</h1>
        {users.map(user =>(
            <><p key={user.id}>{user.name}</p>
            <p key={user.id}>{user.email}</p></>
        ))}
        </div>
        
    )
}
export default FetchingApi;