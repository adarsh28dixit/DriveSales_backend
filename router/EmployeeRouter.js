import  express  from "express";
import Employees from "../model/EmployeeModel.js";

const EmployeeRouter = express.Router();

EmployeeRouter.get('/getEmployee', (req, res) => {
    Employees.find((err, data) => {
        if(err){
            res.status(404).send("error")
        }else{
            res.send(data);
        }
    })
})

EmployeeRouter.post('/postEmployee', (req, res) => {
    const emp = req.body;
    Employees.create(emp, (err, data) => {
        if(err){
            res.status(400).send({msg: err.msg});
        }else {
            res.send(data);
        }
    })
})

EmployeeRouter.get('/getEmployee/:id', (req, res) => {
    const emp = req.params.id;
    Employees.findById(emp, (err, data) => {
        if(err){
            res.status(404).send({msg: err.msg});
        }else{
            res.status(200).send(data);
        }

    })
})

EmployeeRouter.delete('/deleteEmployee/:id', (req, res) => {
    const emp = req.params.id;
    Employees.findByIdAndDelete(emp, (err, data) => {
        if(err){
            res.status(404).send({msg: err.msg});
        }else{
            res.status(200).send(data);
        }

    })
})

EmployeeRouter.put('/putEmployee/:id', async(req, res) => {
    const emp = req.params.id;
    const employee = await Employees.findById(emp)
    if(employee){
        employee.title = req.body.title || employee.title,
        employee.description = req.body.description || employee.description,
        employee.startDate = req.body.startDate || employee.startDate,
        employee.endDate = req.body.endDate || employee.endDate,
        employee.priority = req.body.priority || employee.priority,
        employee.status = req.body.status || employee.status

        const updatedEmployee = await employee.save();
        res.status(200).send(updatedEmployee);
    }else{
        res.status(404).send({msg: err.msg})
    }
})

export default EmployeeRouter;