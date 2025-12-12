const API_URL = import.meta.env.VITE_API_URL || 'https://gamma-fd1i.onrender.com';

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
  company?: string;
  phoneCountryCode?: string;
  phoneNumber?: string;
}) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export { API_URL };
