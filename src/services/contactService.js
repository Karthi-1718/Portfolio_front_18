const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function sendContactMessage(formData) {
  if (!API_BASE_URL) throw new Error('Contact service is not configured yet.');
  const response = await fetch(`${API_BASE_URL.replace(/\/$/, '')}/api/contact`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || 'Unable to send message. Please try again.');
  return result;
}
