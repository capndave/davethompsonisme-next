 import { FieldErrors, FormData } from '@/types' 
  
export default class Validator {
    errors: FieldErrors

    constructor() {
        this.errors = new FieldErrors()
    }

    valuesEntered(data: FormData) {
      for (const [key, value] of Object.entries(data)) {
        if (value.length === 0) {
          this.errors[key as keyof FieldErrors] = true
        } else {
          this.errors[key as keyof FieldErrors] = false
        }
      }
    }
    email(data: FormData) {
      this.errors.email = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        .test(data.email)
    }
    validate(data: FormData) {
      this.valuesEntered(data)
      this.email(data)
    }
    isValid() {
      return Object.values(this.errors).every(error => !error)
    }
}