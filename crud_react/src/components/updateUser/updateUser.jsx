import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const updateUser = () => {

  const {id} = useParams();
  const [user, setUser] = useState({
    username:'',
    email:'',
    phoneNumber:'',
    address:''
   
   })
   const navigate = useNavigate();

   
  
  useEffect(()=>{
    const fetchUser = async () =>{
  
      try {
        const response = await fetch(`http://localhost:8080/api/user/${id}`)
       const result = await response.json();
       setUser(result)
        // console.log(result);    
        
      } catch (error) {
        console.error(error);    
        
      }
    }
    fetchUser();
  },[])

  const handleInput = (e)=>{
    const {name,value} =e.target;
    setUser({
     ...user,
     [name]:value
    })
  }

  const handleSubmit = async (e) =>{
   e.preventDefault();
   try {
     const response = await fetch(`http://localhost:8080/api/user/${id}`,{
       method:"PATCH",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify(user)
     });

     const result = await response.json();
     console.log(result);
     navigate("/");
     
   } catch (error) {
     console.error(error);
     
     
   }
  }



  return (
    <>
      <div className="center-form">
          <Typography variant="h4" gutterBottom>
            Update User
          </Typography>
          <form onSubmit={handleSubmit} >
            <TextField
            label="Username"
            type="text"
            name="username"
            variant="filled"
            fullWidth
            margin="normal"
            value={user.username}
            onChange={handleInput}
         
            />
            <TextField
            label="Email"
            type="email"
            name="email"
            variant="filled"
            fullWidth
            margin="normal"
            value={user.email}
            onChange={handleInput}
  
            />
            <TextField
            label="Phone number"
            type="text"
            name="phoneNumber"
            variant="filled"
            fullWidth
            margin="normal"
            value={user.phoneNumber}
            onChange={handleInput}
          
            />
            <TextField
            label="Address"
            type="text"
            name="address"
            variant="filled"
            fullWidth
            margin="normal"
            value={user.address}
            onChange={handleInput}
            />
            
            <Button  className="btn" variant="contained" color="primary" type="submit" fullWidth>
              Update User
            </Button>
           
          </form>
         </div>
      
    </>
  )
}

export default updateUser
