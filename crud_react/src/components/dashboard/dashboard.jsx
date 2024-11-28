import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const dashboard = () => {

  const[users,setUsers] = useState([])
  const navigate = useNavigate()

  const fetchUser = async () =>{
  
    try {
      const response = await fetch("http://localhost:8080/api/users")
     const result = await response.json();
     setUsers(result)
      // console.log(result);    
      
    } catch (error) {
      console.error(error);    
      
    }
  }
  
  useEffect(()=>{
    fetchUser();
  },[])

  const handlePostUser = ()=>{
      navigate("/user");
  }

  const handleDelete = async (userId)=>{
     try {      
      const response = await fetch(`http://localhost:8080/api/user/${userId}`,{
        method:"DELETE",
      })
      if(response.ok){
        fetchUser();
       
      }
      

      
     } catch (error) {
      console.error(error);
      
      
     }
  }

  const handleUpdate = (userId) =>{
    navigate(`/user/${userId}`)
    try {
      
    } catch (error) {
      console.error(error);
      
      
    }
  }

  return (
   <>
    <Container className="mt-4">
      <Button
       variant="contained"
       color="primary"
       onClick={handlePostUser}
       style={{maginBotton:5}}
      >
       Post User
      </Button>

      <Typography variant='h4' align='center' gutterBottom>
       User
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} >Username</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user)=>(
              <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>
              <IconButton 
                color='primary'
                onClick={()=>handleUpdate(user.id)}  
                                
                >                  
                  <EditIcon >
                  </EditIcon>
                </IconButton>
                <IconButton 
                color='error'
                onClick={()=>handleDelete(user.id)}                
                >                  
                  <DeleteIcon >
                  </DeleteIcon>
                </IconButton>                
                </TableCell>
            </TableRow>
            ))}
            
          </TableBody>
        </Table>
        
      </TableContainer>
      
    </Container>
   
   </>
  )
}

export default dashboard
