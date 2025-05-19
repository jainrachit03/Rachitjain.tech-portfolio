import React, { useState } from 'react'
import RevealOnScroll from '../RevealOnScroll';
import emailjs from "emailjs-com";
import { toast } from 'react-hot-toast';


const Contacts = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""

  })

  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,
      import.meta.env.VITE_PUBLIC_KEY)
    .then((result)=>{
    toast.success("Message sent!");
      setFormData({ name:"", email:"",message:""})
    })
    .catch((error)=> {console.error("EmailJS error:", error);
    toast.error(" Oops! Something went wrong.");
  });
  }


  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
    <RevealOnScroll>
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            placeholder="Name..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            placeholder="example@gmail.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          />
          <textarea
            name="message"
            required
            value={formData.message}
            rows={6}
            placeholder="Your message..."
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </RevealOnScroll>
  </section>
  
  )
}

export default Contacts
