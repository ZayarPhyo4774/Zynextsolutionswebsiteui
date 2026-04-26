import { Target, Zap, Users, Award } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and push boundaries to deliver forward-thinking solutions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "Our focus is on delivering measurable outcomes that drive real business value for our clients.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We build long-term relationships based on trust, transparency, and mutual success.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project, from code quality to customer service.",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      bio: "10+ years building enterprise software solutions",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      bio: "Expert in AI/ML and cloud architecture",
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      bio: "Full-stack specialist with passion for clean code",
    },
    {
      name: "Emily Zhang",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      bio: "Creating intuitive experiences for complex systems",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
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
            About Zynext
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering businesses through innovative technology solutions since 2021
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            At Zynext Solutions, we believe technology should empower, not complicate. Our mission is to
            deliver intelligent, scalable software solutions that help businesses thrive in the digital age.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            From ISP billing systems to AI-powered chatbots, we combine technical expertise with industry
            knowledge to create solutions that solve real problems and drive measurable results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate experts dedicated to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl mb-1 text-white">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
