'use client'

import { useEffect, useState } from 'react'
import Label from './label'
import Button from './button'
import ValidationMessage from './validationMessage'
import sendEmail from './sendEmail'
import Validator from './validator'
import style from './contactForm.module.css'
import { FieldErrors, FormData } from '@/types'

export const ContactForm = () => {
  const [data, setData] = useState(new FormData())
  const [errors, setErrors] = useState(new FieldErrors())

  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const isValid = validate()
    if (isValid) {
      console.log('submitting', data)
      sendEmail(data)
    }
  }

  function onChange(event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) {
    const {name, value} = event.target as HTMLInputElement
    setData({ ...data, [name]: value })
  }

  function validate(): boolean {
    const validator = new Validator()
    validator.validate(data)
    setErrors(validator.errors)
    return validator.isValid()
  }

  return (
    <form
      id={style['contact-form']}
      onSubmit={onSubmit}
    >
      <Label text='Email Address'>
        {errors.email && <ValidationMessage message='Please enter a valid email address' />}
        <input
          name='email'
          onChange={onChange}
          value={data.email}
        />
      </Label>
      <Label text='Subject'>
        {errors.subject && <ValidationMessage message='Please enter a subject' />}
        <input
          name='subject'
          onChange={onChange}
          value={data.subject}
        />
      </Label>
        <Label text='Message'>
        {errors.message && <ValidationMessage message='Please enter a message' />}
        <textarea
          name='message'
          onChange={onChange}
          value={data.message}
        />
      </Label>
      <Button name='submit' text='Submit' />
    </form>
  )
}
