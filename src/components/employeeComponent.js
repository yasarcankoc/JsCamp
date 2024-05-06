import Employee from "../models/employee.js";
import EmployeeService from "../services/employeeService.js";

// Servisi çağırıyoruz
let employeeService = new EmployeeService

let employeeAdd = new Employee(7, "Mahmut", "Tuncer", "Urfa", 60, 20000)
employeeAdd.type = "employee"

employeeService.add(employeeAdd)
employeeService.load()
console.log(employeeService.list());
console.log(employeeService.getById(3));

