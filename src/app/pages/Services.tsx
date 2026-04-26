import { Link } from "react-router";
import {
  Receipt,
  Cpu,
  MessageSquareCode,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Receipt className="w-12 h-12" />,
      title: "ISP Billing Systems",
      description: "Comprehensive billing and subscriber management solutions tailored for Internet Service Providers.",
      features: [
        "Automated invoicing and payment processing",
        "Real-time usage monitoring and tracking",
        "Multi-tier pricing and plan management",
        "Integrated payment gateway support",
        "Detailed analytics and reporting",
        "Customer portal for self-service",
      ],
      gradient: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "POS Systems",
      description: "Modern, cloud-based point-of-sale solutions designed for retail and hospitality businesses.",
      features: [
        "Intuitive touchscreen interface",
        "Inventory management and tracking",
        "Multi-location support",
        "Customer loyalty programs",
        "Real-time sales analytics",
        "Offline mode capability",
      ],
      gradient: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/30",
    },
    {
      icon: <MessageSquareCode className="w-12 h-12" />,
      title: "AI Chatbot Integration",
      description: "Intelligent conversational AI powered by advanced machine learning to enhance customer engagement.",
      features: [
        "Natural language processing (NLP)",
        "24/7 automated customer support",
        "Multi-channel deployment (web, mobile, social)",
        "Context-aware conversations",
        "Seamless human handoff",
        "Continuous learning and improvement",
      ],
      gradient: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Custom Software Development",
      description: "Bespoke software solutions engineered to solve your unique business challenges.",
      features: [
        "Full-stack web application development",
        "Mobile app development (iOS & Android)",
        "API development and integration",
        "Cloud infrastructure setup",
        "Database design and optimization",
        "Ongoing maintenance and support",
      ],
      gradient: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-500/30",
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
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology solutions designed to transform and scale your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group rounded-3xl overflow-hidden bg-gradient-to-br ${service.gradient} border ${service.borderColor} backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300`}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {service.title}
                    </h2>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to elevate your business with our services? Get in touch and let's discuss your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
