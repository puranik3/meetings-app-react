// Reference: WorkshopsList, lifecycle methods demo
import React from 'react';
import { getCalendar } from '../services/calendar';

class Calendar extends React.Component {
    state = {
        status: Calendar.LOADED_CALENDAR,
        selectedDate: new Date(),
        meetings: null,
        error: null
    };

    getFormattedDate() {
        return this.state.selectedDate.toISOString().substr( 0, 10 );
    }

    setSelectedDate = () => {
        // sets statey with selectedDate
    }

    render() {
        // - input type="date" onChange = setSelectedDate
        // - map through meetings and display as per requirement (display: flex, position: relative / absolute) - to start off display the meetings in a plain list view
        return (
            <div className="container">
                <h1>
                    Calendar
                </h1>
                <hr />
                <div className="float-right">
                    <input type="date" id="calendar-date" value={this.getFormattedDate()} />
                </div>
            </div>
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

Calendar.Status = {
    LOADING_CALENDAR: 'LOADING_CALENDAR',
    LOADED_CALENDAR: 'LOADED_CALENDAR',
    ERROR_LOADING_CALENDAR: 'ERROR_LOADING_CALENDAR'
};

export default Calendar;