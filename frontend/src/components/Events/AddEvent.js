import "./AddEvent.css";
import { useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import { Input } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function AddEvent() {
    const [side, setSide] = useState({});

    const getInputs = (value, name) => {
        let data = { [name]: value }
        setSide({ ...side, ...data });
        console.log(side);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(side);
        axios.post('http://localhost:5022/api/postevent', side).then((response) => {
            console.log("Sucessfully Saved the Event");
        }).catch((error) => { console.log(error); });
    };

    return (
        <form onSubmit={submit}>
            <div className="formGroup">
                <Input
                    className="trim"
                    placeholder="Event Name"
                    name="name"
                    type="text"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <Input
                    placeholder="Event Date"
                    name="date"
                    type="date"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <Input
                    placeholder="Event Team"
                    name="team"
                    type="text"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <Input
                    placeholder="Event Task"
                    name="task"
                    type="text"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <Button type="submit"> Submit</Button>
                <Button type="reset">Reset</Button>
            </div>
        </form>
    )
}


export default AddEvent;