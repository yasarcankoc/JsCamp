import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import { users } from "../data/users.js";
import Customer from "../models/customer.js";
import Employee from "../models/employee.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi.");

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

// let user1 = new User(1, "Can", "Koç", "Trabzon")
// let user2 = new User(1, "Engin", "Demiroğ", "Ankara")

// userService.add(user1)
// userService.add(user2)

console.log(userService.list());


console.log(userService.getById(1))
userService.list()

console.log("---------------------------------------------");

// userService.load()
let customerToAdd = new Customer(1, "Can", "Koç", "Trabzon", 15)
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)