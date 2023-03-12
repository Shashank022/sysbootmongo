import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { useState } from 'react';

export default function SubComponentsPickers() {
    const [date, setDate] = useState(new Date());

    const divStyle = {
        color: 'blue',
        float: 'right',
        paddingTop: '70px'

    };
    return (
        <div>
            <div>
                <div style={divStyle}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
}   