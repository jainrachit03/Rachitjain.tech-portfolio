import React from 'react'
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Vite",
    "JavaScript",
    "TailwindCSS",
    "HTML",
    
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "Next.js",
    "MongoDb",
    "AWS",
  ];
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
    <RevealOnScroll>
    <div className='max-w-3xl mx-auto px-4 '>
    <h2 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent'>
  About Me
</h2>
      <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
      <p className='text-gray-300 mb-6'>
  I'm a final-year B.Tech student specializing in Information Technology with hands-on experience in full-stack web development, Java programming, and DSA. I've built and deployed real-world applications including an Odoo-based e-commerce platform, interactive games, and Chrome extensions. I’m actively seeking internship or entry-level opportunities where I can contribute meaningfully while continuing to grow as a developer.
</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'> 
                {frontendSkills.map((tech,key)=>(
                  <span 
                  key={key} 
                  className='bg-blue-500/10 text-blue-500/50 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    {tech}
                  </span>
                ))}
              </div>
          </div>
          <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>Backend</h3>
              <div className='flex flex-wrap gap-2'> 
                {backendSkills.map((tech,key)=>(
                  <span 
                  key={key} 
                  className='bg-blue-500/10 text-blue-500/50 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    {tech}
                  </span>
                ))}
              </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8' >
      <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
            <h3 className='text-xl font-bold mb-4'>🏫Education</h3>
            <ul className='list-disc list-inside text-gray-300 space-y-2'>
  <li>
    <strong>B.Tech in Information Technology</strong> – Oriental Institute of Science and Technology, Bhopal (2022 – 2026)  
    <br />Current CGPA: <span className="text-blue-400 font-medium">7.7</span>
  </li>
  <li>
    <strong>Class XII</strong> – Shree Guru Nanak Sr. Sec. School, Damoh (2021 – 2022)  
    <br />Percentage: <span className="text-blue-400 font-medium">89.4%</span>
  </li>
  <li>
    <strong>Class X</strong> – Shree Guru Nanak Sr. Sec. School, Damoh (2019 – 2020)  
    <br />Percentage: <span className="text-blue-400 font-medium">83.6%</span>
  </li>
</ul>

        </div>
        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
           <h3 className='text-xl font-bold mb-4'>📝 Certifications</h3>
<div className='space-y-4 text-gray-300'>
  <div>
    <h4 className='font-semibold'>AWS Cloud Foundations – Amazon (April 2025)</h4>
    <p>Basic understanding of cloud infrastructure, EC2, S3, and IAM.</p>
  </div>
  <div>
    <h4 className='font-semibold'>Python Basics – Cisco Networking Academy (March 2025)</h4>
    <p>Grasped foundational programming concepts and syntax in Python.</p>
  </div>
  <div>
    <h4 className='font-semibold'>AI for Everyone – Coursera (2024)</h4>
    <p>Explored the basics of artificial intelligence, ethical AI use, and societal impact of AI.</p>
  </div>
  <div>
     <h4 className='font-semibold'>Cybersecurity Track – Cisco Networking Academy (2024)</h4>
    <p>Completed Intro to Cybersecurity, Cybersecurity Essentials, and Packet Tracer Basics.</p>
  </div>
  <div>
    <h4 className='font-semibold'>CCNA: Introduction to Networks – Cisco (April 2025)</h4>
    <p>Covered the basics of networking models, IP addressing, and protocols.</p>
  </div>
</div>


        </div>
      </div>
    </div>
    </RevealOnScroll>
    </section>
  )
}
export default About;
