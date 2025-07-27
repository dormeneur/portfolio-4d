"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  MessageSquare,
  Expand,
  FileArchiveIcon as Compress,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPostExpanded, setIsPostExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "linkedin", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Award },
    { id: "linkedin", label: "LinkedIn", icon: MessageSquare },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Aditya Bharti</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=modern tech workspace with coding setup)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Aditya</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Computer Science student | AI Systems and Blockchain enthusiast | Open to internships and project
              collaborations | Aiming for a Tech-based startup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/uc?export=download&id=1Bp3ib1nLZPUzmz3pGZh0Vhoju9nJ47hi",
                    "_blank",
                  )
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/dormeneur" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/aadityabhartii"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:work.adityabharti@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Column - Profile Image (Independent) */}
                <div className="lg:w-2/5 w-full">
                  {/* Profile Image */}
                  <div className="relative">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp.jpg-dnwr8MaShqCTXbagijTqQMIgoKptWV.jpeg"
                      alt="Aditya Bharti"
                      className="w-full h-[430px] rounded-xl object-contain bg-gray-50 shadow-xl border-4 border-white"
                    />
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/github-dcqZmq41dmXEfH9SeS5hSenglwvuOx.jpeg"
                      alt="GitHub Profile"
                      className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-white absolute -bottom-2 -right-2 bg-gray-900 p-1"
                    />
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600 font-medium">@dormeneur</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Content (Independent) */}
                <div className="lg:w-3/5 w-full space-y-6">
                  {/* About Me Text */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 min-h-[240px] flex flex-col justify-center">
                    <div className="space-y-3">
                      <p className="text-base text-gray-700 leading-relaxed">
                        I believe the future is all about automation: systems that adapt, simplify, and scale
                        intelligently.
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed">
                        I'm a third-year Computer Science undergraduate specializing in AI and Robotics at Vellore
                        Institute of Technology, India.
                      </p>
                      <p className="text-base text-gray-700 leading-relaxed">
                        I'm open to internships, research, and development projects, particularly those focused on
                        building purposeful, user-centric technology. I bring a creative, thoughtful, and hands-on
                        approach to everything I work on.
                      </p>
                    </div>
                  </div>

                  {/* Compact Interests Section */}
                  <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 min-h-[150px]">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">My Key Interests</h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { name: "RAG APIs & Databases", icon: "🔗", color: "bg-blue-50 border-blue-200 text-blue-700" },
                        {
                          name: "AI Automation & Robotics",
                          icon: "🤖",
                          color: "bg-purple-50 border-purple-200 text-purple-700",
                        },
                        { name: "Blockchain & Web3", icon: "⛓️", color: "bg-green-50 border-green-200 text-green-700" },
                        {
                          name: "Open Source & Linux",
                          icon: "🐧",
                          color: "bg-orange-50 border-orange-200 text-orange-700",
                        },
                        {
                          name: "Full Stack Development",
                          icon: "💻",
                          color: "bg-indigo-50 border-indigo-200 text-indigo-700",
                        },
                      ].map((interest, index) => (
                        <div
                          key={index}
                          className={`flex items-center px-3 py-2 rounded-lg border transition-all duration-200 hover:shadow-sm hover:scale-105 ${interest.color}`}
                        >
                          <span className="text-sm mr-2">{interest.icon}</span>
                          <span className="text-sm font-medium">{interest.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section - Full Width */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-lg p-8 shadow-sm mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">8.53</div>
                  <div className="text-gray-600 text-sm">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">600+</div>
                  <div className="text-gray-600 text-sm">App Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-600 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2nd</div>
                  <div className="text-gray-600 text-sm">Prize Winner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Main Internship */}
            <Card className="border-l-4 border-l-blue-600 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-gray-900">Quality Assurance Tester Intern</CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600">
                          RingZero Networks (Thailand) Co., Ltd.
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        Jun 2025 – Jul 2025
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mt-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      Bangkok, Thailand
                    </div>
                  </div>
                  <div className="md:ml-6 flex-shrink-0">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qat-g6fBWvWYDwi7se3ih7a77SoPCZ9vkk.jpeg"
                      alt="QA Team at RingZero Networks"
                      className="w-24 h-16 md:w-32 md:h-20 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Performed regression testing on <strong>Stitch (Apple's Game of the Year 2023)</strong> and{" "}
                    <strong>Puffies (Apple's Game of the Year 2024)</strong>, covering functionality, UI/UX, gameplay
                    mechanics, and platform compatibility. Led comprehensive testing across Apple platforms—iPhone,
                    iPad, Mac, Apple TV—ensuring cross-device consistency.
                  </p>
                  <p className="text-gray-700">
                    Built an <strong>AI-powered, RAG-based POS Assistant FastAPI service</strong>, applying vector
                    similarity search and Star Schema modeling. Integrated RAG workflows and data pipelines (ETL/ELT) to
                    enable natural language querying of real-time sales data.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Other Experiences */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gdg.jpg-ETShXvvwM5I0NFCkZcNa2lPK6hmUhV.jpeg"
                    alt="Google Developer Group Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Blockchain Developer</CardTitle>
                  <CardDescription>Google Developer Group (VIT Campus)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Contributing to blockchain projects and community initiatives with the GDG VIT team
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adc-SItOupji4RwgOmdgzG8WOTjENI7NNc.jpeg"
                    alt="Android Club Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Technical Team Member</CardTitle>
                  <CardDescription>The Android Club (VIT Campus)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Android development and technical workshops with the campus developer community
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chq-t8nGU0oNOkzfNtqDuJzyc2KzY24ZkQ.jpeg"
                    alt="CraftHQ Fellowship"
                    className="w-full h-full object-cover bg-gray-900"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Fellowship</CardTitle>
                  <CardDescription>crftHQ</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Technology fellowship program focused on innovative development practices
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* VHelp */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vhelp.jpg-AAEasPtVDRYjICLyXasSsatZ7OUu3F.jpeg"
                  alt="VHelp App"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">Ongoing</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <a
                    href="https://github.com/dormeneur/VHELP"
                    className="text-white hover:text-gray-300 transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">VHelp</h3>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A full-stack Flutter application that revolutionizes campus life by providing seamless integration of
                  essential services including food ordering, hostel management, academic resources, and student
                  communication tools.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-red-600">Problem</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Students at VIT Chennai faced fragmented digital services across campus, leading to inefficient
                      processes for food ordering, hostel management, and academic tasks.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-blue-600">Approach</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Developed a unified Flutter application with Firebase backend, implementing real-time
                      synchronization, secure authentication, and scalable cloud architecture.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-green-600">Outcome</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Successfully onboarded 600+ active users, reduced service request processing time by 75%, and
                      improved student satisfaction scores by 40%.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Flutter", "Firebase", "Real-time DB", "Push Notifications", "Cloud Functions"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-gray-50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-green-600">Campus-Scale Platform</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* JUNKWUNK */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junkwunk.jpg-rW6FCY4ZVQRZLvEqOk5uqatwrNv8px.jpeg"
                  alt="JunkWunk App"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500 text-white">Completed</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <a
                    href="https://github.com/dormeneur/JUNKWUNK"
                    className="text-white hover:text-gray-300 transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Junk-Wunk</h3>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  An innovative Flutter application that streamlines waste management processes, connecting rag pickers
                  with sellers while promoting sustainable waste disposal practices.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-red-600">Problem</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Inefficient waste management systems and lack of connection between waste collectors and sellers
                      resulted in poor recycling rates and environmental impact.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-blue-600">Approach</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Built an AI-powered mobile platform using real-time Firebase database for user connections, and
                      intuitive UI/UX design.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-green-600">Outcome</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">Won 2nd place at Hack-N-Droid 2025.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Flutter", "Firebase", "Google Auth"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-gray-50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-yellow-600">Hackathon Runner-Up</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CYBER GALLERY & NFT */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artgallery-tQ83hZzW8RJD87WSbUVpx8ouURkFYd.png"
                  alt="Cyber Gallery NFT"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500 text-white">Completed</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <a
                    href="https://art-gallery-iota-one.vercel.app/"
                    className="text-white hover:text-gray-300 transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Cyber Gallery & NFT</h3>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  A full-stack decentralized Web3 application on Ethereum Sepolia for minting digital art as ERC-721
                  NFTs with cyberpunk aesthetics.
                </p>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-red-600">Problem</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Artists needed a decentralized platform to mint and showcase digital art as NFTs with seamless
                      blockchain integration.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-blue-600">Approach</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Built with Solidity smart contracts, IPFS storage via Pinata, MetaMask integration, and
                      cyberpunk-themed frontend.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-semibold text-green-600">Outcome</span>
                    </div>
                    <p className="text-xs text-gray-600 ml-4">
                      Successfully deployed on Ethereum Sepolia with OpenSea integration and functional NFT minting
                      capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Solidity", "Node.js", "JavaScript", "IPFS", "MetaMask"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-gray-50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-purple-600">Web3 Platform</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["C", "C++", "Python", "Java", "Solidity"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 text-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">Frameworks & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Flutter", "React", "Node.js", "Git", "Docker", "FastAPI"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 text-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg">Cloud & Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["SQL", "PostgreSQL", "Firebase", "MongoDB", "pgvector"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Core CS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["DSA", "OS", "Networks", "DBMS", "RAG"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LinkedIn Post Section */}
      <section id="linkedin" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from LinkedIn</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="border-b">
              <div className="flex items-center space-x-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp.jpg-dnwr8MaShqCTXbagijTqQMIgoKptWV.jpeg"
                  alt="Aditya Bharti"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Aditya Bharti</h3>
                  <p className="text-sm text-gray-600">
                    Computer Science student | AI Systems and Blockchain enthusiast
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className={`space-y-4 ${!isPostExpanded ? "max-h-40 overflow-hidden" : ""}`}>
                <p className="text-gray-800 leading-relaxed">
                  🎉 Thrilled to share that I've successfully completed my first-ever internship as a Quality Assurance
                  Tester at RingZero Networks (Thailand) Co., Ltd.! 🚀
                </p>
                <p className="text-gray-800 leading-relaxed">
                  This summer has been an incredible journey of growth, learning, and hands-on experience in the tech
                  industry. Here's what made this internship so special:
                </p>
                <p className="text-gray-800 leading-relaxed">
                  🎮 <strong>Game Testing Excellence:</strong> I had the amazing opportunity to work on regression
                  testing for Stitch (Apple's Game of the Year 2023) and Puffies (Apple's Game of the Year 2024).
                  Testing these award-winning games across multiple Apple platforms—iPhone, iPad, Mac, and Apple TV—was
                  both challenging and rewarding.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  🤖 <strong>AI Innovation:</strong> Beyond game testing, I built an AI-powered, RAG-based POS Assistant
                  using FastAPI. This project involved vector similarity search, Star Schema modeling, and integrating
                  RAG workflows with data pipelines (ETL/ELT) to enable natural language querying of real-time sales
                  data.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  🌟 <strong>Key Takeaways:</strong> This experience taught me the importance of attention to detail,
                  cross-platform compatibility, and the power of AI in solving real-world business problems.
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPostExpanded(!isPostExpanded)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {isPostExpanded ? (
                    <>
                      <Compress className="h-4 w-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <Expand className="h-4 w-4 mr-2" />
                      Read Full Post
                    </>
                  )}
                </Button>

                <a
                  href="https://www.linkedin.com/posts/aadityabhartii_summerinternship-internshipexperience-firstinternship-activity-7348030202263851009-4IV1"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>

            {/* Comments Section */}
            {isPostExpanded && (
              <div className="border-t bg-gray-50 p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Comments
                </h4>

                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Akhil Gupta"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-sm text-gray-900">Akhil Gupta</span>
                            <span className="text-xs text-gray-500">• 3rd+</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">Pricing Strategy and Monetization Consultant</p>
                          <p className="text-sm text-gray-800">
                            Wow, working on Apple's Game of the Year must've been quite the first internship experience!
                            I'm especially impressed by your pivot to building that RAG-based POS assistant. How did
                            your game testing skills transfer to the AI project? Seems like an interesting connection.
                          </p>
                        </div>

                        {/* Reply */}
                        <div className="ml-6 mt-3">
                          <div className="flex items-start space-x-3">
                            <img
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp.jpg-dnwr8MaShqCTXbagijTqQMIgoKptWV.jpeg"
                              alt="Aditya Bharti"
                              className="w-6 h-6 rounded-full"
                            />
                            <div className="bg-blue-50 rounded-lg p-3 shadow-sm flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-semibold text-sm text-gray-900">Aditya Bharti</span>
                                <Badge variant="secondary" className="text-xs">
                                  Author
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-800">
                                Thanks, Akhil Gupta! Yes! Testing games like Stitch and Puffies was a fantastic way to
                                kick off my internship. It really sharpened my attention to detail, pattern recognition,
                                and edge-case thinking — all of which surprisingly carried over when I shifted gears to
                                the RAG-based POS assistant.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Anuj Tripathi"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-sm text-gray-900">Anuj Tripathi, MBA</span>
                            <span className="text-xs text-gray-500">• 1st</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">QA Department Setup Expert | ISTQB Certified</p>
                          <p className="text-sm text-gray-800">
                            Aditya Bharti you're such a sharp thinker! It's amazing how quickly you pick things up and
                            how well you understand both the tech and business sides of a product. You've got a real
                            potential there! Keep up the great work, and I'm really looking forward to working with you
                            again soon.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              I'm always open to discussing new opportunities, collaborations, and interesting projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:work.adityabharti@gmail.com" className="text-blue-600 hover:text-blue-800">
                    work.adityabharti@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="tel:+918840538333" className="text-blue-600 hover:text-blue-800">
                    +91 8840538333
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Chennai, India</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <a
                  href="https://github.com/dormeneur"
                  className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/aadityabhartii"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://leetcode.com/u/dormeneur/"
                  className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Code className="h-5 w-5" />
                </a>
              </div>

              <div className="pt-6">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/uc?export=download&id=1Bp3ib1nLZPUzmz3pGZh0Vhoju9nJ47hi",
                      "_blank",
                    )
                  }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </Button>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible!</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Aditya Bharti</h3>
            <p className="text-gray-400 mb-6">Building the future with AI, Blockchain, and purposeful technology.</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/dormeneur" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/aadityabhartii"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:work.adityabharti@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Aditya Bharti. All rights reserved. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
