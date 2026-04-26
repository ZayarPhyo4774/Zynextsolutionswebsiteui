import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "zynextsolutions@gmail.com",
      link: "mailto:zynextsolutions@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Remote & On-site",
      link: null,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-[#0a0a0f] to-cyan-950/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss your project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Send us a message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-center">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-2 text-gray-300">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm mb-2 text-gray-300">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  >
                    <option value="" className="bg-[#0a0a0f]">Select a service</option>
                    <option value="isp-billing" className="bg-[#0a0a0f]">ISP Billing Systems</option>
                    <option value="pos" className="bg-[#0a0a0f]">POS Systems</option>
                    <option value="ai-chatbot" className="bg-[#0a0a0f]">AI Chatbot Integration</option>
                    <option value="custom-dev" className="bg-[#0a0a0f]">Custom Software Development</option>
                    <option value="consultation" className="bg-[#0a0a0f]">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We're here to help bring your ideas to life. Whether you need a complete software
                solution or just want to explore possibilities, let's start a conversation.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-blue-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">Office Hours</h3>
              <p className="text-gray-300 mb-4">
                Monday - Friday: 9:00 AM - 6:00 PM (EST)
              </p>
              <p className="text-gray-400 text-sm">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
