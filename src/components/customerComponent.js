import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";

// Servisi çağırıyoruz
let customerService = new CustomerService

let customerToAdd = new Customer(1, "Can", "Koç", "Trabzon", 22, "12345")
customerToAdd.type = "customer"

customerService.add(customerToAdd)
customerService.load()
console.log(customerService.list())
console.log(customerService.errors);
