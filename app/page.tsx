"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Shield, Lightbulb, Calendar, Home, TreePine, Sparkles, Navigation } from "lucide-react"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-shadow ${isScrolled ? "bg-white shadow-md" : "bg-white shadow-sm"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Image src="/images/logo.jpg" alt="USA Lighting" width={180} height={60} className="h-12 w-auto" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <a href="tel:3174954534">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6">
                  Call Now: (317) 495-4534
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 hidden sm:block"
              >
                Free Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3.jpg"
            alt="Professional Christmas Light Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Professional Christmas Light Installation in Central Indiana
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed text-pretty">
              Sit back and enjoy the holidays while we design, install, and remove the lights — safely and beautifully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="tel:3174954534">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Call Now to Book Your Install
                </Button>
              </a>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-6 w-full sm:w-auto"
              >
                Get a Free Christmas Lighting Quote
              </Button>
            </div>
            <p className="text-white/90 text-sm">
              Serving homeowners across Central Indiana with professional holiday lighting solutions.
            </p>
            <p className="text-yellow-300 text-sm font-semibold mt-2">
              ⚡ Limited appointments available before Christmas — book early!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 text-balance">
            Why Homeowners Choose USA Lighting for Christmas Lights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Holiday Designs</h3>
                <p className="text-gray-600 leading-relaxed text-pretty">
                  We design a lighting layout tailored to your roofline, trees, and landscaping so your home stands out
                  — not blends in.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Safe, Professional Installation</h3>
                <p className="text-gray-600 leading-relaxed text-pretty">
                  No ladders, no risk. Our team handles everything from setup to teardown, using professional equipment
                  and techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium LED Lights</h3>
                <p className="text-gray-600 leading-relaxed text-pretty">
                  We use high-quality, energy-efficient LEDs that shine brighter and last longer all season long.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hassle-Free Removal & Storage</h3>
                <p className="text-gray-600 leading-relaxed text-pretty">
                  When the holidays are over, we come back to carefully remove the lights — so you don't have to.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">
                Holiday Lighting, Done for You from Start to Finish
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed text-pretty">
                USA Lighting provides professional Christmas light installation for homeowners across Central Indiana.
                From the moment you reach out, we help you design a custom lighting display that fits your home and your
                budget. Our team brings the lights, safely installs them, checks every bulb, sets timers where needed,
                and returns after the season to remove everything. You get a gorgeous, magazine-worthy display — without
                spending a single weekend on a ladder in the cold.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Custom roofline and landscape lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Fast response times and clear communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Professional-grade materials and clean wiring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">100% satisfaction-focused service</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 md:h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image src="/images/6.jpg" alt="Beautiful Christmas lights on home" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 text-balance">
            Christmas Lighting Services We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-4 rounded-lg flex-shrink-0">
                    <Home className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Roofline & Gutter Lights</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Clean, straight lines along gutters, peaks, and roof edges with warm white or colored LEDs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-4 rounded-lg flex-shrink-0">
                    <TreePine className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Tree & Shrub Lighting</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Elegant wraps around tree trunks and branches, plus shrubs and bushes to create depth and glow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-4 rounded-lg flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Entryway & Accent Lighting</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Lights around doors, windows, railings, and architectural features to highlight your home's best
                      angles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0">
                    <Navigation className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Walkways & Landscape Edges</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">
                      Pathway lighting that welcomes guests and adds a professional polish to your overall display.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 text-balance">
            How Our Christmas Light Installation Process Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Design & Quote</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">
                We discuss your ideas, look at your home, and create a custom lighting plan with a clear, upfront quote.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Installation</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">
                Our team installs the lights safely and efficiently, testing every bulb and setting up timers if needed.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Holiday Removal</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">
                We take them down and leave your home just as before!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:3174954534">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8">
                  Call Now
                </Button>
              </a>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8"
              >
                Request Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 text-balance">
            What Our Customers Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-yellow-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-pretty">
                  "I love what they did, the lights looked fantastic and their cost was much more competitive than other
                  estimates I received..."
                </p>
                <p className="font-bold text-gray-900">— Deborah Tandarich</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-pretty">
                  "USA Lighting is great! Top notch service and communication for Christmas lights installation. I would
                  recommend Brian and USA Lighting to any and everyone..."
                </p>
                <p className="font-bold text-gray-900">— Nolan Mattingly</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-pretty">
                  "Brian got back to me quickly. Sent a photo of my house with his plan. Did a great job and my house
                  looks beautiful! He did my daughter's house also, it looks like a Christmas card!"
                </p>
                <p className="font-bold text-gray-900">— Kris Bristol</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area Section with Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">Proudly Serving Central Indiana</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-pretty">
              USA Lighting proudly serves homeowners throughout Central Indiana, including Indianapolis and surrounding
              communities. If you're looking for a trusted, local team to handle your Christmas lights this season,
              we're just a call or click away.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6124.29040642919!2d-86.2782371!3d39.87098530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886cabbc967b9035%3A0xc8428fa01c9cc749!2sUSA%20Lighting!5e0!3m2!1sen!2sus!4v1764007754043!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/2.jpg" alt="Christmas lights background" fill className="object-cover" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-balance">Get Your Free Christmas Light Installation Quote</h2>
            <p className="text-xl text-gray-200 leading-relaxed text-pretty">
              Tell us a little about your home and your holiday lighting ideas, and we'll follow up quickly with a
              customized design and quote. Appointments fill up fast as we get closer to Christmas, so don't wait!
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-2 mb-8">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/3RfBryF2rFjKzzSh3w9Y"
              style={{ width: "100%", height: "679px", border: "none", borderRadius: "3px" }}
              id="inline-3RfBryF2rFjKzzSh3w9Y"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="WebSite Form Template"
              data-height="679"
              data-layout-iframe-id="inline-3RfBryF2rFjKzzSh3w9Y"
              data-form-id="3RfBryF2rFjKzzSh3w9Y"
              title="WebSite Form Template"
            />
          </div>

          <div className="text-center space-y-3">
            <p className="text-gray-300">No obligation • Fast response • Professional, insured installers</p>
            <p className="text-lg">
              Prefer to talk? Call us at{" "}
              <a href="tel:3174954534" className="text-yellow-300 hover:text-yellow-200 font-bold">
                (317) 495-4534
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/images/logo.jpg"
                alt="USA Lighting"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 bg-white rounded px-2 py-1"
              />
              <p className="text-gray-400">Professional Christmas light installation serving Central Indiana.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:3174954534" className="hover:text-white transition-colors">
                    Phone: (317) 495-4534
                  </a>
                </li>
                <li>
                  <a href="mailto:indylandscapelights@gmail.com" className="hover:text-white transition-colors">
                    Email: indylandscapelights@gmail.com
                  </a>
                </li>
                <li>6349 Shanghai Rd</li>
                <li>Indianapolis, IN 46278</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition-colors">
                    Our Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("how-it-works")}
                    className="hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("reviews")} className="hover:text-white transition-colors">
                    Customer Reviews
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Get a Quote
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} USA Lighting. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Form Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </div>
  )
}
