import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Process from './components/Process';
import About from './components/About';
// import CollaborationCTA from './components/CollaborationCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { projects } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [inquirySubject, setInquirySubject] = useState('');

  const handleSelectProjectById = (projectId) => {
    const proj = projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleInquireFromModal = (projectTitle) => {
    setSelectedProject(null);
    setInquirySubject(projectTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9FA] text-[#1E1B1E] flex flex-col font-sans selection:bg-pink-200 selection:text-pink-900">
      {/* Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onSelectProject={handleSelectProjectById} />

        {/* 2. Trust Bar & Value Proposition */}
        <TrustBar />

        {/* 3. Featured Work Grid */}
        <FeaturedWork onSelectProject={handleSelectProject} />

        {/* 4. Services (What I Create) */}
        <Services onSelectService={(serviceTitle) => setInquirySubject(serviceTitle)} />

        {/* 6. Why Work With Me */}
        <WhyWorkWithMe />

        {/* 7. Content Creation Process */}
        <Process />

        {/* 8. About Me (Faceless Studio POV) */}
        <About />

        {/* 9. Collaboration Call-to-Action */}
        {/* <CollaborationCTA /> */}

        {/* 10. Contact & Brand Proposal Section */}
        <Contact prefilledSubject={inquirySubject} />
      </main>

      {/* 11. Minimal Footer */}
      <Footer />

      {/* Interactive 9:16 Video Player Modal */}
      {selectedProject && (
        <VideoModal
          project={selectedProject}
          onClose={handleCloseModal}
          onInquire={handleInquireFromModal}
        />
      )}
    </div>
  );
}
