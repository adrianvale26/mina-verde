// Quiz service — submits quiz answers + recommendation to backend
export async function submitQuizAnswers(answers, recommendation) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_LINK}/api/email/send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'quiz-welcome', answers, recommendation })
    })
    return res.ok
  } catch (e) {
    console.warn('Quiz submission failed (server not deployed yet):', e)
    return false
  }
}