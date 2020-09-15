import axios from 'axios';

function getCalendar( date ) {
    const formattedDate = date.toISOString().substr( 0, 10 );
    return axios.get( 
        `http://localhost:3000/api/calendar?date=${formattedDate}`,
        {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNjAwMTQ1OTMxLCJleHAiOjE2MDAyMzIzMzF9.klw0llVnzzvLz1Jcrn7IZOXzX3XjYXWApuWjtozdykg'
            }
        }
    )
                .then( response => response.data );
}

export {
    getCalendar
}