// Newsletter service stub
// Calls /api/resend/subscribe for email subscriptions

export async function subscribeToNewsletter(email) {
  try {
    const response = await fetch('/api/resend/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error(`Subscription failed: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return { success: false, error: error.message }
  }
}
