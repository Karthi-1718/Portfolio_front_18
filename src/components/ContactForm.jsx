import { useState } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { sendContactMessage } from '../services/contactService.js';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function submit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setMessage('');
    try {
      const result = await sendContactMessage(data);
      setStatus('success');
      setMessage(result.message || 'Your message is on its way. Thanks for reaching out.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Unable to send your message. Please try again.');
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="honeypot" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <div className="form-grid">
        <label>Your name<input name="name" placeholder="Jane Smith" required maxLength="100" autoComplete="name" /></label>
        <label>Your email<input name="email" type="email" placeholder="jane@example.com" required maxLength="254" autoComplete="email" /></label>
      </div>
      <label>Subject<input name="subject" placeholder="What would you like to discuss?" required maxLength="160" /></label>
      <label>Your message<textarea name="message" placeholder="A little context goes a long way…" required minLength="10" maxLength="4000" rows="5" /></label>
      <div className="form-bottom">
        <button className="button button-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? <>Sending <LoaderCircle className="spin" size={17} /></> : <>Send message <ArrowRight size={17} /></>}
        </button>
        {status !== 'idle' && <p className={`form-status ${status}`} role="status">{status === 'success' && <CheckCircle2 size={16} />} {message}</p>}
      </div>
    </form>
  );
}
