import { users } from "../data/users.js";
import DataError from "../models/errorData.js";

export default class UserService {
  constructor(loggerService) {
    this.employees = [];
    this.customers = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  load() {
    for (const user of users) {
      switch (user.type) {
        case "customer":
          if (!this.checkUserValidityForErrors(user) && this.checkUserAge(user)) {
            this.customers.push(user);
          }
          break;

        case "employee":
          if (!this.checkUserValidityForErrors(user) && this.checkUserAge(user)) {
            this.employees.push(user);
          }
          break;
          
        default:
          this.errors.push(new DataError("Wrong user type.", user));
          break;
      }
    }
  }

  checkUserValidityForErrors(user) {
    let requiredFields = "id firstName lastName city age".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }
    return hasErrors;
  }

  checkUserAge(user){
    let ageIsNumber = true
    if(Number.isNaN(Number.parseInt(user.age))){
        ageIsNumber = false
        this.errors.push(new DataError(`Validation problem ${user.age} is not a number`, user))
    }
    return ageIsNumber;
  }

  add(user) {
    switch (user.type) {
        case "customer":
          if (!this.checkUserValidityForErrors(user) && this.checkUserAge(user)) {
            this.customers.push(user);
          }
          break;

        case "employee":
          if (!this.checkUserValidityForErrors(user) && this.checkUserAge(user)) {
            this.employees.push(user);
          }
          break;
          
        default:
          this.errors.push(new DataError("This user can not be added. Wrong user type.", user));
          break;
      }
    this.loggerService.log(user);
  }

  list() {
    return this.customers
  }

  getById(id) {
    return this.customers.find(u => u.id === id)
  }
}
