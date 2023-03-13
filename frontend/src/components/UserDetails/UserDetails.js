import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import Box from '@mui/material/Box';
import Home from "../Home";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 2,
    },
}));

export default function UserDetails() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        axios.get("http://localhost:5022/api/users").then((response) => {
            setUsers(response.data);
        }).catch((error) => { console.log(error); });
    }, []);

    if (!users) return null;
    return (
        <div>
            <Box component="main" sx={{ flexGrow: 2, p: 16, paddingTop: '60px' }}>
                <Home />
                <p></p>
                <h2>User Details List</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">User ID</StyledTableCell>
                                <StyledTableCell align="center">User Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Gender</StyledTableCell>
                                <StyledTableCell align="center">Address</StyledTableCell>
                                <StyledTableCell align="center">User Role</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <StyledTableRow key={row.user_id}>
                                        <StyledTableCell align="center">{row.user_id}</StyledTableCell>
                                        <StyledTableCell align="center">{row.firstname}</StyledTableCell>
                                        <StyledTableCell align="center">{row.email}</StyledTableCell>
                                        <StyledTableCell align="center">{row.gender}</StyledTableCell>
                                        <StyledTableCell align="center">{row.address}</StyledTableCell>
                                        <StyledTableCell align="center">{row.userrole}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                        <TableFooter style={{ textAlign: "right" }} >
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 15, 20, 25, 100]}
                                    component="div"
                                    count={users.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage} />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};
