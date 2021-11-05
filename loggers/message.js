class Message {
    success = (res, message) => {
        res.status(200).json({
            success: true,
            message
        })
    }

    error = error => {
        res.status(500).json({
            success: false,
            error,
            stack: error.stack
        })
    }
    invalidRoute = (res, message) => {
        res.status(404).json({
            success: false,
            message
        })
    }
}

module.exports = Message;