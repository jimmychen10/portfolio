const express = require('express')

const app = express()

// app.get()

// enviorment variables are like global variables
const port = 5000; // || represents or, if the PORT_NUMBER doesn't exsist, it uses 80

// app.use(express.static("./public"))

// app.get('/', myFunction);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))