import React, {useState, useEffect} from 'react';


let weekdayshort = moment.weekdaysShort();

let weedayshortname = this.weekdayshort.map(day => {
    return (
        <th key={day} className="week-day">
            {day}
        </th>
    )
})

export default class Calendar extends React.Component{
    render(){
        return (
            <div>
                <h2>Calendar</h2>
            </div>
        )
    }
}