// Contact service — submits contact form to backend email handler
export async function submitContactForm(formData) {
  // formData: { name, email, subject, message }
  try {
    const res = await fetch(`${import.meta.env.VITE_API_LINK}/api/email/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'contact-auto-reply', ...formData })
    })
    return res.ok
  } catch (e) {
    console.warn('Contact form submission failed:', e)
    return false
  }
}