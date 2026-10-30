const express = require('express')

// import the routes in routes/api.js
const apiRouter = require('./routes/api')

// Create the web application
const app = express() 

// serve files in the client directory directly to the user.
app.use('/', express.static('client'))

// make the API routes in api.js available to the app 
app.use('/api', apiRouter)

const port = process.env.PORT || 3000
// Start server running 
let server = app.listen(port, function() {
    console.log('Express server running on port', port)
})



