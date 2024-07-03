
import React,{useEffect,useState}from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const View = () => {
    // const rows=[{name:'Maya', email:'mr@gmail.com',phone:7872827772},
    //     {name:'Jiya', email:'ji@gmail.com',phone:7872890772},
    //     {name:'Miya', email:'ghid@gmail.com',phone:79655427772}]
    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('https://dummyjson.com/users').then((res)=>{
        // console.log(res.data.users)
        setRows(res.data.users)
      })
},[])
  return (
    <div>
         <TableContainer style={{marginTop: '7%'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default View