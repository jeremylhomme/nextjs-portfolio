'use client'

import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/src/components/ui/sheet'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { useTranslations } from 'next-intl'

const ContactModal = ({
  children,
  className
}: {
  children?: React.ReactNode
  className?: string
}) => {
  const t = useTranslations('contact-modal')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    subject: '',
    message: '',
    formType: 'contact'
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error(`${t('required')}`)
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/emails/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast.success(`${t('success')}`)
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          subject: '',
          message: '',
          formType: 'contact'
        })
      } else {
        const errorData = await response.json()
        toast.error(`${t('error')}`)
      }
    } catch (error) {
      console.error('Network Error:', error)
      toast.error('Failed to connect to the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Slide}
        closeButton
      />

      <Sheet>
        {children ? (
          <SheetTrigger asChild>{children}</SheetTrigger>
        ) : (
          <SheetTrigger asChild>
            <button className={className}>{t('link')}</button>
          </SheetTrigger>
        )}
        <SheetContent
          side='bottom'
          className='flex w-full flex-col justify-center'
        >
          <SheetHeader className='mx-auto mt-4 w-full max-w-2xl'>
            <SheetTitle>{t('title')}</SheetTitle>
            <SheetDescription>{t('description')}</SheetDescription>
          </SheetHeader>
          <form
            onSubmit={handleSubmit}
            className='mx-auto mt-4 w-full max-w-2xl space-y-4'
          >
            <Input
              name='firstName'
              placeholder={t('firstname')}
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              name='lastName'
              placeholder={t('lastname')}
              value={formData.lastName}
              onChange={handleChange}
            />
            <Input
              name='company'
              placeholder={t('company')}
              value={formData.company}
              onChange={handleChange}
            />
            <Input
              name='email'
              type='email'
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name='subject'
              placeholder={t('subject')}
              value={formData.subject}
              onChange={handleChange}
            />
            <Textarea
              name='message'
              placeholder={t('message')}
              value={formData.message}
              onChange={handleChange}
            />
            <Button type='submit' variant='secondary' disabled={loading}>
              {loading ? t('sending') : t('send')}
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default ContactModal