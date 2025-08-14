"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <BrainIcon className="h-6 w-6" />,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that adapt to your business needs"
    },
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: "Automated Workflows",
      description: "Streamline operations with intelligent automation and predictive analytics"
    },
    {
      icon: <ShieldIcon className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with global data protection standards"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
          <a className="flex items-center space-x-2" href="#">
            <div className="h-8 w-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <BrainIcon className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              NeuralFlow AI
            </span>
          </a>
          <nav className="ml-auto flex gap-6 items-center">
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#features">
              Features
            </a>
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#about">
              About
            </a>
            <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#contact">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white border-0">
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full pt-32 pb-20 md:pt-40 md:pb-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 w-fit">
                  <SparklesIcon className="h-4 w-4 mr-2 text-violet-400" />
                  <span className="text-slate-300">Powered by GPT-4 & Advanced ML</span>
                </div>
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Transform Your Business
                    </span>
                    <br />
                    <span className="text-white">With AI Intelligence</span>
                  </h1>
                  <p className="max-w-[600px] text-xl text-slate-400 leading-relaxed">
                    Harness the power of artificial intelligence to automate workflows, gain predictive insights, and scale your operations effortlessly.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-12 px-8 text-base bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-violet-500/25">
                    Start Free Trial
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="h-12 px-8 text-base bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                    Watch Demo
                    <PlayIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 border-2 border-slate-900" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="text-slate-400">Trusted by <span className="text-white font-semibold">2,000+</span> companies</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                      <span className="text-slate-400 ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-1">
                  <div className="bg-slate-900 rounded-xl p-8">
                    <div className="space-y-4">
                      {/* AI Animation Placeholder */}
                      <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/5"></div>
                        <BrainIcon className="h-24 w-24 text-violet-500 animate-pulse" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-slate-800 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-violet-400">95%</p>
                          <p className="text-xs text-slate-400">Accuracy</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-cyan-400">10x</p>
                          <p className="text-xs text-slate-400">Faster</p>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-purple-400">24/7</p>
                          <p className="text-xs text-slate-400">Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Intelligent Features
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-400">
                Experience the next generation of AI-powered tools designed to revolutionize your workflow
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 h-full">
                    <div className="h-12 w-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-400">
                Choose the perfect plan for your needs. Always flexible to scale
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold mb-2">Starter</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-300">Up to 10,000 API calls</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-300">Basic AI models</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-300">Email support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="relative group transform scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl opacity-75 blur-xl"></div>
                <div className="relative bg-gradient-to-r from-violet-600 to-cyan-600 p-[1px] rounded-2xl">
                  <div className="bg-slate-900 rounded-2xl p-8 h-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Professional</h3>
                      <span className="text-xs bg-gradient-to-r from-violet-500 to-cyan-500 text-white px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">$99</span>
                      <span className="text-slate-400">/month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-300">Unlimited API calls</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-300">Advanced AI models</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-300">Priority support</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-300">Custom integrations</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white border-0">
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-300">Dedicated infrastructure</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-300">Custom AI model training</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-300">24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-300">SLA guarantee</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  99.9%
                </p>
                <p className="text-slate-400 mt-2">Uptime SLA</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  50M+
                </p>
                <p className="text-slate-400 mt-2">API Requests/Day</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  100ms
                </p>
                <p className="text-slate-400 mt-2">Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  150+
                </p>
                <p className="text-slate-400 mt-2">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  How It Works
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-400">
                Get started with our AI platform in three simple steps
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 hidden md:block"></div>
                
                <div className="grid md:grid-cols-3 gap-8 relative">
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Connect Your Data</h3>
                    <p className="text-slate-400">Seamlessly integrate your existing tools and data sources</p>
                  </div>
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Train AI Models</h3>
                    <p className="text-slate-400">Our AI learns from your data to provide personalized insights</p>
                  </div>
                  <div className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Scale Effortlessly</h3>
                    <p className="text-slate-400">Deploy AI-powered automation across your entire organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Loved by Teams Worldwide
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-400">
                See what industry leaders are saying about NeuralFlow AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6">
                  "NeuralFlow AI transformed our data analysis process. What used to take weeks now takes hours with incredible accuracy."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-slate-400">CTO at TechCorp</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6">
                  "The AI predictions have been remarkably accurate. We've increased our conversion rate by 40% in just 3 months."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Michael Rodriguez</p>
                    <p className="text-sm text-slate-400">Head of Growth at ScaleUp</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6">
                  "The customer support is exceptional. They helped us integrate the AI seamlessly into our existing workflow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Emily Watson</p>
                    <p className="text-sm text-slate-400">CEO at InnovateCo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                Join thousands of companies using NeuralFlow AI to stay ahead of the competition
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="h-14 px-8 text-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-violet-500/25">
                  Start Your Free Trial
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <Button className="h-14 px-8 text-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                  Schedule a Demo
                  <CalendarIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-slate-500 mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <BrainIcon className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                NeuralFlow AI
              </span>
            </div>
            <p className="text-sm text-slate-400">© 2024 NeuralFlow AI. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icon Components
function BrainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function SparklesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}