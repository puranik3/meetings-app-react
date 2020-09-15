

function App () {
    return (
        <>
            {/* create and add navbar */}
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/login">
                <Register />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/calendar">
                <Calendar />
            </Route>
            <Route path="/meetings">
                <Meetings />
            </Route>
        </>
    );
}

