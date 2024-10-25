import React, { useState } from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitMessage('Thank you for your message. I will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 text-white h-32"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submitMessage && <p className="mt-4 text-green-400">{submitMessage}</p>}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/nitish-kumar-b26379240/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/nitishkumar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:nitish@example.com" className="text-white hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly chat!</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nitish Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}