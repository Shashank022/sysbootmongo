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
import moment from 'moment';
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
        border: 0,
    },
}));

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [eventtasks, setEventtasks] = useState([]);
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
        axios.get("http://localhost:5022/api/tasks").then((response) => {
            setTasks(response.data)
        }).then(
            //console.log(response.data);
            // axios.get("http://localhost:5022/api/eventswithteams").then((response) => {
            //     setEventtasks(response.data);
            //     console.log("response.data", response.data);
            // })
        ).catch((err) => { console.log(err); });
    }, []);

    if (!tasks) return null;
    return (
        <div>
            <h2>Tasks List</h2>
            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Task Name</StyledTableCell>
                            <StyledTableCell align="center">Task Created</StyledTableCell>
                            <StyledTableCell align="center">Task Updated</StyledTableCell>
                            <StyledTableCell align="center">Team ID</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <StyledTableRow
                                    key={row.task_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <StyledTableCell align="center">{row.task_name}</StyledTableCell>
                                    <StyledTableCell align="center">{moment(row.task_created).calendar()}</StyledTableCell>
                                    <StyledTableCell align="center">{row.task_updated}</StyledTableCell>
                                    <StyledTableCell align="center">{row.team_id}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                    <TableFooter sx={{ alignContent: 'right' }} >
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 15, 20, 25, 100]}
                                count={tasks.length}
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
