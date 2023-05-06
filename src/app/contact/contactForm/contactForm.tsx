'use client'

import { useEffect, useState } from 'react'
import Label from './label'
import Button from './button'
import ValidationMessage from './validationMessage'
import style from './contactForm.module.css'

export const ContactForm = () => {
  const [messageInfo, setMessageInfo] = useState({
    email: '',
    subject: '',
    message: ''
  })

  const [fieldError, setFieldError] = useState({
    email: false,
    subject: false,
    message: false
  })

  useEffect(() => {
    console.log({ fieldError })
  }, [fieldError])

  // TODO: review whether this actually submits or not
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const isValid = validate()
    if (isValid) console.log('submitting', messageInfo)
  }

  function onChange(event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) {
    const {name, value} = event.target as HTMLInputElement
    setMessageInfo({ ...messageInfo, [name]: value })
  }

  // TODO: Review validation. Do we even need it?
  function validate() {
    let isValid = true
    const newFieldError = {}

    for (const [key, value] of Object.entries(messageInfo)) {
      if (value.length === 0) {
        newFieldError[key] = true
        isValid = false
      } else {
        newFieldError[key] = false
      }
    }

    setFieldError(newFieldError)
    return isValid
  }

  return (
    <form
      id={style.contactForm}
      onSubmit={onSubmit}
    >
      <Label text='Email Address'>
        {/* <span className='font-size-point-75-rem'>Email address</span> */}
        {fieldError.email && <ValidationMessage />}
        <input
          name='email'
          onChange={onChange}
          value={messageInfo.email}
        />
      </Label>
      <Label text='Subject'>
        {/* <span className='font-size-point-75-rem'>Subject</span> */}
        {fieldError.subject && <ValidationMessage />}
        <input
          name='subject'
          onChange={onChange}
          value={messageInfo.subject}
        />
      </Label>
        <Label text='Message'>
        {/* <span className='font-size-point-75-rem'>Message</span> */}
        {fieldError.message && <ValidationMessage />}
        <textarea
          name='message'
          onChange={onChange}
          value={messageInfo.message}
        />
      </Label>
      <Button name='submit' text='Submit' />
    </form>
  )
}
