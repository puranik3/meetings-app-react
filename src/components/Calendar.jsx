// Reference: WorkshopsList, lifecycle methods demo
import React from 'react';
import { getCalendar } from '../services/calendar';

class Calendar extends React.Component {
    // State
    //     - selectedDate: selected date - current date
    //     - meetings: array of the selected day's meetings
    state = {
        selectedDate: new Date(),
        meetings: null
        /* may want to add error too (to hold error object in case calendar could not be fetched) */
    };

    setSelectedDate = () => {
        // sets state with selectedDate
    }

    render() {
        // - input type="date" onChange = setSelectedDate
        // - map through meetings and display as per requirement (display: flex, position: relative / absolute) - to start off display the meetings in a plain list view
        return (

        );
    }
    
    // - Lifecycle methods
    //     - componentDidMount() - fetch the meetings for selected date, and set state with meetings
    //         - service method must be defined and called
    componentDidMount() {
        //     - componentDidUpdate() - fetch new set of meetings for selected date and set state with meetings        
    }

    componentDidUpdate() {
        // - same service method must called - BE CAREFUL TO PUT THE CALL TO SERVICE WITHIN an if() that checks that it is selectedDate that has changed (else we end up with recursive calls to componentDidUpdate)
    }
}

export default Calendar;