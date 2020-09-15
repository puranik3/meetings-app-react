## Component Design
- Login
    - type: function component
        - to display error use alert(), or maintain state with useState()
    (or)
    - type: class component
        - make it a class component with validation error message
    - UI
        - form with username, password, button
    - state
        - input values, errors
- Register
    - type: function component (or) class component (can validate and display errors easily)
    - UI
        - form with name, username, password, button
    - State
        - input values, errors

Reference: AddSession.jsx component in workshops-app

- Calendar
    - type: class
    - UI
        - input type="date" onChange = setSelectedDate
        - map through meetings and display as per requirement (display: flex, position: relative / absolute)
    - Methods
        - setSelectedDate - sets state with selectedDate
    - State
        - selectedDate: selected date - current date
        - meetings: array of the selected day's meetings
    - Lifecycle methods
        - componentDidMount() - fetch the meetings for selected date, and set state with meetings
            - service method must be defined and called
        - componentDidUpdate() - fetch new set of meetings for selected date and set state with meetings
            - same service method must called
- Reference: WorkshopsList, lifecycle methods demo