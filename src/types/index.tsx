export class FieldErrors {
    email: boolean
    message: boolean
    subject: boolean

    constructor({email = false, message = false, subject = false} : {email?: boolean, message?: boolean, subject?: boolean} = {}) {
        this.email = email,
        this.message = message,
        this.subject = subject
    }
}

export class FormData {
    email: string
    message: string
    subject: string

    constructor({email = '', message = '', subject = ''} : {email?: string, message?: string, subject?: string} = {}) {
        this.email = email,
        this.message = message,
        this.subject = subject
    }
}