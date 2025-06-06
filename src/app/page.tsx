"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Rental Vehicle System",
      description: "A complete vehicle rental management platform with real-time availability tracking and automated booking system.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Spring Security"],
      githubUrl: "#",
      apiDocsUrl: "#",
      details: {
        architecture: "Layered architecture with clear separation between API, service, and repository layers",
        features: [
          "JWT authentication with role-based access control",
          "Dynamic pricing engine with seasonal rates",
          "PDF contract generation",
          "Integration with payment gateways"
        ],
        challenges: [
          {
            problem: "High contention during peak booking periods",
            solution: "Implemented optimistic locking with @Version"
          },
          {
            problem: "Complex pricing calculations",
            solution: "Created rules engine using Spring Expression Language (SpEL)"
          }
        ],
        performance: "Handles 500+ concurrent bookings with <300ms response time",
        images: [
          { alt: "Database Schema", url: "/images/rental-db.png" },
          { alt: "API Flow", url: "/images/rental-api.png" }
        ]
      }
    },
    {
      id: 2,
      title: "ElimuCare LMS System",
      description: "Microservices-based learning platform serving educational content to 10,000+ students.",
      technologies: ["Java", "Spring Cloud", "KeyCloak", "Docker", "MicroServices", "Service Discovery", "Kafka"],
      githubUrl: "#",
      apiDocsUrl: "#",
      details: {
        architecture: "Event-driven microservices with API Gateway pattern",
        features: [
          "OAuth2 authentication via Keycloak",
          "Rate limiting and circuit breaking",
          "Distributed transaction handling",
          "Real-time progress tracking"
        ],
        challenges: [
          {
            problem: "Inconsistent data across services",
            solution: "Implemented SAGA pattern with Kafka"
          },
          {
            problem: "Slow course enrollment during peak",
            solution: "Queue-based enrollment system with dead-letter handling"
          }
        ],
        performance: "10,000 RPM with <200ms average response time",
        images: [
          { alt: "System Architecture", url: "/images/lms-arch.png" },
          { alt: "Monitoring Dashboard", url: "/images/lms-monitor.png" }
        ]
      }
    }
  ];

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">Hi, I'm Dennis</h1>
        <p className="mt-4 text-lg text-gray-600">
          Backend Engineer | Java • Spring Boot • Kafka • PostgreSQL • Microservices
        </p>
        
        <div className="mt-8 bg-gray-100 p-6 rounded-lg text-left">
          <h2 className="text-2xl font-semibold mb-4">Backend Specializations</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-2">🔧</span>
              API Design (REST/GraphQL)
            </li>
            <li className="flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-2">⚡</span>
              High-Performance Systems
            </li>
            <li className="flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-2">🗃️</span>
              Database Optimization
            </li>
            <li className="flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-2">🔒</span>
              Security & Authentication
            </li>
          </ul>
        </div>
      </section>

    

      {/* About Section - Keep your existing about section */}
     <section id="about" className="scroll-mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-4">
            I'm a backend engineer with 2+ years of experience building scalable systems with Spring Boot and Java. 
            I specialize in designing robust APIs, optimizing database performance, and implementing secure authentication systems.
          </p>
          <p className="text-gray-700">
            My approach combines clean architecture principles with practical performance optimizations to deliver systems 
            that are both maintainable and efficient under heavy loads.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">Languages</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Java </li>
                  <li></li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">Frameworks</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Spring Boot</li>
                  <li>Spring Security</li>
                  <li>Spring Data Jpa</li>

                  <li>Hibernate</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">Infrastructure</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>Docker</li>
                  <li>Kafka</li>
                  <li>Kubernetes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="scroll-mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
        <div className="space-y-8">
          {projects.map(project => (
            <div key={project.id} className="border rounded-lg p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-200"
                >
                  {expandedProject === project.id ? 'Show Less' : 'View Details'}
                </button>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              {expandedProject === project.id && (
                <div className="mt-6 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Architecture</h4>
                      <p className="text-gray-700">{project.details.architecture}</p>
                      
                      <h4 className="text-lg font-semibold mt-4 mb-2">Key Features</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {project.details.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Technical Challenges</h4>
                      <div className="space-y-3">
                        {project.details.challenges.map((challenge, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded">
                            <p className="font-medium">🚧 {challenge.problem}</p>
                            <p className="text-sm text-gray-600 mt-1">✅ {challenge.solution}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Performance Metrics</h4>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="font-mono text-sm">{project.details.performance}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {project.details.images.map((image, i) => (
                      <div key={i} className="border rounded overflow-hidden">
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-auto object-cover"
                        />
                        <p className="text-xs text-center p-1 bg-gray-100">{image.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-6 space-x-4">
                <Link href={project.githubUrl} className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 text-sm">
                  View on GitHub
                </Link>
                <Link href={project.apiDocsUrl} className="px-3 py-1 border border-gray-800 rounded hover:bg-gray-100 text-sm">
                  API Documentation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Keep your existing contact section */}
       <section id="contact" className="scroll-mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-6">
            Interested in working together or have questions about my projects? 
            Feel free to reach out through any of these channels:
          </p>
          


          <div className="space-y-4">
            <div className="flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-3">📧</span>
              <span> kariukidennis078@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-3">💼</span>
              <span><a href="https://www.linkedin.com/in/dennis-mwaura-735161228/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Linkedin</a></span>
            </div>
            <div className="flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-3">🐙</span>
              <span> <a href=" https://github.com/DennisMwauraKA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Github</a></span>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4 }className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}