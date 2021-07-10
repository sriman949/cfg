import React, { useEffect } from "react";
import './style.css'
import { Button } from '@material-ui/core';
//import Map from './Map'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


//   const useStyles = makeStyles({
//       table: {
//         minWidth: 400,
//         padding : '50px',
//         margin : '40px',
//         color : 'blue',
       
//       },
     
//   });


  const themeX = createMuiTheme({
    palette: {
      type: "dark",
    }

   
  });

function createData(name, date, score) {
    return { name, date, score };
  }
  
  const rows = [
    // {name:'Frozen yoghurt', calories: 159, fat:6.0, carbs: 24, proteins:4.0},

    createData('Ice cream sandwich', 237, 9.0),
    createData('Eclair', 262, 16.0),
    createData('Cupcake', 305, 3.7),
    createData('Gingerbread', 356, 16.0),
  ];

  function Welcome(props){
    const isApproved = props.isApproved;
       // const classes = useStyles();
        return(
            <TableContainer component={Paper}>
        <Table className="newtable" aria-label="simple table">
        <div className="overflow-hidden">
          <TableHead className="table-header">
            <TableRow>
                
              <TableCell >Name</TableCell>
              <TableCell color="red">Activity date</TableCell>
              
                if(isApproved){
                    <TableCell color="red">Score</TableCell>
                }
                
            
            
              {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>


    {/* //over here how do i filter based on is-scored and is not scored? 
    //will there be a variable called isapproved, jisme yes ya no hoga types?
    // and if isapproved is true then score is displayed otherwise not */}


            {rows.map((row) => (
              <TableRow key={row.name}>
                  <Button onClick={() => { alert('clicked') }}> {row.name}</Button>
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.score}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
          </div>
        </Table>
      </TableContainer>
      
        )
  }
  
export default Welcome;