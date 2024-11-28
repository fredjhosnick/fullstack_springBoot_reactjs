import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./PostUser.css"

const postUser = () => {
   const [formData, setFormData] = useState({
    username:'',
    email:'',
    phoneNumber:'',
    address:''
   
   })
   const navigate = useNavigate();

   const handleInput = (e)=>{
     const {name,value} =e.target;
     setFormData({
      ...formData,
      [name]:value
     })
   }

   const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("http://localhost:8080/api/user",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
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
            Create new User
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
            label="Username"
            type="text"
            name="username"
            variant="filled"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleInput}
            />
            <TextField
            label="Email"
            type="email"
            name="email"
            variant="filled"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInput}
            />
            <TextField
            label="Phone number"
            type="text"
            name="phoneNumber"
            variant="filled"
            fullWidth
            margin="normal"
            value={formData.phoneNumber}
            onChange={handleInput}
            />
            <TextField
            label="Address"
            type="text"
            name="address"
            variant="filled"
            fullWidth
            margin="normal"
            value={formData.address}
            onChange={handleInput}
            />
            
            <Button  className="btn" variant="contained" color="primary" type="submit" fullWidth>
              Post User
            </Button>
           
          </form>
         </div>
    </>
  )
}

export default postUser
