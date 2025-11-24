import React, { useState, useEffect } from 'react';
import { GraduationCap, Users, Calendar, Briefcase, Mail, Phone, ArrowRight, Award, Target, TrendingUp } from 'lucide-react';

// Theme Configuration
const ACTIVE_THEME = 7;

const themes = {
  7: {
    name: "Accented UI",
    card: "bg-white rounded-xl shadow-sm p-6 border border-slate-200/80",
    button: "bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-semibold px-6 py-2.5 rounded-r-lg hover:bg-blue-100 transition-colors duration-300",
    input: "bg-slate-50 border-b-2 border-slate-300 rounded-t-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors duration-300",
    navbar: "bg-white h-screen w-64 p-6 flex flex-col border-r border-slate-200",
    pageBg: "bg-slate-50 min-h-screen p-6 text-slate-900",
    mutedText: "text-slate-500",
  },
};

const theme = themes[ACTIVE_THEME];

const AlumniWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '5000+', label: 'Alumni', icon: Users, color: 'blue' },
    { value: '150+', label: 'Webinars', icon: Calendar, color: 'purple' },
    { value: '500+', label: 'Mentors', icon: Award, color: 'pink' },
    { value: '85%', label: 'Placement Rate', icon: Target, color: 'orange' },
  ];

  const webinars = [
    {
      speaker: 'Ali Hsiehman',
      company: 'APPWARD',
      title: 'Technology Trends 2024',
      description: 'Latest innovations in software development and AI',
      avatar: 'AH',
      color: 'blue'
    },
    {
      speaker: 'Dais Sharon Garner',
      company: 'AppWARD',
      title: 'Career Rounding',
      description: 'Strategic career planning and professional development',
      avatar: 'DG',
      color: 'purple'
    },
    {
      speaker: 'O-Japanouny Tewis',
      company: 'NELLI',
      title: 'Industry Insights',
      description: 'Global perspectives on technology adoption',
      avatar: 'OT',
      color: 'pink'
    },
  ];

  const placements = [
    { name: 'Rajesh Kumar', role: 'Software Engineer', company: 'Infosys', color: 'blue' },
    { name: 'Priya Singh', role: 'Data Analyst', company: 'TCS', color: 'purple' },
    { name: 'Amit Patel', role: 'Cloud Architect', company: 'Amazon', color: 'orange' },
    { name: 'Sarah Johnson', role: 'Product Manager', company: 'Comcast', color: 'pink' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-500',
        text: 'text-blue-600',
        hover: 'hover:bg-blue-100',
        icon: 'bg-blue-500',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-500',
        text: 'text-purple-600',
        hover: 'hover:bg-purple-100',
        icon: 'bg-purple-500',
      },
      pink: {
        bg: 'bg-pink-50',
        border: 'border-pink-500',
        text: 'text-pink-600',
        hover: 'hover:bg-pink-100',
        icon: 'bg-pink-500',
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-500',
        text: 'text-orange-600',
        hover: 'hover:bg-orange-100',
        icon: 'bg-orange-500',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className={theme.pageBg}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transform group-hover:scale-105 transition-all duration-300 border-l-4 border-blue-700">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">
              NEC Alumni
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#webinars" className="text-slate-700 hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">Webinars</a>
            <a href="#mentorship" className="text-slate-700 hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">Mentorship</a>
            <a href="#placement" className="text-slate-700 hover:text-blue-600 font-medium transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">Placement</a>
            <button className="bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-semibold px-6 py-2.5 rounded-r-xl hover:bg-blue-100 transition-all duration-300 shadow-sm">
              Alumni Login
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-r-full border-l-4 border-blue-600 mb-6 animate-pulse">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                Connecting Alumni Worldwide
              </span>
            </div>
          </div>
          
          <h1 className="text-7xl font-extrabold text-center mb-6 leading-tight">
            <span className="text-blue-600 relative inline-block">
              Build Your Network
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
            </span>
            <br />
            <span className="text-slate-900">Grow Together</span>
          </h1>
          
          <p className={`text-xl ${theme.mutedText} text-center max-w-3xl mx-auto mb-12`}>
            Empowering NEC graduates through networking, mentorship, and career growth opportunities
          </p>
          
          <div className="flex justify-center gap-6">
            <button className="group bg-blue-50 text-blue-600 border-l-4 border-blue-600 font-bold px-8 py-4 rounded-r-2xl hover:bg-blue-100 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105">
              Join Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className={`${theme.card} font-bold px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
              Explore Events
            </button>
          </div>
        </div>

        {/* Stats */}
        <div id="section-stats" className="max-w-7xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            return (
              <div
                key={index}
                className={`${theme.card} text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 border-l-4 ${colors.border} ${
                  isVisible['section-stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${colors.icon} rounded-xl flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-5xl font-extrabold mb-2 ${colors.text}`}>
                  {stat.value}
                </div>
                <div className={theme.mutedText + " font-medium"}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Webinars Section */}
      <section id="section-webinars" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider border-b-2 border-blue-600 pb-1">LEARN & GROW</span>
          </div>
          <h2 className="text-5xl font-extrabold text-center mb-4 text-slate-900">Upcoming Webinars</h2>
          <p className={`text-center ${theme.mutedText} mb-16 text-lg`}>
            Engage in alumni-led sessions on technology, innovation, and career insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => {
              const colors = getColorClasses(webinar.color);
              return (
                <div
                  key={index}
                  className={`${theme.card} overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border-l-4 ${colors.border} ${
                    isVisible['section-webinars'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="p-8">
                    <div className={`w-20 h-20 ${colors.icon} rounded-xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-2xl">{webinar.avatar}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{webinar.speaker}</h3>
                    <p className={`text-sm ${theme.mutedText} mb-4 uppercase tracking-wider`}>{webinar.company}</p>
                    
                    <h4 className="text-2xl font-bold text-slate-800 mb-3">{webinar.title}</h4>
                    <p className={theme.mutedText + " mb-6"}>{webinar.description}</p>
                    
                    <button className={`group w-full ${colors.bg} ${colors.text} border-l-4 ${colors.border} font-bold px-6 py-3 rounded-r-xl ${colors.hover} shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                      Register Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section id="section-placements" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-sm font-bold text-pink-600 uppercase tracking-wider border-b-2 border-pink-600 pb-1">SUCCESS STORIES</span>
          </div>
          <h2 className="text-5xl font-extrabold text-center mb-16 text-slate-900">Recent Placements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placements.map((placement, index) => {
              const colors = getColorClasses(placement.color);
              return (
                <div
                  key={index}
                  className={`${theme.card} hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border-l-4 ${colors.border} ${
                    isVisible['section-placements'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{placement.name}</h3>
                  <p className={`text-sm ${colors.text} font-semibold mb-1`}>{placement.role}</p>
                  <p className={`text-sm ${theme.mutedText}`}>Company: <span className="font-bold text-slate-900">{placement.company}</span></p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-pink-50 text-pink-600 border-l-4 border-pink-600 font-bold px-8 py-4 rounded-r-2xl hover:bg-pink-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Submit Your Placement
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 mt-20 border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg border-l-4 border-blue-700">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">NEC Alumni Association</span>
            </div>
            <p className="text-slate-300">
              Connecting generations of NEC graduates for mutual growth and success.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-4">Quick Links</h3>
            <div className="space-y-2 pl-4">
              <a href="#webinars" className="block text-slate-300 hover:text-blue-400 transition-colors hover:border-l-2 hover:border-blue-400 hover:pl-2">Webinars</a>
              <a href="#mentorship" className="block text-slate-300 hover:text-blue-400 transition-colors hover:border-l-2 hover:border-blue-400 hover:pl-2">Mentorship</a>
              <a href="#placement" className="block text-slate-300 hover:text-blue-400 transition-colors hover:border-l-2 hover:border-blue-400 hover:pl-2">Placement</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-4">Contact</h3>
            <div className="space-y-3 pl-4">
              <div className="flex items-center gap-3 hover:border-l-2 hover:border-blue-400 hover:pl-2 transition-all">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">alumni@nec.edu</span>
              </div>
              <div className="flex items-center gap-3 hover:border-l-2 hover:border-blue-400 hover:pl-2 transition-all">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">+91 XXXXXXXXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>© 2024 NEC Alumni Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AlumniWebsite;