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
export default function Teams() {
    const [teams, setTeams] = useState([]);
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
        axios.get("http://localhost:5022/api/teams").then((response) => {
            setTeams(response.data);
        }).catch((err) => { console.log(err); });
    }, []);

    if (!teams) return null;
    return (
        <div>
            <h2>Teams List</h2>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Team Name</StyledTableCell>
                            <StyledTableCell align="center">Team ID</StyledTableCell>
                            <StyledTableCell align="center">Event ID</StyledTableCell>
                            <StyledTableCell align="center">Task ID</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <StyledTableRow
                                    key={row.team_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <StyledTableCell component="th" scope="row" align="center">
                                        {row.team_name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.team_id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.event_id}</StyledTableCell>
                                    <StyledTableCell align="center">{row.task_id}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                    <TableFooter sx={{ align: 'right' }} >
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                rowsPerPageOptions={[5, 10, 15, 20, 25, 100]}
                                count={teams.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}>
                            </TablePagination>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
};