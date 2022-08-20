import mongoose from "mongoose";

const Employee = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: String, required: true},
    endDate: {type: String, required: true},
    priority: {type: String, required: true},
    status: {type: String, required: true},
})

const Employees = mongoose.model("Employees", Employee);

export default Employees;