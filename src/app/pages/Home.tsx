import { Link } from "react-router";
import {
  Code2,
  Cpu,
  MessageSquareCode,
  Receipt,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function Home() {
  const services = [
    {
      icon: <Receipt className="w-8 h-8" />,
      title: "ISP Billing Systems",
      description: "Comprehensive billing solutions for internet service providers with automated invoicing and payment tracking.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "POS Systems",
      description: "Modern point-of-sale systems designed for efficiency and seamless customer experience.",
    },
    {
      icon: <MessageSquareCode className="w-8 h-8" />,
      title: "AI Chatbot Integration",
      description: "Intelligent conversational AI to automate customer support and boost engagement.",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your unique business requirements.",
    },
  ];

  const techStack = [
    "React", "Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "TensorFlow", "Next.js", "GraphQL", "Tailwind CSS"
  ];

  const projects = [
    {
      title: "CloudBill ISP",
      category: "ISP Billing",
      description: "Complete billing automation for 10,000+ subscribers",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "SmartPOS Pro",
      category: "Point of Sale",
      description: "Cloud-based POS for retail chains",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80",
    },
    {
      title: "AI Support Bot",
      category: "AI Integration",
      description: "24/7 customer support automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-[#0a0a0f] to-cyan-950/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Next-Gen Technology Solutions</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Build The Future
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              With Zynext
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We empower businesses with intelligent software solutions—from ISP billing systems
            to AI-powered chatbots and custom development.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full inline-flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to scale your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world solutions delivering measurable impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-blue-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl mt-2 mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built with industry-leading technologies
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all text-gray-300 hover:text-white"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how Zynext Solutions can help you achieve your goals with
              cutting-edge technology.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
