import { users } from "../data/users.js";
import DataError from "../models/errorData.js";

export default class CustomerService {
    constructor() {
        this.customers = [];
        this.errors = [];
    }

    // users datasından gelen customer user'ları getirir
    load() {
        for (const user of users) {
            if (user.type === "customer" && this.checkCustomerValidity(user) && this.checkCustomerAge(user)) {
                this.customers.push(user)
            }
        }
        
    }

    add(customer) {
        if(this.checkCustomerValidity(customer) && this.checkCustomerAge(customer)){
            this.customers.push(customer);
            console.log("Customer added", customer);
        }
    }

    list() {
        return this.customers;
    }

    getById(id) {
        return this.customers.find((c) => c.id === id);
    }

    checkCustomerValidity(customer) {
        let requiredFields = "id firstName lastName city age creditCardNumber".split(" ");
        let isValid = true;
        for (const field of requiredFields) {
            if (!customer[field]) {
                isValid = false;
                this.errors.push(
                    new DataError(`Validation problem ${field} is required!`, customer)
                );
            }
        }
        return isValid;
    }

    checkCustomerAge(customer){
        let isNumber = true
        if (Number.isNaN(parseInt(+customer.age))) {
            isNumber = false
            this.errors.push(
                new DataError(`Validation problem. ${customer.age} is not a number!`, customer)
            );
        }

        return isNumber
    }
}
