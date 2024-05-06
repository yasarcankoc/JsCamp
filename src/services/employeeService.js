import { users } from "../data/users.js";
import DataError from "../models/errorData.js";

export default class EmployeeService {
    constructor() {
        this.employees = [];
        this.errors = [];
    }

    // users datasından gelen employee user'ları getirir
    load() {
        for (const user of users) {
            if (user.type === "employee" && this.checkEmployeeValidity(user) && this.checkEmployeeAge(user)) {
                this.employees.push(user)
            }
        }
    }

    add(employee) {
        if (this.checkEmployeeValidity(employee) && this.checkEmployeeAge(employee)) {
            this.employees.push(employee);
            console.log("Employee added.");
        }
    }

    list() {
        return this.employees;
    }

    getById(id) {
        return this.employees.find((e) => e.id === id);
    }

    checkEmployeeValidity(employee) {
        let requiredFields = "id firstName lastName city age salary".split(" ");
        let isValid = true;
        for (const field of requiredFields) {
            if (!employee[field]) {
                isValid = false;
                this.errors.push(
                    new DataError(`Validation problem ${field} is required!`, employee)
                );
            }
        }
        return isValid;
    }

    checkEmployeeAge(employee) {
        let isNumber = true;
        if (Number.isNaN(parseInt(+employee.age))) {
            isNumber = false;
            this.errors.push(new DataError(`Validation problem. ${employee.age} is not a number!`, employee))
        }
        return isNumber
    }

}
