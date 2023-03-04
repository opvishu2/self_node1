const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const PORT = 5000;

// app.get('/123', (req, res, next) => {
// res.send({ abcd: "xyz" });
// })
app.get('/dwn', function (req, res) {
    const file = `uploaded/resume/cvVishalM.pdf`;
    res.download(file); // Set disposition and send it.
});
// Require the Routes API 
// Create a Server and run it on the port 3000
const server = app.listen(PORT, function () {
    console.warn(`server is running on PORT ${PORT}`)

    // Starting the Server at the port = PORT
})