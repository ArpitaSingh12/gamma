// lib/api.ts
/**
 * API service for communicating with backend
 * Uses environment variable VITE_API_URL or falls back to localhost
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
  company?: string;
  phoneCountryCode?: string;
  phoneNumber?: string;
}) {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `API error: ${response.status}`);
    }

    return result;
  } catch (error: any) {
    console.error('Contact form submission failed:', error);
    throw new Error(error.message || 'Failed to submit contact form');
  }
}

export { API_URL };
