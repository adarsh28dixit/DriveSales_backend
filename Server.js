import  express from "express";
import mongoose from "mongoose";
import EmployeeRouter from "./router/EmployeeRouter.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost/DriveSales", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use('/api', EmployeeRouter);

app.use('/', (req, res) => {
    res.send('Server is ready')
})



app.listen(5000, () => {
    console.log('http://localhost:5000')
})