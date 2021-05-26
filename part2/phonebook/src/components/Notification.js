
const basic_css = {
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
}

const err_css = {
    color: "red",
    ...basic_css
}

const msg_css = {
    color: "green",
    ...basic_css
}

// msg_or_err is true if a msg, false if err
const Notification = ({ message, msg_or_err }) => {
    if (message === null) {
        return null
    }

    if (msg_or_err) {
        return (
            <div className={"message"} style={msg_css}>
                {message}
            </div>
        )
    } else {
        return (
            <div className={"error"} style={err_css}>
                {message}
            </div>
        )
    }

}

export default Notification