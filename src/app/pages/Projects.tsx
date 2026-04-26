import { useState } from "react";
import { Filter } from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "ISP Billing", "Point of Sale", "AI Integration", "Custom Development"];

  const projects = [
    {
      title: "CloudBill ISP",
      category: "ISP Billing",
      description: "Complete billing automation system handling 10,000+ subscribers with real-time usage tracking and automated invoicing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "SmartPOS Pro",
      category: "Point of Sale",
      description: "Cloud-based POS system for multi-location retail chains with inventory management and loyalty programs.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80",
      tags: ["TypeScript", "MongoDB", "React Native"],
    },
    {
      title: "AI Support Bot",
      category: "AI Integration",
      description: "24/7 intelligent customer support chatbot with NLP capabilities and seamless human handoff.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      title: "NetFlow Analytics",
      category: "ISP Billing",
      description: "Advanced network analytics and bandwidth monitoring solution for ISPs with predictive insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Python", "Redis", "Vue.js"],
    },
    {
      title: "RestaurantOS",
      category: "Point of Sale",
      description: "Comprehensive restaurant management system with table booking, order management, and kitchen display.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      tags: ["React", "Express", "MySQL"],
    },
    {
      title: "SmartAssist AI",
      category: "AI Integration",
      description: "Multi-channel AI assistant integrated with CRM, email, and social media platforms.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      tags: ["Python", "GPT-4", "Next.js"],
    },
    {
      title: "HealthCare Portal",
      category: "Custom Development",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "FinTech Dashboard",
      category: "Custom Development",
      description: "Real-time financial analytics platform with portfolio tracking and risk assessment tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["TypeScript", "GraphQL", "React"],
    },
    {
      title: "E-Commerce Suite",
      category: "Custom Development",
      description: "Full-featured e-commerce platform with payment processing, inventory, and marketing automation.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["Next.js", "Stripe", "MongoDB"],
    },
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

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
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world solutions delivering measurable impact across industries
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Filter className="w-5 h-5 text-blue-400" />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
                <h3 className="text-xl mt-2 mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
