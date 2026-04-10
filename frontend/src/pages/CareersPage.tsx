import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, TrendingUp, Users, Trophy, Code, Server, Palette, MapPin, Clock, DollarSign, Heart, Zap, Briefcase } from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salaryRange: string;
  icon: React.ReactNode;
  description: string;
  requirements: string[];
}

const CareersPage: React.FC = () => {
  useSEO({
    title: 'Careers - EstateFlow',
    description: 'Join our team and help us redefine the real estate experience. View current job openings.',
  });

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Frontend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salaryRange: '$90K - $130K',
      icon: <Code className="w-8 h-8" />,
      description: 'Build responsive, accessible web applications using React, TypeScript, and modern tooling. You\'ll work on our customer-facing platform.',
      requirements: ['5+ years React experience', 'TypeScript proficiency', 'RESTful API knowledge', 'UI/UX design awareness']
    },
    {
      id: '2',
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salaryRange: '$100K - $140K',
      icon: <Server className="w-8 h-8" />,
      description: 'Design and build scalable backend services and APIs. You\'ll work with Node.js, TypeScript, and modern cloud infrastructure (AWS/GCP).',
      requirements: ['6+ years backend experience', 'Node.js/Express expertise', 'MongoDB/PostgreSQL', 'Microservices architecture']
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salaryRange: '$70K - $100K',
      icon: <Palette className="w-8 h-8" />,
      description: 'Create intuitive, beautiful interfaces. You\'ll conduct user research, create wireframes & prototypes, and collaborate with developers.',
      requirements: ['4+ years design experience', 'Figma/Adobe XD', 'User research skills', 'Design system knowledge']
    },
    {
      id: '4',
      title: 'Product Manager',
      department: 'Product',
      location: 'Hybrid',
      type: 'Full-time',
      salaryRange: '$95K - $135K',
      icon: <Briefcase className="w-8 h-8" />,
      description: 'Define product strategy and roadmap. You\'ll work with engineering, design, and marketing teams to deliver impactful features.',
      requirements: ['5+ years PM experience', 'Data-driven mindset', 'Agile methodology', 'Real estate industry knowledge (preferred)']
    },
    {
      id: '5',
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      salaryRange: '$75K - $110K',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Drive insights through data analysis. You\'ll work with SQL, Python, and BI tools to help inform business decisions.',
      requirements: ['3+ years analytics experience', 'SQL proficiency', 'Python/R', 'Tableau/Looker experience']
    },
    {
      id: '6',
      title: 'Customer Support Specialist',
      department: 'Support',
      location: 'On-site',
      type: 'Full-time',
      salaryRange: '$45K - $60K',
      icon: <Heart className="w-8 h-8" />,
      description: 'Be the voice of our customers. You\'ll handle inquiries, resolve issues, and ensure customer satisfaction through multiple channels.',
      requirements: ['2+ years customer support', 'Excellent communication', 'Problem-solving skills', 'CRM tools experience']
    }
  ];

  const perks = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Clear progression paths with training, mentorship, and professional development opportunities.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative Culture',
      description: 'Work alongside talented professionals in a supportive, inclusive, and innovative environment.'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Competitive Benefits',
      description: 'Comprehensive health insurance, 401(k), unlimited PTO, and flexible work arrangements.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Work on cutting-edge real estate technology and help shape the future of the industry.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Wellness',
      description: 'Mental health support, gym reimbursement, and wellness programs for employee well-being.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote options, and respect for personal time and commitments.'
    }
  ];

  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#ec4613] py-32">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h1 className="font-fraunces text-6xl text-[#F9FAFB] mb-6 leading-tight">
            Join Our Growing Team
          </h1>
          <p className="font-manrope text-xl text-[#F9FAFB]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            We&apos;re looking for talented, passionate individuals who are committed to transforming the real estate experience through innovation and excellence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="#openings" 
              className="bg-white text-primary font-manrope font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-fraunces text-5xl text-[#111827] mb-6">Why Choose EstateFlow?</h2>
            <p className="font-manrope text-lg text-[#4B5563] max-w-2xl mx-auto">
              We believe in creating an environment where innovation thrives, careers flourish, and every team member feels valued and empowered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[#E6E0DA] hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-primary">
                    {perk.icon}
                  </div>
                </div>
                <h3 className="font-syne font-bold text-xl text-[#111827] mb-3">{perk.title}</h3>
                <p className="font-manrope text-[#4B5563] leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="bg-gradient-to-b from-white to-[#FAF8F4] py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-fraunces text-5xl text-[#111827] mb-4">Open Positions</h2>
            <p className="font-manrope text-lg text-[#4B5563]">
              We currently have {jobOpenings.length} exciting opportunities available
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-8 border-2 border-transparent hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#ec4613] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {job.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="font-syne font-bold text-2xl text-[#111827] mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="font-manrope text-sm text-primary font-semibold">
                        {job.department}
                      </p>
                    </div>

                    {/* Job Details */}
                    <div className="flex flex-wrap gap-6 mb-4">
                      <div className="flex items-center gap-2 text-[#4B5563]">
                        <MapPin className="w-4 h-4" />
                        <span className="font-manrope text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#4B5563]">
                        <Clock className="w-4 h-4" />
                        <span className="font-manrope text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-manrope text-sm">{job.salaryRange}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-manrope text-[#4B5563] mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Requirements */}
                    <div className="mb-6">
                      <p className="font-syne font-bold text-sm text-[#111827] mb-2">Key Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, idx) => (
                          <span 
                            key={idx} 
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-manrope font-medium"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="flex-shrink-0 flex lg:flex-col gap-2">
                    <a 
                      href="https://digital-solutions-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white font-manrope font-bold px-8 py-3 rounded-xl hover:bg-[#C05621] transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="bg-primary py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-fraunces text-4xl text-[#F9FAFB] mb-6">Our Team Culture</h2>
          <p className="font-manrope text-[#F9FAFB]/90 max-w-2xl mx-auto mb-12 text-lg">
            At EstateFlow, we celebrate diversity, foster creativity, and believe that great products come from great teams working together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <p className="font-fraunces text-4xl font-bold mb-2">150+</p>
              <p className="font-manrope">Team Members Worldwide</p>
            </div>
            <div>
              <p className="font-fraunces text-4xl font-bold mb-2">25+</p>
              <p className="font-manrope">Countries Represented</p>
            </div>
            <div>
              <p className="font-fraunces text-4xl font-bold mb-2">98%</p>
              <p className="font-manrope">Employee Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-fraunces text-4xl text-[#111827] mb-6">Didn't Find Your Role?</h2>
          <p className="font-manrope text-lg text-[#4B5563] mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a 
            href="https://digital-solutions-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-manrope font-bold px-10 py-4 rounded-xl hover:bg-[#C05621] transition-all shadow-lg hover:shadow-xl"
          >
            Submit Your Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareersPage;