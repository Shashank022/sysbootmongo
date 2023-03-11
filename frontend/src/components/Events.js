import "./Event.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEvent from './AddEvent';
// import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}));

const notify = () => toast("Updated the Message Sucessfully!");
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Events() {
    const [events, setEvents] = useState([]);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ '': '' });
    const [updateEvent, setUpdateEvent] = useState({ '': '' });

    useEffect(() => {
        axios.get('http://localhost:5022/api/events').then((response) => {
            setEvents(response.data);
        }).catch((error) => { console.log(error); });
    }, []);


    const handleOpen = row => () => {
        // console.log("row", row);
        setOpen(true);
        setUpdateEvent(row);
        setNewEvent({ event: row });
    };
    const [searchQuery, setSearchQuery] = useState("");
    const [searched, setSearched] = useState("");

    useEffect(() => {
        if (searchQuery) {
            setSearched(
                events.filter((event) => {
                    return Object.values(event).join('').toLowerCase()
                        .includes(searchQuery.toLowerCase())
                }));

        } else {
            setSearched(events);
        }

    }, [searchQuery, events])

    const handleClose = () => setOpen(false);

    function handleClick() {
        axios.put('http://localhost:5022/api/event/update', updateEvent).then((resp) => {
            if (resp) {
                notify();
            }
        }).then(() => {
            axios.get('http://localhost:5022/api/events').then((response) => {
                setEvents(response.data);
            }).catch((error) => { console.log(error); });
        })
            .catch((error) => { console.log(error); });
        handleClose();
    }

    function openInfoModal() {
        // setOpenModel(true);
    }

    function editTask(name, event) {
        setUpdateEvent({
            'event_name': name,
            'created_date': event.created_date,
            'event_id': +event.event_id,
            'created_by': event.created_by,
            'id': event.id,
            'team_id': event.team_id,
            'updated_by': event.updated_by,
        });
    }

    if (!events) return null;
    return (
        <div className={classes.root}>
            <input
                onChange={(event) => setSearchQuery(event.target.value)}
                className="search"
                placeholder="Search Events...!!"
            />
            <p></p>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                {
                    searchQuery.length > 0 && searched != null ? (
                        searched.map((row) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={row.event_id}>
                                    <Card sx={{ maxWidth: 800 }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {row.event_name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {row.created_by} - {moment(row.created_date).calendar()} - {row.updated_by}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={handleOpen(row)}>Update</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description">
                                                <Box sx={style}>
                                                    <Typography gutterBottom variant="h5" component="div" contentEditable="true" onInput={e => editTask(e.currentTarget.textContent, updateEvent)} suppressContentEditableWarning={true}>
                                                        {updateEvent.event_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {updateEvent.created_by} - {moment(updateEvent.created_date).calendar()} - {updateEvent.updated_by}
                                                    </Typography><br></br>
                                                    <Button size="small" onClick={() => handleClick()}>Update</Button>
                                                    <Button size="small" onClick={handleClose}>Close</Button>
                                                </Box>
                                            </Modal>
                                            <Button size="small" onClick={openInfoModal()} >More Info</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    ) : (
                        events.map((row) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={row.event_id}>
                                    <Card sx={{ maxWidth: 800 }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {row.event_name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {row.created_by} - {moment(row.created_date).calendar()} - {row.updated_by}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={handleOpen(row)}>Update</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description">
                                                <Box sx={style}>
                                                    <Typography gutterBottom variant="h5" component="div" contentEditable="true" onInput={e => editTask(e.currentTarget.textContent, updateEvent)} suppressContentEditableWarning={true}>
                                                        {updateEvent.event_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {updateEvent.created_by} - {moment(updateEvent.created_date).calendar()} - {updateEvent.updated_by}
                                                    </Typography><br></br>
                                                    <Button size="small" onClick={() => handleClick()}>Update</Button>
                                                    <Button size="small" onClick={handleClose}>Close</Button>
                                                </Box>
                                            </Modal>
                                            <Button size="small" onClick={openInfoModal()} >More Info</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    )

                }
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    toastStyle={{ backgroundColor: "lightgreen" }}
                />
            </Grid>
        </div>
    );
};
