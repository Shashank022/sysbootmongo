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
    const handleOpen = row => () => {
        console.log("row", row);
        setOpen(true);
        setUpdateEvent(row);
        setNewEvent({ event: row });
    };

    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get('http://localhost:5022/api/events').then((response) => {
            setEvents(response.data);
        }).catch((error) => { console.log(error); });
    }, []);

    function handleClick(row) {
        axios.put('http://localhost:5022/api/event/update', row).then((resp) => {
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

    if (!events) return null;
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                {events.map((row) => (
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
                                <Button size="small" onClick={handleOpen(row)}>Info</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description">
                                    <Box sx={style}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {updateEvent.event_name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {updateEvent.created_by} - {moment(updateEvent.created_date).calendar()} - {updateEvent.updated_by}
                                        </Typography><br></br>
                                        <Button size="small" onClick={() => handleClick(row)}>Update</Button>
                                        <Button size="small" onClick={handleClose}>Close</Button>
                                    </Box>
                                </Modal>
                                <Button size="small">More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </Grid>
        </div>
    );
};
