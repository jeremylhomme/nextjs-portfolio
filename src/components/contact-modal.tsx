'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/src/components/ui/sheet';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { useTranslations } from 'next-intl';

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  formType: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  subject: '',
  message: '',
  formType: 'contact'
};

const ContactModal = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const t = useTranslations('contact-modal');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateRecaptchaToken = async () => {
    if (!(window as any).grecaptcha) {
      throw new Error('reCAPTCHA not loaded');
    }

    return await new Promise<string>((resolve, reject) => {
      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha
          .execute(process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY, {
            action: 'submit'
          })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields: Array<keyof FormData> = [
      'firstName',
      'lastName',
      'email',
      'subject',
      'message'
    ];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error(t('required'));
      return;
    }

    const loadingToast = toast.loading(t('sending'));
    setLoading(true);

    try {
      const recaptchaToken = await generateRecaptchaToken();
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });

      if (response.ok) {
        toast.success(t('success'));
        setFormData(initialFormData);
      } else {
        const errorData = await response.json();
        toast.error(t('error'));
        console.error('API Error:', errorData);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t('error'));
    } finally {
      toast.dismiss(loadingToast);
      setLoading(false);
    }
  };

  return (
    <>
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
  );
};

export default ContactModal;
