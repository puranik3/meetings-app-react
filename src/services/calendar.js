import axios from 'axios';

function getCalendar( date ) {
    return axios.get( 
        `https://mymeetingsapp.herokuapp.com/api/calendar?date=${date}`,
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