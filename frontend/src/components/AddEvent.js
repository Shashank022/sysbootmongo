import { useState } from "react";
import axios from 'axios';


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
            <div>
                <input
                    placeholder="Event Name"
                    name="name"
                    type="text"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <input
                    placeholder="Event Date"
                    name="date"
                    type="date"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <input
                    placeholder="Event Team"
                    name="team"
                    type="text"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <input
                    placeholder="Event Task"
                    name="task"
                    type="text"
                    onChange={(event) => getInputs(event.target.value, event.target.name)}
                />
                <button type="submit"> Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    )
}


export default AddEvent;