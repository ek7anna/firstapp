import {Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({person}) => {
    const [page,setPage]=useState('Anime')
    const[count,setCount]=useState(0)
    const[form,setForm]=useState({
      Name:person.Name,
      Email:person.Email,
      Password:person.Password,
      Address:person.Address
    })
    function valueAdd()
    {console.log(form)
        // setCount(count+1)
    }
    function valueCap(e)
    {console.log(e)
      setForm({...form,[e.target.name]:e.target.value})

    }
  return (
     <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}>
    
    <h1>Welcome to {page} Page</h1>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="NAME"
        name='Name'
        onChange={valueCap}
        value={form.Name}
      />
      </div>
      
      <div>
      <TextField
        
        id="outlined-disabled"
        label="Address"
        defaultValue="Address"
        name='Address'
        onChange={valueCap}
        value={form.Address}
      />
       </div>
       <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        name='Password'
        onChange={valueCap}
        value={form.Password}
      />
      </div>
      <div>
      <TextField
        id="outlined-defined"
        label="Email"
        defaultValue="Email"
       name='Email'
       onChange={valueCap}
       value={form.Email}
      />
      </div>
      {<div>
        <Button variant='contained' onClick={valueAdd}>Register</Button>
        <br></br>
         {/* <small>Button is clicked {count} times </small>  */}
      </div> }
      </Box>
  )
}

export default Add