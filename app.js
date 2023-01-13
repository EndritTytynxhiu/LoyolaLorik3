const express = require('express');
const app = express();
const cors = require('cors')
const models = require("./models/index");
app.use(express.json())
app.use(cors())

const userRouters = require('./routers/users')
const testRouters = require('./routers/test')
const classRouters = require('./routers/class')
const testInfoRouters = require("./routers/testinfo")
const studentRouters = require("./routers/students")


app.use('/api/users', userRouters)
app.use('/api/test', testRouters)
app.use('/api/class', classRouters)
app.use('/api/testInfo', testInfoRouters)
app.use('/api/student', studentRouters)


app.listen(4000, () => {
    console.log('listening on port 4000');
})