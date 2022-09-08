import React from 'react';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {Paper,TableHead,Table,TableBody,TableCell,TableContainer,TableRow} from '@mui/material';
import classes from "./jobTable.module.css";
import { Link } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const JobTable = (props) => {

  return (
    <div >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{backgroundColor:"#f8f8f8"}}>
          <TableRow>
            <StyledTableCell >ID</StyledTableCell>
            <StyledTableCell >FIRST NAME</StyledTableCell>
            <StyledTableCell >LAST NAME</StyledTableCell>
            <StyledTableCell >DATE OF BIRTH</StyledTableCell>
            <StyledTableCell >ADDRESS</StyledTableCell>
            <StyledTableCell >DATE OF JOINING</StyledTableCell>
            <StyledTableCell >SALARY</StyledTableCell>
            <StyledTableCell >DESIGNATION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell className={classes.mainTab} component="th" scope="row">
              <Link to={`/employee-detail/${row.id}`}>
                {row.id}
              </Link>
                
              </StyledTableCell>
              <StyledTableCell className={classes.launch}>
              <div>
              {row.first_name}
              </div>
              </StyledTableCell>
              <StyledTableCell >{row.last_name}</StyledTableCell>
              <StyledTableCell >{row.date_of_birth}</StyledTableCell>
              <StyledTableCell>{row.address}</StyledTableCell>
              <StyledTableCell>{row.date_of_joining}</StyledTableCell>
              <StyledTableCell>{`$${row.salary}`}</StyledTableCell>
              <StyledTableCell className={classes.info}>
              <div>
                {row.designation}
              </div>
          
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default JobTable;